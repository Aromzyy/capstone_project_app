// StepsPanel.js

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import './StepsPanel.css'; 


const steps = [
    {
      title: 'Step 1',
      description: 'Upload a picture of the affected area.',
      buttonText: 'Upload',
      image: '/selfie2.jpeg',
      hasButton: true, 
    },
    {
      title: 'Step 2',
      description: 'Get a prediction',
      image: '/understand.jpeg',
       
    },

    {
      title: 'Step 3',
      description: 'Read about the condition ',
      image: '/understand.jpeg',
       
    },
    {
      title: 'Step 4',
      description: 'Talk to a Derm ',
      image: '/derm.jpeg',
       
    },
  ];

function StepsPanel() {
    return (
      <Box className="steps-container">
      {steps.map((step, index) => (
        <Box key={index} className={`step step-${index + 1}`} sx={{ backgroundImage: `url(${step.image})` }}>
          <Box className="step-content">
            <Box className="step-text">
              <Typography variant="h5" className="step-title">{step.title}</Typography>
              <Typography className="step-description">{step.description}</Typography>
            </Box>
            {step.hasButton && (
              <Button variant="contained" className="step-button">{step.buttonText}</Button>
            )}
          </Box>
        </Box>
      ))}
    </Box>
      );
}

export default StepsPanel;
