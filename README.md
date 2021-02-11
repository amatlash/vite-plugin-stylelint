# vite-plugin-stylelint

[![npm (scoped)](https://img.shields.io/npm/v/@amatlash/vite-plugin-stylelint)](https://www.npmjs.com/package/@amatlash/vite-plugin-stylelint)

Vite 2 plugin for [stylelint](https://github.com/stylelint/stylelint) that works with the dev server.

By default displays warnings and errors to the terminal`s console.

## Install

```
npm install @amatlash/vite-plugin-stylelint --save-dev
```

## Usage

```js
import { defineConfig } from 'vite';
import viteStylelint from '@amatlash/vite-plugin-stylelint';

export default defineConfig({
  plugins: [viteStylelint()],
});
```

## Configure

To configure linting options check out the official [stylelint docs](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/configure.md).

## License

MIT
