const { Diet } = require('../db.js');
const loadDiets= ()=>{
    let diets =['gluten free', 'ketogenic','vegetarian','lacto-vegetarian', 'lacto ovo vegetarian','vegan','pescatarian','paleolithic','primal','whole 30']
    let i=0;
    diets= diets.map((el)=>{
        i++
        return {
            name:el,
            id: `${i}${el[0].toUpperCase()}${el[1]}${el[2]}`
        }
    })
    diets.forEach((el) =>  Diet.create({name: el.name,
        id: el.id
    }));
    console.log("dietas cargadas");
    return
}
module.exports={loadDiets};