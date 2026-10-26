import fs from "fs";
import path from "path";

const logosDir = path.resolve("./public/logos");
if (!fs.existsSync(logosDir)) {
  fs.mkdirSync(logosDir, { recursive: true });
}

// 1. GMIT Logo SVG
const gmitSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="gmitBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a192f"/>
      <stop offset="100%" stop-color="#050B14"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047"/>
      <stop offset="50%" stop-color="#EAB308"/>
      <stop offset="100%" stop-color="#CA8A04"/>
    </linearGradient>
    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4ADE80"/>
      <stop offset="100%" stop-color="#16A34A"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  
  <!-- Outer Shield -->
  <rect width="400" height="400" rx="40" fill="url(#gmitBg)"/>
  <rect x="15" y="15" width="370" height="370" rx="30" fill="none" stroke="url(#goldGrad)" stroke-width="3" stroke-dasharray="6,4" opacity="0.6"/>
  
  <!-- Emblem Seal Outer Circle -->
  <circle cx="200" cy="180" r="130" fill="#0f172a" stroke="url(#goldGrad)" stroke-width="4"/>
  <circle cx="200" cy="180" r="118" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-opacity="0.5"/>
  
  <!-- Book / Knowledge Base -->
  <path d="M150 240 Q 200 225 250 240 L 250 220 Q 200 205 150 220 Z" fill="url(#goldGrad)"/>
  <path d="M150 220 Q 200 205 250 220 L 200 212 Z" fill="#fef08a"/>
  
  <!-- Lamp / Flame of Knowledge -->
  <path d="M200 130 C 185 155 185 180 200 195 C 215 180 215 155 200 130 Z" fill="url(#goldGrad)" filter="url(#glow)"/>
  <circle cx="200" cy="170" r="8" fill="#fff"/>
  
  <!-- Gear / Engineering Teeth -->
  <g fill="url(#emeraldGrad)" opacity="0.85">
    <rect x="195" y="65" width="10" height="20" rx="2"/>
    <rect x="195" y="275" width="10" height="20" rx="2"/>
    <rect x="75" y="175" width="20" height="10" rx="2"/>
    <rect x="305" y="175" width="20" height="10" rx="2"/>
    <rect x="110" y="105" width="16" height="10" rx="2" transform="rotate(45 118 110)"/>
    <rect x="274" y="240" width="16" height="10" rx="2" transform="rotate(45 282 245)"/>
    <rect x="274" y="105" width="16" height="10" rx="2" transform="rotate(-45 282 110)"/>
    <rect x="110" y="240" width="16" height="10" rx="2" transform="rotate(-45 118 245)"/>
  </g>
  
  <!-- Leaf of Agriculture -->
  <path d="M170 190 C 160 170 180 155 195 165 C 190 180 180 190 170 190 Z" fill="#22c55e"/>
  <path d="M230 190 C 240 170 220 155 205 165 C 210 180 220 190 230 190 Z" fill="#4ade80"/>

  <!-- Texts -->
  <text x="200" y="340" font-family="system-ui, sans-serif" font-weight="900" font-size="28" fill="#ffffff" text-anchor="middle" letter-spacing="2">GMIT MANDYA</text>
  <text x="200" y="368" font-family="system-ui, sans-serif" font-weight="600" font-size="12" fill="#EAB308" text-anchor="middle" letter-spacing="3">ESTD 2011 • BET GROUP</text>
</svg>`;

// 2. KITS Logo SVG
const kitsSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="kitsBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#031b26"/>
      <stop offset="100%" stop-color="#020d13"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8"/>
      <stop offset="100%" stop-color="#0284C7"/>
    </linearGradient>
    <linearGradient id="neonLime" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4ADE80"/>
      <stop offset="100%" stop-color="#22C55E"/>
    </linearGradient>
    <filter id="kitsGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="400" height="400" rx="40" fill="url(#kitsBg)"/>
  <rect x="15" y="15" width="370" height="370" rx="30" fill="none" stroke="#38BDF8" stroke-width="2" stroke-opacity="0.4"/>

  <!-- Tech Hexagon Nodes -->
  <polygon points="200,60 310,120 310,240 200,300 90,240 90,120" fill="none" stroke="url(#cyanGrad)" stroke-width="4"/>
  <polygon points="200,85 285,135 285,225 200,275 115,225 115,135" fill="#07202e" stroke="url(#neonLime)" stroke-width="2" stroke-dasharray="8,6"/>

  <!-- Circuit Lines & Nodes -->
  <line x1="200" y1="60" x2="200" y2="130" stroke="#38bdf8" stroke-width="3"/>
  <line x1="90" y1="120" x2="150" y2="160" stroke="#4ade80" stroke-width="3"/>
  <line x1="310" y1="120" x2="250" y2="160" stroke="#4ade80" stroke-width="3"/>
  <line x1="90" y1="240" x2="160" y2="210" stroke="#38bdf8" stroke-width="3"/>
  <line x1="310" y1="240" x2="240" y2="210" stroke="#38bdf8" stroke-width="3"/>

  <!-- Central Dynamic Innovation Core -->
  <circle cx="200" cy="180" r="38" fill="url(#cyanGrad)" filter="url(#kitsGlow)"/>
  <circle cx="200" cy="180" r="28" fill="#ffffff"/>
  <!-- Leaf inside tech core -->
  <path d="M190 195 C 185 170 205 160 215 168 C 215 185 202 195 190 195 Z" fill="#16a34a"/>

  <!-- Outer Dots -->
  <circle cx="200" cy="60" r="7" fill="#38BDF8"/>
  <circle cx="310" cy="120" r="7" fill="#4ADE80"/>
  <circle cx="310" cy="240" r="7" fill="#38BDF8"/>
  <circle cx="200" cy="300" r="7" fill="#4ADE80"/>
  <circle cx="90" cy="240" r="7" fill="#38BDF8"/>
  <circle cx="90" cy="120" r="7" fill="#4ADE80"/>

  <text x="200" y="342" font-family="system-ui, sans-serif" font-weight="900" font-size="32" fill="#38BDF8" text-anchor="middle" letter-spacing="4">K I T S</text>
  <text x="200" y="370" font-family="system-ui, sans-serif" font-weight="600" font-size="11" fill="#94A3B8" text-anchor="middle" letter-spacing="1.5">KARNATAKA INNOVATION &amp; TECH SOCIETY</text>
</svg>`;

// 3. Government of Karnataka Logo SVG
const karnatakaSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="400" height="400">
  <defs>
    <linearGradient id="karBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#180e04"/>
      <stop offset="100%" stop-color="#090501"/>
    </linearGradient>
    <linearGradient id="karGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047"/>
      <stop offset="50%" stop-color="#EAB308"/>
      <stop offset="100%" stop-color="#B45309"/>
    </linearGradient>
    <linearGradient id="karRed" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#EF4444"/>
      <stop offset="100%" stop-color="#B91C1C"/>
    </linearGradient>
    <filter id="karGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="400" height="400" rx="40" fill="url(#karBg)"/>
  <rect x="15" y="15" width="370" height="370" rx="30" fill="none" stroke="url(#karGold)" stroke-width="2" stroke-opacity="0.5"/>

  <!-- Gandaberunda (Two-headed mythical eagle of Karnataka) Motif -->
  <!-- Outer Floral Ring -->
  <circle cx="200" cy="175" r="120" fill="#201205" stroke="url(#karGold)" stroke-width="5"/>
  <circle cx="200" cy="175" r="108" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,4"/>

  <!-- Central Crest / Lion Capitol Accent -->
  <path d="M190 85 L210 85 L205 110 L195 110 Z" fill="url(#karGold)"/>
  <circle cx="200" cy="80" r="7" fill="url(#karGold)"/>

  <!-- Gandaberunda Body -->
  <path d="M200 130 C185 140 180 160 185 195 C190 220 200 230 200 230 C200 230 210 220 215 195 C220 160 215 140 200 130 Z" fill="url(#karGold)" filter="url(#karGlow)"/>

  <!-- Left Head & Beak -->
  <path d="M185 140 C175 130 155 135 155 145 C155 155 170 155 180 155 Z" fill="url(#karGold)"/>
  <polygon points="155,145 140,150 155,155" fill="#fde047"/>

  <!-- Right Head & Beak -->
  <path d="M215 140 C225 130 245 135 245 145 C245 155 230 155 220 155 Z" fill="url(#karGold)"/>
  <polygon points="245,145 260,150 245,155" fill="#fde047"/>

  <!-- Left Wing Wingspread -->
  <path d="M180 165 C140 150 110 180 120 225 C140 215 165 205 185 200 Z" fill="url(#karGold)"/>
  <path d="M120 225 C130 240 155 235 175 220 Z" fill="#b45309"/>

  <!-- Right Wing Wingspread -->
  <path d="M220 165 C260 150 290 180 280 225 C260 215 235 205 215 200 Z" fill="url(#karGold)"/>
  <path d="M280 225 C270 240 245 235 225 220 Z" fill="#b45309"/>

  <!-- Tail Feathers -->
  <polygon points="190,230 200,265 210,230" fill="url(#karGold)"/>
  <polygon points="180,225 190,255 195,230" fill="#b45309"/>
  <polygon points="220,225 210,255 205,230" fill="#b45309"/>

  <!-- Ashoka Chakra Base Motif -->
  <circle cx="200" cy="275" r="14" fill="#0284c7" stroke="url(#karGold)" stroke-width="2"/>
  <circle cx="200" cy="275" r="3" fill="#fff"/>

  <!-- Text -->
  <text x="200" y="338" font-family="system-ui, sans-serif" font-weight="900" font-size="24" fill="#FDE047" text-anchor="middle" letter-spacing="2">GOVERNMENT OF KARNATAKA</text>
  <text x="200" y="365" font-family="system-ui, sans-serif" font-weight="600" font-size="11" fill="#E2E8F0" text-anchor="middle" letter-spacing="1.5">DEPT. OF ELECTRONICS, IT &amp; BT</text>
</svg>`;

// Write SVGs
fs.writeFileSync(path.join(logosDir, "gmit.svg"), gmitSvg);
fs.writeFileSync(path.join(logosDir, "kits.svg"), kitsSvg);
fs.writeFileSync(path.join(logosDir, "karnataka.svg"), karnatakaSvg);

console.log("SVG logos written successfully!");
