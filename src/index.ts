import {baseBabel} from "./babel.js";
import type {PluginOption} from "vite";
import { Options } from "./types"

const apply: "build" = "build";
export default function removeConsole(
  options: Partial<Options> = {}
): PluginOption {
  const babelConsoleName = baseBabel(options);

  return {
    name: "vite:nologdebugger",
    apply,
    transform(_source: string, id: string) {
      if (/\.(svelte|js|ts|vue)$/.test(id)) {
        return babelConsoleName(_source);
      }
    },
  };
};
