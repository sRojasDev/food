const {Recipe, Diet} = require('../db.js')
const {Op} = require('sequelize')
const {getRecipes}= require("./getRecipes.js")
const axios =require("axios");
const {APIKEY, APIKEY2 , APIKEY3, APIKEY4} = process.env;

const getByIdApi = async(id) => {
    const resAxios = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${APIKEY3}&addRecipeInformation=true`);
                console.log(resAxios.data);
                console.log("otro")
                console.log(resAxios.data)
                let el=resAxios.data
                let obj = {}

                
                    obj = {
                        name: el.title, 
                        vegetarian: el.vegetarian,
                        vegan: el.vegan,
                        glutenFree: el.glutenFree,
                        dairyFree: el.dairyFree,
                        img: el.image, 
                        id: el.id, 
                        score: el.spoonacularScore, 
                        healthScore: el.healthScore, 
                        diets: el.diets?.map(element => element), 
                        summary:el.summary, 
                        steps: el.instructions
                    }
        
                
                if (obj){
                    return(obj);
                    
                }else{
    
                    let objerrors
    
                    objerrors = {
                        name: 'Recipe not Found', 
                        image: 'https://www.knownhost.com/blog/wp-content/uploads/2017/11/404-Error-Message.jpg',  
                        score: 0, 
                        healthScore: 0, 
                        diets: [], 
                        summary:'none', 
                        steps: 'none'}
    
                    return(objerrors)
                }
}
module.exports={
    getByIdApi
}