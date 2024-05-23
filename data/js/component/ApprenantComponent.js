import ApprenantService from "../services/ApprenantService.js";

export default class ApprenantComponent {
    /**
     * @type {HTMLElement}
     */
    #tbody
     #apprenantService
     #apprenants 
     #tableComponent
    constructor(){
        this.#apprenantService = new ApprenantService() 
        this.#tbody = document.getElementById("tbody");
        this.onInit();
    }
  

      async onInit(){
        this.#apprenants =await apprenantService.findAll()
        this.#tableComponent = new TableApprenantComponent(this.#apprenants, this.#tbody)
        this.#tableComponent.generateTbody()
      }


}

class TableApprenantComponent {
    #apprenants
    /**
     * @type {HTMLElement}
     */
    #tbody
    
    constructor(apprenants, tbody){
        this.#apprenants = apprenants
        this.#tbody = tbody
    }
     generateTr(apprenant) {
        const elmt = document.createElement("tr");
        elmt.innerHTML = `
        <td class="w-4 p-4">
       <div class="flex items-center">
           <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
           <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
       </div>
      </td>
      <td scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
       <img class="w-10 h-10 rounded-full" src="${apprenant.image}" alt="Jese image">
      </td>
      <td class="px-6 py-4">
      ${apprenant.prenom}
      </td>
      <td class="px-6 py-4">
      ${apprenant.nom}
      </td>
      <td class="px-6 py-4">
      ${apprenant.telephone}
      </td>
      <td class="px-6 py-4">
       <div class="flex items-center">
       ${apprenant.idClasse}
       </div>
      </td>
      <td class="px-6 py-4">
       <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
      </td>
       `;
      
      }

      generateTbody(){
        let tr = ''
        this.#apprenants.forEach(apprenant => {
            tr +=this.generateTr(apprenant)
            
        });
        this.#tbody.innerHTML = tr 
      }
}