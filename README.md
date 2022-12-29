<h1 align="center">vite-plugin-nologdebugger</h1>
<p align="center">生产环境删除所有console.log和debugger的vite插件</p>

<p align="center">
<a href="https://www.npmjs.com/package/vite-plugin-nologdebugger" target="__blank"><img src="https://img.shields.io/npm/v/vite-plugin-nologdebugger?color=a1b858&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/vite-plugin-nologdebugger" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/vite-plugin-nologdebugger?color=50a36f&label="></a>
</p>

## 特性

- 精准又完整剔除代码中的`console.log、debugger`，目前支持剔除文件格式`.js`、`.ts`、`.jsx`、`.tsx`、`.vue`、`.svelte`
- 支持配置移除log，例如`removeConsole({exclude: ["error", "warn"]})`，当然如果传空默认就是这样

## 安装

```bash
npm install vite-plugin-nologdebugger -D
or 
pnpm add vite-plugin-nologdebugger -D
or
yarn add vite-plugin-nologdebugger -D
```

## 用法

- vite.config.ts

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import removeConsole from 'vite-plugin-nologdebugger';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    removeConsole()
  ]
});
```

## 许可证

[MIT © Mobai](./LICENSE)
