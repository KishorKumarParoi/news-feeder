import Page from './components/Page'
import { NewsProvider, QueryProvider } from './providers'

export default function App() {
  return (
    <QueryProvider>
      <NewsProvider>
        <Page />
      </NewsProvider>
    </QueryProvider>
  )
}
