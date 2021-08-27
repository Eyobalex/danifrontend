import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
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
