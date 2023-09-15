/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { useNavigate } from 'react-router-dom';
import RoutePaths from '@routes/RoutesPath';
import './styles.css';

const MobileLanding = () => {
  const navigate = useNavigate();

  const instantUploadItem = (
    gradient1,
    gradient2,
    asset,
    text,
    height,
    width,
    onClick
  ) => (
    <div
      style={{
        background: `linear-gradient(to bottom, ${gradient1}, ${gradient2})`,
        borderRadius: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        width: '120px',
        whiteSpace: 'pre-wrap',
      }}
      onClick={onClick}
    >
      <img
        src={require(`../../assets/images/${asset}`)}
        alt={text}
        height={height}
        width={width}
      />
      <div
        style={{ textAlign: 'center', marginTop: '4px' }}
        className='instant-upload'
      >
        {text}
      </div>
    </div>
  );

  return (
    <div>
      <h2 className='mobile-head'>HI, PLAYER! READY TO PLAY?</h2>
      <br />
      <div className='games-header'>
        <h2 className='available-games'>AVAILABLE GAMES</h2>
        <button
          type='button'
          className='see-all'
          onClick={() => {
            // navigate('url');
          }}
        >
          See All
        </button>
      </div>
      <div className='scrolling-wrapper'>
        <img
          className='game-card'
          src={require(`../../assets/images/games/tug-of-war.png`)}
          alt=''
        />
        <img
          className='game-card'
          src={require(`../../assets/images/games/flappy-bird.png`)}
          alt=''
        />
      </div>
      <h2 className='available-games games-header'>INSTANT UPLOADS</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {instantUploadItem(
          '#F05562',
          '#F6BD28',
          'youtube.png',
          'Youtube\nLink',
          30,
          40,
          () => navigate(RoutePaths.MOBILE_YOUTUBE_LINK)
        )}
        {instantUploadItem(
          '#0682EF',
          '#094ED3',
          'announcement.png',
          'Announcement\nLink',
          37,
          37,
          () => navigate(RoutePaths.MOBILE_ANNOUNCEMENT)
        )}
        {instantUploadItem(
          '#52CA93',
          '#24973E',
          'insta.png',
          `Insta\nReels`,
          36,
          36,
          () => {}
        )}
      </div>
      <br />
      <div className='scrolling-wrapper'>
        <img
          className='game-card'
          src={require(`../../assets/images/mobile-ad.png`)}
          alt=''
        />
        <img
          className='game-card'
          src={require(`../../assets/images/cola-ad.png`)}
          alt=''
        />
      </div>
    </div>
  );
};

export default MobileLanding;
