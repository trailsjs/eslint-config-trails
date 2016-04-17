module.exports = {
  'env': {
    'node': true
  },
  'rules': {
    'no-console': 2,
    // ESLint no longer supports disabling some still unsuported ES 2015 features, so we need to use
    // this rule to disable that syntax
    'no-restricted-syntax': [
      2,
      // Rest parameters (not to be confused with rest arguments)
      'RestElement',
      // Default function parameters
      'AssignmentPattern',
      // Destructuring assignment
      'ObjectPattern',
      // Experimental object/rest spread
      'ExperimentalRestProperty'
    ]
  }
};
