# Saskara Luxury Travel - Premium React Template

A high-performance, dark-themed luxury travel website template built with React 19 and Vite. Designed for ease of use with a **Single Configuration File** architecture.

## 🚀 Key Features
- **Centralized Configuration:** Manage content, theme colors, tours, blog posts, and SEO from one file (`site-config.js`).
- **Modern Dark Theme:** "Midnight Luxury" aesthetic with Gold accents (#D4AF37).
- **Dynamic Blog System:** Full-featured blog with checking listing and article detail pages.
- **SEO Optimized:** Native React 19 metadata implementation, dynamic OpenGraph & Twitter cards.
- **Performance:** Optimized build with code splitting and tree-shaken icons (<230KB bundle size).
- **Responsive Design:** Fully responsive layout for all devices.

## 🛠️ Tech Stack
- **Core:** React 19, Vite 6
- **Styling:** Tailwind CSS 3.4
- **Routing:** React Router DOM 6
- **Icons:** Lucide React (Optimized)
- **Runtime:** Node.js or Bun

## 🏁 Getting Started

### 1. Install Dependencies
```bash
npm install
# or
bun install
```

### 2. Run Development Server
```bash
npm run dev
# or
bun dev
```

### 3. Build for Production
```bash
npm run build
# or
bun run build
```

## ⚙️ Configuration Guide

All site data is located in `src/data/site-config.js`.

### Global Settings
Edit `global` object for:
- Site Name & Logo
- Social Media Links (Facebook, Instagram, Twitter)
- Contact Info & Footer details
- SEO Metadata defaults

### Theme Customization
Edit `theme.colors` to change the palette:
```javascript
theme: {
    colors: {
        primary: "#D4AF37", // Change your brand color here
        background: "#020617",
        // ...
    }
}
```

### Content Management
- **Tours:** Add/Edit objects in the `tours` array.
- **Blog:** Add/Edit objects in the `posts` array. HTML is supported in the `content` field.
- **Pages:** Edit `pages` object for Home, About, and Contact static text.

## 📁 Project Structure
```
src/
├── components/   # Reusable UI components (Navbar, Footer, SEO, etc.)
├── data/         # site-config.js (THE BRAIN of the website)
├── pages/        # Route components (Home, Tours, Blog, etc.)
├── assets/       # Static assets
└── main.jsx      # Entry point
```

## 📄 License
© 2026 Saskara Luxury Travels. All rights reserved.
