/**
 * @name: index
 * @author: itmobai
 * @date: 2022-12-29 14:16
 * @description：index
 * @update: 2022-12-29 14:16
 */
import {PluginOption} from "vite";
import {baseBabel} from "./transform";
import {Options} from "./types";

const buildRemove = (options: Partial<Options> = {}): PluginOption => {
  if (!options || !options.exclude) {
    options = {exclude: ["error", "warn"]}
  }
  const babelConsoleName = baseBabel(options);

  return {
    name: "vite:remove-log-debugger",
    apply: "build",
    enforce: "post",
    transform(_source: string, id: string) {
      if (/node_modules/.test(id))
        return {
          code: _source,
          map: null
        };
      let reg = /\.(svelte|js|ts|vue|jsx|tsx)$/.test(id);
      if (reg) {
        return babelConsoleName(_source)
      }
      return {
        code: _source,
        map: null
      }
    }
  }
}

export default buildRemove
