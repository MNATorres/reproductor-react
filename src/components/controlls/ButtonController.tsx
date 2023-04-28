import Button from '@mui/material/Button';

type PropsButton = {
    nameButton: string
    handler: () => void
}

export default function ButtonController({nameButton, handler} : PropsButton) {
  return (
    <Button sx={{width: '30%', background: '#424242'}} onClick={handler} variant="contained">{nameButton}</Button>
  )
}
