import { transformSync } from "@babel/core";
import myBabelPlugin from "babel-plugin-transform-remove-console";
import transformRemoveDebugger from "babel-plugin-transform-remove-debugger";

const baseBabel = (name: string) => {
  const babelConfig = {
    plugins: [
      [myBabelPlugin, { exclude: ["error", "warn"] }],
      transformRemoveDebugger,
    ],
  };
  return (code: any) => {
    const output = transformSync(code, babelConfig);
    return output?.code;
  };
};

export { baseBabel };
