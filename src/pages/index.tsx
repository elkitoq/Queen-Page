import { Loader } from '@/components/loader'
import { Container } from '@chakra-ui/react'


export default function Home() {

  return (
    <>
      <Container width={'100vw'} maxWidth={'100vw'} height={'100vh'}>
        <Loader />
      </Container>
    </>
  )
}
