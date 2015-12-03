module.exports = {
  'extends': 'eslint:recommended',
  // overrides
  'rules': {
    // require or disallow use of semicolons instead of ASI
    'semi': 0,
    'new-cap': [0, {
      'capIsNew': true
    }]
  }
}
