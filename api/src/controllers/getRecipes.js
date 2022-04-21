const {APIKEY, APIKEY2 , APIKEY3, APIKEY4} = process.env;
const axios = require("axios");

const getRecipes = async () => {
    let apiInfo = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY4}&number=100&addRecipeInformation=true`)
    //console.log(apiUrl);
    let datos = await apiInfo.then( apiResponse => apiResponse.data && apiResponse.data.results.map(e =>{
        return {
            name:e.name || e.title,
            id: e.id, 
            title: e.title,
            image: e.image,
            diets: e.diets.map((d)=> {return{name:d}}), // un array con los tipos de dieta de esa receta
            score : e.spoonacularScore,   // puntuacion
            summary: e.summary,            // un resumen del plato
            healthScore: e.healthScore,    // que tan saludable es
            instructions: e.analyzedInstructions// el paso a paso de como se hace 
            }
            
    }))
    .catch(err => console.log(err))
    
    return datos;
}
module.exports={getRecipes};