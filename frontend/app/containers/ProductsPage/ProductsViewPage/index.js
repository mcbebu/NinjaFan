import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Image } from 'mui-image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProductDetail } from '../../../services/api';

export default function ProductsViewPage() {
  const { productID } = useParams();
  const [data, setData] = useState(undefined)
  
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

        <LinkList links={data.links ? data.links : []} productID={productID} />
        <ToastContainer />
      </>
    );
  }

  function LinkList({ links, productID }) {
    return links.map((obj) => (
      <Stack sx={{ marginTop: '20px' }}>
        <CopyToClipboard
          text={obj.text.replace(':productID', productID)}
          onCopy={() => {toast("Link has been copied successfully")}}
        >
          <Button sx={{ backgroundColor: '#C10230', color: 'white', width: '100%' }}>
            Get { obj.name } Link
          </Button>
        </CopyToClipboard>
      </Stack>
    ))
  }
