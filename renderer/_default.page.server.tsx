export { render }
export { passToClient }

import ReactDOMServer from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from '../src/App'
import '../src/index.css'

const passToClient = ['pageContext', 'documentProps', 'helmet']

interface HelmetContext {
  helmet: {
    title: { toString: () => string }
    meta: { toString: () => string }
    link: { toString: () => string }
    script: { toString: () => string }
  }
}

async function render(pageContext: { urlPathname: string }) {
  const { urlPathname } = pageContext
  const helmetContext: HelmetContext = {} as HelmetContext

  const appHtml = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <MemoryRouter initialEntries={[urlPathname]}>
        <App />
      </MemoryRouter>
    </HelmetProvider>
  )

  const { helmet } = helmetContext

  const documentHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ${helmet.title.toString()}
  ${helmet.meta.toString()}
  ${helmet.link.toString()}
  ${helmet.script.toString()}
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
</head>
<body>
  <div id="root">${appHtml}</div>
</body>
</html>`

  return {
    documentHtml,
    pageContext: {
      documentProps: {
        title: helmet.title.toString(),
      },
    },
  }
}
