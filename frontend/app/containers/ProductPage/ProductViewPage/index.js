import React, { useEffect, useState } from 'react';
import {  useHistory, useParams } from 'react-router-dom';
import { productDatas } from '../../../tests/data/product';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton, Stack } from '@mui/material';
import { InsertLink } from '@mui/icons-material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Image } from 'mui-image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// TODO update CSS
export default function ProductViewPage() {
    const { productID } = useParams();

    const [data, setData] = useState(undefined)
    
    useEffect(() => {
      const datas = productDatas.filter((data) => {
        return data.id == productID
      })
      
      if (!datas || datas.length === 0) {
        return
      }
      setData(datas[0])
    }, [data]);

    if (!data) {
      return <p></p>
    }

    return (
        <>
          <Stack>
            <Image src={data.imageUrl} sx={{maxHeight: '250px' }}/>
          </Stack>
          
          <Stack sx={{ marginTop: '15px' }}>
            <Typography gutterBottom variant="h5" component="div">
              {data.name}
            </Typography>
          </Stack>

          <Stack sx={{ marginTop: '10px' }}>
            <Typography variant="body2">
              Price: <b> {data.price/100} {data.currency} </b>
            </Typography>
          </Stack>

          <Stack sx={{ marginTop: '10px' }}>
            <Typography variant="body2">
              Weight: <b> {data.weight} {data.weightUnit} </b>
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

          <LinkList links={data.links ? data.links : []} />
          <ToastContainer />
        </>
      );
  }

  function LinkList({ links }) {
    return links.map((obj) => (
      <Stack sx={{ marginTop: '20px' }}>
        <CopyToClipboard
          text={obj.text}
          onCopy={() => {toast("Link has been copied successfully")}}
        >
          <Button sx={{ backgroundColor: '#C10230', color: 'white', width: '100%' }}>
            Get { obj.name } Link
          </Button>
        </CopyToClipboard>
      </Stack>
    ))
  }
