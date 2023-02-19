// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:vue/vue3-recommended',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaVersion: 'latest'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'import/no-unresolved': [0],
    'prettier/prettier': 'error',
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  }
})
