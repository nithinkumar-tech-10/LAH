# 24 Hours LEAP Agritech Hackathon 2026 🌾⚡

A futuristic, high-performance website built for the **24 Hours LEAP Agritech Hackathon 2026**, organized by **G. Madegowda Institute of Technology (GMIT), Mandya** in association with **Karnataka Innovation and Technology Society (KITS), Department of Electronics, IT & BT, Government of Karnataka**.

---

## 🚀 Live Demo & Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 + Custom Glassmorphism System
- **Animation & Transitions**: CSS Ambient Bio-Particles + Lenis Smooth Scrolling
- **Icons**: Lucide React
- **Architecture**: 100% Static & Client-Safe (No backend, no database, zero env variables required)
- **Deployment Target**: Vercel (Zero-configuration instant deploy)

---

## 🛠️ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open http://localhost:3000 in your browser
```

To create a production build:
```bash
npm run build
npm run start
```

---

## 📝 Customization Guide

### 1. How to Edit Content & Phone Numbers (`lib/data.ts`)
ALL textual content, dates, phone numbers, prizes, rounds, and rules are centralized in **a single file**:
👉 [`lib/data.ts`](file:///c:/Users/NITHIN/Downloads/LAH/lib/data.ts)

- **Event Schedule & Countdown**: Update `eventStartISO` and `eventEndISO`:
  ```ts
  eventStartISO: "2026-11-02T09:30:00+05:30",
  eventEndISO: "2026-11-03T14:30:00+05:30",
  ```
- **Coordinators & Phone Numbers**:
  ```ts
  coordinators: {
    faculty: [
      { name: "Prof. Ravi Kumar K N", phone: "+919164545670", formattedPhone: "91645 45670" },
      ...
    ],
    students: [
      { name: "Sinchana H G", phone: "+918088634023", formattedPhone: "80886 34023" },
      ...
    ]
  }
  ```

---

### 2. How to Replace Official Logos & Photos
All institutional logos are configured in `lib/data.ts` and stored in `public/logos/`:
- **College Logo (GMIT)**: `public/logos/WhatsApp Image 2026-10-23 at 19.53.23.jpeg`
- **K-tech Logo (KITS)**: `public/logos/WhatsApp Image 2026-10-23 at 20.49.34 (1).jpeg`
- **IT&BT Logo (Govt of Karnataka)**: `public/logos/WhatsApp Image 2026-10-23 at 20.49.34.jpeg`

To add photos for Organizing Committee members:
1. Place their image inside `public/committee/` (e.g. `public/committee/principal.jpg`).
2. In `lib/data.ts`, set the `image` field in `HACKATHON_DATA.committee`:
   ```ts
   {
     title: "Patron",
     name: "Dr. Chandan B R",
     designation: "Principal, GMIT",
     image: "/committee/principal.jpg",
   }
   ```

---

### 3. Google Maps Coordinates & Venue Link
The venue is set to **Kuvempu Sabhangana, GMIT, Mandya**.
The direct share link is configured in `lib/data.ts`:
```ts
mapsUrl: "https://maps.app.goo.gl/5E1X9sd2sxRrPeYG7?g_st=aw",
```

---

### 4. Deploying to Vercel (Zero Config)

This project has no database or backend requirements and builds completely static:

#### Option A: Deploy via GitHub (Recommended)
1. Push this repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for 24H LEAP Agritech Hackathon 2026"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/leap-agritech-hackathon-2026.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Leave Framework Preset as **Next.js** and click **Deploy**. Vercel will build and deploy automatically!

#### Option B: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 📱 Responsiveness & Accessibility

- **Mobile First**: Tested and optimized from 360px phones to 4K displays.
- **Prefeers Reduced Motion**: Automatically disables 3D animations and intense transitions for users who prefer reduced motion.
- **High Contrast Dark Mode**: Built with deep midnight blue/green palette (`#030712`) with luminous emerald and amber accents for maximum legibility.
- **Mobile Floating Quick-Call**: One-touch contact button on mobile devices for instant coordinator access.

---

© 2026 GMIT, Mandya. All rights reserved.
