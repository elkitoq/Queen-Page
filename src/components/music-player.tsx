import { HStack, Icon, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack } from '@chakra-ui/react'
import { IoPlayOutline, IoPauseCircleOutline } from 'react-icons/io5'
import { RxSpeakerLoud, RxSpeakerModerate, RxSpeakerOff, RxSpeakerQuiet } from 'react-icons/rx'
import ReactHowler from "react-howler"
import React, { useState, useEffect, useContext, useRef } from 'react'
import { DiscContext } from 'src/tools/Disc-Context'

interface MusicPlayerProps{
    songUrl: string
}

export const MusicPlayer: React.FC<MusicPlayerProps> = (props) => {

  const discContext = useContext(DiscContext)

  const [volume, setVolume] = useState([0, 0.2]);
  const [isplay, setIsPlay] = useState<boolean>(false)
  const [isMute, setIsMute] = useState<boolean>(false)

  const howlerRef = useRef(null)

  const handleVolumeChange = (newVolume:number[]) => {
    setVolume(newVolume);
    setIsMute(false)
  };

  useEffect(()=>{
    if(isplay){
      setIsPlay(false)
    }
  },[discContext.position])

  useEffect(()=>{
    if(isplay){
      setIsPlay(false)
    }
  },[discContext.isPlaying])

  return (
    <HStack>
      <Icon 
        as={!isplay ? IoPlayOutline: IoPauseCircleOutline} 
        _hover={{
          cursor: 'pointer',
          opacity: 0.7,
          scale: 2,
        }}
        onClick={(): void=>{ setIsPlay(!isplay)}}
        fontSize={20}
      />
      <Icon 
        as={volume[1] == 0 || isMute ? RxSpeakerOff : volume[1] > 0 && volume[1] < 0.25 ? RxSpeakerQuiet : volume[1] > 0.25 && volume[1] < 0.50 ? RxSpeakerModerate : RxSpeakerLoud} 
        onClick={()=>{setIsMute(!isMute)}}
        _hover={{
          cursor: 'pointer',
          opacity: 0.7
        }}
      />
      <RangeSlider
      min={0}
      max={1}
      step={0.001}
      value={isMute ? [0,0] : volume}
      onChange={handleVolumeChange}
      width={'100px'}
      opacity={isMute? 0.5 : 1}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={1}/>
    </RangeSlider>
      <ReactHowler src={props.songUrl as string} playing={isplay} volume={volume[1]} mute={isMute} ref={howlerRef}/>
    </HStack>
  )
}