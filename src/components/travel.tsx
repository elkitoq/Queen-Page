import { AnimationControls, isValidMotionProp, motion, useAnimation } from "framer-motion";
import { Box, chakra, Image, shouldForwardProp, useBreakpointValue, } from "@chakra-ui/react";
import { CloudSvg1 } from "./illustration/cloud-1";
import { CloudSvg2 } from "./illustration/cloud-2";
import { CloudSvg3 } from "./illustration/cloud-3";
import { useContext, useEffect, useRef, useState } from "react";
import { DiscContext } from "src/tools/Disc-Context";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

const CarAnimation: React.FC<{}> = () => {

  const discContext = useContext(DiscContext)
  const controls: AnimationControls = useAnimation()
  const ref = useRef(null)

  const deviceType = useBreakpointValue({ base: 'mobile', sm: 'mobile', md: 'tablet', lg: 'desktop' }, {ssr: false});

  useEffect(() => {
    if(discContext.isPlaying){
      controls.start('visible')
    }else{
      controls.start('hidden')
    }
  }, [discContext.isPlaying])

  const animationVariants = {
    mobile:{
      visible: {scale:1,left: '5%',top: '80%',opacity: 0, Y: [null,20,0], transition: {duration: 2}},
      hidden: {scale: 2, left:'50%', top: '50%', transition: {duration: 2}}
    },
    tablet:{
      visible: {scale:1,left: '5%',top: '70%', Y: [null,20,0], transition: {duration: 2}},
      hidden: {scale: 1.5, left:'40%', top: '50%', transition: {duration: 2}}
    },
    desktop:{
      visible: {scale:1,left: '5%',top: '60%', Y: [null,20,0], transition: {duration: 2}},
      hidden: {scale: 2, left:'40%', top: '50%', transition: {duration: 2}}
    }
  }

    return (
      <Box
      w={'100vw'}
      h={'100vh'}
      bgGradient="linear(to-t, #4A5568, #718096)"
      position="relative"
      overflow="hidden"
      >
        <Box
            w={'110vw'}
            h={{base:'80%', md: '80%', xl: '85%'}}
            position="relative"
            top={0}
            left={0}
            zIndex={0}
            backgroundColor={'#63b3ed'}
        >
          <ChakraBox
              width={'auto'}
              height={'auto'}
              position={'absolute'}
              top={'24%'}
              initial={{
                right: '-5%'
              }}
              animate={{
                right: '102%',
                transition:{ease: 'linear', duration: 25,delay: 0, repeat: Infinity}
              }}
            >
              <CloudSvg3 width={'300px'} height={{base: '80px', md: '200px'}} filter={'invert(1)'}/>
            </ChakraBox>
            <ChakraBox
              width={'auto'}
              height={'auto'}
              position={'absolute'}
              top={'44%'}
              initial={{
                right: '-5%'
              }}
              animate={{
                right: '102%',
                transition:{ease: 'linear',duration: 35,delay: 10, repeat: Infinity}
              }}
            >
              <CloudSvg3 width={'300px'} height={{base: '100px', md:'200px'}} filter={'invert(1)'}/>
            </ChakraBox>
            <ChakraBox
              width={'auto'}
              height={'auto'}
              position={'absolute'}
              top={'75%'}
              initial={{
                right: '0%'
              }}
              animate={{
                right: '100%',
                transition:{ease: 'linear',delay: 2,duration: 9,repeat: Infinity}
              }}
            >
              <CloudSvg1 width={'120px'} height={'70px'} filter={'invert(1)'}/>
            </ChakraBox>
            <ChakraBox
              width={'auto'}
              height={'auto'}
              position={'absolute'}
              top={'15%'}
              initial={{
                right: '0%'
              }}
              animate={{
                right: '100%',
                transition:{ease: 'linear',duration: 10,delay: 3,repeat: Infinity}
              }}
            >
              <CloudSvg1 width={'120px'} height={'80px'} filter={'invert(1)'}/>
            </ChakraBox>
            <ChakraBox
              width={'auto'}
              height={'auto'}
              position={'absolute'}
              top={'50%'}
              initial={{
                right: '0%'
              }}
              animate={{
                right: '100%',
                transition:{ease: 'linear',duration: 13,repeat: Infinity}
              }}
            >
              <CloudSvg2 width={'140px'} height={'60px'} filter={'invert(1)'}/>
            </ChakraBox>
            <ChakraBox
              width={'auto'}
              height={'auto'}
              position={'absolute'}
              top={'60%'}
              initial={{
                right: '0%'
              }}
              animate={{
                right: '100%',
                transition:{ease: 'linear',duration: 16, delay: 0.5,repeat: Infinity}
              }}
            >
              <CloudSvg3 width={'300px'} height={'60px'} filter={'invert(1)'}/>
            </ChakraBox>
            <ChakraBox
              width={'auto'}
              height={'auto'}
              position={'absolute'}
              top={'29%'}
              initial={{
                right: '0%'
              }}
              animate={{
                right: '100%',
                transition:{ease: 'linear',duration: 18,repeat: Infinity}
              }}
            >
              <CloudSvg2 width={'140px'} height={'60px'} filter={'invert(1)'}/>
            </ChakraBox>
        </Box>
            <ChakraBox
              ref={ref}
              animate={controls}
              variants={animationVariants[deviceType]}
              initial={'hidden'}
              position={'absolute'}
              width= {'500px'}
              height={'250px'}
            >
              <Image src="/img/autobus_Queen.png" alt="Car" width={{base:'30%', md: '50%', lg: '100%'}} height={{base:'30%', md: '50%', lg: '100%'}} />
            </ChakraBox>
        
      </Box>
    );
  };
  
  export default CarAnimation;