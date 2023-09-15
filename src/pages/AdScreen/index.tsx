import { useEffect, useMemo, useState } from 'react';
import { useGetKIOSKSchedulerQuery } from '@services/api';
import Flappy from '@pages/Games/Flappy';
import TugOfWar from '@pages/Games';
import MediaPlayer from './MediaPlayer';
import SpinThewheel from './SpinTheWheel';
import styles from './style';

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


  useEffect(() => {
    if (screenType === 'MEDIA_PLAYER' && (mediaType === 'image' || data?.type === 'advertise_here')) {
      screenTimer = setTimeout(refetch, 10_000);
    }
  }, [data, screenType]);


  const renderScreen = useMemo(() => {
    switch (screenType) {
      case 'MEDIA_PLAYER':
        return <MediaPlayer data={data} mediaType={mediaType} onVideoend={refetch} />;
      case 'SPIN_THE_WHEEL':
        return <SpinThewheel />;
      case '1P':
        return <Flappy />;
      case '2P':
        return <TugOfWar />;
      default:
        return <div />;
    }
  }, [mediaType, screenType, data]);

  return <div>{renderScreen}</div>;
};

export default AdScreen;
