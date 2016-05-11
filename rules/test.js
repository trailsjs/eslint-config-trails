module.exports = {
  'env': {
    'mocha': true,
    'jest': true
  },
  rules: {
    'no-console': 0,
    'max-len': [1, 160, 2, { 'ignoreComments': true, 'ignoreUrls': true, 'tabWidth': 2 }],
    'no-unused-vars': [1, {'vars': 'local', 'args': 'none'}]
  }
};

