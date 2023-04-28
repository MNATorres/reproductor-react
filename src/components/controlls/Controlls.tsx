import { Box } from '@mui/material';
import ButtonController from './ButtonController';
import { MusicContext } from '../../context/GlobalContext';
import { useContext } from 'react';

export default function Controlls() {
const {handleNext} = useContext(MusicContext)

  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', marginTop: 5}}>
        <ButtonController handler={handleNext} nameButton='Prev' />
        <ButtonController handler={handleNext} nameButton='Mode' />
        <ButtonController handler={handleNext} nameButton='Next' />
    </Box>
  )
}
