module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "import", "jest-dom", "testing-library"],
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:storybook/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest-dom/recommended",
    "plugin:testing-library/react",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "prettier/prettier": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "import/no-anonymous-default-export": "off",
    "testing-library/no-render-in-setup": [
      "error",
      { allowTestingFrameworkSetupHook: "beforeEach" },
    ],
  },
};
