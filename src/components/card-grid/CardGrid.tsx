/* eslint-disable global-require */
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

enum CatalogType {
  youtube_shorts = 'Youtube Shorts',
  image = 'Image',
  video = 'Video',
}

const CardGrid = ({ data }) => {
  const isVideo = (url) => /\.(mp4|mpg|mpeg4|webp|avi|mkv)$/.test(url);

  const isYoutubeVideo = (url) => url.includes('youtube.com') || url.includes('youtu.be')

  const getPreviewId = (url) => url.split('?')[0].split('/').pop();

  return (
    <Grid container spacing={6}>
      {data.map((item) => (
        <Grid item xs={12} sm={4} md={2} key={item.id}>
          <Card sx={{ maxWidth: 200 }}>
            <CardMedia
              sx={{ height: 140 }}
              component={(isVideo(item.url) && 'video') || 'image'}
              style={{ aspectRatio: 200 / 140 }}
              image={isYoutubeVideo(item.url) ? `https://img.youtube.com/vi/${getPreviewId(item.url)}/0.jpg`: item.url}
              title='Name'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {item.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {CatalogType[item.type]}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardGrid;
