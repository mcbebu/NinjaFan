/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import Stack from '@mui/material/Stack';
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
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import OrderCard from './OrderCard';

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

const theme = createTheme({
  components: {
    // Name of the component
    MuiCardMedia: {
      styleOverrides: {
        // Name of the slot
        img: {
          // Some CSS
          height: '50px',
          width: 'auto'
        }
        // html: {
        //   backgroundColor: 'red'
        // },
        // html: {
        //   backgroundColor: 'red'
        // }
      }
    }
  }
  // palette: {
  //   background: {
  //     default: "#C10230"
  //   }
  // }
});


// const data = ["A", "B", "C" , "D" ,"E" ,"F"];

// array containing orders with two parameters
// const data2 = [
//     {name:"Bandrek", quantity:"30"},
//     {name:"Milo", quantity:"412"},
//     {name:"Sweater", quantity:"70"},
//     {name:"Jacket", quantity:"1"},
//     {name:"Dress Shoes", quantity:"20"}
// ]

// one order with multiple different kinds of items
const data3 = {
  totalPrice: "4550",
  address: "",
  distance: "",
  status:"Waiting Seller Confirmation",
  paymentMethod:"Cash On Demand",
  orderTime:"1676892632",
  orderId: "1jg2n8472789734nv923",
  itemGroups: [
    {name:"Bandrek", quantity:"30", stock:"15", subTotalPrice:"500,000.00"},
    {name:"Milo", quantity:"412"},
    {name:"Sweater", quantity:"70"},
    {name:"Jacket", quantity:"1"},
    {name:"Dress Shoes", quantity:"20"}]
}

// array containing orders with possibly multiple different kinds of items
const data4 = [
    {
      totalPrice: "7477",
      address: "Jl. Boediman No. 40, Bekasi",
      distance: "30km",
      status:"Waiting Seller Confirmation",
      paymentMethod:"Cash",
      orderTime:"1676892632000",
      orderId: "789734nv9231jg2n8472",
      itemGroups: [
        {name:"Milo", quantity:"42", stock:"100", subTotalPrice:"300,000"},
        {name:"Jacket", quantity:"1", stock:"100", subTotalPrice:"300,000"},
        {name:"Dress Shoes", quantity:"15", stock:"100", subTotalPrice:"300,000"},
        {name:"Bandrek", quantity:"1", stock:"15", subTotalPrice:"500,000.00", stock:"100", subTotalPrice:"300,000"},
        {name:"Sweater", quantity:"35", stock:"100", subTotalPrice:"300,000"}]
    },
    {
      totalPrice: "2243",
      address: "Jalan 4 Kemayoran sebelah warkop",
      distance: "10km",
      status:"Waiting Seller Confirmation",
      paymentMethod:"Cash",
      orderTime:"1676889032000",
      orderId: "8472789734nv9231jg2n",
      itemGroups: [
        {name:"Sweater", quantity:"50", stock:"100", subTotalPrice:"300,000"},
        {name:"Bandrek", quantity:"20", stock:"15", subTotalPrice:"500,000.00", stock:"100"},
        {name:"Jacket", quantity:"1", stock:"100", subTotalPrice:"300,000"},
        {name:"Dress Shoes", quantity:"20", stock:"100", subTotalPrice:"300,000"},
        {name:"Milo", quantity:"402", stock:"100", subTotalPrice:"300,000"}]
    },
    {
      totalPrice: "8764",
      address: "Jl. Mawar rt/rw 14/12 Bpk. Marlin",
      distance: "12km",
      status:"Waiting Seller Confirmation",
      paymentMethod:"Cash",
      orderTime:"1676885432000",
      orderId: "9231jg2n8472789734nv",
      itemGroups: [
        {name:"Milo", quantity:"412", stock:"100", subTotalPrice:"300,000"},
        {name:"Bandrek", quantity:"300", stock:"15", subTotalPrice:"500,000.00", stock:"100"},
        {name:"Sweater", quantity:"70", stock:"100", subTotalPrice:"300,000"},
        {name:"Dress Shoes", quantity:"25", stock:"100", subTotalPrice:"300,000"},
        {name:"Jacket", quantity:"1", stock:"100", subTotalPrice:"300,000"}]
    },
    {
      totalPrice: "4550",
      address: "Jl. Kemurnian 2 No.4, Jakarta",
      distance: "34km",
      status:"Waiting Seller Confirmation",
      paymentMethod:"Bank",
      orderTime:"1676881832000",
      orderId: "7891jg72734n2n84v923",
      itemGroups: [
        {name:"Bandrek", quantity:"30", stock:"15", subTotalPrice:"500,000.00"}]
    }
]

const data5 = [
  {
    totalPrice: "6246",
    address: "Jl. Boediman No. 40, Bekasi",
    distance: "500km",
    status:"Waiting Seller Confirmation",
    paymentMethod:"Bank",
    orderTime:"1676792632000",
    orderId: "09u089gjhf9gy7s767698",
    itemGroups: [
      {name:"LV Bag", quantity:"90", stock:"100", subTotalPrice:"70,000"},
      {name:"Pringles", quantity:"1", stock:"100", subTotalPrice:"5,000"},
      {name:"Hockey Shoes", quantity:"150", stock:"100", subTotalPrice:"5,576,000"},
      {name:"Playstation", quantity:"14", stock:"15", subTotalPrice:"500,000.00", stock:"100", subTotalPrice:"1,906,000"},
      {name:"Winter Cap", quantity:"35", stock:"100", subTotalPrice:"112,000"}]
  },
  {
    totalPrice: "1498",
    address: "Jalan 4 Kemayoran sebelah warkop",
    distance: "140km",
    status:"Waiting Seller Confirmation",
    paymentMethod:"Bank",
    orderTime:"1676879032000",
    orderId: "0gy7s7679u089gjhf9698",
    itemGroups: [
      {name:"Pringles", quantity:"50", stock:"100", subTotalPrice:"980,000"},
      {name:"Hockey", quantity:"220", stock:"15", subTotalPrice:"765,000.00", stock:"100"},
      {name:"LV Bag", quantity:"1", stock:"100", subTotalPrice:"609,000"},
      {name:"Dress Playstation", quantity:"20", stock:"100", subTotalPrice:"300,000"},
      {name:"Winter Cap", quantity:"402", stock:"100", subTotalPrice:"7,898,000"}]
  },
  {
    totalPrice: "8764",
    address: "Jl. Mawar rt/rw 14/12 Bpk. Marlin",
    distance: "120km",
    status:"Waiting Seller Confirmation",
    paymentMethod:"Bank",
    orderTime:"1676785432000",
    orderId: "76769809u089gjhf9gy7s",
    itemGroups: [
      {name:"Winter Cap", quantity:"140", stock:"100", subTotalPrice:"278,000"},
      {name:"Playstation", quantity:"1240", stock:"15", subTotalPrice:"1,500,000.00", stock:"100"},
      {name:"LV Bag", quantity:"70", stock:"100", subTotalPrice:"1,878,000"},
      {name:"Pringles Shoes", quantity:"25", stock:"100", subTotalPrice:"76,000"},
      {name:"Hockey", quantity:"1", stock:"100", subTotalPrice:"142,000"}]
  },
  {
    totalPrice: "4550",
    address: "Jl. Kemurnian 2 No.4, Jakarta",
    distance: "345km",
    status:"Waiting Seller Confirmation",
    paymentMethod:"Cash",
    orderTime:"1676781832000",
    orderId: "s76769809u089gjhf9gy7",
    itemGroups: [
      {name:"Pringles", quantity:"1400", stock:"15", subTotalPrice:"435,655,000.00"}]
  }
]

var chosenData = data5;

// Sweater Varsity Brand UCKS Asli Orisinil Katun Dijamin Tahan Lama S M L 2023 <br/>
// 5  <br/>
// 15  <br/>
// Rp 1,000,000.00 <br/>
// 20 Februari 2023 7:30 Malam   <br/>
// Jl. Pesiungan 4 RT/RW 011/012, Kuningan, Jakarta  <br/>
// 7 km  <br/>
// Just Paid <br/>
// Cash <br/>

export default function OrdersPage() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
      <Helmet>
        <title>Orders Page</title>
        <meta
          name="description"
          content="Orders page of React.js Boilerplate application"
        />
      </Helmet>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      {/* <Typography variant="h3">
        Orders
      </Typography> */}
      <Stack spacing={2}>
        {chosenData.map(prop => (
          <OrderCard props={prop}></OrderCard>    
        ))} 
        {/* <OrderCard props={{name:"Bandrek", quantity:"15"}}></OrderCard>     */}        
        {/* <OrderCard props={{name:"", quantity:""}}></OrderCard>
        <OrderCard props={{name:"", quantity:""}}></OrderCard>
        <OrderCard props={{name:"", quantity:""}}></OrderCard>
        <OrderCard props={{name:"", quantity:""}}></OrderCard> */}
      </Stack>
  </ThemeProvider>
    </div>
  );
}
