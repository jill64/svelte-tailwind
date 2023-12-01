<!----- BEGIN GHOST DOCS HEADER ----->

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
