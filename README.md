# @axross/prettier-config

A hand-picked configuration set for [Prettier](https://prettier.io/).

[![npm version](https://badge.fury.io/js/@axross%2Fprettier-config.svg)](https://badge.fury.io/js/@axross%2Fprettier-config) [![license](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](LICENSE)

## Installation

Install this as a NPM package:

```sh
npm i -D prettier @axross/prettier-config
```

And use this Prettier config with the following `prettier.config.js`:

```javascript
/* eslint-env node */

module.exports = "@axross/prettier-config";
```

This Prettier config includes the following plugins as dependencies:

- `@trivago/prettier-plugin-sort-imports`
- `prettier-plugin-tailwindcss`

## License

[MIT](/LICENSE)
