import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { LayoutApp } from '@/components/layout'
import { DiscProvider } from '@/components/disc-provider'
import { AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DiscProvider>
      <ChakraProvider>
        <AnimatePresence>
          <LayoutApp>
            <Component {...pageProps} />
          </LayoutApp>
        </AnimatePresence>
      </ChakraProvider>
    </DiscProvider>)
}
