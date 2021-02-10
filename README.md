# vite-plugin-stylelint (🚧 WIP)

[![npm (scoped)](https://img.shields.io/npm/v/@amatlash/vite-plugin-stylelint)](https://www.npmjs.com/package/@amatlash/vite-plugin-stylelint)

Vite 2 plugin that works with the dev server.

## Install

```
npm install @amatlash/vite-plugin-stylelint --save-dev
# or
yarn add @amatlash/vite-plugin-stylelint --dev
```

## Usage

```js
import { defineConfig } from 'vite';
import viteStylelint from '@amatlash/vite-plugin-stylelint';

export default defineConfig({
  plugins: [viteStylelint()],
});
```

## License

MIT
