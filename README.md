### 开发依赖说明

1. eslint-define-config
   给 .eslintrc.js 文件提供一个 defineConfig 函数，提供配置自动提示和检查功能
2. eslint-plugin-import
   提供 .eslintrc.js 的 import 和 export 的检查规则
3. eslint-config-prettier
   关闭所有不必要或可能与 prettier 冲突的规则，确保 .eslintrc.js 文件 extends 属性的最后面
4. eslint-plugin-prettier
   将 prettier 作为 eslint 的规则运行，将结果报告为 ESLint 问题，'prettier/prettier': 'error'
5. prettier-eslint
   将 prettier 格式化代码的结果传递给 eslint--fix，完美结合 prettier 格式化功能和 eslint 的配置功能
6. vite-plugin-html
   html 处理，往 html 里注入变量
7. unplugin-auto-import
   按需自动导入 API
8. unplugin-vue-components
   按需自动导入 UI 组件
