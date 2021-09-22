import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });

    switch (data.result.role) {
      case "ADMIN":
        router.push('/adminDashboard');
          
        break;
    
      case "BUSINESS":
        router.push('/clientDashboard');
        break;
    
      case "CLIENT":
        router.push('/');
        break;

      default:
        break;
    }

  } catch (error) {
    // for (let er in error) {
    //   console.log(er);
    // }
    console.log(error.response.data)
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    router.push('/auth/listingSingle.js');
  dispatch({ type: AUTH, data });

  } catch (error) {
    console.log(error.response.data);
    console.log(error);
  }
};
