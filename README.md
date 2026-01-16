# INVALSER - Premium Valet & Security Services Platform

A modern, production-ready Progressive Web Application (PWA) connecting customers with professional valet and security service providers across India. Built with React, TypeScript, and Tailwind CSS.

![Version](https://img.shields.io/badge/version-2.2.0-blue.svg)
![Build](https://img.shields.io/badge/build-production--ready-brightgreen.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)
![PWA](https://img.shields.io/badge/PWA-Ready-5A0FC8?logo=pwa)
![Mobile](https://img.shields.io/badge/Mobile-Optimized-success.svg)
![Status](https://img.shields.io/badge/status-production-success.svg)

---

## 🌐 Live Application

**Production URL**: [invalser.com](https://invalser.com)

---

## 🌟 Overview

**INVALSER** (IN-Indian VA-Valet SER-Services) is a premium service provider platform connecting customers with verified professionals across India. The application features intelligent search, location-based matching, and seamless booking experience.

---

## ✨ Features

### Customer Features
- 🔍 **Intelligent Search** - Location-based provider matching with smart filters
- ✅ **Verified Providers** - Background-checked professionals with ratings
- ⚡ **Instant Booking** - Real-time availability and seamless booking
- 💰 **Transparent Pricing** - Clear pricing with no hidden fees
- 📱 **PWA Support** - Install as native app on any device

### Provider Features
- 📝 **Easy Registration** - Simple onboarding process
- 👤 **Profile Management** - Showcase services and availability
- 📨 **Direct Bookings** - Receive requests directly from customers
- ⭐ **Review System** - Build reputation through feedback

### Technical Features
- 🌙 **Dark/Light Mode** - System-aware theme switching
- 📲 **PWA with Auto-Updates** - Service worker with instant update notifications
- 🎨 **Animated Branding** - Dynamic logo with valet/security icon animations
- 🎭 **Modern UI** - Glassmorphism, animations, micro-interactions
- 📊 **SEO Optimized** - Meta tags, structured data, sitemaps
- ♿ **Accessible** - WCAG compliant, keyboard navigation
- 🔐 **Security Headers** - CSP, HSTS, XSS protection configured
- 📱 **Mobile-First** - Responsive design with touch gestures

---

## 🛠️ Technology Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| React 18.3 | UI Library with Hooks |
| TypeScript | Type-safe development |
| Tailwind CSS | Utility-first styling |
| React Router | Client-side routing |
| React Query | Data fetching & caching |
| Framer Motion | Animations |
| Vite | Build tool & dev server |

### UI Components
| Library | Purpose |
|---------|---------|
| Radix UI | Accessible primitives |
| Shadcn/ui | Pre-built components |
| Lucide React | Icon library |

### PWA & Performance
- Service Worker with cache strategies
- Lazy loading & code splitting
- Web Vitals optimization
- Offline support

---

## 📁 Project Structure

```
src/
├── assets/              # Static assets (logos, icons)
├── components/
│   ├── ui/              # Reusable UI components
│   ├── booking/         # Booking-related components
│   ├── hero/            # Hero section components
│   ├── navigation/      # Navigation components
│   └── providers/       # Provider-related components
├── config/              # App configuration
├── data/                # Static data & mock data
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── pages/               # Route pages
├── services/            # API & business logic
├── styles/              # Global styles
├── types/               # TypeScript types
└── utils/               # Helper utilities

public/
├── .well-known/         # Security & app linking files
├── manifest.json        # PWA manifest
├── sw.js                # Service worker
├── robots.txt           # SEO crawling rules
├── sitemap.xml          # SEO sitemap
└── _headers             # Security headers (Vercel)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/invalser.git
cd invalser

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun dev
```

### Build for Production

```bash
npm run build
npm run preview  # Test production build locally
```

---

## 🌐 Deployment

### Vercel (Recommended)

1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. Add custom domain: `invalser.com`
4. Configure DNS records as shown in Vercel dashboard

### Environment Variables

No environment variables required - this is a frontend-only application.

---

## 📱 PWA Features

### Installation
- Automatic install prompt after 5 seconds
- Manual install via "Install App" button
- Works on iOS Safari, Android Chrome, Desktop browsers

### Update Notifications
- Service worker detects new versions
- Toast notification prompts users to update
- Seamless update with page refresh

### Offline Support
- Static assets cached for offline access
- Graceful degradation when offline

---

## 🔒 Security

### Headers Configured
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

### Files
- `/.well-known/security.txt` - Security contact info
- `/public/security-headers.json` - Security configuration

---

## 📊 SEO Configuration

### Files
- `robots.txt` - Crawler directives
- `sitemap.xml` - All routes for indexing
- `faq-schema.json` - Structured FAQ data
- `index.html` - Meta tags, Open Graph, Twitter Cards

### Features
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Canonical URLs
- JSON-LD structured data

---

## 🎨 Design System

### Color Tokens (HSL)
- `--primary` - Brand primary color
- `--secondary` - Secondary accent
- `--background` - Page background
- `--foreground` - Text color
- `--muted` - Muted backgrounds
- `--accent` - Accent highlights

### Typography
- Font Family: System fonts with fallbacks
- Responsive sizing with clamp()
- Proper line heights and spacing

### Components
- All colors via CSS custom properties
- Dark mode support built-in
- Consistent spacing scale

---

## 📞 Contact

- **Website**: [invalser.com](https://invalser.com)
- **Email**: info@invalser.com
- **Phone**: +91 84990 90369

---

## 📄 License

Copyright © 2024-2025 INVALSER. All rights reserved.

---

## 🚀 Production Checklist

- ✅ PWA manifest with all icon sizes (192px, 512px, maskable)
- ✅ Service worker with cache & update notifications
- ✅ Branded loading screen with animations
- ✅ Animated logo with valet/security icons
- ✅ SEO files (robots.txt, sitemap.xml, structured data)
- ✅ Security headers configured
- ✅ Dark/Light theme support
- ✅ Mobile-responsive design (all screens optimized)
- ✅ Booking form mobile-optimized (stacked counter controls)
- ✅ Location detection with OpenStreetMap API
- ✅ Chatbot with FAQ responses
- ✅ Accessibility features
- ✅ Error boundaries & fallbacks
- ✅ Touch gestures & haptic feedback support

---

## 🙏 Acknowledgments

Built with [Lovable](https://lovable.dev) - AI-powered web development platform.
