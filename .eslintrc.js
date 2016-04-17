'use strict'

module.exports = {
  env: {
    node: true
  },
  // This config is linting itself according to the recommended rules since we are
  // unable to extends from a module inside of the .eslintrc file
  // Also avoids committing node_modules with a link to the modules
  // Ideal test would allow it to lint itself using its own rules
  extends: 'eslint:recommended'
}
