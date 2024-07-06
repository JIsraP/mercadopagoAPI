import React from 'react';
import { Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { StarOutline } from '@mui/icons-material';

export const RatingStars = ({ value }) => {
  // Calcula el número de estrellas enteras y la fracción de estrella
  const intValue = Math.floor(value);
  const remainder = value - intValue;
  
  // Genera el array de estrellas enteras y la fracción de estrella
  const stars = [...Array(intValue)].map((_, index) => (
    <StarIcon key={index} sx={{ color: 'App.black', fontSize: '20px' }} />
  ));
  
  // Si hay una fracción mayor que 0, añade una estrella de media
  if (remainder > 0) {
    stars.push(<StarHalfIcon key={stars.length} sx={{ color: 'App.black', fontSize:'20px' }} />);
  }
  
  // Calcula la cantidad de estrellas faltantes para completar 5
  const remainingStars = 5 - stars.length;
  
  // Añade las estrellas faltantes
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<StarOutline key={stars.length + i} sx={{ color: 'App.black', fontSize: '20px' }} />);
  }
  
  return (
    <Grid style={{ display: 'flex', alignItems: 'center' }}>
      {stars}
    </Grid>
  );
};