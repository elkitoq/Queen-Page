import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { LayoutApp } from '@/components/layout'
import { DiscProvider } from '@/components/disc-provider'
import { AnimatePresence } from 'framer-motion'

const theme = extendTheme({
  styles: {
    global: () => ({
      '&::-webkit-scrollbar': {
        width: '0px',
        backgroundColor: 'transparent',
      },
    }),
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DiscProvider>
      <ChakraProvider theme={theme}>
        <AnimatePresence>
          <LayoutApp>
            <Component {...pageProps} />
          </LayoutApp>
        </AnimatePresence>
      </ChakraProvider>
    </DiscProvider>)
}
