/* eslint-env node */
const sortImportPlugin = require("@trivago/prettier-plugin-sort-imports");

module.exports = {
  plugins: [sortImportPlugin],
  importOrder: [
    "server-only",
    "^node:",
    "<THIRD_PARTY_MODULES>",
    "^~",
    "^[./]",
    ".css$",
  ],
};
