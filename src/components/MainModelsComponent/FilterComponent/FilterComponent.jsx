import { Box, Grid, Menu, MenuItem, ToggleButtonGroup, Typography } from "@mui/material";
import { CustomSortButton, CustomToggleButton } from "../../styles/CustomComponents";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FilterComponent = ({ filter, handleChange, anchorEl, setAnchorEl }) => {
  return (
    <>
      <Grid item xs={10} display='flex' justifyContent='space-between'>
        <Box display='flex' alignItems='center'>
          <Typography sx={{ fontFamily: 'Montserrat', fontWeight: '600', marginRight: '1rem'}}>Filtrar por:</Typography>
          <ToggleButtonGroup
            exclusive
            color="primary"
            value={filter}
            onChange={handleChange}
            sx= {{
              display: "grid",
              gridTemplateColumns: "auto auto auto auto",
              gridGap: "10px",
              border: 'none'
            }}
          >
            <CustomToggleButton value="all">Todos</CustomToggleButton>
            <CustomToggleButton value="cars">Autos</CustomToggleButton>
            <CustomToggleButton value="pickups">Pickups y Comerciales</CustomToggleButton>
            <CustomToggleButton value="suvs">{`SUV's y Crossovers`}</CustomToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box>
          <CustomSortButton onClick={(e) => setAnchorEl(e.currentTarget)} endIcon={<ExpandMoreIcon style={{ color: '#373737'}}/>} >
            <Typography>Ordenar por</Typography>
          </CustomSortButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{ vertical:'bottom', horizontal: 'right'}}
            transformOrigin={{ vertical: 'top', horizontal: 'right'}}
            disableScrollLock
          >
            <MenuItem onClick={() => {}}>
              <Typography sx={{fontFamily: 'Montserrat'}}>Nada</Typography>
            </MenuItem>
            <MenuItem onClick={() => {}}>
              <Typography sx={{fontFamily: 'Montserrat'}}>Mayor Precio</Typography>
            </MenuItem>
            <MenuItem onClick={() => {}}>
              <Typography sx={{fontFamily: 'Montserrat'}}>Menor Precio</Typography>
            </MenuItem>
            <MenuItem onClick={() => {}}>
              <Typography sx={{fontFamily: 'Montserrat'}}>Mas nuevos</Typography>
            </MenuItem>
            <MenuItem onClick={() => {}}>
              <Typography sx={{fontFamily: 'Montserrat'}}>Mas viejos</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Grid>
    </>
  )
};

export default FilterComponent;