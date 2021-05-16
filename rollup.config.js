import babel from "rollup-plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import visualizer from "rollup-plugin-visualizer";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

const config = {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "esm",
    },
  ],
  plugins: [
    external(),
    postcss(),
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
    typescript({
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
        },
        exclude: ["src/setupTests.ts"],
      },
    }),
    image(),
    visualizer(),
  ],
};

export default config;
