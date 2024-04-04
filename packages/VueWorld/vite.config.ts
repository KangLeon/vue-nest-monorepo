/*
 * @Author: JY 397879704@qq.com
 * @Date: 2024-04-03 02:13:40
 * @LastEditors: JY 397879704@qq.com
 * @LastEditTime: 2024-04-03 14:12:15
 * @FilePath: /project/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { vitePluginForArco } from '@arco-plugins/vite-vue'
import postcss from 'postcss'

function pathResolve(dir:string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginForArco({
      style: 'css'
    })],
  resolve: {
    alias: {
      '@': pathResolve('src'),
    }
  },
  server: {
    port: 4000,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
      }
    }
  },
  css: {
    
  }
})
