/* eslint-env node */

module.exports = {
  plugins: [require("@trivago/prettier-plugin-sort-imports")],
  importOrder: ["server-only", "<THIRD_PARTY_MODULES>", "^~", "^[./]", ".css$"],
};
