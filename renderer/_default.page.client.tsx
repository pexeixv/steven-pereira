export { render }

import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from '../src/App'
import '../src/index.css'

async function render() {
  hydrateRoot(
    document.getElementById('root')!,
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  )
}
