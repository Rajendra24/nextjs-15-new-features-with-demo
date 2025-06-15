# Next.js 15 Features Demo

A comprehensive demonstration of all the new features introduced in Next.js 15, built with React 19 and Tailwind CSS.

## 🚀 Features Demonstrated

This project showcases 6 major features of Next.js 15:

### 1. **Async Request APIs**
- Server Components can be async by default
- Better request deduplication and caching mechanisms
- Improved streaming support for faster loading
- Enhanced error handling and loading states
- Interactive demo with async data fetching

### 2. **Cache Semantics**
- Enhanced fetch() caching with explicit cache control
- Improved cache invalidation strategies
- Better cache debugging and monitoring tools
- Granular cache control per request
- Demo with different cache strategies (default, no-cache, force-cache)

### 3. **React 19 Support**
- use() hook for promise handling in components
- Enhanced form actions and form state management
- Improved useTransition for better user experience
- Better error boundaries and suspense integration
- Interactive demos showing React 19 hooks in action

### 4. **Next Form**
- Server Actions integration with forms
- Built-in form validation and error handling
- Progressive enhancement for better UX
- Automatic form state management
- Complete form demo with validation and submissions

### 5. **Turbopack**
- Up to 10x faster builds compared to Webpack
- Incremental bundling for lightning-fast rebuilds
- Better tree-shaking and advanced code splitting
- Near-instant Hot Module Replacement (HMR)
- Performance comparison demo between Webpack and Turbopack

### 6. **Server Actions**
- Direct server-side function calls from client components
- Automatic serialization and error handling
- Built-in form integration with progressive enhancement
- Type-safe server-client communication
- Todo app and profile update demos

## 🛠️ Tech Stack

- **Next.js 15** - Latest version with all new features
- **React 19** - Latest React with new hooks and capabilities
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **pnpm** - Fast, disk space efficient package manager

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rajendra24/nextjs-15-new-features-with-demo.git
   cd nextjs-15-features-demo
   ```


2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Getting Started with Turbopack

To experience the speed improvements of Turbopack, run:

```bash
npm dev --turbo
```

Or update your package.json:

```json
{
  "scripts": {
    "dev": "next dev --turbo"
  }
}
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout
│   └── page.tsx                   # Home page
│   ├── api/
│       ├── cache-demo.tsx         # API route method
├──components/
│   ├── async-request.tsx          # Async Request demo
│   ├── cache-semantics.tsx        # Cache Semantics demo
│   ├── react19-support.tsx        # React 19 features demo
│   ├── next-form.tsx              # Next Form demo
│   ├── turbopack.tsx              # Turbopack demo
│   ├── server-action.tsx          # Server Actions demo
│   ├── tabs-wrapper.tsx           # Main tabs navigation
├── public/                        # Static assets
├── .gitignore                     # Git ignore rules
├── next-env.d.ts                  # Next.js TypeScript declarations
├── next.config.mjs                # Next.js configuration
├── package.json                   # Dependencies and scripts
├── pnpm-workspace.yaml            # pnpm workspace configuration
├── postcss.config.js              # PostCSS configuration
├── postcss.config.mjs             # PostCSS configuration (ESM)
├── README.md                      # Project documentation
├── tailwind.config.js             # Tailwind CSS configuration
└── tsconfig.json                  # TypeScript configuration
```

## 🎯 Key Features

### Interactive Demos
- **Live Examples**: Each feature includes working demonstrations
- **Real-time Updates**: See changes immediately as you interact
- **Loading States**: Proper loading indicators and transitions
- **Error Handling**: Comprehensive error handling examples

### Educational Content
- **Feature Descriptions**: Detailed explanations of what's new
- **Use Cases**: Practical examples of when to use each feature
- **Performance Metrics**: Visual comparisons and improvements
- **Code Examples**: Ready-to-use code snippets

### Responsive Design
- **Mobile-First**: Works perfectly on all device sizes
- **Clean UI**: Professional design with Tailwind CSS
- **Fast Loading**: Optimized for performance

## 🔧 Available Scripts

- \`pnpm dev\` - Start development server
- \`pnpm dev --turbo\` - Start development server with Turbopack
- \`pnpm build\` - Build for production
- \`pnpm start\` - Start production server
- \`pnpm lint\` - Run ESLint

## 📚 Learn More

### Next.js 15 Documentation
- [Next.js 15 Release Notes](https://nextjs.org/blog/next-15)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
- [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [Turbopack](https://nextjs.org/docs/app/api-reference/turbopack)

### React 19 Documentation
- [React 19 Release](https://react.dev/blog/2024/04/25/react-19)
- [use() Hook](https://react.dev/reference/react/use)
- [Form Actions](https://react.dev/reference/react-dom/components/form)

## Author
- [Rajendra Kumar Arya](https://github.com/Rajendra24) 

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Rajendra24/nextjs-15-new-features-with-demo/blob/main/LICENSE) file for details.
