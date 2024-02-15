### pnpm setup
brew install pnpm

### host
    - pnpm create vite host --template react 
    - cd host
    - Open package.json
    - Set strict port to dev and preview  --port 5000 --strictPort
    - Replace the src with src-host-app
    - pnpm dev

### react-app 
    - pnpm create vite react-app --template react 
    - cd react-app
    - pnpm i
    - open package.json
    - Set strict port to dev and preview  --port 5001 --strictPort
    - Replace the src with src-react-app
    - pnpm dev

### ModuleFederation
- Multiple separate builds should form a single application. These separate builds act like containers and can expose and consume code between builds, creating a single, unified application.
- This is often known as Micro-Frontends, but is not limited to that.
- https://webpack.js.org/concepts/module-federation/


### Vite
- Vite (French word for "fast", pronounced /vit/) is a new breed of frontend build tool that significantly improves the frontend development experience. It consists of two major parts:
- A dev server that serves your source files over native ES modules, with rich built-in features and astonishingly fast Hot Module Replacement (HMR).
- A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.

### Vite Plugin Federation 
    - A Vite/Rollup plugin which support Module Federation. Inspired by Webpack and compatible with Webpack Module Federation.
    - https://github.com/originjs/vite-plugin-federation

### react-app 
    - pnpm add @originjs/vite-plugin-federation -D
    - Update vite.config.js
    - pnpm build & pnpm preview

### host
    - pnpm add @originjs/vite-plugin-federation -D  
    - Update vite.config.js
    - pnpm dev

### vue-app
    - pnpm create vite vue-app --template vue 
    - cd vue-app
    - pnpm i
    - open package.json
    - Set strict port to dev and preview  --port 5002 --strictPort
    - Replace the src with src-vue-app
    - pnpm dev
    - pnpm add @originjs/vite-plugin-federation -D
    - Update vite.config.js
    - pnpm build & pnpm preview

### host
    - pnpm add @originjs/vite-plugin-federation -D  
    - Update vite.config.js
    - pnpm dev