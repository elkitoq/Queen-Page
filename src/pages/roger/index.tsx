import { Container, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'

const RogerPage: NextPage = (props)=>{
  return (
    <Container maxWidth={'full'} padding={0}>
      <Text as={'h1'}>Roger Taylor</Text>
    </Container>
  )
}

export default RogerPage
