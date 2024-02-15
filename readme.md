mkdir vit-mfe

host
    > pnpm create vite host --template react 
    > cd host
    > Open package.json
    > Set strict port to dev and preview  --port 5000 --strictPort
    > Replace the src with src-host-app
    > pnpm dev

react-app 
    > pnpm create vite react-app --template react 
    > cd react-app
    > pnpm i
    > open package.json
    > Set strict port to dev and preview  --port 5001 --strictPort
    > Replace the src with src-react-app
    > pnpm dev

ModuleFederation
> https://webpack.js.org/concepts/module-federation/


Vite
    > Vite Next Generation Frontend Tooling
Vite Plugin Federation 
    > A Vite/Rollup plugin which support Module Federation. Inspired by Webpack and compatible with Webpack Module Federation.
    > https://github.com/originjs/vite-plugin-federation

react-app 
    > pnpm add @originjs/vite-plugin-federation -D
    > Update vite.config.js
    > pnpm build & pnpm preview

host
    > pnpm add @originjs/vite-plugin-federation -D  
    > Update vite.config.js
    > pnpm dev

vue-app
    > pnpm create vite vue-app --template vue 
    > cd vue-app
    > pnpm i
    > open package.json
    > Set strict port to dev and preview  --port 5002 --strictPort
    > Replace the src with vue-app
    > pnpm dev
    > pnpm add @originjs/vite-plugin-federation -D
    > Update vite.config.js
    > pnpm build & pnpm preview

host
    > pnpm add @originjs/vite-plugin-federation -D  
    > Update vite.config.js
    > pnpm dev


> Internal  

https://www.youtube.com/watch?v=t-nchkL9yIg
https://github.com/jherr/vite-mod-fed/blob/main/host/vite.config.js