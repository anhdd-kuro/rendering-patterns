module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  extends: ["next/core-web-vitals", "prettier", "plugin:@typescript-eslint/recommended"],
  rules: {
    "prettier/prettier": "error",
  },
};
