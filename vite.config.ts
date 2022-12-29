import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'
import { resolve } from 'path' // +++
import vueJsx from '@vitejs/plugin-vue-jsx'
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return defineConfig({
    plugins: [vue(), vueJsx()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/variable.scss";'
        }
      }
    },

    resolve: {
      // +++
      alias: {
        '@': resolve(__dirname, './src') // +++
      } // +++
    },

    server: {
      port: 5718,
      cors: true, // 默认启用并允许任何源
      open: true, // 在服务器启动时自动在浏览器中打开应用程序
      hmr: true,
      //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
      proxy: {
        '/common': {
          // target: 'https://client.doubilm.com',   //代理接口
          // target: 'http://116.62.204.86:7614/',
          // target: 'http://121.43.145.130:80/',
          target: 'http://152.32.131.147:8088/',
          changeOrigin: true
        },
        '/watch': {
          target: 'http://152.32.131.147:8088/',
          changeOrigin: true
        }
      }
    }
    // base: env.VITE_BASE_URL || '/'
  })
}
