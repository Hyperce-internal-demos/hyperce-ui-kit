import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { uglify } from "rollup-plugin-uglify";
import babel from '@rollup/plugin-babel';

export default {
  input: "./src/stories/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "es",
    },
  ],
  plugins: [
    commonjs(),
    resolve(),
    uglify(),
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
      babelHelpers: "bundled",
    }),
    postcss({
      extensions: ['.css']
    }),
  ],
};
