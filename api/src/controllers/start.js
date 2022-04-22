const { Diet } = require('../db.js');

let load=false;

const loadDiets= async()=>{
    let existe= await Diet.findAll({
        where: {
            id: "1Glu"
        }
    });
    console.log(existe);

    if(load===false){
    let diets =['gluten free', 'ketogenic','vegetarian','lacto-vegetarian', 'lacto ovo vegetarian','vegan','pescatarian','paleolithic','primal','whole 30']
    let i=0;
    diets= diets.map((el)=>{
        i++
        return {
            name:el,
            id: `${i}${el[0].toUpperCase()}${el[1]}${el[2]}`
        }
    })
    diets.map((el) => {
        if(!existe || existe.length<1)
        Diet.create({
            name: el.name,
            id: el.id
        })
        else console.log("no creo")
    });
    console.log("dietas cargadas");
    load=true;
    }
    else{
        console.log("las dietas ya habían sido cargadas a la db");
    }
    return
}
module.exports={loadDiets};