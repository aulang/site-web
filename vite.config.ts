import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import setting from './src/core/setting'
import { createHtmlPlugin } from 'vite-plugin-html'
import AutoImport from 'unplugin-auto-import/vite'

import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'pinia', 'vue-router'],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    Components({
      resolvers: [NaiveUiResolver()]
    }),
    createHtmlPlugin({
      inject: {
        data: {
          title: setting.title
        }
      }
    })
  ]
})
