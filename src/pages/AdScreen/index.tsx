
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import MediaPlayer from './MediaPlayer';
import styles from './style';

const AdScreen = () =>{
  const [screenType, setScreenType] = useState('MEDIA_PLAYER');

  const renderScreen = useMemo(()=>{
    switch(screenType){
      case 'MEDIA_PLAYER':
       return <MediaPlayer />
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