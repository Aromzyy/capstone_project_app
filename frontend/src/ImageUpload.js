// src/ImageUpload.js


import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Style the input file to hide it visually and replace it with a Material-UI Button
const Input = styled('input')({
  display: 'none',
});

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(''); // Add state to keep track of the image name
  const [prediction, setPrediction] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const decorativeImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmsb1rFBcpAkcwi0Q_2HKIq433ESE8hZageiGvDjK1x-zJsvQ09Z5UroTcGTMKVgDlIs&usqp=CAU'; // Replace with your image path

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImageName(file.name); // Set the image name for display
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!image) {
      alert('Please select an image first.');
      return;
    }
    setIsLoading(true);
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPrediction(data.prediction);
    } catch (error) {
      console.error('Error:', error);
      setPrediction('Error predicting the disease.');
    }
    setIsLoading(false);
  };

  return (
    <Card sx={{ maxWidth: 345, height: 'auto', margin: 'auto', mt: 5, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Upload Files
        </Typography>
        <Box sx={{ mt: 2, mb: 2 }}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="upload-button-file">
              <Input accept="image/*" id="upload-button-file" type="file" onChange={handleImageChange} />
              <Button variant="contained" component="span"
              sx={{ backgroundColor: '#013220', '&:hover': { backgroundColor: '#01231a' } }} 
              
              >
                Upload
              </Button>
            </label>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isLoading}
              sx={{ ml: 2, backgroundColor: '#013220', '&:hover': { backgroundColor: '#01231a' } }}
            >
              Predict
            </Button>
          </form>
        </Box>
        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}
          
          >
            <CircularProgress />
          </Box>
        )}
        {prediction && <Typography mt={2}>Prediction: {prediction}</Typography>}
        {imageName && <Typography variant="subtitle1" mt={2}>{imageName}</Typography>} {/* Display the image name */}
      </CardContent>
      {!isLoading && !prediction && ( // Show the decorative image only when not loading or showing prediction
        <img src={decorativeImageUrl} alt="Decorative" style={{ maxWidth: '100%', height: 'auto', marginTop: 'auto' }} />
      )}
    </Card>
  );

  
}

export default ImageUpload;
