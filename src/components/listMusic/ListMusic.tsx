import { Box } from '@mui/material'
import { music } from './../../context/GlobalContext'

export default function ListMusic() {
  return (
    <Box sx={{color: '#bdbdbd', textAlign:'center', padding:0}}>
        <h4 style={{color:'#f5f5f5'}}>Music List</h4>
        <ul style={{ padding: '0'}}>
            {music.map((song) =>{
                return <li key={Math.random()} style={{listStyle:'none', cursor: 'pointer'}}>{song}</li>
            })}
        </ul>
    </Box>
  )
}
