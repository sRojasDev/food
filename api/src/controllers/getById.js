const {Recipe, Diet} = require('../db.js')
const {Op} = require('sequelize')
const {getRecipes}= require("./getRecipes.js")
const {APIKEY, APIKEY2 , APIKEY3} = process.env;

const getByIdApi = async(id) => {
    let recipeAPI = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY3}`);
    const recipe = {
        id: recipeAPI.data.id,
        name: recipeAPI.data.name || recipeAPI.data.title,
        summary: recipeAPI.data.summary,
        spoonacularScore: recipeAPI.data.spoonacularScore,
        healthScore: recipeAPI.data.healthScore,
        analyzedInstructions: recipeAPI.data.analyzedInstructions,
        image: recipeAPI.data.image,
        diets: recipeAPI.data.diets,
        dishTypes: recipeAPI.data.dishTypes
    }
    return recipe || false;
}
module.exports={
    getByIdApi
}