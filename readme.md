### pnpm setup
- Why PNPM?
- Fast (pnpm is up to 2x faster than npm)
- More Efficient (Files inside node_modules are cloned or hard linked from a single content-addressable storage)
- Supports monorepos (pnpm has built-in support for multiple packages in a repository)
```brew install pnpm```
- https://pnpm.io/

### Vite
- Vite (French word for "fast", pronounced /vit/) is a new breed of frontend build tool that significantly improves the frontend development experience. It consists of two major parts:
- A dev server that serves your source files over native ES modules, with rich built-in features and astonishingly fast Hot Module Replacement (HMR).
- A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.
- https://vitejs.dev/

### host (Create the Host application)
    - pnpm create vite host --template react 
    - cd host
    - Open package.json
    - Replace the src with zip/src-host-app
    - pnpm dev
 
### react-app (Create the react-app application)
    - pnpm create vite react-app --template react 
    - cd react-app
    - pnpm i
    - open package.json
    - Set strict port to dev and preview  --port 5001 --strictPort
    - Replace the src with zip/src-react-app
    - pnpm dev

### Module Federation
- Multiple separate builds form a single application. 
- These separate builds act like containers and can expose and consume code between builds, creating a single, unified application.
- https://webpack.js.org/concepts/module-federation/

### Vite Plugin Federation 
- A plugin which support Module Federation. Inspired by Webpack and compatible with Webpack Module Federation.
- https://github.com/originjs/vite-plugin-federation

### react-app (Configure the Module Federation and expose the Module)
    - pnpm add @originjs/vite-plugin-federation -D
    - Update vite.config.js
    - pnpm build & pnpm preview

### host (Configure the Module Federation and consume the Module)
    - pnpm add @originjs/vite-plugin-federation -D  
    - Update vite.config.js
    - pnpm dev

### vue-app 
    - pnpm create vite vue-app --template vue 
    - cd vue-app
    - pnpm i
    - open package.json
    - Set strict port to dev and preview  --port 5002 --strictPort
    - Replace the src with zip/src-vue-app
    - pnpm dev
    - pnpm add @originjs/vite-plugin-federation -D
    - Update vite.config.js
    - pnpm build & pnpm preview

### host (Configure the Module Federation and consume the Module)
    - pnpm add @originjs/vite-plugin-federation -D  
    - Update vite.config.js
    - pnpm dev