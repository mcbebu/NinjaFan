import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import {  useParams } from 'react-router-dom';
import { productDatas } from '../../../tests/data/product';

var dimensionData = [
    {
      value: 'S',
      label: 'S(20x30x40 cm)',
    },
    {
      value: 'M',
      label: 'M(60x80x100 cm)',
    }
  ];

// TODO upload and button create
export default function ProductsEditPage() {
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
    <div>
        <h1>Edit Product</h1>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Product Name"
          title='productName'
          value={data.title}
        />
        <TextField
          id="outlined-textarea"
          label="Description"
          title='description'
          value={data.description}
          multiline
        />
        <TextField
          id="outlined-required"
          label="amount"
          title='Amount'
          value={data.price / 100}
        />
        <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Stock</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={data.stock ? "true" : "false"}
            >
                <FormControlLabel value="true" control={<Radio />} label="Available" />
                <FormControlLabel value="false" control={<Radio />} label="Out of stock" />
            </RadioGroup>
        </FormControl>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={data.dimension}
          helperText="Please select the dimension size"
        >
          {dimensionData.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {/* Upload */}
      </div>
      <div>
      <Button variant="contained">Edit</Button>
      </div>
    </Box>
    </div>
    );
  }