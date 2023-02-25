import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { CatalogueContext } from '../../ProductsPage';

export function CatalogueCartPage() {
  const {control, handleSubmit} = useForm();
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  
  useEffect(() => {
    const lsName = localStorage.getItem('name');
    if (lsName) {
      setName(lsName);
    }
    
    const lsContactNumber = localStorage.getItem('contactNumber');
    if (lsContactNumber) {
      setContactNumber(lsContactNumber);
    }

    const lsAddress = localStorage.getItem('address');
    if (lsAddress) {
      setAddress(lsAddress);
    }
  }, [])

  const saveContact = () => {
    localStorage.setItem('name', name)
    localStorage.setItem('contactNumber', contactNumber)
    localStorage.setItem('address', address)
  }

  const getTotalPrice = (orders) => {
    const productPrice = getProductPrice(orders)
    const shippingPrice = 10000
    return productPrice + shippingPrice
  }

  const getProductPrice = (orders) => {
    let productPrice = 0
    for (const obj of Object.values(orders)) {
      if (obj.product) {
        productPrice += (obj.product.price * obj.quantity)
      }
    }
    return productPrice
  }

  const onSubmit = (formData, orders) => {
    console.log('formData: ', formData)
    console.log('orders: ', orders)
  }
  
  return (
    <CatalogueContext.Consumer>
      {
        ({ orders }) => (
          <form onSubmit={handleSubmit(
            (formData) => {
              onSubmit(formData, orders)
            }
          )}>
            <Stack>
              <Typography sx={{ marginTop: '12px' }}>
                Cart
              </Typography>
            </Stack>
            <Orders orders={orders} />
            <Stack sx={{ marginTop: '12px' }}>
              <Controller
                name="name"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    required
                    id="name"
                    label="Name"
                    defaultValue={name}
                    value={value}
                    onChange={(e) => {
                      setName(e.target.value)
                      onChange(e)
                    }}
                    error={!!error}
                    multiline
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </Stack>

            <Stack sx={{ marginTop: '12px' }}>
              <Controller
                name="contactNumber"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    required
                    // type="number"
                    id="contactNumber"
                    defaultValue={contactNumber}
                    label="Contact Number"
                    value={value}
                    onChange={(e) => {
                      setContactNumber(e.target.value)
                      onChange(e)
                    }}
                    error={!!error}
                    multiline
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </Stack>
            <Stack sx={{ marginTop: '12px' }}>
              <Controller
                name="address"
                control={control}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    required
                    id="address"
                    defaultValue={address}
                    label="Address"
                    value={value}
                    onChange={(e) => {
                      setAddress(e.target.value)
                      onChange(e)
                    }}
                    error={!!error}
                    multiline
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </Stack>

            <Grid container>
              <Grid item xs="6">
                <Button onClick={() => saveContact()}>
                  Save Contact
                </Button>
              </Grid>
            </Grid>

            <Stack sx={{ marginTop: '16px' }}>
              <Typography>
                Product Price: {getProductPrice(orders)}
              </Typography>
            </Stack>

            <Stack sx={{ marginTop: '16px' }}>
              <Typography>
                Shipping Price: 10000
              </Typography>
            </Stack>

            <Stack sx={{ marginTop: '16px' }}>
              <Typography>
                Total Price: {getTotalPrice(orders)}
              </Typography>
            </Stack>

            <Stack sx={{marginTop: '24px' }}>
              <Button type="submit" sx={{ backgroundColor: '#C10230', color: 'white', textTransform: 'none', height: '40px' }}>
                Place Order
              </Button>
            </Stack>
          </form>
        )
      }
    </CatalogueContext.Consumer>
  )
}

function Orders({ orders }) {
  const orderList = orders ? Object.values(orders).map((order) => {
    if (order.quantity > 0) {
      return (
        <Card key={order.product.id} sx={{ width: '100%', height: 100 }}>
        <CardContent>
          <Stack>
            <Typography>
              {order.product.name}
            </Typography>
          </Stack>
          <Stack>
            <Typography sx={{ fontSize: '13px' }}>
              Price: {order.product.currrency} {order.product.price}
            </Typography>
          </Stack>
          <Stack>
            <Typography sx={{ fontSize: '13px' }}>
              Quantity: {order.quantity}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
      )
    }
  }) : (
    <p>Empty</p>
  )
  return orderList
}