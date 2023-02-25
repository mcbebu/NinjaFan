import { Add } from '@mui/icons-material';
import { Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { productDatas } from '../../tests/data/product';
import { ProductButton } from '../Product/ProductButton';
import { ProductCard } from '../Product/ProductCard';

export function Products() {
  return (
    <>
      <Stack direction="row" justifyContent="end">
        <Link to="/products/create" style={{ textDecoration: 'none' }}>
          <ProductButton
            startIcon={<Add style={{ color: 'white' }}/>}
            height="35px"
            fontSize="14px"
            name="Create"
          />
        </Link> 
      </Stack>
      <Stack direction="row" justifyContent="end">
        <Grid container spacing={4}>
          {
            productDatas.map((prod) => {
              return (
                <Grid item>
                  <ProductCard product={prod} />
                </Grid>
              )
            })
          }
        </Grid>
      </Stack>
      </> 
    )
}

