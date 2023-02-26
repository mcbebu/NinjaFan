import { Grid, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { CatalogueContext } from '../../containers/ProductsPage';
import { getProducts } from '../../services/api';
import { CatalogueProductCard } from '../CatalogueProduct/CatalogueProductCard';

export function CatalogueProducts() {
  const [productDatas, setProductDatas] = useState([])

  useEffect(() => {
    getProducts().then((resp) => {
      if (resp && resp.data && resp.data.data) {
        setProductDatas([...productDatas, ...resp.data.data])
      }
    }).catch((err) => console.error(err))
  }, []);

  return (
      <>
        <Stack
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: '#C10230', color: 'white', height: '50px' }}
        >
          Welcome to Catalogue
        </Stack>
        <Stack direction="row" sx={{ marginTop: '30px' }}>
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
      </>
    )
}

