/* eslint-disable global-require */
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const items = [
    { id: 1, name: 'Item 1', type: 'image' },
    { id: 2, name: 'Item 2', type: 'video' },
    { id: 3, name: 'Item 3', type: 'image' },
    { id: 1, name: 'Item 1', type: 'image' },
    { id: 2, name: 'Item 2', type: 'video' },
    { id: 3, name: 'Item 3', type: 'image' },
    { id: 1, name: 'Item 1', type: 'image' },
    { id: 2, name: 'Item 2', type: 'video' },
    { id: 3, name: 'Item 3', type: 'image' },
];

const CardGrid = (props) => (
    <Grid container spacing={6}>
        {items.map((item) => (
            <Grid item xs={12} sm={4} md={2} key={item.id}>
                <Card sx={{ maxWidth: 200 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        style={{aspectRatio: 200 / 140}}
                        image={require('../../assets/images/catalogs/images.jpeg')}
                        title="abcd"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.type}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
);

export default CardGrid;