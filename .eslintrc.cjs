module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
<<<<<<< HEAD
    'react-refresh/only-export-components': ['warn', {
      allowConstantExport: true
    }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  }
=======
    "react-refresh/only-export-components": [
      "warn",
      {
        allowConstantExport: true,
      },
    ],
  },
>>>>>>> c394f6d (feat: render type-safe raw implement of Seatmap)
};
