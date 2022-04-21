const {Recipe, Diet} = require('../db.js')
const {Op} = require('sequelize')
const {getRecipes}= require("./getRecipes.js")

const getDbRecipesName = async (name) => {
    return await Recipe.findAll({
        where: {
            title: {[Op.like]: `%${name}%`},
        },
        include: Diet
    });
}
const filterRecipes= async(name) => {
    let allRecipes= await getRecipes();
    let filtered= await allRecipes?.filter(el =>{ el.title.toLowerCase().includes(name.toLowerCase())})
    return filtered;
}

const getByName= async (res, name) => {

    
    let results= await Promise.all([getDbRecipes(name),filterRecipes(name)])
        .then( (recipes) => (recipes.flat()))
        .catch((err)=> {
            console.log(err.message);
            error = err
        });
        console.log(results);
        return results ;
    
}


const getDbRecipes = async () => {
    return await Recipe.findAll({
        include: Diet
    });
}
module.exports= { getDbRecipes , getByName , getDbRecipesName};