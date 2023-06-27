import { Grid, Typography } from "@mui/material";
import { carTitleFormat } from "../../styles/styles";
import { Box } from "@mui/system";

const ItemCardComponent = ({ model }) => {
  return (
    <Grid container>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Typography sx={carTitleFormat}>{model.name}</Typography>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '14px'}}>{`${model.year} | $ ${model.price}`}</Typography>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Box width='176px' height='132px'>
          <img src={model.thumbnail} alt='car-image' style={{ width: '176px', height: '132px', objectFit: 'contain' }} />
        </Box>
      </Grid>
    </Grid>
  )
};

export default ItemCardComponent;