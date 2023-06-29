import { Grid, Typography } from "@mui/material"


const HighlightComponent = ({ highlight, order }) => {

  const regexForStripHTML = /(<([^>]+)>)/gi
  console.log(order)

  return (
    <Grid container gap={{xs: 0, md: 4}} display='flex' sx={{ placeContent: 'center', padding: '1rem 0' }} className='animate__animated animate__fadeIn'>
      <Grid item xs={12} sx={{display: {xs: 'block', md: 'none'}, marginBottom: {xs: '1rem'}}}>
        <img src={highlight.image} style={{ width: '100%', height: '190px', borderRadius: '10px', objectFit: 'cover' }} />
      </Grid>

      <Grid item xs={12} md={5} display='grid' sx={{ placeContent: 'center' }} order={{ md: order === 2 ? 0 : order
      }}>
        <Typography sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '600', color: '#373737'}}>{highlight.title}</Typography>
        <Typography variant='p' sx={{fontFamily: 'Montserrat', color: '#373737'}}>{highlight.content.replaceAll(regexForStripHTML, '')}</Typography>
      </Grid>

      <Grid item xs={5} sx={{ display: {xs: 'none', md: 'block'}}}>
        <img src={highlight.image} style={{ height: '290px', borderRadius: '10px' }} />
      </Grid>
    </Grid>
  )
};

export default HighlightComponent;