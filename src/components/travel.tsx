import { isValidMotionProp, motion } from "framer-motion";
import { Box, chakra, Image, shouldForwardProp } from "@chakra-ui/react";

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

interface CarAnimationProps {
    screenWidth: number;
    screenHeight: number;
  }

const CarAnimation: React.FC<CarAnimationProps> = ({
    screenWidth,
    screenHeight,
  }) => {
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
            h={'70%'}
            position="absolute"
            top={0}
            left={0}
            zIndex={0}
        >
            <ChakraBox
                initial={{ right: 0  }}
                width={'300vw'}
                height={'100%'}
                animate={{ x: -screenWidth , transition:{duration: 10, ease: "linear", repeat: Infinity}}}
                bgImage="url('https://thumbs.dreamstime.com/z/iconos-de-la-nube-colecci%C3%B3n-nubes-blancas-aisladas-en-fondo-azul-del-color-137864160.jpg')"
                bgSize="contain"
                bgRepeat={'repeat'}
                bgAttachment={'scroll'}
                position={'absolute'}
                left={0}
            ></ChakraBox>
        </Box>
            <ChakraBox
                animate={{ y: [null, 15, 5], transition:{ duration: 2, ease: "easeInOut", repeat: Infinity,  repeatType: 'reverse'} }}
                position={'absolute'}
                top={{base: '60%', md: '65%', lg: '50%'}}
                left={{base:'1%', md: '2%'}}
                width= {'500px'}
                height={'250px'}
            >
                <Image src="/img/autobus_Queen.png" alt="Car" width={{base:'30%', md: '50%', lg: '100%'}} height={{base:'30%', md: '50%', lg: '100%'}} />
            </ChakraBox>
        
      </Box>
    );
  };
  
  export default CarAnimation;