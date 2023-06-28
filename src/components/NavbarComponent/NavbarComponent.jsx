import { useContext, useState } from "react";
import { Box, Grid, IconButton, Tab, Tabs, Typography } from "@mui/material";
import Logo from '../../assets/ego_logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";
import MenuComponent from "./MenuComponent/MenuComponent";
import AppContext from "../../AppContext";

const NavbarComponent = () => {

  // STATES
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // HOOKS
  const navigate = useNavigate();

  // CONTEXT
  const { tabsValue, setTabsValue } = useContext(AppContext);

  // METHODS
  const handleChange = (event, newValue) => {
    setTabsValue(newValue)
  };

  const handleClose = () => {
    setIsMenuOpen(false)
  };

  return (
    <Box 
      sx={{
        width: '100%', 
        height: '48px',
        borderBottom: '1px solid #CCCCCC',
        padding: '0px 12px',
        position: 'sticky',
        backgroundColor: 'white',
        top: 0,
        left: 0
      }}
    >
      <Grid container display='flex' justifyContent='space-between' sx={{ width: '100%'}}>

        <Grid item xs={8} display='flex'>
          <img src={Logo} alt="EGO-Logo" style={{ marginRight: '2rem' }} />
          <Tabs value={tabsValue} onChange={handleChange}>
            <Tab label='Modelos' sx={{ fontFamily: 'Montserrat', textTransform: 'none' }} onClick={() => navigate('/models') } />
            <Tab label='Ficha de Modelo' sx={{ fontFamily: 'Montserrat', textTransform: 'none' }} onClick={() => navigate('/model/:id')} />
          </Tabs>
        </Grid>

        <Grid item xs={4} display='flex' alignItems='center' justifyContent='flex-end'>
          <Typography sx={{fontFamily: 'Montserrat', marginRight: '1rem'}}>Menu</Typography>
          <IconButton onClick={() => setIsMenuOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Grid>

      </Grid>

      <MenuComponent open={isMenuOpen} onClose={handleClose} />
    </Box>
  )
};

export default NavbarComponent;