import BaseService from "./BaseService";

export default class CarService extends BaseService {
  GetAllModels(){
    return super.Get('/models')
  }
}