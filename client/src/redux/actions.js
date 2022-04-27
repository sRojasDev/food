import axios from "axios";
import {   GET_RECIPES, GET_GAME_BY_ID, GET_RECIPE_BY_NAME, GET_TYPES ,GET_PLAT,URL_BASE , ORDER_ALPHA, ORDER_SCORE, FILTER_BY_TYPE } from "./constantes";



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

export function postRecipe(payload) {
    return async function(dispatch){
        try{const respuesta= await axios.post("http://localhost:3001/recipe", payload)
        console.log(respuesta);
        return respuesta } 
        catch(err){
            console.log(err.massage);
            return false
        }      
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
export const orderScore = (way) => {
    return async (dispatch) => {
        
        console.log(`accion ordenar score ${way}`);
    
        return dispatch({
            type: ORDER_SCORE,
            payload:way,
        
        })
        
    }
};

export const filterByType = (way) => {
    return async (dispatch) => {
        
        console.log(`accion Filtrar x ${way}`);
    
        return dispatch({
            type: FILTER_BY_TYPE,
            payload:way,
        
        })
        
    }
};
