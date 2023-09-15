import QRCode from 'react-qr-code';
import { useEffect, useMemo, useRef, useState } from 'react';

import ReactPlayer from 'react-player';
import ReactCardFlip from 'react-card-flip';
import styles from './style';

const imageUrl =
  'https://developers.google.com/static/admob/images/full-screen/image01.png';
const videoId = 'dFg8Nu2X5Mo';
const MediaPlayer = (props) => {
  const { mediaType, onVideoend, data } = props;

  const [qrHeight, setQRHeight] = useState(100);
  const [qrLink, setQrLink] = useState('Hello');
  const [videoDimensions, setVideoDimensions] = useState({
    width: 100,
    height: 100,
  });
  const [flip, setFlip] = useState(false);
  const qrRef = useRef(null);
  const videoRef = useRef(null);
  const [isDisableFlip, setIsDisableFlip] = useState(false);

  let interval;

  useEffect(() => {
    setQRHeight(qrRef.current.clientHeight - 70);
    setVideoDimensions({
      width: videoRef.current.clientWidth,
      height: videoRef.current.clientHeight - 48,
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      setIsDisableFlip(true);
    }, 10000);
    interval = setInterval(() => {
      setFlip((prev) => !prev);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isDisableFlip) {
      clearInterval(interval);
      setFlip(false);
    }
  }, [isDisableFlip]);

  const mediaUrl = data?.media?.url;

  const imageStyles = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const screen = () => {
    if (data && data?.type === 'advertise_here') {
      return (
        <div
          style={{
            ...imageStyles,
            backgroundPositionY: -300,
            backgroundImage: `url(/scanAndWin.png)`,
          }}
        />
      );
    }
    if (mediaType === 'image') {
      return (
        <div
          style={{
            backgroundImage: `url(${mediaUrl})`,
            ...imageStyles,
          }}
        />
      );
    }
    return (
      <ReactPlayer
        url={mediaUrl}
        playing
        width={videoDimensions.width}
        height={videoDimensions.height}
        muted
        controls={false}
        onEnded={onVideoend}
      />
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.topContainer} ref={videoRef}>
        {screen()}
        <div />
      </div>
      <div style={styles.bottomContainer} className='backdrop-blur' ref={qrRef}>
        <div style={styles.bottomLeft}>
          {!isDisableFlip ? (
            <ReactCardFlip isFlipped={flip} flipDirection='vertical'>
              <div style={styles.text}>Play And Win</div>
              <div style={styles.text}>Instant Uploads</div>
            </ReactCardFlip>
          ) : (
            <div style={styles.text}>Waiting for player 2</div>
          )}
        </div>
        <div style={styles.bottomRight}>
          <QRCode style={styles.qrCode} value={qrLink} size={qrHeight} />
        </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
