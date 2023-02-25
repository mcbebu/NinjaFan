import React from 'react';
import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import { ProductButton } from './ProductButton';
import { Edit, InsertLink } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export const ProductContext = React.createContext();


export function ProductCard({ product }) {
  return (
    <Card sx={{ width: 150, height: 225 }}>
      <ProductContext.Provider value={{ data: product }}>
        <Link to={`/product/${product.id}/view`} style={{ textDecoration: 'none', color: 'black' }}>
          <CardMedia
            sx={{ height: 119 }}
            image={product.imageUrl}
          />
          <CardContent>
          <Grid container>
            <Grid item>
              <Typography sx={{ fontSize: 14, fontWeight: 'medium' }}>
                {product.name}
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={5}>
              <Grid container>
                <Grid item>
                  <Typography sx={{ fontSize: 9}}>
                    Price
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item>
                  <Typography sx={{ fontSize: 12, fontWeight: 'medium' }}>
                    {product.currency}{product.price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <ProductButton
                name="Edit"
                height="25px"
                fontSize="12px"
                startIcon={<Edit sx={{ color: 'white', width: '11px' }} />}
                marginTop="5px"
              />
            </Grid>
          </Grid>
        </CardContent>
        </Link>
      </ProductContext.Provider>
    </Card>
  )
}
