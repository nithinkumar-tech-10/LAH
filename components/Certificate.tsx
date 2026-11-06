"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  CERT_TEMPLATE_PATH,
  CERT_IMAGE_WIDTH,
  CERT_IMAGE_HEIGHT,
  NAME_BLANK,
  COLLEGE_BLANK,
  CERT_FONT,
  CERT_FONT_URLS,
  type BlankSpace,
} from "@/lib/certificate";
import {
  Sparkles,
  Download,
  ArrowLeft,
  Loader2,
  Award,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

/** Load an image into an HTMLImageElement */
function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
}

/** Preload Google Fonts into the browser so canvas can use them */
async function preloadFonts(): Promise<void> {
  if (typeof document === "undefined") return;

  for (const url of CERT_FONT_URLS) {
    if (!document.querySelector(`link[href="${url}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;
      document.head.appendChild(link);
    }
  }

  if ("fonts" in document) {
    try {
      await Promise.all([
        document.fonts.load(`bold 32px 'Inter'`),
        document.fonts.load(`bold 32px 'Noto Sans Kannada'`),
      ]);
    } catch {
      // Best effort font loading
    }
  }
}

/**
 * Draw fitted and centered text within a blank space.
 * 1. Shrinks font size until it fits within blank.width.
 * 2. If it reaches minSize and still exceeds width, wraps into two lines.
 * 3. Centers horizontally at blank.centerX, sits on blank.baselineY.
 */
function drawFittedText(
  ctx: CanvasRenderingContext2D,
  text: string,
  blank: BlankSpace,
  maxSize: number,
  minSize: number
) {
  let size = maxSize;
  const setFont = (s: number) => {
    ctx.font = `${CERT_FONT.weight} ${s}px ${CERT_FONT.family}`;
  };

  setFont(size);
  let measured = ctx.measureText(text);

  // Shrink font size if text is wider than the blank space
  while (measured.width > blank.width && size > minSize) {
    size -= 1;
    setFont(size);
    measured = ctx.measureText(text);
  }

  ctx.fillStyle = CERT_FONT.color;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";

  if (measured.width <= blank.width) {
    // Fits on single line at the baseline
    ctx.fillText(text, blank.centerX, blank.baselineY);
  } else {
    // Wrap onto two lines
    const words = text.split(/\s+/);
    const mid = Math.ceil(words.length / 2);
    const line1 = words.slice(0, mid).join(" ");
    const line2 = words.slice(mid).join(" ");

    // Further shrink lines if needed
    let lineSize = size;
    setFont(lineSize);
    while (
      (ctx.measureText(line1).width > blank.width ||
        ctx.measureText(line2).width > blank.width) &&
      lineSize > 13
    ) {
      lineSize -= 1;
      setFont(lineSize);
    }

    const lineHeight = lineSize * 1.15;
    // Line 2 sits on the baseline, Line 1 sits right above it
    ctx.fillText(line1, blank.centerX, blank.baselineY - lineHeight);
    ctx.fillText(line2, blank.centerX, blank.baselineY);
  }
}

/** Render certificate to an off-screen canvas and return blob URL and data URL */
async function renderCertificateCanvas(
  name: string,
  college: string
): Promise<{ blobUrl: string; dataUrl: string }> {
  await preloadFonts();
  const img = await loadImage(CERT_TEMPLATE_PATH);

  const canvas = document.createElement("canvas");
  canvas.width = CERT_IMAGE_WIDTH;
  canvas.height = CERT_IMAGE_HEIGHT;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Could not obtain 2D canvas context");

  // Draw background template
  ctx.drawImage(img, 0, 0, CERT_IMAGE_WIDTH, CERT_IMAGE_HEIGHT);

  // Draw participant name
  drawFittedText(
    ctx,
    name,
    NAME_BLANK,
    CERT_FONT.nameDefaultSize,
    CERT_FONT.nameMinSize
  );

  // Draw college name
  drawFittedText(
    ctx,
    college,
    COLLEGE_BLANK,
    CERT_FONT.collegeDefaultSize,
    CERT_FONT.collegeMinSize
  );

  const dataUrl = canvas.toDataURL("image/jpeg", 0.95);

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", 0.95)
  );

  if (!blob) throw new Error("Failed to create certificate blob");
  const blobUrl = URL.createObjectURL(blob);

  return { blobUrl, dataUrl };
}

/** Sanitise file name: keep letters, numbers, spaces, hyphens */
function getDownloadFileName(fullName: string): string {
  const firstName = fullName.trim().split(/\s+/)[0] || "Participant";
  // Remove characters that are not letters, numbers, spaces, or hyphens (including Kannada letters \u0C80-\u0CFF)
  const clean = firstName.replace(/[^a-zA-Z0-9\s\u0C80-\u0CFF-]/g, "").trim();
  return `Certificate-${clean || "Participant"}.jpg`;
}

export default function Certificate() {
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [nameError, setNameError] = useState("");
  const [collegeError, setCollegeError] = useState("");
  const [generating, setGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewUrls, setPreviewUrls] = useState<{
    blobUrl: string;
    dataUrl: string;
  } | null>(null);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  // Preload fonts on initial mount
  useEffect(() => {
    preloadFonts().catch(() => {});
  }, []);

  // Cleanup blob URL when component unmounts or changes
  useEffect(() => {
    return () => {
      if (previewUrls?.blobUrl) {
        URL.revokeObjectURL(previewUrls.blobUrl);
      }
    };
  }, [previewUrls]);

  const validate = useCallback((): boolean => {
    let isValid = true;
    const trimmedName = name.trim();
    const trimmedCollege = college.trim();

    if (!trimmedName) {
      setNameError("Please enter your full name.");
      isValid = false;
    } else if (trimmedName.length > 60) {
      setNameError("Name must not exceed 60 characters.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!trimmedCollege) {
      setCollegeError("Please enter your college name.");
      isValid = false;
    } else if (trimmedCollege.length > 120) {
      setCollegeError("College name must not exceed 120 characters.");
      isValid = false;
    } else {
      setCollegeError("");
    }

    return isValid;
  }, [name, college]);

  const handleGenerate = useCallback(async () => {
    if (!validate()) return;

    setGenerating(true);
    try {
      const urls = await renderCertificateCanvas(name.trim(), college.trim());
      setPreviewUrls(urls);
      setShowPreview(true);

      // Smooth scroll to preview
      setTimeout(() => {
        previewContainerRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 80);
    } catch (err) {
      console.error("Certificate generation error:", err);
      setNameError("Failed to generate certificate. Please try again.");
    } finally {
      setGenerating(false);
    }
  }, [name, college, validate]);

  const handleDownload = useCallback(() => {
    if (!previewUrls?.blobUrl) return;

    const fileName = getDownloadFileName(name);
    const link = document.createElement("a");
    link.href = previewUrls.blobUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, [previewUrls, name]);

  const handleOpenFallback = useCallback(() => {
    if (!previewUrls) return;
    window.open(previewUrls.blobUrl || previewUrls.dataUrl, "_blank");
  }, [previewUrls]);

  const handleEditDetails = useCallback(() => {
    setShowPreview(false);
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 80);
  }, []);

  return (
    <section
      id="certificate"
      className="py-24 relative overflow-hidden bg-slate-950/40"
    >
      {/* Glow Backdrops */}
      <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute right-1/4 bottom-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider text-amber-400 bg-amber-950/50 border border-amber-500/30 uppercase mb-3">
            <Award className="w-3.5 h-3.5" />
            Participation Certificate
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight">
            Download Certificate
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Enter your details to generate your personalised certificate.
          </p>
        </div>

        {/* Main Glass Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-amber-500/30 shadow-2xl shadow-black/60">
          {!showPreview ? (
            /* ---- FORM VIEW ---- */
            <div className="max-w-lg mx-auto space-y-6">
              {/* Participant's Full Name */}
              <div>
                <label
                  htmlFor="participant-full-name"
                  className="block text-sm font-display font-bold text-slate-200 mb-2"
                >
                  Participant&apos;s Full Name
                </label>
                <input
                  ref={nameInputRef}
                  id="participant-full-name"
                  type="text"
                  maxLength={60}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (nameError) setNameError("");
                  }}
                  aria-describedby={
                    nameError ? "participant-name-error" : undefined
                  }
                  aria-invalid={!!nameError}
                  placeholder="e.g. Sumanth Gowda M"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-base text-white placeholder:text-slate-500 font-medium transition-all outline-none focus:ring-2 focus:ring-amber-500/40 motion-reduce:transition-none ${
                    nameError
                      ? "border-red-500/70 focus:border-red-400"
                      : "border-slate-700/80 focus:border-amber-400/60"
                  }`}
                />
                <div className="flex items-center justify-between mt-1.5 min-h-[1.25rem]">
                  {nameError ? (
                    <p
                      id="participant-name-error"
                      role="alert"
                      className="text-xs text-red-400 flex items-center gap-1 font-medium"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {nameError}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-slate-500 font-mono tabular-nums">
                    {name.length}/60
                  </span>
                </div>
              </div>

              {/* College Name */}
              <div>
                <label
                  htmlFor="participant-college-name"
                  className="block text-sm font-display font-bold text-slate-200 mb-2"
                >
                  College Name
                </label>
                <input
                  id="participant-college-name"
                  type="text"
                  maxLength={120}
                  value={college}
                  onChange={(e) => {
                    setCollege(e.target.value);
                    if (collegeError) setCollegeError("");
                  }}
                  aria-describedby={
                    collegeError ? "participant-college-error" : undefined
                  }
                  aria-invalid={!!collegeError}
                  placeholder="e.g. G. Madegowda Institute of Technology, Mandya"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-base text-white placeholder:text-slate-500 font-medium transition-all outline-none focus:ring-2 focus:ring-amber-500/40 motion-reduce:transition-none ${
                    collegeError
                      ? "border-red-500/70 focus:border-red-400"
                      : "border-slate-700/80 focus:border-amber-400/60"
                  }`}
                />
                <div className="flex items-center justify-between mt-1.5 min-h-[1.25rem]">
                  {collegeError ? (
                    <p
                      id="participant-college-error"
                      role="alert"
                      className="text-xs text-red-400 flex items-center gap-1 font-medium"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      {collegeError}
                    </p>
                  ) : (
                    <span />
                  )}
                  <span className="text-xs text-slate-500 font-mono tabular-nums">
                    {college.length}/120
                  </span>
                </div>
              </div>

              {/* Generate Certificate Button */}
              <button
                type="button"
                onClick={handleGenerate}
                disabled={generating}
                className="w-full py-4 px-8 rounded-xl font-display font-bold text-base bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-amber-950/50 cursor-pointer disabled:opacity-60 disabled:cursor-wait focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950 motion-reduce:transition-none motion-reduce:active:scale-100"
              >
                {generating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating Certificate…
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Certificate
                  </>
                )}
              </button>
            </div>
          ) : (
            /* ---- PREVIEW VIEW ---- */
            <div ref={previewContainerRef} className="space-y-6">
              {/* Certificate Preview Frame */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-amber-500/30 bg-slate-900/60 shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewUrls?.dataUrl || ""}
                  alt={`Certificate preview for ${name.trim()}`}
                  className="w-full h-auto block select-none"
                  style={{ maxWidth: "100%" }}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <button
                  type="button"
                  onClick={handleDownload}
                  className="w-full sm:w-auto py-3.5 px-8 rounded-xl font-display font-bold text-base bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:from-amber-400 hover:to-amber-500 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-amber-950/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950 motion-reduce:transition-none"
                >
                  <Download className="w-5 h-5" />
                  Download Certificate
                </button>

                <button
                  type="button"
                  onClick={handleEditDetails}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-display font-bold text-sm bg-slate-900 border border-slate-700 text-slate-200 hover:border-amber-500/50 hover:text-amber-300 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950 motion-reduce:transition-none"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Edit Details
                </button>
              </div>

              {/* Mobile / Fallback Hint */}
              <p className="text-center text-xs text-slate-400 font-mono leading-relaxed max-w-md mx-auto">
                Download not working on your device?{" "}
                <button
                  type="button"
                  onClick={handleOpenFallback}
                  className="text-amber-400 underline underline-offset-2 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  Open in new tab <ExternalLink className="w-3 h-3" />
                </button>{" "}
                — tap and hold the certificate to save it.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
