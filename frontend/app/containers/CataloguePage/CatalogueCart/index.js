import { Button, Card, CardContent, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { CatalogueContext } from '../../ProductsPage';

export function CatalogueCartPage() {
  const {control, handleSubmit} = useForm();

  const onSubmit = (data, orders) => {
    console.log('data: ', data)
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
                    value={value}
                    onChange={onChange}
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
                    type="number"
                    id="contactNumber"
                    label="Contact Number"
                    value={value}
                    onChange={onChange}
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
                    label="Address"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    multiline
                    helperText={error ? error.message : null}
                  />
                )}
              />
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
  const orderList = orders ? Object.values(orders).map((order) => (
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
  ) : (
    <p>Empty</p>
  )
  return orderList
}