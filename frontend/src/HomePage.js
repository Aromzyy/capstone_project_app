
// src/HomePage.js

import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Ensure your CSS file is correctly linked
import StepsPanel from './StepsPanel';
import AboutPanel from './AboutPanel'; 
import MissionPanel from './MissionPanel'; 

function HomePage() {
  const navigate = useNavigate();
  const videoPath = "/vecteezy_close-up-of-young-woman-squeezing-pimples-on-her-face_22167395.mov", type="video/mp4"; // Update with the correct path
  
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#013220' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={() => navigate('/conditions')}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Suppler!
          </Typography>
          <Button color="inherit" onClick={() => navigate('/about')}>About Us</Button>
          <Button color="inherit" onClick={() => navigate('/conditions')}>Conditions</Button>
          <Button color="inherit" onClick={() => navigate('/upload')}>Upload Image</Button>
          <Button color="inherit" onClick={() => navigate('/products')}>Products</Button>
        </Toolbar>
      </AppBar>
      <Box className="video-overlay-container">
        <video autoPlay loop muted className="background-video">
          <source src={videoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Typography variant="h4" component="h1" className="overlay-text">
          At Suppler, we believe that everyone should have access to skincare
        </Typography>
      </Box>
      <Box className="info-panel">
        <Typography variant="h5" className="info-text">
          We aim to help identify signs of common conditions such as:
        </Typography>
        <Box className="conditions-list">
          <Typography variant="body1">01. Epidermal Cyst</Typography>
          <Typography variant="body1">02. Verruca Vulgaris (Common Wart)</Typography>
          <Typography variant="body1">03. Keloids</Typography>
          <Typography variant="body1">04. Hyperpigmentation</Typography>
          
        </Box>
        <Button variant="outlined" onClick={() => navigate('/conditions')} className="learn-more-button">
          Learn more
        </Button>
        <Typography variant="caption" display="block" gutterBottom className="disclaimer-text">
    *Suppler is not a replacement for dermatologist visits, please ensure that you visit a dermatologist to verify results.
        </Typography>
      </Box>
      <StepsPanel />
      <AboutPanel navigate={navigate} />
      <MissionPanel navigate={navigate} />

    </>
  );
}

export default HomePage;



