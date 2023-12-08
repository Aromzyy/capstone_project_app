import React from 'react';
import { Typography, Container, Box } from '@mui/material';

function AboutUs() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          We are a team dedicated to providing the best skin care solutions. Our mission is to help people understand their skin better and find products that work for them. With a science-first approach, we ensure that all our recommendations are backed by the latest research and dermatological advice.
        </Typography>
        
      </Box>
    </Container>
  );
}

export default AboutUs;
