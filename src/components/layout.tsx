import React from 'react'
import Head from 'next/head'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import {Navbar} from './navbar'

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
 


interface LayoutAppProps {
  children?: React.ReactNode
  title?: string
}


export const LayoutApp: React.FC<LayoutAppProps> = ({ children }) => {
  return (
    <>
        <Head>
          <title>The Queen Experience</title>
        </Head>
        <Navbar />
        <ChakraBox initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{duration: 1.5} }}>
            {children}
        </ChakraBox>
    </>
  )
}
