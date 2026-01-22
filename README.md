# UseCare Website

A super clean and aesthetic website built with Next.js, TypeScript, Tailwind CSS, and MagicUI components.

## Features

- **Hero Section**: Stunning hero image with multiple text animations including:
  - Blur fade-in effects
  - Character-by-character animations
  - Sparkles text effects
  - Animated gradient text
  - Shiny text animations
  - Typing animations

- **About Section**: Two-column layout showcasing the organization's mission
  - Left column: Text content about being local first and volunteer run in NYC
  - Right column: Image placeholder (ready for your image)

- **Current Project Section**: Highlighting the hygiene kits initiative in the Bronx
  - Multiple animated text elements
  - Gradient effects
  - Sparkles animations

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Motion (Framer Motion)
- MagicUI Components
- Fraunces Font (Google Fonts)

## Getting Started

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
usecare/
├── app/
│   ├── layout.tsx      # Root layout with Fraunces font
│   ├── page.tsx        # Main page with all sections
│   └── globals.css     # Global styles
├── components/
│   └── ui/             # MagicUI components
│       ├── blur-fade.tsx
│       ├── text-animate.tsx
│       ├── animated-shiny-text.tsx
│       ├── animated-gradient-text.tsx
│       ├── sparkles-text.tsx
│       └── typing-animation.tsx
├── lib/
│   └── utils.ts        # Utility functions
├── public/
│   └── hero.jpg        # Hero section image
└── package.json
```

## Customization

### Adding Your About Section Image

Replace the placeholder in `app/page.tsx` (About Section, Right Column) with your image:

```tsx
<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg object-cover"
/>
```

### Modifying Text Content

All text content can be easily modified in `app/page.tsx`. The animations will automatically adapt to your content.

## Build for Production

```bash
npm run build
npm start
```

## License

This project is open source and available for use.
