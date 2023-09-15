
import {  useMemo, useState } from 'react';
import MediaPlayer from './MediaPlayer';
import SpinThewheel from './SpinTheWheel';
import styles from './style';

const AdScreen = () =>{
  const [screenType, setScreenType] = useState('SPIN_THE_WHEEL');

  const renderScreen = useMemo(()=>{
    switch(screenType){
      case 'MEDIA_PLAYER':
       return <MediaPlayer />
      case 'SPIN_THE_WHEEL':
        return <SpinThewheel />
      default:
        return  <div />
    }
  },[screenType]
  )


  return (
    <div>
    {renderScreen}
   </div>
  )}

export default AdScreen