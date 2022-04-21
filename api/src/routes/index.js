const { Router } = require('express');
// Importar todos los routers;
const diet = require('./diets.js');
const recipe = require('./recipe.js');
const recipes = require ('./recipes.js');
const {getAllRecipes}=require("../controllers/allRecipes.js")



const router = Router();

// Configurar los routers
router.use('/types', diet);
router.use('/recipes', recipes);
router.use('/recipe',recipe);




module.exports = router;
