import { Add } from '@mui/icons-material';
import { Button, Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../services/api';
import { ProductButton } from '../Product/ProductButton';
import { ProductCard } from '../Product/ProductCard';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';

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
      <Grid container sx={{ marginTop: '20px' }} direction="row" justifyContent="space-between">
        <Grid item>
          <CopyToClipboard
            text={`${process.env.REACT_APP_FRONTEND_HOST}/products/catalogue`}
            onCopy={() => {toast("Link has been copied successfully")}}
          >
          <Button sx={{ backgroundColor: '#C10230', color: 'white', textTransform: 'none' }}>
            Get Catalogue Link
          </Button>
        </CopyToClipboard>
        </Grid>

        <Grid item>
          <Link to="/products/create" style={{ textDecoration: 'none' }}>
            <ProductButton
              startIcon={<Add style={{ color: 'white' }}/>}
              height="35px"
              fontSize="14px"
              name="Create"
            />
          </Link> 
        </Grid>
        
      </Grid>

      <Stack direction="row" justifyContent="end" sx={{ marginTop: '20px' }}>
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

      <ToastContainer />
      </> 
    )
}

