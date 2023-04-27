import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Screen from './screen/Screen';
import Controlls from './controlls/Controlls';
import ListMusic from './listMusic/ListMusic';


export default function Reproductor() {
  return (
    <Box
      sx={{
        backgroundColor: '#212121',
        width: 700,
        height: 300,
        color:'#00c853' ,
        padding: 1,
        borderRadius: 1
      }} >
        <Grid>
          <Screen />
          <Controlls />
          <ListMusic />
        </Grid>
    </Box>
  )
}
