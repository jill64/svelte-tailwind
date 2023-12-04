import gridAuto from '@jill64/tailwind-grid-auto'
import reactions from '@jill64/tailwind-reactions'
import type { Config } from 'tailwindcss'

export const tailwindConfig = (config?: Partial<Config>): Config => ({
  content: ['src/**/*.{html,js,svelte,ts}'],
  plugins: [gridAuto, reactions],
  darkMode: 'class',
  ...config
})
