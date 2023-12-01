<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-tailwind

[![npm-version](https://img.shields.io/npm/v/@jill64/svelte-tailwind)](https://npmjs.com/package/@jill64/svelte-tailwind) [![npm-license](https://img.shields.io/npm/l/@jill64/svelte-tailwind)](https://npmjs.com/package/@jill64/svelte-tailwind) [![npm-download-month](https://img.shields.io/npm/dm/@jill64/svelte-tailwind)](https://npmjs.com/package/@jill64/svelte-tailwind) [![npm-min-size](https://img.shields.io/bundlephobia/min/@jill64/svelte-tailwind)](https://npmjs.com/package/@jill64/svelte-tailwind) [![ci.yml](https://github.com/jill64/svelte-tailwind/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-tailwind/actions/workflows/ci.yml)

🌀 Simplified TailwindCSS Configuration for Svelte

## Installation

```sh
npm i @jill64/svelte-tailwind
```

<!----- END GHOST DOCS HEADER ----->

## Usage

postcss.config.js

```js
import { postcssConfig } from '@jill64/svelte-tailwind'

/** @type {import('@jill64/svelte-tailwind').PostcssConfig} */
export default postcssConfig({
  // ...
})
```

tailwind.config.js

```js
import { tailwindConfig } from '@jill64/svelte-tailwind'

/** @type {import('@jill64/svelte-tailwind').TailwindConfig} */
export default tailwindConfig({
  // ...
})
```
