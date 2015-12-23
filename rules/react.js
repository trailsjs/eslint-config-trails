module.exports = {
  'plugins': ['react'],
  'ecmaFeatures': {
    'jsx': true
  },
  'rules': {
    // Enforce boolean attributes notation in JSX
    'react/jsx-boolean-value': 2,
    // Disallow undeclared variables in JSX
    'react/jsx-no-undef': 2,
    // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-react': 2,
    // Prevent variables used in JSX to be incorrectly marked as unused
    'react/jsx-uses-vars': 2,
    // Prevent usage of setState in componentDidMount
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    // Prevent usage of setState in componentDidUpdate
    'react/no-did-update-set-state': 2,
    // Prevent usage of unknown DOM property
    'react/no-unknown-property': 2,
    // Prevent missing props validation in a React component definition
    'react/prop-types': 2,
    // Prevent missing React when using JSX
    'react/react-in-jsx-scope': 2,
    // Prevent missing parentheses around multilines JSX
    'react/wrap-multilines': 2,
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': 2
  }
};
