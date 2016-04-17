module.exports = {
  'env': {
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 6
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
