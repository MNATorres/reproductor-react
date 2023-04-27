import Button from '@mui/material/Button';

type PropsButton = {
    nameButton: string
}

export default function ButtonController({nameButton} : PropsButton) {
  return (
    <Button sx={{width: '30%', background: '#424242'}} variant="contained">{nameButton}</Button>
  )
}
