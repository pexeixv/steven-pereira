import express from 'express'
import { renderPage } from 'vite-plugin-ssr/server'
import { createServer as createViteServer } from 'vite'

const isProduction = process.env.NODE_ENV === 'production'
const root = process.cwd()

startServer()

async function startServer() {
  const app = express()

  let viteDevMiddleware
  if (isProduction) {
    // Production: serve static files from dist/client
    app.use(express.static(`${root}/dist/client`))
  } else {
    // Development: use Vite's dev server with middleware mode
    const viteDevServer = await createViteServer({
      root,
      server: { middlewareMode: true },
    })
    app.use(viteDevServer.middlewares)
    viteDevMiddleware = viteDevServer
  }

  // SSR request handling - handle all routes
  app.use(async (req, res, next) => {
    try {
      const pageContextInit = {
        urlOriginal: req.originalUrl,
      }
      
      const pageContext = await renderPage(pageContextInit)
      const { httpResponse } = pageContext
      
      if (!httpResponse) {
        return next()
      }

      const { statusCode, headers } = httpResponse
      headers.forEach(([name, value]) => res.setHeader(name, value))
      res.status(statusCode)
      
      httpResponse.pipe(res)
    } catch (e) {
      if (viteDevMiddleware) {
        viteDevMiddleware.ssrFixStacktrace(e)
      }
      next(e)
    }
  })

  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}
