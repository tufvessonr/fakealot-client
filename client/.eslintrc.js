// .eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  plugins: ['simple-import-sort'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',

    // Prettier plugin and recommended rules
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Include .prettierrc.js rules
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],

    'react/prop-types': 'off',

    'simple-import-sort/sort': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/interface-name-prefix': ['warn', 'always'],
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    amd: true,
  },
  overrides: [
    {
      files: ['**/*.js', '**/*styles.ts'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
