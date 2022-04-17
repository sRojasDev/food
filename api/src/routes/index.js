const { Router } = require('express');
// Importar todos los routers;
const diet = require('./diets.js');
const recipe = require('./recipe.js');



const router = Router();

// Configurar los routers
router.use('/types', diet);
router.use('/recipes', recipe);
router.use('/recipe',recipe);




module.exports = router;
