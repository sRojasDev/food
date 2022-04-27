const {APIKEY, APIKEY2 , APIKEY3, APIKEY4, APIKEY5} = process.env;
const axios = require("axios");

const getRecipes = async () => {
    let apiInfo = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY5}&number=100&addRecipeInformation=true`)
    //console.log(apiUrl);
    let datos = await apiInfo.then( apiResponse => apiResponse.data && apiResponse.data.results.map(e =>{
        let dietas=e.diets.map((d)=> {return{name:d}})
        if(e["vegetarian"])dietas.push({name:"vegetarian"});
        
        return {
            name:e.name || e.title,
            id: e.id, 
            title: e.title,
            image: e.image,
            diets: dietas,                // agrego los faltantes
            score : e.spoonacularScore,   // puntuacion
            summary: e.summary,            //  resumen 
            healthScore: e.healthScore,    // saludable
            instructions: e.analyzedInstructions// el paso a paso
            }
            
    }))
    .catch(err => console.log(err))
    
    return datos;
}
module.exports={getRecipes};