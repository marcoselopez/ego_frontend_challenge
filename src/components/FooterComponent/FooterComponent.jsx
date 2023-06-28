import { Grid } from "@mui/material"

const FooterComponent = () => {
  return (
    <Grid container sx={{ position: 'absolute', bottom: 0, left: 0}}>
      <Grid item xs={12} height='50px' sx={{ backgroundColor: '#000'}}>

      </Grid>
    </Grid>
  )
}

export default FooterComponent