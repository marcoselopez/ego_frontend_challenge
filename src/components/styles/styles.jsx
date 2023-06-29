

export const titleFormat = () => {
  let title = {
    fontSize: {xs: '30px', md: '50px'},
    fontWeight: 'bolder',
    fontFamily: 'Montserrat',
    letterSpacing: 0,
    color: '#373737'
  }
  
  return title;
};

export const carTitleFormat = () => {
  let carTitleFormat = {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: '#000',
    fontSize: '20px',
    lineHeight: '30px',
    letterSpacing: 0
  }

  return carTitleFormat;
};

export const heroTitleFormat = () => {
  let heroTitleFormat = {
    fontFamily: 'Montserrat',
    fontWeight: '600',
    color: '#373737',
    fontSize: '30px',
    lineHeight: '35px',
    letterSpacing: '-1px',
    marginBottom: '1rem'
  }

  return heroTitleFormat;
}