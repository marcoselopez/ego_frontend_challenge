import { Box, Grid, Typography } from "@mui/material"
import { heroTitleFormat } from "../../styles/styles"


const HeroComponent = ({ model }) => {

  const regexForStripHTML = /(<([^>]+)>)/gi

  return (
    <Grid container display='flex' justifyContent='center'>
      <Grid item xs={12} md={6} display='flex' justifyContent='flex-end' className='animate__animated animate__fadeInRight' sx={{ display: {xs: 'none', md: 'flex'}}}>
        <img src={model.photo} style={{ width: '667px', height: '314px', objectFit: 'contain'}} />
      </Grid>
      <Grid item xs={12} md={6} display='flex' justifyContent='center' className='animate__animated animate__fadeInRight' sx={{ display: {xs: 'flex', md: 'none'}}}>
        <img src={model.photo} style={{ width: '350px', height: '190px', objectFit: 'contain'}} />
      </Grid>
      <Grid item xs={12} md={5} padding={{xs: '0 1rem', md: 0}} display='flex' justifyContent='flex-start' alignItems='center' className='animate__animated animate__fadeInDown'>
        <Box width='475px' height={{xs: '200px', md: '314px'}} display='flex' flexDirection='column' justifyContent='center' alignItems='flex-start'>
          <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600', color: '#373737', fontSize: '20px'}}>{model.name}</Typography>
          <Typography sx={heroTitleFormat}>{model.title}</Typography>
          <Typography variant='p' sx={{ color: '#373737', lineHeight: '20px'}}>{model.description?.replaceAll(regexForStripHTML, '')}</Typography>
        </Box>
      </Grid>
    </Grid>
  )
};

export default HeroComponent;