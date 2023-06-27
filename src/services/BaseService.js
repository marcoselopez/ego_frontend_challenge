import axios from 'axios';

axios.defaults.baseURL = 'https://challenge.egodesign.dev/api/';


export default class BaseService {

  Get(endpoint, params){

    if(params){
      return axios.get(endpoint, {params: params})
    }

    return axios.get(endpoint);
  }

}