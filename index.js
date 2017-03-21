module.exports = {
  extends: [
    'eslint-config-trails/rules/node',
    'eslint-config-trails/rules/style'
  ],
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
  }
}
