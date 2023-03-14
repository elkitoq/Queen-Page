import { Image, ImageProps, keyframes, Link} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

interface ItemImageProps extends ImageProps{
    href: string
    src: string
}

export const ImageItem: React.FC<ItemImageProps> = ({href, src}) => {
  return (
    <Link 
        as={NextLink} 
        href={href} 
        position={'relative'} 
        _before={{
            content: '""',
            position: "absolute",
            top: '-500px',
            width: '100%',
            height:'0px'
        }}
        _hover={{
            _before: {
              clipPath:"polygon(50% -42%, 0% 100%, 100% 100%)",
              bgImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0))',
              opacity: 0.35,
              height: '500px',
              transition:{ duration: 2,ease: "easeInOut"}
            },
          }}
    >
            <Image  
                position={'relative'}
                _hover={{
                    opacity:1,
                    cursor: 'pointer',
                }} 
                opacity={0.05} 
                transition={'all 0.8s'} src={src}
            />

    </Link>
  )
}