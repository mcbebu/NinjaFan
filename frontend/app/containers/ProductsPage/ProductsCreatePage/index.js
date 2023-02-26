import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button, Select, Typography } from '@mui/material';
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
  "https://assets.klikindomaret.com/promos/20230215_07_00_20230228_23_00/10003517/10003517_1.jpg",
  "https://img.ltwebstatic.com/images3_pi/2021/11/23/1637652358d85a6c954cf7f43fc2cecf25443803a4_thumbnail_900x.webp",
  "https://assets.klikindomaret.com/products/20109377/20109377_1.jpg",
  "https://static.wixstatic.com/media/afe640_8f6804db1fce486da5aefbc19b1205ff~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85/afe640_8f6804db1fce486da5aefbc19b1205ff~mv2.webp",
  "https://assets.klikindomaret.com/products/20128384/20128384_1.jpg",
  "https://assets.klikindomaret.com/products/20124963/20124963_1.jpg",
  "https://assets.klikindomaret.com/products/10036631/10036631_1.jpg",
  "https://assets.klikindomaret.com/products/20092043/20092043_1.jpg",
  "https://assets.klikindomaret.com/products/20104841/20104841_1.jpg",
  "https://assets.klikindomaret.com/promos/20230220_17_00_20230228_23_00/20037222/20037222_1.jpg"
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
      weight: data.weight,
      weight_unit: "kg",
      links: [
          {
              "name": "Instagram",
              "text": `${process.env.REACT_APP_FRONTEND_HOST}/products/catalogue/:productID/view?channel=instagram`,
          },
          {
              "name": "Tiktok",
              "text": `${process.env.REACT_APP_FRONTEND_HOST}/products/catalogue/:productID/view?channel=tiktok`
          },
          {
              "name": "Whatsapp",
              "text": `${process.env.REACT_APP_FRONTEND_HOST}/catalogue/:productID/view?channel=whatsapp`
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