import { Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import TwSizeIndicator from './components/TwSizeIndicator'
import { ThemeProvider } from './components/ThemeProvider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TwSizeIndicator />
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
