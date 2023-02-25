import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Image } from 'mui-image'
import { getProductDetail } from '../../../services/api';
import { CounterButton } from '../../../components/CatalogueProduct/CounterButton';
import { CartButton } from '../../../components/Button/CartButton';

export default function CatalogueProductDetailPage({
  orders, setOrders
}) {
  const { productID } = useParams();
  const [data, setData] = useState(undefined)

  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    setOrders({ ...orders, [productID]: {
      product: data,
      quantity,
    }})
  }, [quantity])

  
  useEffect(() => {
    getProductDetail(productID).then((resp) => {
      if (resp && resp.data && resp.data.data) {
        console.log('resp.data.data: ', resp.data.data)
        setData(resp.data.data)
      }
    }).catch((err) => console.error(err))
  }, []);

  if (!data) {
    return <p></p>
  }

  return (
    <>
      <Stack>
        <Image src={data.image_url} sx={{maxHeight: '250px' }}/>
      </Stack>
      
      <Stack sx={{ marginTop: '15px' }}>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
      </Stack>

      <Stack sx={{ marginTop: '10px' }}>
        <Typography variant="body2">
          Price: <b> {data.currency} {data.price} </b>
        </Typography>
      </Stack>

      <Stack sx={{ marginTop: '10px' }}>
        <Typography variant="body2">
          Weight: <b> {data.weight} {data.weight_unit} </b>
        </Typography>
      </Stack>

      <Stack sx={{ marginTop: '10px' }}>
        <Typography variant="body2">
          Status: <b> {data.stock ? 'Available' : 'Not available' } </b>
        </Typography>
      </Stack>

      <Stack sx={{ marginTop: '10px' }}>
        <Typography variant="body2" sx={{ marginTop: '15px', lineHeight: '30px', textAlign: 'justify' }}>
          {data.description}
        </Typography>
      </Stack>

      <Stack sx={{ marginTop: '10px' }}>
        <CounterButton setQuantity={setQuantity}/>
      </Stack>

      <CartButton orders={orders} />
    </>
  );
}

