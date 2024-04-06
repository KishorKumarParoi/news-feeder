import Page from './components/Page'
import { NewsProvider } from './providers'

export default function App() {
  return (
    <NewsProvider>
      <Page />
    </NewsProvider>
  )
}
