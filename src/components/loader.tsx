import {  chakra, keyframes, shouldForwardProp} from '@chakra-ui/react'
import Logo from '../../public/img/queen.png'
import React from 'react'
import { isValidMotionProp, motion } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  const animationKeyframes = keyframes`
  0% {opacity: 0.1}
  5% {opacity: 0.15}
  10% { opacity: 0.2 }
  15% {opacity: 0.3}
  20% { opacity: 0.4 }
  25% {opacity: 0.5}
  30% { opacity: 0.6 }
  35% {opacity: 0.7}
  40% { opacity: 0.8}
  45% {opacity: 0.9}
  50% { opacity: 1}
  55% {opacity: 0.9}
  60% { opacity: 0.8}
  65% {opacity: 0.7}
  70% { opacity: 0.6}
  75% {opacity: 0.5}
  80% { opacity: 0.4}
  85% {opacity: 0.3}
  90% { opacity: 0.2}
  95% {opacity: 0.15}
  100% { opacity: 0.1}
`;

const animation = `${animationKeyframes} 5s linear infinite`;

export const Loader = () => {
  return (
    <ChakraBox 
        width={'auto'} 
        height={'100%'}
        m={0} 
        padding={0} 
        bgImage={Logo.src} 
        margin={0} 
        backgroundRepeat={'no-repeat'} 
        backgroundPosition={'center'} 
        animation={animation}  
    />
  )
}
