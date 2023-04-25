import { Icon } from '@chakra-ui/icons';
import { Box, chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import React, { useContext } from 'react'
import {SlControlPlay, SlControlPause, SlControlForward, SlControlRewind} from 'react-icons/sl'
import { DiscContext } from 'src/tools/Disc-Context';
import { Discs } from 'src/tools/discs';

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

export const PlayControls = () => {

    const discContext = useContext(DiscContext)

  return (
    <ChakraBox
        position={'absolute'}
        initial={{width: '100vw', height: '100vh',bottom:0, backgroundColor: '#000', opacity: 0.8}}
        animate={{width:'100vw', height: '90px', bottom: 0, transition:{duration: 1}}}
        zIndex={100}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={2}
    >
        <Box width={'50px'} height={'50px'}>
            {discContext.position > 0 && discContext.isPlaying && <Icon
                as={SlControlRewind}
                color={'#fff'}
                width={'40px'}
                height={'40px'}
                _hover={{
                    cursor: 'pointer',
                    opacity: 0.5
                }}
                onClick={()=>{
                    discContext.setPosition(discContext.position - 1)
                    discContext.setIsVisible(false)
                }}
            />}
        </Box>
        <Box width={'50px'} height={'50px'}>
            <Icon
                as={!discContext.isPlaying ? SlControlPlay : SlControlPause}
                color={'#fff'}
                width={'40px'}
                height={'40px'}
                _hover={{
                    cursor: 'pointer',
                    opacity: 0.5
                }}
                onClick={()=>{
                    discContext.setIsPlaying(!discContext.isPlaying)
                    discContext.setIsVisible(true)
                }}
            />
        </Box>
        <Box width={'50px'} height={'50px'}>
            {discContext.position < Discs.length - 1 && discContext.isPlaying && <Icon
                as={SlControlForward}
                color={'#fff'}
                width={'40px'}
                height={'40px'}
                _hover={{
                    cursor: 'pointer',
                    opacity: 0.5
                }}
                onClick={()=>{
                    discContext.setPosition(discContext.position + 1)
                    discContext.setIsVisible(false)
                }}
            />}
        </Box>
        
    </ChakraBox>
  )
}