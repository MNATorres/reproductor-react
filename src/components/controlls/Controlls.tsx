import { Box } from '@mui/material';
import ButtonController from './ButtonController';
import { MusicContext } from '../../context/GlobalContext';
import { useContext } from 'react';

export default function Controlls() {
const {handleNext, handlePrev, handleMode, mode, disabled} = useContext(MusicContext)

  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', marginTop: 5}}>
        <ButtonController isDisabled={disabled} handler={handlePrev} nameButton='Prev' />
        <ButtonController isDisabled={false} handler={handleMode} nameButton={mode} />
        <ButtonController isDisabled={disabled} handler={handleNext} nameButton='Next' />
    </Box>
  )
}
