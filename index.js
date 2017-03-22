module.exports = {
  extends: require.resolve('./rules/style'),

  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 8
  },
  globals: {
    // error types
    ConfigNotDefinedError: true,
    LoggerNotDefinedError: true,
    ApiNotDefinedError: true,
    ConfigValueError: true,
    PackageNotDefinedError: true,
    IllegalAccessError: true,
    TimeoutError: true,
    GraphCompletenessError: true,
    NamespaceConflictError: true,
    ValidationError: true,
    TrailpackError: true,

    // trails types
    Service: true,
    Controller: true,
    Policy: true,
    Model: true
  },
  rules: {
    'no-console': 2,

    'no-global-assign': 2,

    // disallow modifying variables that are declared using const
    'no-const-assign': 2,

    // require let or const instead of var
    'no-var': 2,

    // suggest using of const declaration for variables that are never modified after declared
    'prefer-const': 1,

    // trails exposes process.env as trails.env
    'no-process-env': 2
  }
}
