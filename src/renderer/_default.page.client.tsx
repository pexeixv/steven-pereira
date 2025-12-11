export { render }

import { hydrateRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import type { PageContextClient } from './types'

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  hydrateRoot(
    document.getElementById('root')!,
    <HelmetProvider>
      <Page {...pageProps} />
    </HelmetProvider>
  )
}
