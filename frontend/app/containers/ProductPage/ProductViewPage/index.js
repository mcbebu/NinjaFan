import React, { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import { productDatas } from '../../../tests/data/product';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// TODO update CSS
export default function ProductViewPage() {
    let {productID} = useParams();
    if (productID == 0) {
        return <></>
    }

    const [data, setData] = React.useState([])
    // API to get the product list (use effect)
    useEffect(()=>{
        // TEST data
        if (productID in productDatas) {
            setData(productDatas[productID])
        }
    })

    return (
    <Card >
      <CardMedia
        sx={{ height: 500 }}
        image={data.imgURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.title}
        </Typography>
        <Typography variant="body2">
          {data.description}
        </Typography>
        <Typography variant="body2">
          Price: {data.price/100} {data.currency}
        </Typography>
        <Typography variant="body2">
          {data.stock? "Available" : "Not Available"}
        </Typography>
        <Typography variant="body2">
          Dimension: {data.dimension}
        </Typography>
      </CardContent>
    </Card>
    );
  }