import { useContext, useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { titleFormat } from '../styles/styles';
import CarService from '../../services/CarServices';
import { trackPromise } from 'react-promise-tracker';
import FilterComponent from './FilterComponent/FilterComponent';
import ItemCardComponent from './ItemCardComponent/ItemCardComponent';
import AppContext from '../../AppContext';


const MainModelsComponent = () => {

  // STATES
  const [filter, setFilter] = useState('all');
  const [anchorEl, setAnchorEl] = useState(null);
  const [allModels, setAllModels] = useState([]);
  const [filteredModels, setFilteredModels] = useState([]);

  // SERVICES
  const carService = new CarService();

  // CONTEXT
  const { setTabsValue } = useContext(AppContext);

  // METHODS
  const handleChange = (event, newFilter) => {
    setFilter(newFilter)
  };

  const getCars = () => {
    trackPromise(
      carService.GetAllModels()
        .then(response => {
          setAllModels(response.data)
          setFilteredModels(response.data)
        })
        .catch(error => console.log(error))
    )
  };

  const filterCars = () => {
    if(filter === 'all'){
      setFilteredModels(allModels)
    }
    if(filter === 'cars'){
      setFilteredModels(allModels.filter(element => element.segment === 'Sedan' || element.segment === 'Hatchback'))
    }
    if(filter === 'pickups'){
      setFilteredModels(allModels.filter(element => element.segment === 'Pickups y Comerciales'))
    }
    if(filter === 'suvs'){
      setFilteredModels(allModels.filter(element => element.segment === 'SUVs'))
    }
  };

  useEffect(() => {
    setTabsValue(0)
  }, []);

  useEffect(() => {
    getCars()
  }, []);

  useEffect(() => {
    console.log('filteredFired')
    filterCars()
  }, [filter])

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
        allModels={allModels}
        setFilteredModels={setFilteredModels}
      />

      <Grid item xs={12} marginTop='3rem'>
        <Grid container>
          {
            filteredModels.map((model) => (
              <Grid item xs={3} display='flex' key={model.id} marginBottom='2rem'>
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