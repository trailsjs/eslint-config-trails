module.exports = {
  'env': {
    'es6': true
  },
  'ecmaFeatures': {
    'arrowFunctions': true,
    'blockBindings': true,
    'classes': true,
    'defaultParams': true,
    'destructuring': true,
    'forOf': true,
    'generators': false,
    'modules': true,
    'objectLiteralComputedProperties': true,
    'objectLiteralDuplicateProperties': false,
    'objectLiteralShorthandMethods': true,
    'objectLiteralShorthandProperties': true,
    'restParams': true,
    'spread': true,
    'superInFunctions': true,
    'templateStrings': true,
    'jsx': true
  },
  'rules': {
    // disallow modifying variables that are declared using const
    'no-const-assign': 2,
    // require let or const instead of var
    'no-var': 2,
    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': 1
  }
};
