/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Accordion, Button, AccordionSummary, AccordionDetails } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useNavigate } from 'react-router-dom';
import RoutePaths from '@routes/RoutesPath';

const carouselImages = ['cola-ad.png', 'cola-ad.png', 'cola-ad.png']


const MobileLanding = () => {
  const navigate = useNavigate();

    return <div>
         <Carousel infiniteLoop autoPlay showArrows={false} showThumbs={false}>
            {carouselImages.map((image) => <div key={image}>
                <img  src={require(`../../assets/images/${image}`)} alt='ad' />
            </div>)}
        </Carousel>
        <div className='my-8'>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>Play game</Typography>
         </AccordionSummary>
         <AccordionDetails>
          <Button variant='text' startIcon={<SportsEsportsIcon />}>1 Player</Button>
          <div />
          <Button variant='text' startIcon={<SportsEsportsIcon />} >2 Player</Button>
         </AccordionDetails>
         </Accordion>
         <Accordion>
         <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>Instant uploads</Typography>
         </AccordionSummary>
         <AccordionDetails>
         <Button variant='text' onClick={() => navigate(RoutePaths.MOBILE_YOUTUBE_LINK)} >Youtube links</Button>
          <div/>
          <Button variant='text' onClick={() => navigate(RoutePaths.MOBILE_ANNOUNCEMENT)} >Anouncements</Button>
          <div/>
          <Button variant='text' >Insta reels</Button>
         </AccordionDetails>
        </Accordion>
        </div>
    </div>
};

export default MobileLanding;
