# eslint-config-trails
:shipit: Trails ESLint Configuration

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]

The [sharable ESLint config](http://eslint.org/docs/developer-guide/shareable-configs.html) used in the trails.js projects.

## Usage

### Default

The default ESLint configuration lints for ES6.

Install the default configuration package and `eslint` dependency:

```
npm install --save-dev eslint-config-trails eslint
```

Add the config to a `.eslintrc.json` file or the `eslintConfig` object in `package.json` using the ESLint `extends` attribute:

```json
{
  "extends": "trails"
}
```

### React.js

The React.js eslint configuration lints for both ES6 and React.js.

Install the React.js configuration package and `eslint` dependency:

```
npm install --save-dev eslint-config-trails eslint-plugin-react eslint
```

Add the config to a `.eslintrc.json` file or the `eslintConfig` object in `package.json` using the ESLint `extends` attribute:

```json
{
  "extends": "trails/react"
}
```

### Testing

A module for test-specific rules is available.

Add the config to a `.eslintrc.json` file or the `eslintConfig` object in `package.json` using the ESLint `extends` attribute:

```json
{
  "extends": "trails/test"
}
```

## License
[MIT](https://github.com/trailsjs/eslint-config-trails/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/eslint-config-trails.svg?style=flat-square
[npm-url]: https://npmjs.org/package/eslint-config-trails
[ci-image]: https://img.shields.io/travis/trailsjs/eslint-config-trails/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/trailsjs/eslint-config-trails
[daviddm-image]: http://img.shields.io/david/trailsjs/eslint-config-trails.svg?style=flat-square
[daviddm-url]: https://david-dm.org/trailsjs/eslint-config-trails
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails
