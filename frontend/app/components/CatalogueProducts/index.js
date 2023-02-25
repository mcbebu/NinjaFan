import { Add } from '@mui/icons-material';
import { Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { CatalogueContext } from '../../containers/ProductsPage';
import { productDatas } from '../../tests/data/product';
import { CatalogueProductCard } from '../CatalogueProduct/CatalogueProductCard';
import { ProductButton } from '../Product/ProductButton';
import { ProductCard } from '../Product/ProductCard';

export function CatalogueProducts() {
  return (
      <Stack direction="row" justifyContent="end">
        <Grid container spacing={4}>
          {
            productDatas.map((prod) => {
              return (
                <Grid item>
                  <CatalogueContext.Consumer>
                    {
                      ({ orders, setOrders }) => (
                        <CatalogueProductCard product={prod} orders={orders} setOrders={setOrders}/>
                      )
                    }

                  </CatalogueContext.Consumer>
                </Grid>
              )
            })
          }
        </Grid>
      </Stack>
    )
}

