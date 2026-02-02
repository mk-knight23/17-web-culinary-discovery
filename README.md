# 17 Web Culinary Discovery

✨ A modern, interactive recipe discovery application built with Vue 3, featuring real-time search, category filtering, and recipe favorites.

## 📦 Deployment

### Render (One-Click Deploy)
This repository includes a `render.yaml` blueprint for automated deployment:
1. Visit [dashboard.render.com](https://dashboard.render.com)
2. Click "New +" → "Blueprint"
3. Connect repository: `mk-knight23/17-web-culinary-discovery`
4. Render will auto-detect and apply the blueprint configuration

### Manual Deployment
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

## Features
- 🔍 Real-time recipe search powered by TheMealDB API
- 📂 Category-based filtering
- ❤️ Save favorite recipes
- 🎨 Beautiful UI with dark/light mode support
- 🎵 Audio feedback and keyboard controls
- 📊 Usage statistics tracking
- 📱 Fully responsive design

## Tech Stack
- **Frontend**: Vue 3.5.24 (Composition API), TypeScript 5.9.3
- **State Management**: Pinia 3.0.4
- **Routing**: Vue Router 4.6.4
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite 7.2.4
- **Icons**: Lucide Vue Next
- **Utilities**: VueUse 14.1.0

## Quick Start
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## API
This application uses [TheMealDB API](https://www.themealdb.com/api.php) for recipe data.

---
*Built by [Kazi Musharraf](https://github.com/mkazi-)*
Status: 🟢 Active
Last Updated: 2026-02-02
