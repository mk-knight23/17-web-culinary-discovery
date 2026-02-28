# 17-web-culinary-discovery

# 17-web-culinary-discovery

A modern, interactive recipe discovery application built with Vue 3, featuring real-time search, category filtering, and recipe favorites.

## Description

Culinara AI is a premium recipe discovery platform that helps users explore culinary creations from around the world. With an elegant interface and powerful search capabilities, users can find recipes by ingredient, dish name, or cuisine type.

## Tech Stack

- **Frontend**: Vue 3.5.24 (Composition API), TypeScript 5.9.3
- **State Management**: Pinia 3.0.4
- **Routing**: Vue Router 4.6.4
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite 7.2.4
- **Icons**: Lucide Vue Next
- **Utilities**: VueUse 14.1.0
- **Testing**: Vitest 4.0.18



## ✨ Features

This repository has been upgraded with the following features:

1. **Add Vue 3 Composition API** ✅
2. **Implement Pinia for state** ✅
3. **Add Vue Router guards** ✅
4. **Create composables** ✅
5. **Add Teleport and Suspense** ✅
6. **Implement v-model optimization** ✅
7. **Add TypeScript support** ✅
8. **Create reusable components** ✅
9. **Add transitions and animations** ✅
10. **Implement Vitest tests** ✅

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🏗️ Architecture

### Project Structure

```
17-web-culinary-discovery/
├── src/
│   ├── components/      # Vue components
│   │   ├── recipes/    # Recipe-related components
│   │   ├── search/     # Search and filter components
│   │   ├── ui/         # Reusable UI components
│   │   └── layout/     # Layout components
│   ├── composables/     # Vue composition functions
│   │   ├── useRecipe.ts      # Recipe data fetching
│   │   ├── useSearch.ts      # Search logic
│   │   └── useFavorites.ts   # Favorites management
│   ├── stores/          # Pinia stores
│   │   └── recipeStore.ts    # Global recipe state
│   ├── router/          # Vue Router configuration
│   │   └── index.ts
│   ├── types/           # TypeScript type definitions
│   └── main.ts          # Application entry point
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── tailwind.config.ts   # Tailwind CSS configuration
```

### Technology Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Vue 3.5.24 (Composition API) + TypeScript |
| **State Management** | Pinia 3.0.4 |
| **Routing** | Vue Router 4.6.4 |
| **Build Tool** | Vite 7.2.4 |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide Vue Next |
| **Utilities** | VueUse 14.1.0 |
| **Testing** | Vitest 4.0.18 |
| **Deployment** | Firebase, Vercel, Render, Amplify |

### Key Architectural Patterns

- **Composition API**: Reusable logic with composables
- **State Management**: Pinia stores for global state
- **Type Safety**: Full TypeScript coverage
- **Performance**: Virtual scrolling, lazy loading
- **Error Handling**: Error boundaries and API error handling
- **Code Splitting**: Route-based code splitting
- **Testing**: Component and unit tests with Vitest

### Data Flow

```
User Input → Search Query → useSearch Composable → API → Recipe Data → Pinia Store → Component Update
```

## 🌐 Deployment

### Live URLs

| Platform | URL |
|----------|-----|
| Firebase | [Deployed Link] |
| Vercel | [Deployed Link] |
| Render | [Deployed Link] |
| Amplify | [Deployed Link] |

### Deploy to Firebase

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Initialize Firebase (if not done)
firebase init hosting

# Build
npm run build

# Deploy
firebase deploy
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to Render

```bash
# Install Render CLI
npm install -g render

# Deploy
render deploy
```

### Deploy to Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add hosting
amplify add hosting

# Deploy
amplify publish
```

### Environment Variables

Create `.env.local`:

```env
VITE_API_KEY=your_api_key
VITE_API_URL=https://api.example.com
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Setup

```bash
# Clone and navigate
git clone https://github.com/mk-knight23/17-web-culinary-discovery.git
cd 17-web-culinary-discovery

# Install dependencies
npm install

# Start development server
npm run dev
```

### Making Changes

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes to components/composables
3. Run tests: `npm run test`
4. Run type checking: `npm run build`
5. Test locally
6. Submit a pull request with description

### Code Style Guidelines

- Use TypeScript for all files
- Follow Vue 3 Composition API best practices
- Use composables for reusable logic
- Use Pinia for state management
- Write descriptive variable names
- Add comments for complex logic
- Ensure accessibility (ARIA labels, keyboard nav)
- Test on mobile and desktop

### Feature Ideas

- Add meal planning features
- Implement shopping list generator
- Add nutritional information display
- Create recipe sharing functionality
- Implement user authentication
- Add recipe ratings and reviews
- Create cooking mode with step-by-step guide
- Add voice search functionality
- Implement offline recipe storage
- Create recipe video tutorials

### Testing

```bash
# Run tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 📝 License

MIT

---

*Last updated: 2026-02-28*

