import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { LayoutApp } from '@/components/layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <LayoutApp>
        <Component {...pageProps} />
      </LayoutApp>
    </ChakraProvider>)
}
