import { Add } from '@mui/icons-material';
import { Grid, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { ProductButton } from '../Product/ProductButton';
import { ProductCard } from '../Product/ProductCard';

export function Products() {
  const [products, setProducts] = React.useState([
    {
      id: 1,
      name: 'Sweater-Knitted',
      price: '$200',
      imageUrl: 'https://cdn-facpg.nitrocdn.com/OusIzrOrgAhkXofPVQIPbIcDPXRbbpOc/assets/images/optimized/rev-56ed954/wp-content/uploads/2022/03/How-do-hackathons-work-1024x576.png'
    },
    {
      id: 2,
      name: 'Sweater-Knitted2',
      price: '$300',
      imageUrl: 'https://cdn-facpg.nitrocdn.com/OusIzrOrgAhkXofPVQIPbIcDPXRbbpOc/assets/images/optimized/rev-56ed954/wp-content/uploads/2022/03/How-do-hackathons-work-1024x576.png'
    },
    {
      id: 3,
      name: 'Sweater-Knitted3',
      price: '$300',
      imageUrl: 'https://cdn-facpg.nitrocdn.com/OusIzrOrgAhkXofPVQIPbIcDPXRbbpOc/assets/images/optimized/rev-56ed954/wp-content/uploads/2022/03/How-do-hackathons-work-1024x576.png'
    },
    {
      id: 4,
      name: 'Sweater-Knitted4',
      price: '$300',
      imageUrl: 'https://cdn-facpg.nitrocdn.com/OusIzrOrgAhkXofPVQIPbIcDPXRbbpOc/assets/images/optimized/rev-56ed954/wp-content/uploads/2022/03/How-do-hackathons-work-1024x576.png'
    }
  ]);

  return (
    <>
      <Stack direction="row" justifyContent="end">
        <Link to="/product/create" style={{ textDecoration: 'none' }}>
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
          products.map((prod) => {
            return (
              <Grid item>
                <ProductCard
                  id={prod.id}
                  name={prod.name}
                  price={prod.price}
                  imageUrl={prod.imageUrl}
                />
              </Grid>
            )
          })
        }
      </Grid>
      </Stack>
      </> 
    )
}