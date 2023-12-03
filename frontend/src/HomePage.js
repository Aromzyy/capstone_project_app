import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Card, CardContent, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const conditions = [
  // Your conditions here
  { id: 1, name: 'Dry Skin', imageUrl: 'link-to-condition-image' },
  { id: 2, name: 'Oily Skin', imageUrl: 'link-to-condition-image' },
  // ... more conditions
];

function HomePage() {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Home
          </Typography>
          {/* Navigation buttons updated with navigate function */}
          <Button color="inherit" onClick={() => navigate('/about')}>About Us</Button>
          <Button color="inherit" onClick={() => navigate('/conditions')}>Conditions</Button>
          <Button color="inherit" onClick={() => navigate('/upload')}>Upload Image</Button>
          <Button color="inherit" onClick={() => navigate('/products')}>Products</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, m: 2 }}>
        <Typography variant="h5" gutterBottom>
          Skin Conditions
        </Typography>
        {/* Conditions Grid */}
        <Grid container spacing={2}>
          {conditions.map((condition) => (
            <Grid item xs={12} sm={6} md={4} key={condition.id}>
              <Card>
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {condition.name}
                  </Typography>
                  {/* Add condition images */}
                  <Box
                    component="img"
                    sx={{
                      height: 233,
                      width: '100%',
                      maxHeight: { xs: 233, md: 167 },
                      maxWidth: { xs: 350, md: 250 },
                    }}
                    alt={condition.name}
                    src={condition.imageUrl}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>iugutdftesdrty89trszt7ftyfy8ugky80gilvugy80ugilhvuy8ougyilugkhuy80ho    
    </>
  );
}

export default HomePage;
