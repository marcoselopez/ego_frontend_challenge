import { useContext, useEffect, useState } from "react"
import AppContext from "../../AppContext"
import { trackPromise } from "react-promise-tracker";
import CarService from "../../services/CarServices";
import { Box, Grid, Typography } from "@mui/material";
import HeroComponent from "./HeroComponent/HeroComponent";
import CarouselItemComponent from "./CarouselItemComponent/CarouselItemComponent";
import HighlightComponent from "./HighlightComponent/HighlightComponent";

const ModelComponent = () => {

  // STATES
  const [model, setModel] = useState({});
  console.log(model)

  // CONTEXT
  const { modelId, setTabsValue } = useContext(AppContext);

  // SERVICES
  const carService = new CarService();

  // METHODS
  const getModelById = () => {
    trackPromise(
      carService.GetModelById(modelId)
        .then(response => setModel(response.data))
        .catch(error => console.log(error))
    )
  };

  useEffect(() => {
    setTabsValue(1)
  }, [])

  useEffect(() => {
    getModelById()
  }, [modelId])

  if(Object.keys(model).length === 0){
    return
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <HeroComponent model={model} />
      </Grid>
      <Grid item xs={12} sx={{ background: '#F7F7F7'}} className='animate__animated animate__fadeIn'>
        <Box width='100%' height='300px'  display='flex' justifyContent='center'>
          <div className="swiffy-slider slider-nav-dark slider-nav-outside slider-item-show2" style={{width: '90%'}}>
            <ul className="slider-container">
              {
                model.model_features.map(feature => (
                  <CarouselItemComponent image={feature.image} name={feature.name} description={feature.description} key={feature.name} />
                ))
              }
            </ul>

            <button type="button" className="slider-nav"></button>
            <button type="button" className="slider-nav slider-nav-next"></button>

            <div className="slider-indicators">
              <button className="active"></button>
              <button></button>
              <button></button>
            </div>
          </div>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ padding: '2rem 2rem', marginBottom: '1rem'}}>
        {
          model.model_highlights.map((highlight, index) => (
            <HighlightComponent key={highlight.name} order={index} highlight={highlight} />
          ))
        }
      </Grid>
    </Grid>
  )
};

export default ModelComponent;