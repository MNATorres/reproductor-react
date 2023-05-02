import { Box } from '@mui/material'
import { music } from './../../context/GlobalContext'
import { MusicContext } from './../../context/GlobalContext';
import { useContext, useEffect } from 'react';

export default function ListMusic() {
  const { currentSong, handleSelectSong } = useContext(MusicContext)

  return (
    <Box sx={{ color: '#bdbdbd', textAlign: 'center', padding: 0 }}>
      <h4 style={{ color: '#f5f5f5' }}>Music List</h4>
      <ul style={{ padding: '0' }}>
        {music.map((song) => {
          return <li onClick={() => handleSelectSong(song)} key={song} style={{
            listStyle: 'none',
            cursor: 'pointer',
            color: currentSong === song ? "#00c853" : "grey"
          }}>{song}</li>
        })}
      </ul>
    </Box>
  )
}
