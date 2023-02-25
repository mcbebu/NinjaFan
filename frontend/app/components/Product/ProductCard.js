import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { ProductButton } from './ProductButton';
import { Edit } from '@mui/icons-material';

export function ProductCard({
  name,
  price,
  imageUrl
}) {
  return (
    <Card sx={{ width: 150, height: 198 }}>
      <CardMedia
        sx={{ height: 119 }}
        image={imageUrl}
      />
      <CardContent>
        <Grid container>
          <Grid item>
            <Typography sx={{ fontSize: 14, fontWeight: 'medium' }}>
              {name}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={5}>
            <Grid container>
              <Grid item>
                <Typography sx={{ fontSize: 9 }}>
                  Price
                </Typography>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <Typography sx={{ fontSize: 12, fontWeight: 'medium' }}>
                  {price}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ProductButton
              name="Edit"
              height="25px"
              fontSize="11px"
              startIcon={<Edit sx={{ color: 'white', width: '11px' }} />}
              marginTop="5px"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}
