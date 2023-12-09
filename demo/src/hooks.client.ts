import { init } from '@jill64/sentry-sveltekit-cloudflare/client'
import { toast } from '@jill64/svelte-suite'
import { get } from 'svelte/store'

const onError = init(
  'https://54e9f3318af09e412ba479733f4d689d@o4505814639312896.ingest.sentry.io/4506320964943872'
)

export const handleError = onError()
