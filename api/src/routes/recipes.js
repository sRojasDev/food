const express = require('express')
const router = express.Router()
const {getRecipes}=require('../controllers/getRecipes.js');
const { getDbRecipes}=require('../controllers/getByName.js'); 


// const { Recipe, Diet } = require('../db');

router.get('/', async (req, res) => {
    let name= req.query.name
    let recetas= await getRecipes();
    let recetasDb=await getDbRecipes();
    if(!name){
        console.log(recetas);
        res.send(recetas ? recetas.concat(recetasDb): recetasDb);
    }
    if (name) {
        let allRecetas= recetas? recetas.concat(recetasDb): [] ;
        let response= allRecetas.filter(el=>el.title? el.title.toLowerCase().includes(name.toLowerCase()): el.name.toLowerCase().includes(name.toLowerCase()));
        
        if (response.length){
            res.status(200).send(response);
        }
        else{
            return res.status(404).send(`No se encontró ninguna receta con el nombre ${name}`);
        }
    } 
    return
})



module.exports = router