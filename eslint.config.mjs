// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
// ↓ ここを require から import に変更！
import pluginUnusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 既存の extend 設定
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),

  // unused-imports プラグイン＋ルールの追加
  {
    plugins: {
      // 名前をキーに、import したオブジェクトを渡す
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      // 未使用 import を自動削除
      "unused-imports/no-unused-imports": "error",
      // 未使用変数を警告
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
];

export default eslintConfig;
