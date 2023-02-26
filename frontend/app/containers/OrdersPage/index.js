/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import Stack from '@mui/material/Stack';

import OrderCard from './OrderCard';
import { cancelOrder, getOrders } from '../../services/api';

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getOrders().then((resp) => {
      if (resp && resp.data && resp.data.data) {
        setOrders([...orders, ...resp.data.data]);
      }
    })
  }, [reload])

  return (
    <>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <Stack spacing={2}>
        {orders.map(order => (
          <OrderCard
            order={order}
            onCancel={async (order) => {
              const resp = await cancelOrder({ order_id: order.ID });
              if (resp && resp.status === 200) {
                setReload(!reload)
              }
            }}
          /> 
        ))}
      </Stack>
    </>
  );
}
