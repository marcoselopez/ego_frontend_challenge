import { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { titleFormat } from '../styles/styles';
import CarService from '../../services/CarServices';
import { trackPromise } from 'react-promise-tracker';
import FilterComponent from './FilterComponent/FilterComponent';
import ItemCardComponent from './ItemCardComponent/ItemCardComponent';


const MainModelsComponent = () => {

  // STATES
  const [filter, setFilter] = useState('all');
  const [anchorEl, setAnchorEl] = useState(null);
  const [allModels, setAllModels] = useState([]);
  console.log(allModels)

  // SERVICES
  const carService = new CarService();

  // METHODS
  const handleChange = (event, newFilter) => {
    setFilter(newFilter)
  };

  const getCars = () => {
    trackPromise(
      carService.GetAllModels()
        .then(response => setAllModels(response.data))
        .catch(error => console.log(error))
    )
  };

  useEffect(() => {
    getCars()
  }, [])

  return (
    <Grid container sx={{ padding: '3rem 6rem' }}>
      <Grid item xs={12}>
        <Typography sx={titleFormat}>Descubrí todos los modelos</Typography>
      </Grid>

      <FilterComponent 
        filter={filter}
        handleChange={handleChange}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />

      <Grid item xs={12} marginTop='3rem'>
        <Grid container>
          {
            allModels.map((model) => (
              <Grid item xs={3} display='flex' key={model.id}>
                <ItemCardComponent 
                  model={model}
                />
              </Grid>
            ))
          }
        </Grid>
      </Grid>
      
    </Grid>
  )
};

export default MainModelsComponent;