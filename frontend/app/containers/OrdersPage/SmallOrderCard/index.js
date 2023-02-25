/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
// import Card from '@mui/material/Card';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlagIcon from '@mui/icons-material/Flag';
import HideSourceIcon from '@mui/icons-material/HideSource';
import ScheduleIcon from '@mui/icons-material/Schedule'; /* Creation type */
import PriceCheckIcon from '@mui/icons-material/PriceCheck'; /* Is it already paid */
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'; /* Total payment */
// import FinanceChipIcon from '@mui/icons-material/FinanceChip'; /* payment method */
import HandshakeIcon from '@mui/icons-material/Handshake'; /* payment method 2: */
import PaymentsIcon from '@mui/icons-material/Payments'; /* cash */
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; /* transfer */
import InventoryIcon from '@mui/icons-material/Inventory'; /* Stock */
import NearMeIcon from '@mui/icons-material/NearMe';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

// const data3 = {
//   totalPrice: "4550",
//   address: "",
//   distance: "",
//   status:"Waiting Seller Confirmation",
//   paymentMethod:"Cash On Demand",
//   orderTime:"46346456095",
//   orderId: "1jg2n8472789734nv923",
//   itemGroups: [
//     {name:"Bandrek", quantity:"30", stock:"15", subTotalPrice:"500,000.00"},
//     {name:"Milo", quantity:"412"},
//     {name:"Sweater", quantity:"70"},
//     {name:"Jacket", quantity:"1"},
//     {name:"Dress Shoes", quantity:"20"}]
// }

export default function SmallOrderCard({props, isSingleItemKind}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  // var d = new Date(parseInt(props.orderTime));
  // var date = d.toLocaleString();  
  // var isSingleItemKind = props.itemGroups.length === 1;

  if (isSingleItemKind){
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
        <Typography paragraph>
        <b >Product Name:</b> {props.name} <br/>
        <b> Quantity:</b> {props.quantity}  <br/>
        <b> Stock:</b> {props.stock}  <br/>
        <b> Subtotal Price:</b> {props.subTotalPrice} <br/>
        </Typography>
        {/* <Button sx={{ width:'auto', minWidth:'auto'}}> Change Status </Button> */}
      </div>
    );
  } else {
    return (
    
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <CardMedia
            component="img"
            height="194"
            image="https://img.ltwebstatic.com/images3_pi/2021/11/23/1637652358d85a6c954cf7f43fc2cecf25443803a4_thumbnail_900x.webp"
          />
          }
          sx={{padding: 0}}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title= { props.name  }
        />
        <CardActions sx={{paddingTop:'0.5rem', paddingLeft:'1rem'}}>
            <span sx={{ display:'flex', flexWrap:'wrap', width:'100%', gap: 20 }}>
            {/* <FlagIcon fontSize='small' /> */}
            {/* <div style="display:flex;flex-wrap:wrap"> */}
              <ShoppingCartIcon fontSize='small' aria-label="Quantity" /> 
              <Button size='small' variant='text' disableRipple disableFocusRipple sx={{  width:'auto', minWidth:'auto'}}> {props.quantity} </Button>
              {/* <PinDropIcon fontSize='small' aria-label="Postcode" /> */}
              <InventoryIcon fontSize='small' aria-label="Stock" />
              <Button size='small' variant='text' disableRipple disableFocusRipple sx={{ width:'auto', minWidth:'auto'}}> {props.stock} </Button>
              {/* <ScheduleIcon fontSize='small' aria-label="Order creation time" /> 
              <Button size='small' variant='text' disableRipple disableFocusRipple sx={{ margin:0, padding:0, width:'auto', minWidth:'auto'}}> 20/2 22:10 </Button> */}
              {/* <PriceCheckIcon fontSize='small' aria-label="Payment verification" />
              <Button size='small' variant='text' disableRipple disableFocusRipple sx={{ margin:0, padding:0, width:'auto', minWidth:'auto'}}> Paid </Button> */}
              {/* <PinDropIcon fontSize='small' aria-label="Delivery distance from me" />
              <Button size='small' variant='text' disableRipple disableFocusRipple sx={{ width:'auto', minWidth:'auto'}}> 100km </Button> */}
              <AttachMoneyIcon fontSize='small' aria-label="Subtotal payment" /> 
              <Button size='small' variant='text' disableRipple disableFocusRipple sx={{  width:'auto', minWidth:'auto'}}> {props.subTotalPrice} </Button>
              {/* <HandshakeIcon fontSize='small' aria-label="Payment Method" />  */}
              {/* <Button size='small' variant='text' disableRipple disableFocusRipple sx={{ width:'auto', minWidth:'auto'}}> : </Button>
              <PaymentsIcon color='green' sx={{color:'green'}} fontSize='small' aria-label="Cash" /> */}
              {/* <AccountBalanceIcon fontSize='small' sx={{color:'blue'}} aria-label="Transfer" /> */}
              {/* <Button size='small' variant='text' disableRipple disableFocusRipple sx={{ width:'auto', minWidth:'auto'}}> </Button> */}
              {/* <NearMeIcon fontSize='small' aria-label="" /> */}
            {/* </div> */}
            {/* <IconButton aria-label="hide order" >
              <HideSourceIcon />
            </IconButton> */}
            </span>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            sx={{ marginLeft:'auto'}}
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit sx={{ padding:"10px"}}>

              <div style={{display:"flex", flexDirection:"column"}}>
                  <Typography paragraph>
                  <b >Product Name:</b> {props.name} <br/>
                  <b> Quantity:</b> {props.quantity}  <br/>
                  <b> Stock:</b> {props.stock}  <br/>
                  <b> Subtotal Price:</b> {props.subTotalPrice} <br/>
                  </Typography>
                {/* <Button sx={{ width:'auto', minWidth:'auto'}}> Change Status </Button> */}
              </div>
        
            {/* <div style={{display:"flex", flexDirection:"column"}}>
            <Typography paragraph>
              <b >Product Name:</b> {props.name} <br/>
              <b> Quantity:</b> {props.quantity}  <br/>
              <b> Stock:</b> {props.stock}  <br/>
              <b> Subtotal Price:</b> {props.price} <br/>

            </Typography> */}
            {/* { isSingleItemKind? null : <Button sx={{ width:'auto', minWidth:'auto'}}> Change Status </Button> } */}
    
        </Collapse>
      </Card>
    );
  }
}
