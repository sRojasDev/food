
import Ordenar from "../../utils/ordenar.js"
import { ASC, GET_GAMES, GET_GAME_BY_ID, GET_GAME_BY_NAME, GET_GENRES, GET_PLAT } from "../constantes.js";


const initialState={
    allgames:[],
    filtergames:[],
    platforms:[],
    genres:[],
    esperandoFiltro:false,
    error:false,
}


function rootReducer(state =initialState, action = {}){
    switch (action.type){
        case "POST_GAME":    
                    return { ...state,
                        allgames:[...state.allgames, action.payload],
                    } 
        case GET_GENRES:
            console.log("entró a get genres")
            let orderedGenres= Ordenar(action.payload, ASC, "name")
            return {
                ...state,
                genres: orderedGenres,
            }
        case GET_GAMES:
                console.log("entró a get get All-GAMES reducer")
                
                return {
                    ...state,
                    filtergames: action.payload ,
                    allgames: action.payload,
                    esperandoFiltro:true,
                }
            
        case GET_GAME_BY_ID:
                console.log("entró a get get GAMES_By_ID reducer")
                
                return {
                    ...state,
                }
        case GET_GAME_BY_NAME:
                    console.log("entró a get get GAMES_By_NAME reducer")
                    
                    return {
                        ...state,
                        filtergames: action.payload,
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
        default:
            console.log("entro al default reducer");
            console.log("géneros: "+state.genres.length);
            return state    
    }
}
export default rootReducer;



