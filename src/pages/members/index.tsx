import { Fade } from '@/components/fade'
import { ImageItem } from '@/components/imageItem'
import { Container, HStack, VStack} from '@chakra-ui/react'
import { NextPage } from 'next'
import BrianImg from '../../../public/img/brian.png'
import FreddieImg from '../../../public/img/freddie.png'
import JhonImg from '../../../public/img/jhon.png'
import RogerImg from '../../../public/img/roger.png'



const MembersPage: NextPage=()=> {

  return (
    <>     
        <Container width={'100vw'} maxWidth={'100vw'} height={'100vh'} bgColor={'#000'} margin={0} >
            <Fade>
                <HStack justify={'center'} alignItems={'center'} height={'100vh'}>
                    <VStack>
                        <ImageItem src={JhonImg.src} href={'/john'}/>
                    </VStack>
                    <VStack>
                        <ImageItem src={BrianImg.src} href={'/brian'}/>
                        <ImageItem src={FreddieImg.src} href={'/freddie'}/>
                    </VStack>
                    <VStack>
                        <ImageItem src={RogerImg.src} href={'/roger'} />
                    </VStack>
                </HStack>
            </Fade>
        </Container>
    </>
  )
}

export default MembersPage
