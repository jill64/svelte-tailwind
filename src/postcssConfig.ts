import autoprefixer from 'autoprefixer'
import type { Config } from 'postcss-load-config'
import tailwindcss from 'tailwindcss'
import tailwindNesting from 'tailwindcss/nesting/index.js'

export const postcssConfig = (config?: Config): Config => ({
  plugins: [tailwindNesting(), tailwindcss(), autoprefixer()],
  ...config
})
