import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,js,ts,jsx,tsx}'],
    exclude: ['dist', 'node_modules']
  }
})
