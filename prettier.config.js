/* eslint-env node */

module.exports = {
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("@trivago/prettier-plugin-sort-imports"),
  ],
  importOrder: ["server-only", "<THIRD_PARTY_MODULES>", "^~", "^[./]", ".css$"],
};
