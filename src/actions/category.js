import * as api from '../api/index.js';
import { GET_CATEGORIES } from '../constants/actionTypes.js';



export const getCategories = () => async (dispatch) => {
    try {
        const {data} = await api.getCategories();

        console.log("action",data);

        dispatch({type: GET_CATEGORIES, payload: data});

    } catch (error) {
        console.log(error);
    }
}