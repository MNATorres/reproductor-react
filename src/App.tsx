import Reproductor from './components/Reproductor'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';
import { MusicProvider } from './context/GlobalContext';

function App() {

  return (
    <MusicProvider>
      <Container
        sx={{
          margin: '0 auto',
          padding: '10px 0',
          width: { xs: '100%', sm: '90%', md: '700', lg: '700' },
          display: 'flex',
          justifyContent: 'center',
          fontFamily: 'roboto',
          fontWeight: '400',
        }}>
        <Reproductor />
      </Container>
    </MusicProvider>
  )
}

export default App
