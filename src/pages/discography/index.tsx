import { PlayControls } from '@/components/animation-controls'
import { Box, Container } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { DiscContext } from 'src/tools/Disc-Context'
import { Discs } from 'src/tools/discs'

import dynamic from 'next/dynamic';

const CarAnimation = dynamic(() => import('@/components/travel'), {
  ssr: false
});

const LayoutDisc = dynamic(() => import('../../components/disc'),{ssr: false})

export default function DiscographyPage(){

  const discContext = useContext(DiscContext)  

  return (
    <Container maxWidth={'full'} padding={0} position={'relative'} overflow={'hidden'}>
      <CarAnimation />
      <Box>
        <LayoutDisc date={Discs[discContext.position].date} imgPath={Discs[discContext.position].imgPath} title={Discs[discContext.position].title} songs={Discs[discContext.position].songs} reproducibleSong={Discs[discContext.position].reproducibleSong as string}/>
      </Box>
      <PlayControls/>
    </Container>
  )
}
