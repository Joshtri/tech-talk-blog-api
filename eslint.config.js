import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      ecmaVersion: "latest", // Gunakan versi ECMAScript terbaru
      sourceType: "module", // Gunakan ESModules
      globals: {
        ...globals.node, // Tambahkan globals untuk lingkungan Node.js
      },
    },
  },
  pluginJs.configs.recommended, // Konfigurasi rekomendasi dasar ESLint
  {
    rules: {
      "no-unused-vars": ["warn", { args: "none" }], // Peringatan untuk variabel yang tidak digunakan
      "no-undef": "error", // Error untuk variabel yang tidak didefinisikan
      "prefer-const": "warn", // Sarankan penggunaan const jika memungkinkan
      "no-console": "off", // Izinkan penggunaan console.log di backend
      "eqeqeq": ["error", "always"], // Wajib menggunakan === dan !==
      "semi": ["error", "always"], // Wajib menggunakan titik koma
      "quotes": ["error", "double"], // Gunakan tanda petik ganda
    },
  },
];
