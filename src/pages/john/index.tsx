import { Container, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'

const JhonPage: NextPage = (props)=>{
  return (
    <Container maxWidth={'full'} padding={0}>
      <Text as={'h1'}>John Deacon</Text>
    </Container>
  )
}

export default JhonPage
