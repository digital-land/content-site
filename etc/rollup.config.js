const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
import replace from "@rollup/plugin-replace";

module.exports = [
  {
    input: "app/_javascripts/application.js",
    output: {
      file: "public/javascripts/application.js",
      format: "iife",
    },
    plugins: [nodeResolve(), commonjs()],
  },
  {
    input: "node_modules/govuk-frontend/govuk/all.js",
    output: {
      file: "public/javascripts/govuk-frontend.js",
    },
    context: "window",
  },
  {
    input: "app/_javascripts/cms.js",
    output: {
      file: "public/javascripts/cms.js",
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      replace({
        // this is used to set the NetlifyCMS "local_backend" configuration option at build.
        "process.env.NODE_ENV": process.env.NODE_ENV !== "production",
      }),
    ],
  },
];
