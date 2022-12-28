import { baseBabel } from "./babel.js";

const apply: "build" = "build";
const removeConsole = () => {
  const babelConsoleName = baseBabel();

  return {
    name: "svelte-remove-console",
    apply,
    transform(_source: string, id: string) {
      if (/\.(svelte|js|ts|vue)$/.test(id)) {
        return babelConsoleName(_source);
      }
    },
  };
};

export default removeConsole;
