# eslint-config-trails
:shipit: Trails ESLint Configuration

The [sharable ESLint config](http://eslint.org/docs/developer-guide/shareable-configs.html) used in the trails.js projects.

## Usage

### Default

The default ESLint configuration lints for ES6.

Install the default configuration package and `eslint` dependency:

```
npm install --save-dev eslint-config-trails eslint
```

Add the config to a `.eslintrc` file or the `eslintConfig` object in `package.json` using the ESLint `extends` attribute:

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

Add the config to a `.eslintrc` file or the `eslintConfig` object in `package.json` using the ESLint `extends` attribute:

```json
{
  "extends": "trails/react"
}
```

## License
[MIT](https://github.com/trailsjs/eslint-config-trails/blob/master/LICENSE)
