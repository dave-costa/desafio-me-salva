import type { AppProps } from 'next/app'
import { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import '../components/bosons/global.sass'
function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())
  return(
    <QueryClientProvider client={queryClient}>
     
      <Hydrate state={pageProps.dehydratedState}>
         <Component {...pageProps} />
       </Hydrate>
    </QueryClientProvider>)
}

export default MyApp
