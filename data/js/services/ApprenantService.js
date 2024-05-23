import Service from "../core/Service.js";
export default class ApprenantService extends Service {
   async findAll(){
       return await super.getData("apprenants")
    
    }
}