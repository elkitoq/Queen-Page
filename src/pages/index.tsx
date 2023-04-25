import { Loader } from '@/components/loader'
import { Container } from '@chakra-ui/react'
import { NextPage } from 'next'


const HomePage: NextPage = ()=> {
  return (
    <>
      <Container width={'100vw'} maxWidth={'100vw'} height={'100vh'}>
        <Loader />
      </Container>
    </>
  )
}

export default HomePage
