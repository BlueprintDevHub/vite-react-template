# Vite React Template

A modern, production-ready React template built with Vite, React 19, Tailwind CSS v4, and TypeScript support.

## ✨ Features

- ⚡️ **Vite** - Next generation frontend tooling
- ⚛️ **React 19** - Latest React with new features
- 🎨 **Tailwind CSS v4** - Latest utility-first CSS framework
- 🌙 **Dark Mode** - Built-in theme switching with system preference detection
- 📦 **TypeScript Ready** - Full TypeScript support with path aliases
- 🧹 **ESLint** - Code linting and formatting
- 🔧 **Path Aliases** - Clean imports with `@/` prefix
- 🎯 **Minimal Dependencies** - Only essential packages included

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/BlueprintDevHub/vite-react-template.git
cd vite-react-template

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint
```

## 📂 Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # UI components (Card, Button, etc.)
│   │   ├── mode-toggle.tsx # Dark mode toggle
│   │   └── theme-provider.tsx # Theme context
│   ├── lib/                # Utility functions
│   │   └── utils.ts        # Helper utilities
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles with CSS variables
├── public/                 # Static assets
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── components.json         # shadcn/ui configuration
```

## 🎨 Styling

This template uses Tailwind CSS v4 with a custom design system inspired by shadcn/ui:

- **CSS Variables** - Theme colors defined as CSS custom properties
- **Dark Mode** - Automatic theme switching with `class` strategy
- **Design Tokens** - Consistent colors, spacing, and typography
- **Component Styles** - Reusable UI components with proper theming

## 🌙 Theme System

The template includes a complete dark/light theme system:

- **System Preference** - Automatically detects user's OS theme preference
- **Manual Toggle** - Theme switching button in the header
- **Persistent** - Saves user preference in localStorage
- **CSS Variables** - All colors defined as HSL variables for easy customization

## 🛠️ Customization

### Adding New Components

Create new components in `src/components/`:

```jsx
// src/components/MyComponent.jsx
export function MyComponent() {
  return (
    <div className="p-4 rounded-lg border">
      <h2>My Component</h2>
    </div>
  )
}
```

### Modifying Theme Colors

Update CSS variables in `src/index.css`:

```css
:root {
  --primary: 210 40% 50%;     /* Your brand color */
  --secondary: 210 40% 90%;   /* Secondary color */
  /* ... other variables */
}
```

### Path Aliases

Use `@/` for clean imports:

```jsx
import { MyComponent } from '@/components/MyComponent'
import { cn } from '@/lib/utils'
```

## 📦 Dependencies

### Core
- **React 19** - Latest React version
- **React DOM 19** - React DOM renderer
- **Vite** - Build tool and dev server

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework
- **@tailwindcss/vite** - Vite plugin for Tailwind CSS

### Icons
- **Lucide React** - Beautiful & consistent icon set

### Development
- **TypeScript** - Type checking
- **ESLint** - Code linting
- **@vitejs/plugin-react** - React support for Vite

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) - Amazing build tool
- [React](https://react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Design system inspiration
- [Lucide](https://lucide.dev/) - Icon library

---

**Built with ❤️ by [BlueprintDevHub](https://github.com/BlueprintDevHub)**
