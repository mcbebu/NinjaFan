import { ShoppingCart } from '@mui/icons-material';
import { Fab } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

export function CartButton({ orders }) {
  const [quantity, setQuantity] = useState(0)
  const history = useHistory();

  useEffect(() => {
    if (orders === undefined || Object.keys(orders).length === 0) {
      setQuantity(0)
    }
    let quantity = 0
    for (const obj of Object.values(orders)) {
      quantity += obj.quantity
    }
    setQuantity(quantity)
  }, [orders])


  if (quantity > 0) {
    return (
      <Fab 
        onClick={() => history.push('/products/catalogue/cart')}
        sx={{
        backgroundColor: '#C10230',
        bottom: '20px',
        right: '20px',
        position: 'fixed',
        left: 'auto',
        margin: 0,
        color: 'white'
      }}>
        <ShoppingCart />
        <p> {quantity} </p>
      </Fab>
    )
  }
}
