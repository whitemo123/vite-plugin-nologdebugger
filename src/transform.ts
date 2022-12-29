import { transformSync } from "@babel/core";
import myBabelPlugin from "babel-plugin-transform-remove-console";
import transformRemoveDebugger from "babel-plugin-transform-remove-debugger";
import {Options} from "./types";

const baseBabel = (options: Partial<Options>) => {
  const babelConfig = {
    plugins: [
      [myBabelPlugin, options],
      transformRemoveDebugger,
    ],
  };
  return (code: any) => {
    const output = transformSync(code, babelConfig);
    return output?.code;
  };
};

export { baseBabel };
