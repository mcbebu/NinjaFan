/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';


import { Button, CardContent, Grid } from '@mui/material';

const PENDING_STATUS = 1;

const STATUSES = {
  1: 'Pending',
  5: 'Cancelled'
}

export default function OrderCard({ order, onConfirm, onCancel }) {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardContent>
        <Typography>
          ID: <b> { order.ID } </b>
        </Typography>
        <Typography>
          Total Price: <b> Rp{ order.TotalPrice } </b>
        </Typography>
        <Typography>
          Buyer name: <b> { order.BuyerName} </b>
        </Typography>
        <Typography>
          Address: <b> { order.Address1 } </b>
        </Typography>
        <Typography>
          Status: <b> { STATUSES[order.Status] } </b>
        </Typography>
        <Grid container>
          {
            order.Status === PENDING_STATUS && (
              <Grid item xs={6}>
                <Button color="warning" onClick={() => onCancel(order)}>
                  Cancel Order
                </Button>
              </Grid>
            )
          }
          {
            order.Status === PENDING_STATUS && (
              <Grid item xs={6}>
                <Button color="success" onClick={() => onConfirm(order)}>
                  Confirm Order
                </Button>
              </Grid>
            )
          }
        </Grid>
      </CardContent>
    </Card>
  );
}
