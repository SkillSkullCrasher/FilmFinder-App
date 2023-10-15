import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {
    const movie=props.data;
  return (
    <Card sx={{ maxWidth: 345 }} key={movie.id}> 
      <CardActionArea>
        <CardMedia
          component="img"
          image={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}