import { Box, Grid, Menu, MenuItem, ToggleButtonGroup, Typography } from "@mui/material";
import { CustomSortButton, CustomToggleButton } from "../../Utilities/CustomComponents";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FilterComponent = ({ filter, handleChange, anchorElSort, setAnchorElSort, anchorElFilter, setAnchorElFilter, setFilteredModels, allModels }) => {
  return (
    <>
      <Grid item xs={6} md={10} display='flex' justifyContent='space-between' className='animate__animated animate__fadeIn'>
        <Box display='flex' alignItems='center' sx={{ display: {xs: 'none', md: 'flex'}}}>
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
        <Box sx={{ display: {xs: 'block', md: 'none'}}}>
          <CustomSortButton onClick={(e) => setAnchorElFilter(e.currentTarget)} endIcon={<ExpandMoreIcon style={{ color: '#373737' }}/>} >
            <Typography sx={{ fontSize: {xs: '14px', md: '1rem'}}}>Filtrar por:</Typography>
          </CustomSortButton>
          <Menu
            anchorEl={anchorElFilter}
            keepMounted
            open={Boolean(anchorElFilter)}
            onClose={() => setAnchorElFilter(null)}
            anchorOrigin={{ vertical:'bottom', horizontal: 'right'}}
            transformOrigin={{ vertical: 'top', horizontal: 'right'}}
            disableScrollLock
          >
            <MenuItem onClick={(e) => {handleChange(e, 'all'); setAnchorElFilter(null)}}>
              <Typography sx={{fontFamily: 'Montserrat'}}>Todos</Typography>
            </MenuItem>
            <MenuItem onClick={(e) => {handleChange(e, 'cars'); setAnchorElFilter(null)}}>
              <Typography sx={{fontFamily: 'Montserrat'}}>Autos</Typography>
            </MenuItem>
            <MenuItem onClick={(e) => {handleChange(e, 'pickups'); setAnchorElFilter(null)}}>
              <Typography sx={{fontFamily: 'Montserrat'}}>Pickups y Comerciales</Typography>
            </MenuItem>
            <MenuItem onClick={(e) => {handleChange(e, 'suvs'); setAnchorElFilter(null)}}>
              <Typography sx={{fontFamily: 'Montserrat'}}>SUVs</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Grid>
      <Grid item xs={6} md={2} className='animate__animated animate__fadeIn'>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
          <CustomSortButton onClick={(e) => setAnchorElSort(e.currentTarget)} endIcon={<ExpandMoreIcon style={{ color: '#373737' }}/>} >
            <Typography sx={{ fontSize: {xs: '14px', md: '1rem'}}}>Ordenar por</Typography>
          </CustomSortButton>
          <Menu
            anchorEl={anchorElSort}
            keepMounted
            open={Boolean(anchorElSort)}
            onClose={() => setAnchorElSort(null)}
            anchorOrigin={{ vertical:'bottom', horizontal: 'right'}}
            transformOrigin={{ vertical: 'top', horizontal: 'right'}}
            disableScrollLock
          >
            <MenuItem onClick={() => {setFilteredModels(prevState => prevState.sort((a,b) => a.id-b.id)); setAnchorElSort(null)}}>
              <Typography sx={{fontFamily: 'Montserrat'}}>Nada</Typography>
            </MenuItem>
            <MenuItem onClick={() => {setFilteredModels(prevState => prevState.sort((a,b) => b.price-a.price)); setAnchorElSort(null)}}>
              <Typography sx={{fontFamily: 'Montserrat'}}>Mayor Precio</Typography>
            </MenuItem>
            <MenuItem onClick={() => {setFilteredModels(prevState => prevState.sort((a,b) => a.price-b.price)); setAnchorElSort(null)}}>
              <Typography sx={{fontFamily: 'Montserrat'}}>Menor Precio</Typography>
            </MenuItem>
            <MenuItem onClick={() => {setFilteredModels(prevState => prevState.sort((a,b) => b.year-a.year)); setAnchorElSort(null)}}>
              <Typography sx={{fontFamily: 'Montserrat'}}>Mas nuevos</Typography>
            </MenuItem>
            <MenuItem onClick={() => {setFilteredModels(prevState => prevState.sort((a,b) => a.year-b.year)); setAnchorElSort(null)}}>
              <Typography sx={{fontFamily: 'Montserrat'}}>Mas viejos</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Grid>
    </>
  )
};

export default FilterComponent;