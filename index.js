module.exports = {
  extends: [
    'eslint-config-trails/rules/recommended',
    'eslint-config-trails/rules/node',
    'eslint-config-trails/rules/style',
    'eslint-config-trails/rules/es6'
  ],
  rules: {

  },
  globals: {
    ConfigNotDefinedError: true,
    LoggerNotDefinedError: true,
    ApiNotDefinedError: true,
    ConfigValueError: true,
    PackageNotDefinedError: true,
    IllegalAccessError: true,
    TimeoutError: true,
    GraphCompletenessError: true
  }
};
