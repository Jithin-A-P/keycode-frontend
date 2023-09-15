/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';
import RoutePaths from '@routes/RoutesPath';
import './styles.css';

const carouselImages = ['cola-ad.png', 'cola-ad.png', 'cola-ad.png'];

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
    // <div>
    //   <Carousel infiniteLoop autoPlay showArrows={false} showThumbs={false}>
    //     {carouselImages.map((image) => (
    //       <div key={image}>
    //         <img src={require(`../../assets/images/${image}`)} alt='ad' />
    //       </div>
    //     ))}
    //   </Carousel>
    //   <div className='my-8'>
    //     <Accordion>
    //       <AccordionSummary
    //         expandIcon={<ExpandMoreIcon />}
    //         aria-controls='panel1a-content'
    //         id='panel1a-header'
    //       >
    //         <Typography>Play game</Typography>
    //       </AccordionSummary>
    //       <AccordionDetails>
    //         <Button variant='text' startIcon={<SportsEsportsIcon />}>
    //           1 Player
    //         </Button>
    //         <div />
    //         <Button variant='text' startIcon={<SportsEsportsIcon />}>
    //           2 Player
    //         </Button>
    //       </AccordionDetails>
    //     </Accordion>
    //     <Accordion>
    //       <AccordionSummary
    //         expandIcon={<ExpandMoreIcon />}
    //         aria-controls='panel1a-content'
    //         id='panel1a-header'
    //       >
    //         <Typography>Instant uploads</Typography>
    //       </AccordionSummary>
    //       <AccordionDetails>
    //         <Button
    //           variant='text'
    //           onClick={() => navigate(RoutePaths.MOBILE_YOUTUBE_LINK)}
    //         >
    //           Youtube links
    //         </Button>
    //         <div />
    //         <Button
    //           variant='text'
    //           onClick={() => navigate(RoutePaths.MOBILE_ANNOUNCEMENT)}
    //         >
    //           Announcements
    //         </Button>
    //         <div />
    //         <Button variant='text'>Insta reels</Button>
    //         <Chip
    //           size='small'
    //           label='coming soon...'
    //           color='primary'
    //           variant='outlined'
    //         />
    //       </AccordionDetails>
    //     </Accordion>
    //   </div>
    // </div>
    <div>
      <h2 className='mobile-head'>HI, PLAYER! READY TO PLAY?</h2>
      <br />
      <div className='games-header'>
        <h2 className='available-games'>AVAILABLE GAMES</h2>
        <h2 className='available-games'>See All</h2>
      </div>
      {/* <Card sx={{ borderRadius: 2 }}>
        <CardMedia
          style={{ aspectRatio: 9 / 16 }}
          image={require(`../../assets/images/cola-ad.png`)}
          title='Name'
        />
      </Card> */}
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
    </div>
  );
};

export default MobileLanding;
