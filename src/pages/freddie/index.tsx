import { Container, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'

const FreddiePage: NextPage = (props)=>{
  return (
    <Container maxWidth={'full'} padding={0}>
      <Text as={'h1'}>Freddie Mercury</Text>
    </Container>
  )
}

export default FreddiePage
