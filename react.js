module.exports = {
  extends: [
    'eslint-config-trails/index',
    'eslint-config-trails/rules/react'
  ],
  rules: {
    'no-console': 1,
    'no-global-assign': 1
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
};
