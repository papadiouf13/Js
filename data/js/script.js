
document.addEventListener("DOMContentLoaded",async () => {
  
 
    
    console.log(apprenants);
    chargerClasse()
});

function generateApprenants(apprenant, index) {
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
${apprenant.telephne}
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

  return elmt;
}

async function chargerClasse(){
    try {
        const response = await fetch("/data/data.json")
        if (!response.ok) {
            throw new error ('impossible de charger les données')
        }
        const jsonData = await response.json()
        const classes = jsonData.classes
        const select = document.getElementById('Selectclasse')
        select.innerHTML = ''
        classes.forEach(classe =>{
            const option = document.createElement('option')
            option.value = classe.id
            option.textContent = classe.name
            select.appendChild(option)
        })
    } catch (error) {
        console.error(error)
    }
}
