import axios from "axios";
import {   GET_RECIPES, GET_GAME_BY_ID, GET_RECIPE_BY_NAME, GET_TYPES ,GET_PLAT,URL_BASE , ORDER_ALPHA } from "./constantes";



export const loadTypes = () => {
    return async (dispatch) => {
        try {
            const api = await axios.get(`${URL_BASE}/types`);
            const res= api.data;
            console.log("desde actions:");
            return dispatch({
                type: GET_TYPES,
                payload: res,
            })
        }
        catch (error) { console.log(error) }
    }
};

export const getAllrecipes = () => {
    return async (dispatch) => {
        try {
            const api = await axios.get(`${URL_BASE}/recipes`);
            const res= api.data;
            console.log("desde actions:");
            return dispatch({
                type: GET_RECIPES,
                payload: res,
            })
        }
        catch (error) { console.log(error) }
    }
};

export const getById = (id) =>{
    console.log(GET_GAME_BY_ID+": "+id);
    return async (dispatch) => {
        try {
            const api = {data:GET_GAME_BY_ID}
            const res= api.data;
            console.log("desde actions:");
            return dispatch({
                type: GET_GAME_BY_ID ,
                payload: res,
            })
        }
        catch (error) { console.log(error) }
    }
}


export const getByNames = (name) => {
    return async (dispatch) => {
        try {
            const api = await axios.get(`${URL_BASE}/recipes?name=${name}`);
            const res= api.data;
            console.log(res);
            
            return dispatch({
                type: GET_RECIPE_BY_NAME,
                payload: res,
            })
        }
        catch (error) { console.log(error) }
    }
};

export const loadCateg = () => {
    return async (dispatch) => {
        
        console.log("desde actions: PLAT");
    
        return dispatch({
            type: GET_PLAT,
        
        })
        
    }
};

export function postGame(objGame){
    return async (dispatch) => {
        try {
            const api = await axios.post(`localhost:3001/videogame`, objGame);
            const res= api.data;
            console.log(api);
            console.log("desde post games")
            console.log(res);
            return dispatch({
                type: "POST_GAME",
                payload: res,
            })
        }
        catch (error) { console.log(error) }
    }
    
    
}

export const orderAlpha = (way) => {
    return async (dispatch) => {
        
        console.log(`accion ordenar alpha ${way}`);
    
        return dispatch({
            type: ORDER_ALPHA,
            payload:way,
        
        })
        
    }
};
