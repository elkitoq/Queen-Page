import { Container, Flex, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { NextPage } from 'next'
import queen from '../../../public/img/freddie-and-brian.webp'
import queen1 from '../../../public/img/queen-foto.webp'
import queen2 from '../../../public/img/queen-1970.webp'
import queen3 from '../../../public/img/queen-the-works-tour.webp'
import queen4 from '../../../public/img/queen4.webp'
import queen5 from '../../../public/img/live-aid.webp'
import queen6 from '../../../public/img/queen-2023.webp'
import React from 'react'
import { AnimationIntoView } from '@/components/animation-into-view'
import '@fontsource/barriecito'
import "@fontsource/bellota-text"

const HistoryPage: NextPage = () => {
  return (
    <Container maxWidth={'1500px'} paddingY={0} overflowX={{base: 'hidden'}}>
      <Text as={'h1'} padding={'10px'} fontFamily={"Barriecito"} fontSize={{base: '4xl',md: '9xl'}} textAlign={'center'} color={'#fff'}>Queen</Text>
      <SimpleGrid columns={{base: 1, md: 2}} gap={6} textAlign={'justify'} fontFamily={'Bellota Text'}>
        <AnimationIntoView hidden={{x: -100,opacity: 0}} visible={{ x: 0 ,opacity: 1}} time={2}>
          <VStack alignItems={'center'} height={'100%'} py={10} justifyContent={'center'} gap={4}>
            <Text as={'p'} fontSize={'18px'} color={'#fff'}>
              Los orígenes de Queen se remontan al inicio de los sesenta, cuando el joven guitarrista
              Brian Harold May (nacido en 1947) comenzó a tocar en un grupo semiprofesional llamado 1984.
              Experto conocedor de varios instrumentos de cuerda, May diseñaba incluso sus propias
              guitarras, conocidas posteriormente como el modelo May.
            </Text>
            <Text as={'p'} color={'#fff'} fontSize={'18px'}>
              Brian May pasó después a formar parte de otra banda, llamada Smile, con la que editó un single.
              Inesperadamente, Tim Stafell, el cantante de Smile, abandonó la formación; para buscar su sustituto,
              los miembros de Smile decidieron hacer una prueba al cantante del grupo Sour Milk Sea, que no era
              otro que Freddie Mercury, y fue rápidamente admitido.</Text>
            </VStack>
        </AnimationIntoView>
        <AnimationIntoView hidden={{x: 100,opacity: 0}} visible={{ x: 0 ,opacity: 1}} time={2}>
          <Flex justifyContent={'center'} py={10}>
            <Image src={queen1.src} width={'400px'}/>
          </Flex>
        </AnimationIntoView>
        <AnimationIntoView hidden={{x: -100,opacity: 0}} visible={{ x: 0 ,opacity: 1}} time={2}>
          <Flex justifyContent={'center'} py={10}>
            <Image src={queen.src} width={'400px'}/>
          </Flex>
        </AnimationIntoView>
        <AnimationIntoView hidden={{x: 100,opacity: 0}} visible={{ x: 0 ,opacity: 1}} time={2}>
          <VStack alignItems={'center'} height={'100%'} py={10} justifyContent={'center'}>
            <Text as={'p'} fontSize={'18px'} color={'#fff'}>
              Por aquel entonces Freddie Mercury ya estaba acostumbrado a aparecer en público y sobre el 
              escenario con vestimentas llamativas y atrevidas. Freddie contaba con una prodigiosa voz y 
              sobrados conocimientos de piano. A esto se unió una base rítmica firmada por John Richard Deacon
              (nacido en 1951) al bajo y la batería de Roger Meadows Taylor (nacido en 1949). Fue Mercury 
              quien convenció al resto de la necesidad de una refundación, empezando por un cambio de nombre; 
              de este modo, en 1970, nació Queen.
            </Text>
            <Text as={'p'} fontSize={'18px'} color={'#fff'}>
              El grupo comenzó a grabar maquetas y la compañía discográfica EMI, después de verlos actuar en 
              el Marquee de Londres, se interesó por ellos. Ya en 1973, Queen se encerró por primera vez en 
              los Trident Studios de Londres para grabar, bajo la supervisión de Roy Thomas Baker en los 
              controles, su primer trabajo, Queen I, demostración de un rock agresivo, con el sonido que en 
              adelante caracterizaría a la banda. Le siguió, a principios de 1974, Queen II, en plena evolución y búsqueda de madurez.
              </Text>
            </VStack>
        </AnimationIntoView>
        <AnimationIntoView hidden={{x: -100,opacity: 0}} visible={{ x: 0 ,opacity: 1}} time={2}>
          <VStack alignItems={'center'} height={'100%'} py={10} justifyContent={'center'} gap={2}>
            <Text as={'p'} fontSize={'18px'} color={'#fff'}>
              A Sheer heart attack, de 1974, fue para muchos un álbum de transición. Incluía temas como Brighton
              rock o Now I am here. El siguiente, A night at the opera, sería el disco que llevaría al estrellato 
              a Queen y consagraría a sus miembros como dignísimos sucesores de The Beatles o de los Rolling Stones.
            </Text>
            <Text as={'p'} fontSize={'18px'} color={'#fff'}>
              En 1975, el single de lanzamiento Bohemian Rhapsody fue un éxito mundial. La diferencia más notable 
              respecto a trabajos anteriores radica en la intervención de todos los integrantes del grupo en la 
              composición de los temas que integran el álbum, que anteriormente estaba en manos de May y Mercury.</Text>
            </VStack>
        </AnimationIntoView>
        <AnimationIntoView hidden={{x: 100,opacity: 0}} visible={{ x: 0 ,opacity: 1}} time={2}>
          <Flex justifyContent={'center'} py={10}>
            <Image src={queen2.src} width={'400px'}/>
          </Flex>
        </AnimationIntoView>
        <AnimationIntoView hidden={{x: -100,opacity: 0}} visible={{ x: 0 ,opacity: 1}} time={2}>
          <Flex justifyContent={'center'} py={10}>
            <Image src={queen3.src} width={'600px'}/>
          </Flex>
        </AnimationIntoView>
        <AnimationIntoView hidden={{x: 100,opacity: 0}} visible={{ x: 0 ,opacity: 1}} time={2}>
          <VStack alignItems={'center'} height={'100%'} py={10} justifyContent={'center'}>
            <Text 
              as={'p'} 
              fontSize={'18px'}
              color={'#fff'}
              >Por aquel entonces Freddie Mercury ya estaba acostumbrado a aparecer en público y sobre el 
              escenario con vestimentas llamativas y atrevidas. Freddie contaba con una prodigiosa voz y 
              sobrados conocimientos de piano. A esto se unió una base rítmica firmada por John Richard Deacon
              (nacido en 1951) al bajo y la batería de Roger Meadows Taylor (nacido en 1949). Fue Mercury 
              quien convenció al resto de la necesidad de una refundación, empezando por un cambio de nombre; 
              de este modo, en 1970, nació Queen.
              </Text>
              <Text as={'p'} fontSize={'18px'} color={'#fff'}>
              El grupo comenzó a grabar maquetas y la compañía discográfica EMI, después de verlos actuar en 
              el Marquee de Londres, se interesó por ellos. Ya en 1973, Queen se encerró por primera vez en 
              los Trident Studios de Londres para grabar, bajo la supervisión de Roy Thomas Baker en los 
              controles, su primer trabajo, Queen I, demostración de un rock agresivo, con el sonido que en 
              adelante caracterizaría a la banda. Le siguió, a principios de 1974, Queen II, en plena evolución y búsqueda de madurez.</Text>
            </VStack>
        </AnimationIntoView>
        <AnimationIntoView hidden={{x: -100,opacity: 0}} visible={{ x: 0 ,opacity: 1}} time={2}>
          <VStack alignItems={'center'} height={'100%'} py={10} justifyContent={'center'}>
            <Text as={'p'} fontSize={'18px'} color={'#fff'}>
              Al año siguiente editaron otro elepé que fue la continuación del éxito anterior: A day at the races.
              En News of the World (1977), en cambio, se aprecian nuevos elementos; la capacidad compositora de 
              cada uno de los componentes llegó a su punto álgido en canciones como We are the champions, que sería
              en adelante un tema imprescindible en todos los conciertos de la banda.
            </Text>
            <Text as={'p'} fontSize={'18px'} color={'#fff'}>
              El álbum Jazz (1978) vino a iniciar una época de transición en la que las giras vinieron a salvar el 
              grupo de lo que parecía una crisis creativa. En 1979 se editó el directo llamado Live killers. La 
              marcha de Roy Thomas Baker de los controles contribuyó en 1980 a que prosiguiese la evolución del grupo,
              tal como se evidencia en The game (1980). Ese mismo año Queen tuvo su primera experiencia en el cine
              , componiendo la banda sonora de Flash Gordon de Dino de Laurentis.
              </Text>
            </VStack>
        </AnimationIntoView>
        <AnimationIntoView hidden={{x: 100,opacity: 0}} visible={{ x: 0 ,opacity: 1}} time={2}>
          <Flex justifyContent={'center'} py={10}>
            <Image src={queen4.src} width={'600px'}/>
          </Flex>
        </AnimationIntoView>
        <AnimationIntoView hidden={{x: -100,opacity: 0}} visible={{ x: 0 ,opacity: 1}} time={2}>
          <Flex justifyContent={'center'} py={10}>
            <Image src={queen5.src} width={'600px'}/>
          </Flex>
        </AnimationIntoView>
        <AnimationIntoView hidden={{x: 100,opacity: 0}} visible={{ x: 0 ,opacity: 1}} time={2}>
          <VStack alignItems={'center'} height={'100%'} py={10} gap={4} justifyContent={'center'}>
            <Text as={'p'} fontSize={'18px'} color={'#fff'}>
              Tras el recopilatorio de 1981, se editó Hot space, en el que compartieron el tema Under Pressure con
              David Bowie; el álbum fue criticado por sus más acérrimos seguidores. Tres años más tarde, en 1984, se
              editó The works, el disco que devolvería a Queen la popularidad perdida. El éxito comercial volvió de 
              la mano del elepé A kind of magic, que contiene el célebre tema Who wants to live forever. El álbum se
              utilizó en las bandas sonoras de las películas Iron Eagle y Los inmortales. Después de una macrogira 
              saldría el directo Live Magic, y el grupo decidió tomarse un respiro.
            </Text>
            <Text as={'p'} fontSize={'18px'} color={'#fff'}>
              En 1989 se lanzó The miracle. El último elepé en estudio editado con anterioridad al fallecimiento de 
              Freddie Mercury, víctima del sida, llevó el título de Innuendo. Tras la muerte de Freddie, Brian May 
              comenzó a editar en solitario, y en noviembre de 1995 se publicó su álbum Made in Heaven, grabado en 
              los estudios de Montreaux, en cuyas proximidades residía el líder del grupo en sus momentos de descanso.
            </Text>
            </VStack>
        </AnimationIntoView>
        <AnimationIntoView hidden={{x: -100,opacity: 0}} visible={{ x: 0 ,opacity: 1}} time={2}>
          <VStack alignItems={'center'} height={'100%'} py={10} justifyContent={'center'}>
            <Text as={'p'} fontSize={'18px'} color={'#fff'}>
              Al fallecimiento de Mercury siguió el retiro del bajista John Deacon en 1997, pero no la extinción definitiva
              de Queen. En 2002, Brian May y Roger Taylor proyectaron la puesta en marcha del musical We will rock you, un 
              espectáculo para trasladar a los escenarios de medio mundo los temas más populares del grupo. Por otro lado, 
              May anunció en diciembre de 2004 que la banda se embarcaría durante 2005 en una gira mundial en la que el lugar
              de Freddie Mercury sería ocupado por Paul Rodgers, el que fuera cantante de Bad Company (antes se habían 
              barajado otros nombres, como George Michael).
            </Text>
            <Text as={'p'} fontSize={'18px'} color={'#fff'}>
              Aunque su éxito fue relevante, la nueva formación, bautizada como Queen + Paul Rodgers, tuvo una vida efímera;
              la colaboración con Paul Rodgers finalizó en 2009. Tampoco ello significó el final de Queen: en 2011 los 
              supervivientes Brian May y Roger Taylor se unieron al vocalista estadounidense Adam Lambert para crear Queen +
              Adam Lambert, banda que sigue activa en la actualidad.
              </Text>
            </VStack>
        </AnimationIntoView>
        <AnimationIntoView hidden={{x: 100,opacity: 0}} visible={{ x: 0 ,opacity: 1}} time={2}>
          <Flex justifyContent={'center'} py={10}>
            <Image src={queen6.src} width={'700px'}/>
          </Flex>
        </AnimationIntoView>
      </SimpleGrid>
    </Container>
  )
}

export default HistoryPage
