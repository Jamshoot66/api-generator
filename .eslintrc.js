module.exports = {
  root: true,
  parserOptions: {
    project: "./tsconfig.json",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "airbnb-typescript/base",
    "prettier/@typescript-eslint",
    "prettier",
  ],
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    "@typescript-eslint/no-var-requires": "off",
  },
};
