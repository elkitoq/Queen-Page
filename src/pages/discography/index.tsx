import { Disc } from '@/components/disc'
import { PlayControls } from '@/components/player-controls'
import { Container } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { DiscContext } from 'src/tools/Disc-Context'
import { Discs } from 'src/tools/discs'

import dynamic from 'next/dynamic';

const CarAnimation = dynamic(() => import('@/components/travel'), {
  ssr: false
});

export default function DiscographyPage(){

  const discContext = useContext(DiscContext)

  return (
    <Container maxWidth={'full'} padding={0} position={'relative'} overflow={'hidden'}>
      <CarAnimation />
      {discContext.isPlaying && <Disc imgPath={Discs[discContext.position].imgPath} songs={Discs[discContext.position].songs} title={Discs[discContext.position].title} date={Discs[discContext.position].date}/>}
      <PlayControls/>
    </Container>
  )
}
