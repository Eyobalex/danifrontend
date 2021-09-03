import * as api from '../api/index.js';
import { GET_CATEGORIES, DELETE_CATAGORIES } from '../constants/actionTypes.js';



export const getCategories = () => async (dispatch) => {
    try {
        const {data} = await api.getCategories();

        console.log("action",data);

        dispatch({type: GET_CATEGORIES, payload: data});

    } catch (error) {
        console.log(error);
    }
}

export const deleteCategories = id => async (dispatch) =>{
    try {
        await api.deleteCategories(id);
        dispatch({type: DELETE_CATAGORIES, payload: id})
    } catch (error) {
        console.log(error);
    }
}