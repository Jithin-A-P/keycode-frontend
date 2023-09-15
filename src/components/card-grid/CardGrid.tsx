import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import VideocamIcon from '@mui/icons-material/Videocam';
import ImageIcon from '@mui/icons-material/Image';
import './styles.css'

const CardGrid = ({ data }) => {
  
  const isYoutubeVideo = (url) =>
    url.includes('youtube.com') || url.includes('youtu.be');

  const isVideo = (url) => /\.(mp4|mpg|mpeg4|webp|avi|mkv)$/.test(url);
  
  const getPreviewId = (url) => url.split('?')[0].split('/').pop();

  return (
    <Grid container spacing={5}>
      {data.map((item) => (
        <Grid item xs={12} sm={4} md={2} key={item.id}>
          <Card sx={{ maxWidth: 200, borderRadius: 4, boxShadow: 4 }} className='card-styles'>
            <CardMedia
              component={(isVideo(item.url) && 'video') || 'image'}
              style={{ aspectRatio: 9 / 16 }}
              image={
                isYoutubeVideo(item.url)
                  ? `https://img.youtube.com/vi/${getPreviewId(item.url)}/0.jpg`
                  : item.url
              }
              title='Name'
            />
            {(isVideo(item.url) || isYoutubeVideo(item.url)) && <VideocamIcon className='card-icon'/> || <ImageIcon className='card-icon'/>}
          </Card>
          <p className='catalog-title'>
            {item.name}
          </p>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
