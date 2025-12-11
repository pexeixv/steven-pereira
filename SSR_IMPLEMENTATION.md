# SSR Implementation

This project now includes Server-Side Rendering (SSR) using vite-plugin-ssr and react-helmet-async for SEO optimization.

## Features

- **Server-Side Rendering**: Pages are rendered on the server for improved SEO and initial page load performance
- **SEO Meta Tags**: Dynamic meta tags managed with react-helmet-async are rendered in the initial HTML
- **Client-Side Hydration**: React hydrates the server-rendered HTML on the client for full interactivity
- **Development & Production Modes**: Both dev and production servers support SSR

## Scripts

- `npm run dev` - Start development server with SSR (port 3000)
- `npm run dev:spa` - Start development without SSR (original Vite dev server)
- `npm run build` - Build for production (includes both client and server bundles)
- `npm run preview` - Preview production build with SSR (port 3000)

## Key Dependencies

- **vite-plugin-ssr**: Vite plugin for SSR support
- **react-helmet-async**: SSR-compatible head manager for React
- **express**: Node.js server for production
- **cross-env**: Cross-platform environment variable setting

## File Structure

```
├── server/
│   └── index.js                    # Express server for SSR
├── src/
│   ├── renderer/
│   │   ├── _default.page.server.tsx    # Server-side rendering logic
│   │   ├── _default.page.client.tsx    # Client-side hydration logic
│   │   └── types.ts                     # TypeScript types for SSR
│   └── pages/
│       └── index.page.tsx              # Main page with Helmet meta tags
```

## SEO Meta Tags

The main page includes comprehensive SEO meta tags:

- **Title**: Steven Pereira - Music Producer & Audio Engineer
- **Description**: Professional music producer and audio engineer specializing in mixing, mastering, and music production services
- **Open Graph tags**: For social media sharing (Facebook, LinkedIn)
- **Twitter Card tags**: For Twitter sharing

These tags are rendered on the server and included in the initial HTML response, ensuring search engines and social media crawlers can properly index the site.

## Development

When running in development mode (`npm run dev`), the server uses Vite's middleware mode which provides:
- Hot Module Replacement (HMR)
- Fast refresh
- SSR with source maps

## Production

In production (`npm run preview` after `npm run build`):
- Static assets are served from `dist/client`
- Server-side code runs from `dist/server`
- Full SSR with optimized bundles

## Notes

- The ThemeProvider component has been updated to check for browser environment (`typeof window !== 'undefined'`) to avoid SSR errors with localStorage
- The default theme in SSR is set to "dark" to match the client-side default
