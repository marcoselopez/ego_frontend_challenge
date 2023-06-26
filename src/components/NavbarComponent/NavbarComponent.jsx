import { useState } from "react";
import { Box, Grid, IconButton, Tab, Tabs, Typography } from "@mui/material";
import Logo from '../../assets/ego_logo.svg';
import MenuIcon from '@mui/icons-material/Menu';


const NavbarComponent = () => {

  // STATES
  const [value, setValue] = useState(0);

  // METHODS
  const handleChange = (event, newValue) => {
    setValue(newValue)
  };

  return (
    <Box 
      sx={{
        width: '100%', 
        height: '48px',
        borderBottom: '1px solid #CCCCCC',
        padding: '0px 12px',
        top: 0,
        left: 0
      }}
    >
      <Grid container display='flex' justifyContent='space-between'>

        <Grid item xs={4} display='flex'>
          <img src={Logo} alt="EGO-Logo" style={{ marginRight: '2rem' }} />
          <Tabs value={value} onChange={handleChange}>
            <Tab label='Modelos' sx={{ fontFamily: 'Montserrat'}} />
            <Tab label='Ficha de Modelo' sx={{ fontFamily: 'Montserrat'}} />
          </Tabs>
        </Grid>

        <Grid item xs={1} display='flex' alignItems='center'>
          <Typography sx={{fontFamily: 'Montserrat', marginRight: '1rem'}}>Menu</Typography>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Grid>

      </Grid>
    </Box>
  )
}

export default NavbarComponent