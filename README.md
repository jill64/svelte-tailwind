<!----- BEGIN GHOST DOCS HEADER ----->

# @jill64/svelte-tailwind


<!----- BEGIN GHOST DOCS BADGES ----->
<a href="https://npmjs.com/package/@jill64/svelte-tailwind"><img src="https://img.shields.io/npm/v/@jill64/svelte-tailwind" alt="npm-version" /></a> <a href="https://npmjs.com/package/@jill64/svelte-tailwind"><img src="https://img.shields.io/npm/l/@jill64/svelte-tailwind" alt="npm-license" /></a> <a href="https://npmjs.com/package/@jill64/svelte-tailwind"><img src="https://img.shields.io/npm/dm/@jill64/svelte-tailwind" alt="npm-download-month" /></a> <a href="https://npmjs.com/package/@jill64/svelte-tailwind"><img src="https://img.shields.io/bundlephobia/min/@jill64/svelte-tailwind" alt="npm-min-size" /></a> <a href="https://github.com/jill64/svelte-tailwind/actions/workflows/ci.yml"><img src="https://github.com/jill64/svelte-tailwind/actions/workflows/ci.yml/badge.svg" alt="ci.yml" /></a>
<!----- END GHOST DOCS BADGES ----->


🌀 Simplified TailwindCSS Configuration for Svelte

<!----- END GHOST DOCS HEADER ----->

## Installation

```sh
npm i @jill64/svelte-tailwind
```

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

<!----- BEGIN GHOST DOCS FOOTER ----->

## License

MIT

<!----- END GHOST DOCS FOOTER ----->
