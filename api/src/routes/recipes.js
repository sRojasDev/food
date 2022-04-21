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
        
        if (response){
            res.status(200).send(response);
        }
        else{
            return res.status(404).send(`No se encontró ninguna receta con el nombre ${name}`);
        }
    } 
    return
})

router.get('/:id', async (req, res) => {
    let id=req.params.id
    try{
    
        //recupero receta con id de la base de datos
        if(id && id.includes("-")){
            const recipe = await Recipe.findByPk(id, {
            include: Diet
        });
        return res.send(recipe);
        }
        else{
            
        }
    }
    catch(err){
            res.send(`La  ruta con el ID: ${id} Generó un error: ${err.message}`);
        }
    res.send(`La  ruta anda perfecto con el ID: ${id}`);
})


module.exports = router