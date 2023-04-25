import { Container, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'

const BrianPage: NextPage = (props)=>{
  return (
    <Container maxWidth={'full'} padding={0}>
      <Text as={'h1'}>Brian May</Text>
    </Container>
  )
}

export default BrianPage
