import Box from '@mui/material/Box';
import './Screen.css';
import { MusicContext } from '../../context/GlobalContext';
import { useContext } from 'react';



export default function Screen() {
const {currentSong} = useContext(MusicContext)

  return (
    <Box
    className='screen'
    sx={{
        background: '#424242',
        height: '70px',
        width: '100%',
        fontSize: { xs: '2rem', sm: '2rem', md: '3rem', lg: '3rem' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 1,
        border: '1px solid #bdbdbd'
    }}
    >{currentSong}
    </Box>
  )
}
