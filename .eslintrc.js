module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "import"],
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "import/no-anonymous-default-export": "off",
  },
};
