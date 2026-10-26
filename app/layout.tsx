import type { Metadata, Viewport } from "next";
import { Outfit, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { HACKATHON_DATA } from "@/lib/data";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leap-agritech.gmit.ac.in"),
  title: `${HACKATHON_DATA.title} | GMIT Mandya`,
  description: `${HACKATHON_DATA.shortTitle} — ${HACKATHON_DATA.tagline} 2–3 November 2026 at GMIT, Mandya. Prize Pool ₹25,000. In association with KITS, Govt. of Karnataka.`,
  keywords: [
    "LEAP Hackathon",
    "Agritech Hackathon 2026",
    "GMIT Mandya",
    "24 Hours Hackathon",
    "Agriculture Technology",
    "KITS Karnataka",
    "Smart Farming",
    "VTU Hackathon",
    "Karnataka Innovation and Technology Society",
  ],
  authors: [{ name: "G. Madegowda Institute of Technology" }],
  creator: "GMIT Agritech Innovation Lab",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://leap-agritech.gmit.ac.in",
    title: `${HACKATHON_DATA.title} | GMIT Mandya`,
    description: HACKATHON_DATA.tagline,
    siteName: HACKATHON_DATA.title,
    images: [
      {
        url: HACKATHON_DATA.logos.college,
        width: 342,
        height: 256,
        alt: `${HACKATHON_DATA.title} - GMIT Mandya`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HACKATHON_DATA.title,
    description: HACKATHON_DATA.tagline,
    images: [HACKATHON_DATA.logos.college],
  },
  icons: {
    icon: HACKATHON_DATA.logos.college,
    shortcut: HACKATHON_DATA.logos.college,
    apple: HACKATHON_DATA.logos.college,
  },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} ${inter.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#030712] text-slate-100 antialiased selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
