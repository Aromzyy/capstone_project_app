// src/ImageUpload.js


import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [predictions, setPredictions] = useState([]); // Use to store the list of predictions
  const [isLoading, setIsLoading] = useState(false);
  const decorativeImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShmsb1rFBcpAkcwi0Q_2HKIq433ESE8hZageiGvDjK1x-zJsvQ09Z5UroTcGTMKVgDlIs&usqp=CAU';

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setImageName(file.name);
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
      setPredictions(data.prediction); // Adjust this line to handle the new structure
    } catch (error) {
      console.error('Error:', error);
      setPredictions([{ class_name: 'Error predicting the disease.', probability: 0 }]);
    }
    setIsLoading(false);
  };

  return (
    <Card sx={{ maxWidth: 345, height: 'auto', margin: 'auto', mt: 5, textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Disease Prediction
        </Typography>
        <Box sx={{ mt: 2, mb: 2 }}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="upload-button-file">
              <Input accept="image/*" id="upload-button-file" type="file" onChange={handleImageChange} />
              <Button variant="contained" component="span" sx={{ backgroundColor: '#013220', '&:hover': { backgroundColor: '#01231a' } }}>
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
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CircularProgress />
          </Box>
        )}
        {!isLoading && predictions.length > 0 && (
          <Box mt={2}>
            <Typography>Based on our anaysis, we recommend that you seek a doctor's advice and diagnosis on the following conditions:</Typography>
            {predictions.map((prediction, index) => (
              <Typography key={index}>
                <b>{prediction.class_name}</b>: {(prediction.probability * 100).toFixed(2)}%
              </Typography>
           
              
            ))}
            <Typography> Please Remember that thease results are not conclusive as our aim is to help you understand your skin better</Typography>
              
          </Box>
        )}
        {imageName && !isLoading && <Typography variant="subtitle1" mt={2}>{imageName}</Typography>}
      </CardContent>
      {!isLoading && predictions.length === 0 && (
        <img src={decorativeImageUrl} alt="Decorative" style={{ maxWidth: '100%', height: 'auto', marginTop: 'auto' }} />
      )}
    </Card>
  );
}

export default ImageUpload;
