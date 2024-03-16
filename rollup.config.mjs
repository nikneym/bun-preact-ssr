import babel from "@rollup/plugin-babel";
import alias from "@rollup/plugin-alias";
//import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: "renderer.jsx",
    output: {
      dir: "bundle",
      format: "es",
    },
    plugins: [
      //typescript(),
      babel({ babelHelpers: "bundled" }),
      alias({
        entries: [
          { find: "react", replacement: "preact/compat" },
          { find: "react-dom/test-utils", replacement: "preact/test-utils" },
          { find: "react-dom", replacement: "preact/compat" },
          { find: "react/jsx-runtime", replacement: "preact/jsx-runtime" },
        ],
      }),
      nodeResolve(),
    ],
    //external: ["preact", "preact/hooks", "preact-render-to-string"],
  },
  {
    input: "index.jsx",
    output: {
      dir: "bundle",
      format: "es",
    },
    plugins: [
      //typescript(),
      babel({ babelHelpers: "bundled" }),
      alias({
        entries: [
          { find: "react", replacement: "preact/compat" },
          { find: "react-dom/test-utils", replacement: "preact/test-utils" },
          { find: "react-dom", replacement: "preact/compat" },
          { find: "react/jsx-runtime", replacement: "preact/jsx-runtime" },
        ],
      }),
      //nodeResolve(),
    ],
    external: ["preact", "preact/hooks", "preact-render-to-string"],
  },
];
