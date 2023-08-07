/* eslint-env node */
import sortImportPlugin from "@trivago/prettier-plugin-sort-imports";

export default {
  plugins: [sortImportPlugin],
  importOrder: ["server-only", "<THIRD_PARTY_MODULES>", "^~", "^[./]", ".css$"],
};
