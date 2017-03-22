module.exports = {
  extends: require.resolve('./'),

  env: {
    mocha: true,
    jest: true
  },
  rules: {
    'no-console': 0,
    'no-process-env': 0,
    'max-len': [1, 160, 2, { 'ignoreComments': true, 'ignoreUrls': true, 'tabWidth': 2 }],
    'no-unused-vars': [1, {'vars': 'local', 'args': 'none'}]
  }
}
