import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const MenuComponent = ({ open, onClose }) => {

  const firstList = ['Modelos', 'Servicios y Accesorios', 'Financiación', 'Reviews y Comunidad'];
  const secondList = ['Toyota Mobility Service', 'Toyota Gazoo Racing', 'Toyota Hibridos'];
  const thirdList = ['Concesionarios', 'Test Drive', 'Contacto'];
  const fourthList = ['Actividades', 'Servicios al Cliente', 'Ventas Especiales', 'Innovación', 'Prensa', 'Acerca de...'];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{ width: 250, height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <IconButton>
          <CloseIcon />
        </IconButton>
        <List disablePadding sx={{ textAlign: 'right', width: '100%', paddingRight: '1rem' }}>
          {firstList.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ padding: '2px 0' }}>
                <ListItemText 
                  primary={text}
                  sx={{ 
                    textAlign: 'right', 
                    marginRight: '1rem', 
                    '.MuiTypography-root': { 
                      fontFamily: 'Montserrat', 
                      fontWeight: '500',
                      fontSize: '.9rem'
                    }  
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ width: '90%', marginTop: '1rem', marginBottom: '1rem', paddingRight: '1rem' }}>
          <Divider sx={{border: 'none', height: '1px', backgroundColor: '#CCCCCC', marginBottom: '5px' }} />
        </Box>

        <List disablePadding sx={{ textAlign: 'right', width: '100%', paddingRight: '1rem' }}>
          {secondList.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ padding: '2px 0'}}>
                <ListItemText 
                  primary={text}
                  sx={{ 
                    textAlign: 'right', 
                    marginRight: '1rem', 
                    '.MuiTypography-root': { 
                      fontFamily: 'Montserrat', 
                      fontWeight: '500',
                      fontSize: '.9rem'
                    } 
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ width: '90%', marginTop: '1rem', marginBottom: '1rem', paddingRight: '1rem' }}>
          <Divider sx={{border: 'none', height: '1px', backgroundColor: '#CCCCCC', marginBottom: '5px' }} />
        </Box>

        <List disablePadding sx={{ textAlign: 'right', width: '100%', paddingRight: '1rem' }}>
          {thirdList.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton sx={{ padding: '2px 0'}}>
                <ListItemText 
                  primary={text}
                  sx={{ 
                    textAlign: 'right', 
                    marginRight: '1rem', 
                    '.MuiTypography-root': { 
                      fontFamily: 'Montserrat', 
                      fontWeight: '500',
                      fontSize: '.9rem'
                    } 
                  }} 
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ width: '100%', height: '100%', backgroundColor: '#EFEEEF', display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
          <List disablePadding sx={{ textAlign: 'right', width: '100%', paddingRight: '1rem', marginTop: '1rem', marginBottom: '1rem' }}>
            {fourthList.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{ padding: '2px 0'}}>
                  <ListItemText 
                    primary={text} 
                    sx={{ 
                      textAlign: 'right', 
                      marginRight: '1rem', 
                      '.MuiTypography-root': { 
                        fontFamily: 'Montserrat', 
                        fontWeight: '500',
                      } 
                    }} 
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Drawer>
  )
};

export default MenuComponent;