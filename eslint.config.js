import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "@typescript-eslint/eslint-plugin";
import tseslintType from "typescript-eslint";

export default [
  {
    ignores: [
      ".nuxt/**/*",
      "types/devextreme-vue.d.ts",
      "**/*.d.ts",
      "nuxt.config.ts",
      "server-config/**/*",
    ],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslintType.parser,
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2020,
        sourceType: "module",
      },
    },
    plugins: {
      vue,
      "unused-imports": unusedImports,
      "@typescript-eslint": tseslint,
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/block-order": [
        "error",
        {
          order: [["script", "template"], "style"],
        },
      ],
      "vue/block-lang": [
        "error",
        {
          script: { lang: "ts" },
        },
      ],
      "vue/define-props-declaration": ["error", "type-based"],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-unused-vars": ["error"],
      "@typescript-eslint/no-explicit-any": "error",
      "no-console": "error",
    },
  },
];
