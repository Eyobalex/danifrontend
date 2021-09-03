import * as api from '../api/index.js';
import { DELETE_USERS, GET_USERS} from '../constants/actionTypes.js';


export const getUsers = () => async (dispatch) => {
    try {
        const {data} = await  api.getUsers();
        dispatch({type: GET_USERS, payload: data})
    } catch (error) {
        console.error(error);
    }
}

export const deleteUsers = (id) => async(dispatch) => {
    try {
        await api.deleteUsers(id);
        dispatch({type: DELETE_USERS, payload: id});
    } catch (error) {
        console.error(error);
    }
}