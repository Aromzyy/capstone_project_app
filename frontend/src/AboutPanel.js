import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function AboutPanel({ navigate }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#013220', 
        padding: '50px', 
        color: 'white', 
        backgroundImage: 'url(/your-background-image.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Typography variant="h4" sx={{ marginRight: '20px' }}>
        Open your mind to the possibility of you.
      </Typography>
      <Button
        variant="contained"
        onClick={() => navigate('/about')}
        sx={{ backgroundColor: 'white', color: '#013220' }} 
      >
        Learn more
      </Button>
    </Box>
  );
}

export default AboutPanel;
