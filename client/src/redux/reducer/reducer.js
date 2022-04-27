
import Ordenar from "../../utils/ordenar.js"
import { ASC, DSC, GET_RECIPES, GET_GAME_BY_ID, GET_RECIPE_BY_NAME, GET_TYPES, GET_PLAT, ORDER_ALPHA, ORDER_SCORE, FILTER_BY_TYPE  } from "../constantes.js";


const initialState={
    allRecipes:[],
    filterRecipes:[],
    platforms:[],
    types:[],
    esperandoFiltro:false,
    error:false,
}


function rootReducer(state =initialState, action = {}){
    switch (action.type){
        case "POST_GAME":    
                    return { ...state,
                        allgames:[...state.allgames, action.payload],
                    } 
        case GET_TYPES:
            console.log("entró a get genres")
            let orderedGenres= Ordenar(action.payload, ASC, "name")
            return {
                ...state,
                types: orderedGenres,
            }
        case GET_RECIPES:
                console.log("entró a get get All-GAMES reducer")
                
                return {
                    ...state,
                    filterRecipes: action.payload ,
                    allRecipes: action.payload,
                    esperandoFiltro:true,
                }
            
        case GET_GAME_BY_ID:
                console.log("entró a get get GAMES_By_ID reducer")
                
                return {
                    ...state,
                }
        case GET_RECIPE_BY_NAME:
                    console.log("entró a get get GAMES_By_NAME reducer")
                    if(action.payload.length<1){
                        return {
                            ...state,
                            filterRecipes: [{name:"No se enontraron resultados", id:"vacio"}]
                        }
                    }
                    return {
                        ...state,
                        filterRecipes: action.payload,
                        esperandoFiltro:false,
                    }
        case GET_PLAT:
                        console.log("entró a get CATEG reducer");
                        let arr= state.allgames;
                        let plats= arr.map(el=>{
                            return el.platforms.map(p=>p.name);
                        });
                        let plano= plats.flat();
                        console.log(plano);
                        let plataformas= new Set(plano);
                        let dry=[...plataformas];
                        console.log(dry);
                        
                        return {
                            ...state,
                            platforms: dry,
                        }
        case ORDER_ALPHA:
            console.log("entró a get ORDER-ALPHA reducer")
                if(action.payload=== "A-Z"){
                    let ordA= Ordenar(state.filterRecipes, ASC, "title")
                        return {
                            ...state,
                            filterRecipes: ordA,
                            esperandoFiltro:false,
                            }
                    }
                    if(action.payload=== "Z-A"){
                    let ordZ= Ordenar(state.filterRecipes, DSC, "title")
                        return {
                            ...state,
                            filterRecipes: ordZ,
                            esperandoFiltro:false,
                            }
                    }
                    break
        case ORDER_SCORE:
            console.log("entró a get ORDER-SCORE reducer")
                if(action.payload=== "Less"){
                    let ordMIN= Ordenar(state.allRecipes, ASC, "score")
                                    return {
                                        ...state,
                                        filterRecipes: ordMIN,
                                        esperandoFiltro:false,
                                        }
                                }
                if(action.payload=== "Top"){
                    let ordMax= Ordenar(state.allRecipes, DSC, "score")
                                    return {
                                        ...state,
                                        filterRecipes: ordMax,
                                        esperandoFiltro:false,
                                        }
                                }
                        break 
        case FILTER_BY_TYPE:
            console.log(action.payload);
            let todos= state.allRecipes;
            console.log(todos.length);
            let filtrados=todos?.filter(el=> {
            for(let i=0; i<el.diets.length ;i++ ){
                if(el.diets[i].name === action.payload){
                    return el;
                }
            }
            return
            })
            return {
                ...state,
                filterRecipes: filtrados,
            }
        default:
            console.log("entro al default reducer");
            console.log("géneros: "+state.types.length);
            return state    
    }
}
export default rootReducer;



