import { AnimationIntoView } from '@/components/animation-into-view'
import CarAnimation from '@/components/travel'
import { Container, Text } from '@chakra-ui/react'
import React from 'react'

export default function DiscographyPage(){
  return (
    <Container maxWidth={'full'} padding={0}>
      <CarAnimation screenWidth={1290} screenHeight={1080}/>
    </Container>
  )
}
