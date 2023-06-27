import { Navigate, Route, Routes } from "react-router-dom";
import MainModelsComponent from "./components/MainModelsComponent/MainModelsComponent";
import ModelComponent from "./components/ModelComponent/ModelComponent";


const Router = () => {
  return (
    <Routes>
      <Route exact path='/models' element={<MainModelsComponent />} />
      <Route exact path='/model/:id' element={<ModelComponent />} />
      <Route exact path='*' element={<Navigate to='/models' replace />} />
    </Routes>
  )
};

export default Router;