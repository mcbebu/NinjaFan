import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { CounterButton } from './CounterButton';

export function CatalogueProductCard({ product, orders, setOrders }) {
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    setOrders({ ...orders, [product.ID]: {
      product,
      quantity,
    }})
  }, [quantity])

  return (
    <Card sx={{ width: 150, height: 250 }}>
      {/* <Link to={`/catalgoue/products/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}> */}
        <CardMedia
          sx={{ height: 119 }}
          image={product.image_url}
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
                <Typography sx={{ fontSize: 9 }}>
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
        </Grid>
        <Grid container sx={{ marginTop: '12px' }}>
          <Grid item>
            <CounterButton setQuantity={setQuantity} />
          </Grid>
        </Grid>
      </CardContent>
      {/* </Link> */}
    </Card>
  )
}
