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
        },
      },
    },
  },
});


// const data = ["A", "B", "C" , "D" ,"E" ,"F"];
const data2 = [
    {name:"Bandrek", quantity:"30"},
    {name:"Milo", quantity:"412"},
    {name:"Sweater", quantity:"70"},
    {name:"Jacket", quantity:"1"},
    {name:"Dress Shoes", quantity:"20"}
]

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
      <Typography variant="h3">
        Orders
      </Typography>
      <Stack spacing={2}>
        {data2.map(prop => (
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
