module.exports = {
  extends: require.resolve('./'),

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
}
