import {ReactNode, useEffect, useRef} from 'react'
import {useAnimation, motion, useInView, isValidMotionProp} from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

/* It's defining the props that the component will take in. */
interface visibleProps {
  x?: number
  y?: number
  opacity?: number
  delay?: number
  scale?: number
}

interface hiddenProps {
  x?: number
  y?: number
  opacity?: number
  delay?: number
  scale?: number
}

const ChakraBox = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

/**
 * It's a wrapper component that takes in a child component and animates it when it comes into view.
 * @param  - visibleProps - the properties of the element when it is visible
 * @param - child - the child component to animate
 * @param - hiddenProps - the properties of the element when it is hidden
 * @returns A component that takes in children, visible, and hidden props.
 */
export const AnimationIntoView = ({
  children,
  visible,
  hidden,
  time,
  order
}: {
  children: ReactNode
  visible: visibleProps
  hidden: hiddenProps
  IndexZ?: number
  time?: number
  order?: number
}) => {
  const animationVariants = {
    visible: {...visible, transition: {duration: time}},
    hidden: {...hidden},
  }

  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <ChakraBox
      ref={ref}
      animate={controls}
      className="customAnimation"
      initial="hidden"
      style={{width: '100%'}}
      variants={animationVariants}
      order={{sm: order}}
    >
      {children}
    </ChakraBox>
  )
}
