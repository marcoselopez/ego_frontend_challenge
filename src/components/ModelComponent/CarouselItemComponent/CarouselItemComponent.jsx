import { Grid, Typography } from "@mui/material"


const CarouselItemComponent = ({ image, name, description }) => {
  return (
    <Grid container display='flex' justifyContent='center' alignItems='center'>
      <Grid item xs={5} display='grid' sx={{placeContent: 'center'}}>
        <img src={image} style={{ borderRadius: '6px', marginBottom: '1rem' }} />
        <Typography sx={{fontFamily: 'Montserrat', color: '#373737', fontWeight: '600', fontSize: '16px', letterSpacing: 0}}>{description}</Typography>
        <Typography variant='p' sx={{color: '#373737', letterSpacing: 0}}>{name}</Typography>
      </Grid>
    </Grid>
  )
};

export default CarouselItemComponent; 