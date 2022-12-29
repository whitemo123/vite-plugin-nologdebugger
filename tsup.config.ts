/**
 * @name: tsup.config
 * @author: itmobai
 * @date: 2022-12-29 14:14
 * @description：tsup.config
 * @update: 2022-12-29 14:14
 */
import { defineConfig } from "tsup"
export default defineConfig({
  // 入口文件
  entry: ["src/index.ts"],
  // 压缩
  minify: true,
  // 打包后文件
  outDir: "dist",
  // 打包后格式文件
  format: ["esm", "cjs"],
  // 输出类型文件
  dts: true,
  // 打包清除文件
  clean: true,
  treeshake: true
})
