import { useEffect, useMemo, useState } from 'react';
import { useGetKIOSKSchedulerQuery } from '@services/api';
import Flappy from '@pages/Games/Flappy';
import TugOfWar from '@pages/Games';
import MediaPlayer from './MediaPlayer';
import SpinThewheel from './SpinTheWheel';

const mockData = [
  {
    type: 'ad',
    media: {
      type: 'image|video',
      url: '',
    },
    qrcodeUrl: '',
  },
  {
    type: 'instant_media',
    media: {
      type: 'announcement',
      text: '',
    },
    qrcodeUrl: '',
  },
];

export type AdData = typeof mockData[0];

const AdScreen = () => {
  const [screenType, setScreenType] = useState('MEDIA_PLAYER');
  const { data, error, isLoading, refetch } = useGetKIOSKSchedulerQuery(12);
  const mediaType = data?.media  ? data.media.type : '';
  let screenTimer;

  useEffect(()=>{
    if(data?.type === 'game_two_players'){
      setScreenType('2P');
      clearTimeout(screenTimer)
    }
  },[data?.type])


  useEffect(() => {
    if (screenType === 'MEDIA_PLAYER' && (mediaType !== 'video' || mediaType !== 'youtube')) {
      screenTimer = setTimeout(refetch, 10_000);
    }
    console.log(screenType, mediaType )
  }, [data, screenType]);

  const onGameEnd = () =>{
    setTimeout(()=>{

    setScreenType('SPIN_THE_WHEEL');
    },2000)
  }

  const triggerAfterSpin=()=>{
    setScreenType('MEDIA_PLAYER');
    refetch()
  }

  const renderScreen = useMemo(()=>{
    switch(screenType){
      case 'MEDIA_PLAYER':
        return <MediaPlayer data={data} mediaType={mediaType} onVideoend={refetch} />;
      case 'SPIN_THE_WHEEL':
        return <SpinThewheel triggerAfterSpin={triggerAfterSpin}/>;
      case '1P':
        return <Flappy />;
      case '2P':
        return <TugOfWar onGameEnd={onGameEnd}/>;
      default:
        return <div />;
    }
  }, [mediaType, screenType, data]);

  return <div>{renderScreen}</div>;
};

export default AdScreen;
