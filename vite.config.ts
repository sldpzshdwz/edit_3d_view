import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',           // 主页面入口
        editor2: 'public/three/editor/index.html'   // three.js Editor 页面入口
      }
    }
  }
})
