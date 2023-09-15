/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  Accordion,
  Button,
  AccordionSummary,
  AccordionDetails,
  Card,
  CardMedia,
  makeStyles,
} from '@mui/material';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useNavigate } from 'react-router-dom';
import RoutePaths from '@routes/RoutesPath';
import './styles.css';

const carouselImages = ['cola-ad.png', 'cola-ad.png', 'cola-ad.png'];

const MobileLanding = () => {
  const navigate = useNavigate();

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
    </div>
  );
};

export default MobileLanding;
