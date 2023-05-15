import Button from '@mui/material/Button';
import { MusicContext } from '../../context/GlobalContext';
import { useContext } from 'react';

type PropsButton = {
    nameButton: string
    handler: () => void
    isDisabled: boolean
}

export default function ButtonController({nameButton, handler, isDisabled} : PropsButton) {
  return (
    <Button sx={{width: '30%', background: '#424242'}} disabled={isDisabled} onClick={handler} variant="contained">{nameButton}</Button>
  )
}
