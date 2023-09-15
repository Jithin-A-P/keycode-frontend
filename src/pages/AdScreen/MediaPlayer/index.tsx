
import QRCode from "react-qr-code";
import { useEffect, useRef, useState } from 'react';

import ReactCardFlip from "react-card-flip";
import YouTubePlayer from 'react-youtube';
import styles from './style';

const imageUrl = 'https://developers.google.com/static/admob/images/full-screen/image01.png';
const videoId = 'dFg8Nu2X5Mo'
const MediaPlayer = (props) =>{
    const {mediaType, onVideoend} = props;

  const [qrHeight, setQRHeight] = useState(100);
  const [qrLink, setQrLink] = useState('Hello');
  const [videoDimensions, setVideoDimensions] = useState({width: 100, height:100})
  const [flip, setFlip] = useState(false);
  const qrRef = useRef(null);
  const videoRef = useRef(null)
  const [isDisableFlip, setIsDisableFlip] = useState(false)

  let interval;

  useEffect(()=>{
    setQRHeight(qrRef.current.clientHeight - 20)
    setVideoDimensions( {width: videoRef.current.clientWidth,
      height: videoRef.current.clientHeight})
  },[]);

  useEffect(()=>{
    setInterval(()=> {
      setIsDisableFlip(true)
    }, 10000)
    interval= setInterval(()=> {
        setFlip((prev)=>!prev)
    }, 2000)
    return () => {
      clearInterval(interval);
    };
  },[])


  useEffect(()=>{
    if(isDisableFlip){
      clearInterval(interval)
      setFlip(false);
    }
  },[isDisableFlip])
console.log(mediaType)
  return (
    <div style={styles.container}>
      <div style={styles.topContainer} ref={videoRef}>
        {mediaType === 'IMAGE' ? (
          <div style={{ backgroundImage: `url(${imageUrl})`, width: '100%', height:'100%', backgroundPosition: 'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat'}} />
            
        ):(
        <YouTubePlayer
            opts={{
                width: videoDimensions.width,
                height:  videoDimensions.height,
                playerVars:{
                  autoplay: 1,
                  controls:0
                }}}
            videoId={videoId}
            onEnd={onVideoend}
            
        />
        )}
        <div />
      </div>
      <div style={styles.bottomContainer} ref={qrRef}>
          <div style={styles.bottomLeft}>
            {!isDisableFlip ?(
            <ReactCardFlip isFlipped={flip}
             flipDirection="vertical">
                <div style={styles.text}>Play And Win</div>
                <div style={styles.text}>Instant Uploads</div>
            </ReactCardFlip> 
            )
            :(
              <div style={styles.text}>Waiting for player 2</div>
            )}      
             </div>
            <div style={styles.bottomRight}>
                <QRCode
                    style={styles.qrCode}
                    value={qrLink}
                    size={qrHeight}
                  />
            </div>
      </div>
    </div>
  )}

export default MediaPlayer