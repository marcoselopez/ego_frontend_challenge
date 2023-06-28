import { Button, ToggleButton, styled } from "@mui/material";

export const CustomToggleButton = styled(ToggleButton)({
  "&.MuiToggleButtonGroup-grouped": {
    borderRadius: "18px !important",
    mx: 1,
    border: "none !important",
    height: '31px',
    fontFamily: 'Montserrat',
    fontSize: '.8rem',
    color: '#373737',
    marginTop: '.1rem'
  }
});

export const CustomSortButton = styled(Button)({
  '.MuiTypography-root': {
    fontFamily: 'Montserrat',
    color: '#373737',
    fontWeight: '600',
    textTransform: 'none'
  }
});

export const CustomBlackButton = styled(Button)({
  '.MuiTypography-root': {
    fontFamily: 'Montserrat',
    color: 'white',
    fontWeight: '600',
    textTransform: 'none'
  },
  '&:hover': {
    background: '#303030'
  },
  background: '#191919',
  width: '152px',
  height: '34px',
  borderRadius: '40px'
})