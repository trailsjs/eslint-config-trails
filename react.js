module.exports = {
  extends: [
    'eslint-config-trails/index',
    'eslint-config-trails/rules/react'
  ],
  rules: { },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};
