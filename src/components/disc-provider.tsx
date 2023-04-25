import {useState} from 'react'
import { defaultValues, DiscContext, DiscContextType } from '../tools/Disc-Context';

export const DiscProvider = ({ children }: {children: React.ReactNode}) => {
    const [position, setPosition] = useState<number>(defaultValues.position);
    const [isPlaying, setIsPlaying] = useState<boolean>(defaultValues.isPlaying);
    const [isVisible, setIsVisible] = useState<boolean>(defaultValues.isVisible);
  
    const contextValue: DiscContextType = {
      position,
      isPlaying,
      isVisible,
      setPosition,
      setIsPlaying,
      setIsVisible
    };
  
    return(
        <DiscContext.Provider value={contextValue}>
            {children}
        </DiscContext.Provider>
    )
  };