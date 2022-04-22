const { Router } = require('express');
const router = Router();
const {getByIdApi}= require('../controllers/getById.js')

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
            console.log("entró en busqueda por id en API externa");
            let response=await getByIdApi(id);
            
        return res.json(response);
        }
    }
    catch(err){
            res.send(`La  ruta con el ID: ${id} Generó un error: ${err.message}`);
        }
    //res.send(`La  ruta anda perfecto con el ID: ${id}`);
})
module.exports = router