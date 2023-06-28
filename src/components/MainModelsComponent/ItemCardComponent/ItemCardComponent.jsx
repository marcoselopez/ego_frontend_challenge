import { Grid, Typography } from "@mui/material";
import { carTitleFormat } from "../../styles/styles";
import { Box } from "@mui/system";
import { CustomBlackButton } from "../../Utilities/CustomComponents";
import AppContext from "../../../AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ItemCardComponent = ({ model }) => {

  // HOOKS
  const navigate = useNavigate();

  // CONTEXT
  const { setModelId } = useContext(AppContext);

  // METHODS
  const handleClick = () => {
    setModelId(model.id)
    navigate(`/model/${model.id}`)
  };

  return (
    <Grid container>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Typography sx={carTitleFormat}>{model.name}</Typography>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '14px'}}>{`${model.year} | $ ${model.price}`}</Typography>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Box>
          <img src={model.thumbnail} alt='car-image' style={{ width: '176px', height: '100px', objectFit: 'contain' }} />
        </Box>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <CustomBlackButton onClick={handleClick}>
          <Typography>Ver Modelo</Typography>
        </CustomBlackButton>
      </Grid>
    </Grid>
  )
};

export default ItemCardComponent;