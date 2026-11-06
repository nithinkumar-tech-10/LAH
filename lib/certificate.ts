/**
 * Certificate configuration: template path, blank-space coordinates, and font settings.
 *
 * Template: Participate.jpg copied to /public/certificate/certificate-template.jpg
 * Image size: 1600 × 1131 px, landscape orientation.
 *
 * BLANK SPACES (measured in image pixels from top-left):
 *
 * 1. PARTICIPANT'S FULL NAME BLANK:
 *    The underline extends from just after "This certificate is proudly presented to" (x = 449)
 *    to just before "from" (x = 1410).
 *    - Left: x = 449
 *    - Right: x = 1410
 *    - Width: 961 px
 *    - Underline line y: 632 px
 *    - Text baseline y: 624 px
 *    - Center X: (449 + 1410) / 2 = 929.5 px
 *
 * 2. COLLEGE NAME BLANK:
 *    The underline extends from start of line (x = 78)
 *    to just before "for participating in" (x = 785).
 *    - Left: x = 78
 *    - Right: x = 785
 *    - Width: 707 px
 *    - Underline line y: 684 px
 *    - Text baseline y: 676 px
 *    - Center X: (78 + 785) / 2 = 431.5 px
 */

export const CERT_TEMPLATE_PATH = "/certificate/certificate-template.jpg";

export const CERT_IMAGE_WIDTH = 1600;
export const CERT_IMAGE_HEIGHT = 1131;

export interface BlankSpace {
  startX: number;
  endX: number;
  width: number;
  lineY: number;
  baselineY: number;
  centerX: number;
}

/** Blank area for the participant's full name */
export const NAME_BLANK: BlankSpace = {
  startX: 449,
  endX: 1410,
  width: 961,
  lineY: 632,
  baselineY: 624,
  centerX: 929.5,
};

/** Blank area for the college name */
export const COLLEGE_BLANK: BlankSpace = {
  startX: 78,
  endX: 785,
  width: 707,
  lineY: 684,
  baselineY: 676,
  centerX: 431.5,
};

/**
 * Font configuration.
 * Matches the bold sans-serif typeface in the template body text.
 * Includes 'Noto Sans Kannada' and 'Nirmala UI' for Kannada glyph support.
 */
export const CERT_FONT = {
  family: "'Inter', 'Noto Sans Kannada', 'Nirmala UI', sans-serif",
  weight: "700",
  color: "#0a0a0a",
  nameDefaultSize: 32,
  nameMinSize: 18,
  collegeDefaultSize: 28,
  collegeMinSize: 16,
};

/**
 * Google Fonts CSS URLs to preload for certificate generation.
 * Loads Noto Sans Kannada for Kannada names and Inter for clean Latin letters.
 */
export const CERT_FONT_URLS = [
  "https://fonts.googleapis.com/css2?family=Inter:wght@600;700&family=Noto+Sans+Kannada:wght@600;700&display=swap",
];
