import { Box } from '@mui/material';
import ButtonController from './ButtonController';
import { MusicContext } from '../../context/GlobalContext';
import { useContext } from 'react';

export default function Controlls() {
const {handleNext, handlePrev, handleMode, mode} = useContext(MusicContext)

  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', marginTop: 5}}>
        <ButtonController handler={handlePrev} nameButton='Prev' />
        <ButtonController handler={handleMode} nameButton={mode} />
        <ButtonController handler={handleNext} nameButton='Next' />
    </Box>
  )
}
