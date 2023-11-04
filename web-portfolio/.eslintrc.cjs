module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:standar',
    'plugin:react/standar',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/standar',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
