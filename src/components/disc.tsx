import { HStack, VStack, Image, ListItem, UnorderedList, Heading, chakra, shouldForwardProp, useBreakpointValue } from '@chakra-ui/react'
import { isValidMotionProp, motion, useAnimation } from 'framer-motion';
import React, { useContext, useEffect, useState, useRef } from 'react'
import { DiscContext } from 'src/tools/Disc-Context'
import { DiscType } from 'src/tools/discs'

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

export const Disc = (disc: DiscType) => {

    const discContext = useContext(DiscContext)
    const controls = useAnimation()
    const ref = useRef(null)

    const isMobile: boolean | undefined = useBreakpointValue({ base: true, lg: false });
    const deviceType = useBreakpointValue({ base: 'mobile', sm: 'mobile', md: 'tablet', lg: 'desktop' }, { ssr: false });

    useEffect(() => {

        discContext.setIsVisible(true)

    }, [discContext.position])

    useEffect(() => {

        if(!discContext.isVisible){
            controls.start('exit')
        }

        if(discContext.isVisible){
            controls.start('visible')
        }

    }, [discContext.isVisible])
    
    // const discAnimation = {
    //     hidden: {opacity: 0, left: '102%', transition:{ duration: 2 }},
    //     visible: {opacity: 1, left: '40%', transition:{ duration: 2 }},
    //     exit: { opacity: 0, left: ['102%','40%'], transition:{ duration: 3 } }
    // }

    const discAnimation = {
        // Define la animación según el tamaño del dispositivo actual
        mobile: {
          hidden: { opacity: 0, left: '102%', transition: { duration: 2 } },
          visible: { opacity: 1, left: '1%', transition: { duration: 2 } },
          exit: { opacity: 0, left: ['102%', '20%'], transition: { duration: 3 } },
        },
        tablet: {
          hidden: { opacity: 0, left: '102%', transition: { duration: 2 } },
          visible: { opacity: 1, left: '10%', transition: { duration: 2 } },
          exit: { opacity: 0, left: ['102%', '40%'], transition: { duration: 3 } },
        },
        desktop: {
          hidden: { opacity: 0, left: '102%', transition: { duration: 2 } },
          visible: { opacity: 1, left: '40%', transition: { duration: 2 } },
          exit: { opacity: 0, left: ['102%', '50%'], transition: { duration: 3 } },
        },
      };


  return (
    <ChakraBox 
        position={'absolute'}
        ref={ref}
        top={'10%'}
        padding={{base: 4,lg: 20}}
        backgroundColor={{base: '#000000b3', md: '#0000008c'}}
        borderRadius={'3xl'}
        animate={controls}
        initial={'hidden'}
        exit={'exit'}
        minWidth={{base: '98%',md: '80%',lg:'1050px'}}
        maxWidth={{base: '98',md: '80%',lg: '1050px'}}
        minHeight={{base: '75%',md: '600',lg: '660px'}}
        maxHeight={{base: '75%',md: 'auto',lg: '660px'}}
        variants={discAnimation[deviceType]}
        
    >
        {!isMobile && <HStack gap={20}> 
            <Image src={disc.imgPath} alt={`disc cover of ${disc.title}`} width={500} height={500}/>
            <VStack color={'white'} gap={5}>
                <VStack>
                    <Heading size={'xl'} textAlign={'center'}>{disc.title}</Heading>
                    <legend>({disc.date})</legend>
                </VStack>
                <UnorderedList listStyleType={'circle'} display={'flex'} flexDir={'column'} gap={2} fontWeight={600}>
                    {disc.songs?.map(song=>{
                        return <ListItem>{song}</ListItem>
                    })}
                </UnorderedList>

            </VStack>
        </HStack>}

        {isMobile && <VStack justifyContent={'center'} alignItems={'center'}> 
            <Image src={disc.imgPath} alt={`disc cover of ${disc.title}`} width={150} height={150}/>
            <VStack color={'white'} >
                <VStack>
                    <Heading size={'sm'} textAlign={'center'}>{disc.title} ({disc.date})</Heading>
                </VStack>
                <UnorderedList listStyleType={'circle'} display={'flex'} flexDir={'column'} gap={2} fontWeight={400}>
                    {disc.songs?.map(song=>{
                        return <ListItem fontSize={'12px'}>{song}</ListItem>
                    })}
                </UnorderedList>

            </VStack>
        </VStack>}
    </ChakraBox>
  )
}
