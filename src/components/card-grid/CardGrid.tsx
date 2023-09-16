/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable global-require */
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import VideocamIcon from '@mui/icons-material/Videocam';
import ImageIcon from '@mui/icons-material/Image';
import './styles.css'

const CardGrid = (props) => {

    const {data, onClick, rowCount = 2, aspectRatio = 9 / 16} = props;
  
  const isYoutubeVideo = (url) =>
    url?.includes('youtube.com') || url?.includes('youtu.be');

  const isVideo = (url) => /\.(mp4|mpg|mpeg4|webp|avi|mkv)$/.test(url);
  
  return (
    <Grid container spacing={5}>
      {data?.slice(0, 10).map((item) => (
        <Grid item xs={12} sm={4} md={rowCount} key={item.id}>
        <div onClick={() => onClick(item)}>
          <Card sx={{ maxWidth: 200, borderRadius: 4, boxShadow: 4 }} className='card-styles'>
            <CardMedia
              component={(isVideo(item.url) && 'video') || 'image'}
              style={{ aspectRatio }}
              image={
                item.url
              }
              title='Name'
            />
            {(isVideo(item.url) || isYoutubeVideo(item.url)) && <VideocamIcon className='card-icon'/> || <ImageIcon className='card-icon'/>}
          </Card>
          <p className='catalog-title'>
            {item.name}
          </p>
        </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
