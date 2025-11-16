import { QueryClientProvider } from "@tanstack/react-query"
import { Routers } from "./Routers"
import { ThemeProviders } from "./ThemeProvider"
import { queryClient } from "shared/lib/queryClient"
import { BrowserRouter } from "react-router-dom"
import ScrollToTop from "shared/ui/ScrollToTop/ScrollToTop"

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProviders>
        <BrowserRouter>
          <ScrollToTop />
          <Routers />
        </BrowserRouter>
      </ThemeProviders>
    </QueryClientProvider>
  )
}

export default App
