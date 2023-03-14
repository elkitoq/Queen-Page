import { Loader } from '@/components/loader'
import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import { QueenLogoSvg } from 'src/illustrations/logo-svg'
import Logo from '../../public/img/queen.png'


export default function Home() {

  return (
    <>
      <Container width={'100vw'} maxWidth={'100vw'} height={'100vh'}>
        <Loader />
      </Container>
    </>
  )
}
