import { Grid, Typography } from "@mui/material"


const HighlightComponent = ({ highlight, order }) => {

  const regexForStripHTML = /(<([^>]+)>)/gi
  console.log(order)

  return (
    <Grid container gap={4} height='400px' display='flex' sx={{ placeContent: 'center' }} className='animate__animated animate__fadeIn'>
      <Grid item xs={5} display='grid' sx={{ placeContent: 'center' }} order={order === 2 ? 0 : order}>
        <Typography sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '600', color: '#373737'}}>{highlight.title}</Typography>
        <Typography variant='p' sx={{fontFamily: 'Montserrat', color: '#373737'}}>{highlight.content.replaceAll(regexForStripHTML, '')}</Typography>
      </Grid>
      <Grid item xs={5}>
        <img src={highlight.image} style={{ height: '290px', borderRadius: '10px' }} />
      </Grid>
    </Grid>
  )
};

export default HighlightComponent;