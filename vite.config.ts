import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'
import { resolve } from 'path' // +++
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // +++
    alias: {
      '@': resolve(__dirname, './src') // +++
    } // +++
  },
  server: {
    cors: true, // 默认启用并允许任何源
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
    proxy: {
      '/api': {
        // target: 'https://client.doubilm.com',   //代理接口
        target: 'http://116.62.204.86:7614/',
        // target: 'http://121.43.145.130:80/',

        changeOrigin: true
      }
    }
  }
})
