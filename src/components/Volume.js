import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const label = { inputProps: { 'aria-label': 'Online Mode' } };


export default function OnlineMode({volume, setVolume}) {
   
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Master Volume
        </Typography>
        <Typography variant="body2">
          Overrides all other sound settings in this application.
        </Typography>
      </CardContent>
      <CardActions>
      <Slider
        aria-label="Volume"
        value={volume}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
        onChange={(e)=> setVolume(e.target.value)}
      />
      </CardActions>
      
        


    </Card>
  );
}