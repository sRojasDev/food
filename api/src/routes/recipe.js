const express = require('express')
const router = express.Router()
const { Recipe, Diet } = require('../db');

router.post('/', async (req, res) => {
    let{
        name,
        summary,
        score,
        healthScore,
        image,
        instructions,
        diets
    } = req.body

    try{
        let recipeCreate = await Recipe.create({ 
            name,
            summary,
            score,
            healthScore,
            image,
            instructions, 
        })

        let dietDB = await Diet.findAll({ 
            where: {name: diets}
        })

        if (!name) return res.status(400).send({error: 'Debe ingresar el nombre'});
        if (!summary) return res.status(400).send({error: 'Debe ingresar el resumen'});
        // console.log(recipeCreate);
        console.log(dietDB);
        
        recipeCreate.addDiet(dietDB);
        console.log(recipeCreate);
        res.status(201).send('Succesfull');

    }catch(error){
        console.log(error.message);
        console.log(error);
        res.status(400).send(error);
    }
})



module.exports = router