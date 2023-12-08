import React from 'react';
import { Typography, Container, Grid, Card, CardMedia, CardContent, CardActions, Button, Box } from '@mui/material';


const products = [
  { id: 1, name: 'Moisturizing Cream', price: '$19.99', imageUrl: '/path-to-moisturizing-cream.jpg' },
  { id: 2, name: 'Sunscreen', price: '$15.99', imageUrl: '/path-to-sunscreen.jpg' },
  
];

function Products() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Our Products
        </Typography>
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.imageUrl}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description || "No description available."}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                  <Typography variant="body1" style={{ marginLeft: 'auto' }}>
                    {product.price}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Products;
