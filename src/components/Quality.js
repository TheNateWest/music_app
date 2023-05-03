import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const label = { inputProps: { 'aria-label': 'Online Mode' } };


export default function OnlineMode({quality, setQuality}) {
   
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Sound Quality
        </Typography>
        <Typography variant="body2">
          Manually control the music quality in event of poor connection.
        </Typography>
      </CardContent>
      <CardActions>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quality}
          label="Age"
          onChange={(e)=> setQuality(e.target.value)}
        >
          <MenuItem value={1}>Low Quality</MenuItem>
          <MenuItem value={2}>Medium Quality</MenuItem>
          <MenuItem value={3}>High Quality</MenuItem>
        </Select>
      </CardActions>
      
        


    </Card>
  );
}