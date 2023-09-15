
import {  useEffect, useMemo, useState } from 'react';
import { useGetKIOSKSchedulerQuery } from '@services/api'
import Flappy from '@pages/Games/Flappy';
import TugOfWar from '@pages/Games';
import MediaPlayer from './MediaPlayer';
import SpinThewheel from './SpinTheWheel';
import styles from './style';

const mockData = [{
  "type": "ad",
  "media": {
    "type": "image|video",
    "url": ""
  },
  "qrcodeUrl": ""
},
{
  "type": "instant_media",
  "media": {
    "type": "announcement",
    "text": ""
  },
  "qrcodeUrl": ""
}]

const AdScreen = () =>{
  const [screenType, setScreenType] = useState('2P');
  const [mediaType, setMediaType] = useState('IMAGE');
  const [actionStatus, setActionStatus] = useState('START');
  const { data, error, isLoading } = useGetKIOSKSchedulerQuery(12);
  let screenTimer;

  useEffect(()=>{
    if(screenType === 'MEDIA_PLAYER' && mediaType === 'IMAGE'){
      screenTimer = setTimeout(()=>{
      setActionStatus('END');
      setMediaType('IMAGE');
      },10)
  }
  },[])

  const onVideoEnd = ()=>{
    setActionStatus('END');
    setScreenType('GAME');
  }

  // const onGameEnd = () =>{

  // }

  const renderScreen = useMemo(()=>{
    switch(screenType){
      case 'MEDIA_PLAYER':
       return <MediaPlayer mediaType={mediaType} onVideoend={onVideoEnd}/>
      case 'SPIN_THE_WHEEL':
        return <SpinThewheel />
      case '1P':
        return <Flappy />
      case '2P':
        return <TugOfWar />
      default:
        return  <div />
    }
  },[mediaType, screenType]
  )


  return (
    <div>
    {renderScreen}
   </div>
  )}

export default AdScreen