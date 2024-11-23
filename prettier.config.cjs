/* eslint-env node */

/** @type {import("prettier").Config} */
const config = {
  plugins: [],
};

if (hasPkg("@trivago/prettier-plugin-sort-imports")) {
  const sortImportPlugin = require("@trivago/prettier-plugin-sort-imports");

  config.plugins.push(sortImportPlugin);

  config.importOrder = [
    "server-only",
    "^node:",
    "<THIRD_PARTY_MODULES>",
    "^~",
    "^[./]",
    ".css$",
  ];
}

module.exports = config;
