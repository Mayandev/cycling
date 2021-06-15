// https://github.com/gatsbyjs/gatsby/blob/master/.eslintrc.js
// .eslintrc.js
module.exports = {
  parser: 'babel-eslint',
  extends: [
    'google',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'filenames'],
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  globals: {
    before: true,
    after: true,
    spyOn: true,
    __PATH_PREFIX__: true,
    __BASE_PATH__: true,
    __ASSET_PREFIX__: true,
  },
  rules: {
    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: true },
    ],
    'no-unused-expressions': [
      'error',
      {
        allowTaggedTemplates: true,
      },
    ],
    'consistent-return': ['error'],
    'filenames/match-regex': ['error', '^[a-z-\\d\\.]+$', true],
    'no-console': 'off',
    'no-inner-declarations': 'off',
    'react/display-name': 'off',
    'react/jsx-key': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'require-jsdoc': 'off',
    'valid-jsdoc': 'off',
  },
  settings: {
    react: {
      version: '16.4.2',
    },
  },
};
