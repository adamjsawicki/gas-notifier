module.exports = {
  env: {
    node: true,
    es6: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'import/no-unresolved': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/comma-dangle': 0,
    '@typescript-eslint/no-explicit-any': 0,
    radix: 0,
  },
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
};
