import BaseService from "./BaseService";

export default class CarService extends BaseService {

  GetAllModels(){
    return super.Get('/models')
  }

  GetModelById(id){
    return super.Get(`/models/${id}`)
  }
}