import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import setting from './src/core/setting'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { createHtmlPlugin } from 'vite-plugin-html'

import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ElementPlus(),
    AutoImport({
      imports: ['vue', 'pinia', 'vue-router'],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      },
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title: setting.title
        }
      }
    })
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './'),
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs']
  }
})
