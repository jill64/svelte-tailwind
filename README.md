<!----- BEGIN GHOST DOCS HEADER ----->

# svelte-tailwind

[![ci.yml](https://github.com/jill64/svelte-tailwind/actions/workflows/ci.yml/badge.svg)](https://github.com/jill64/svelte-tailwind/actions/workflows/ci.yml)

🌀 Simplified TailwindCSS Configuration for Svelte

## Installation

```sh
npm i @jill64/svelte-tailwind
```

<!----- END GHOST DOCS HEADER ----->

## Usage

postcss.config.js

```js
import { postcssConfig } from '../dist/index.js'

/** @type {import('../dist/index.js').PostcssConfig} */
export default postcssConfig({
  // ...
})
```

tailwind.config.js

```js
import { tailwindConfig } from '@jill64/svelte-tailwind'

/** @type {import('../dist/index.js').TailwindConfig} */
export default tailwindConfig({
  // ...
})
```
