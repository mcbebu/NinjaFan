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
import SmallOrderCard from '../SmallOrderCard';

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

function addCommas(str, start){
  if (start-3 < 0) return str;
  else return addCommas(str.slice(0, start-2), start-3) + "," + str.slice(start-2);
}

export default function OrderCard({props}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  var d = new Date(parseInt(props.orderTime));
  var date = d.toLocaleString();  
  var isSingleItemKind = props.itemGroups.length === 1;
  var totalOrders = 0;
  var totalMoney = 0.0;
  var firstStock = props.itemGroups[0].stock;

  for (let item of props.itemGroups) {
      totalOrders += parseInt(item.quantity);
      if (item.subTotalPrice.indexOf('.') !== -1)
      {
        totalMoney += parseFloat(item.subTotalPrice.substring(0,item.subTotalPrice.indexOf('.')).replaceAll(',',''));
      } else totalMoney += parseFloat(item.subTotalPrice.replaceAll(',',''));
      console.log(item.subTotalPrice.replace(',',''));
  }
  totalMoney = totalMoney.toString();
  totalMoney = addCommas(totalMoney, totalMoney.length-1);

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
        title= {isSingleItemKind ? props.itemGroups[0].name + "  " + props.orderId : props.orderId }
        subheader= {date}
      />
      <CardActions sx={{paddingTop:'0.5rem', paddingLeft:'1rem'}}>
          <span sx={{ display:'flex', flexWrap:'wrap', width:'100%', gap: 20 }}>
            <ShoppingCartIcon fontSize='small' aria-label="Quantity" /> 
            <Button size='small' variant='text' disableRipple disableFocusRipple sx={{  width:'auto', minWidth:'auto'}}> {totalOrders} </Button>
            {isSingleItemKind ? 
            <InventoryIcon fontSize='small' aria-label="Stock" />: null}
             {isSingleItemKind ? 
            <Button size='small' variant='text' disableRipple disableFocusRipple sx={{ width:'auto', minWidth:'auto'}}> {firstStock} </Button>
            : null}
            <AttachMoneyIcon fontSize='small' aria-label="Total payment" /> 
            <Button size='small' variant='text' disableRipple disableFocusRipple sx={{  width:'auto', minWidth:'auto'}}> {totalMoney} </Button>
            <HandshakeIcon fontSize='small' aria-label="Payment Method" /> 
            <Button size='small' variant='text' disableRipple disableFocusRipple sx={{ width:'auto', minWidth:'auto'}}> : </Button>
            { props.paymentMethod === "Cash" ? 
            <PaymentsIcon color='green' sx={{color:'green'}} fontSize='small' aria-label="Cash" /> :
            <AccountBalanceIcon fontSize='small' sx={{color:'blue'}} aria-label="Transfer" /> }
            <Button size='small' variant='text' disableRipple disableFocusRipple sx={{ width:'auto', minWidth:'auto'}}> </Button>
            <PinDropIcon fontSize='small' aria-label="Delivery distance from me" />
            <Button size='small' variant='text' disableRipple disableFocusRipple sx={{ width:'auto', minWidth:'auto'}}> {props.distance} </Button>
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

          <Button sx={{ width:'auto', minWidth:'auto'}}> Change Status </Button><br/>

           <b >Order ID:</b> {props.orderId} <br/>
            <b>Total Price:</b> {props.totalPrice} <br/>
            <b>Order Time:</b> {props.orderTime}   <br/>
            <b>Address:</b> {props.address}  <br/>
            <b>Distance:</b> {props.distance} <br/>
            <b>Status:</b> {props.status} <br/>
            <b>Payment Method:</b> {props.paymentMethod} <br/><br/> 

            { isSingleItemKind ? null : <div sx={{width:"100%", display: "flex", flexDirection:"column", alignItems:"center"}}><Typography variant="h5" sx={{alignSelf:"center"}} >Order Items:</Typography></div> }

          <div style={{display:"flex", flexDirection:"column"}}>
           {props.itemGroups.map(itemKind => (
             <div style={{display:"flex", flexDirection:"column"}}>
              <SmallOrderCard props={itemKind} isSingleItemKind={isSingleItemKind}/>
            </div>
            ))} 
          <Button sx={{ width:'auto', minWidth:'auto'}}> Change Status </Button>
          </div>
      </Collapse>
    </Card>
  );
}
