import { serverInit } from '@jill64/sentry-sveltekit-cloudflare'
import { ogpAttach, onRender } from '@jill64/svelte-suite'
import { sequence } from '@sveltejs/kit/hooks'

const { onHandle, onError } = serverInit(
  'https://54e9f3318af09e412ba479733f4d689d@o4505814639312896.ingest.sentry.io/4506320964943872'
)

export const handle = onHandle(sequence(onRender(), ogpAttach))
export const handleError = onError()
