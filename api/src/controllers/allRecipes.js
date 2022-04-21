const {getRecipes} = require('./getRecipes.js')
const{Recipe,Diet} = require('../db')



const getAllRecipes = async (req,res) =>{
    const allRecipes = await getRecipes();
    const allDb= await Recipe.findAll();
   
        res.status(200).send(allRecipes.concat(allDb));
    

    let validate = id && id.includes("-");           // si tiene - es un UUID

    if (validate) {
        try {
            let dbId = await Recipe.findByPk(id, { include: Diet });  // entonce la busco directo de la base de datos
            res.status(200).json([dbId]);
        } catch (err) {
        console.log(err);
        }
    }
    
    else {
        try {
            if (id) {
                let recipeId = await allRecipes.filter((el) => el.id === parseInt(id));
                // console.log(recipeId);
                recipeId.length
                ? res.status(200).send(recipeId)
                : res.status(400).send("Not fuound");
            }
        } catch (err) {
        res.json({ message: err });
    }
}
}
module.exports={getAllRecipes};