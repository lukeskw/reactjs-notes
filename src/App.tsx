import { Toaster } from './components/ui/sonner.tsx'
import { HomePage } from './pages/home-page.tsx'

export function App() {
  return (
    <>
      <HomePage />
      <Toaster position="top-right" offset={'1rem'} />
    </>
  )
}
