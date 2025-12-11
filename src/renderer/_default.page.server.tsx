export { render }
export { passToClient }

import { renderToString } from 'react-dom/server'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import { HelmetProvider } from 'react-helmet-async'
import type { PageContextServer } from './types'

const passToClient = ['pageProps', 'urlPathname', 'documentProps']

interface HelmetData {
  title: { toString: () => string }
  meta: { toString: () => string }
  link: { toString: () => string }
}

interface HelmetContext {
  helmet?: HelmetData
}

async function render(pageContext: PageContextServer) {
  const { Page, pageProps } = pageContext
  const helmetContext: HelmetContext = {}

  const pageHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <Page {...pageProps} />
    </HelmetProvider>
  )

  // Get helmet data after rendering
  const { helmet } = helmetContext

  const documentProps = pageContext.documentProps || {}
  const title = documentProps.title || 'Steven Pereira'
  const description =
    documentProps.description ||
    'Steven Pereira - Music Producer and Audio Engineer'

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${helmet ? dangerouslySkipEscape(helmet.title.toString()) : `<title>${title}</title>`}
        ${helmet ? dangerouslySkipEscape(helmet.meta.toString()) : `<meta name="description" content="${description}" />`}
        ${helmet ? dangerouslySkipEscape(helmet.link.toString()) : ''}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
      </head>
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    },
  }
}
