import { Fade } from '@/components/fade'
import { ImageItem } from '@/components/imageItem'
import { Container, HStack, VStack} from '@chakra-ui/react'
import BrianImg from '../../../public/img/brian.png'
import FreddieImg from '../../../public/img/freddie.png'
import JhonImg from '../../../public/img/jhon.png'
import RogerImg from '../../../public/img/roger.png'



export default function Members() {

  return (
    <>     
    <Container width={'100vw'} maxWidth={'100vw'} height={'100vh'} bgColor={'#000'} margin={0} >
        <Fade>
            <HStack justify={'center'} alignItems={'center'} height={'100vh'}>
                <VStack>
                    <ImageItem src={JhonImg.src} href={'/Jhon'}/>
                </VStack>
                <VStack>
                    <ImageItem src={BrianImg.src} href={'/Brian'}/>
                    <ImageItem src={FreddieImg.src} href={'/Freddie'}/>
                </VStack>
                <VStack>
                    <ImageItem src={RogerImg.src} href={'/Roger'} />
                </VStack>
            </HStack>
        </Fade>
    </Container>
    </>
  )
}