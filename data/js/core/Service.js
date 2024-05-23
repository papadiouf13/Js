import  HttpClientModule  from "./HttpClientModule.js";
export default class Service {
   async getData(key = null){
        var datas = await HttpClientModule.get('/data/data.json')
        return key !== null ? datas[key] : datas
    }
}