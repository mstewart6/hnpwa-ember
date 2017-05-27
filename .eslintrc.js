module.exports = {
  root: true,
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    'ecmaVersion': 2017,
    'sourceType': 'module'
  },
  globals: {
    '_': true,
    'server': true
  },
  'rules': {
    'no-unused-vars': [ 'error', { 'argsIgnorePattern': '^_' } ]
  }
};
