import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")  // 确保路径是 src
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',           // 主页面入口
        editor2: 'public/three/editor/index.html'   // three.js Editor 页面入口
      }
    }
  }
})
