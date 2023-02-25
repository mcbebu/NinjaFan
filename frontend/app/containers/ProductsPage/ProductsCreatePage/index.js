import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import MenuItem from '@mui/material/MenuItem';
import { Button, InputLabel, Select, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Stack } from '@mui/system';
import { productDatas } from '../../../tests/data/product';
import { useHistory } from 'react-router-dom';
import { createProduct } from '../../../services/api';

const dimensionData = [
  {
    value: 'S',
    label: 'S(20x30x40 cm)',
  },
  {
    value: 'M',
    label: 'M(60x80x100 cm)',
  },
  {
    value: 'L',
    label: 'L(...cm)'
  }
];


const imageUrls = [
  'https://cf.shopee.sg/file/598d0e215d23168a340f632850b1e166',
  'https://cf.shopee.sg/file/598d0e215d23168a340f632850b1e166',
  'https://cf.shopee.sg/file/598d0e215d23168a340f632850b1e166',
  'https://cf.shopee.sg/file/598d0e215d23168a340f632850b1e166'
]

export default function ProductsCreatePage() {
  const {control, handleSubmit} = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    const id = productDatas.length + 1
    const postData = {
      name: data.name,
      description: data.description,
      price: Number(data.price),
      currency: "Rp",
      image_url: imageUrls[id],
      dimension: data.dimension,
      stock: true,
      weight: Number(data.weight),
      weight_unit: "kg",
      links: [
          {
              "name": "Instagram",
              "text": `https://localhost:3000/products/catalogue/${id}/view?channel=instagram`,
          },
          {
              "name": "Tiktok",
              "text": `https://localhost:3000/products/catalogue/${id}/view?channel=tiktok`
          },
          {
              "name": "Whatsapp",
              "text": `https://localhost:3000/products/catalogue/${id}/view?channel=whatsapp`
          }
      ]
    }

  

    const response = await createProduct(postData)
    if (response.status === 200) {
      history.push('/products')
    }
  }

  return (
    <>
      <Stack sx={{ marginTop: '24px'}}>
        <Typography sx={{ fontSize: '18px' }}>
          Create a product
        </Typography>
      </Stack>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack sx={{ marginTop: '24px'}}>
            <Controller
              name="name"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  required
                  id="name"
                  label="Name"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Stack>

          <Stack sx={{ marginTop: '12px' }}>
            <Controller
              name="price"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  required
                  id="price"
                  type="number"
                  label="Price"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  multiline
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Stack>

          <Stack sx={{ marginTop: '12px' }}>
            <Controller
              name="weight"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  required
                  id="weight"
                  type="number"
                  label="Weight"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  multiline
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Stack>

          <Stack sx={{ marginTop: '12px' }}>
            <Controller
              name="dimension"
              control={control}
              render={({ field }) => (
                <>
                  <Select labelId="dimension" label="Dimension" {...field} defaultValue='S'>
                    {dimensionData.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>      
                </>      
              )}
            />
          </Stack>

          <Stack sx={{ marginTop: '12px' }}>
            <Controller
              name="description"
              control={control}
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                  id="description"
                  label="Description"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  multiline
                  helperText={error ? error.message : null}
                />
              )}
            />
          </Stack>

        <Stack sx={{marginTop: '24px' }}>
          <Button
            type="submit"
            sx={{ backgroundColor: '#C10230', color: 'white', textTransform: 'none', height: '40px' }}
          >
            Create
          </Button>
        </Stack>
  
      </form>
    </>
    );
  }