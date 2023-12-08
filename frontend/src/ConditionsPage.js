// src/ConditionsPage.js

import React from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';

const conditions = [
  { id: 1, name: 'Dry Skin', imageUrl: 'link-to-dry-skin-image' },
  { id: 2, name: 'Oily Skin', imageUrl: 'link-to-oily-skin-image' },
  
];

function ConditionsPage() {
  return (
    <Box sx={{ flexGrow: 1, m: 2 }}>
      <Typography variant="h5" gutterBottom>
        Skin Conditions
      </Typography>
      <Grid container spacing={2}>
        {conditions.map((condition) => (
          <Grid item xs={12} sm={6} md={4} key={condition.id}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h6">
                  {condition.name}
                </Typography>
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
    </Box>
  );
}

export default ConditionsPage;
