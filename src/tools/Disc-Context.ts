import { createContext } from 'react';

export type DiscContextType = {
  position: number;
  isPlaying: boolean;
  isVisible: boolean;
  setPosition: (position: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setIsVisible: (isVisible: boolean)=> void;
};

export const defaultValues: DiscContextType = {
  position: 0,
  isPlaying: false,
  isVisible: false,
  setPosition: () => {},
  setIsPlaying: () => {},
  setIsVisible: ()=>{},
};

export const DiscContext = createContext<DiscContextType>(defaultValues);


 