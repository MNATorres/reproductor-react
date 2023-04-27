import React from 'react'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import ButtonController from './ButtonController';

export default function Controlls() {
  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', marginTop: 5}}>
        <ButtonController nameButton='Prev' />
        <ButtonController nameButton='Mode' />
        <ButtonController nameButton='Next' />
    </Box>
  )
}
