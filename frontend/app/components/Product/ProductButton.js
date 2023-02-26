import React from 'react';
import { Button, Typography } from "@mui/material";
import { Edit } from '@mui/icons-material'

export function ProductButton({
  name,
  marginTop,
  startIcon,
  height,
  fontSize
}) {
  return (
    <Button
      sx={{height, backgroundColor:'#C10230', marginTop, color: 'white'}}
      startIcon={startIcon}
    >
      <Typography sx={{
        fontSize,
        textTransform: 'none'
      }}>
        {name}
      </Typography>
    </Button>
  )
}
