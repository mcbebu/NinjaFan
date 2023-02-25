import { Add } from '@mui/icons-material';
import { Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../services/api';
import { productDatas } from '../../tests/data/product';
import { ProductButton } from '../Product/ProductButton';
import { ProductCard } from '../Product/ProductCard';

export function Products() {
  const [productDatas, setProductDatas] = useState([]);

  useEffect(() => {
    getProducts().then((resp) => {
      if (resp && resp.data && resp.data.data) {
        setProductDatas([...productDatas, ...resp.data.data])
      }
    }).catch((err) => console.error(err))
  }, [])

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
            (productDatas.length > 0) && productDatas.map((prod) => {
              return (
                <Grid item key={prod.ID}>
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

