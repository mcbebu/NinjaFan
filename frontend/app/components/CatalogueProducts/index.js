import { Add } from '@mui/icons-material';
import { Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CatalogueContext } from '../../containers/ProductsPage';
import { getProducts } from '../../services/api';
import { CatalogueProductCard } from '../CatalogueProduct/CatalogueProductCard';
import { ProductButton } from '../Product/ProductButton';
import { ProductCard } from '../Product/ProductCard';

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

