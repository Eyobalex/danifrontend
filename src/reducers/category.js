import { DELETE_CATAGORIES, GET_CATEGORIES } from "../constants/actionTypes";

export default (state = { isLoading: true, categories: [] }, action) => {
    switch (action.type) {
      // case ''
    case GET_CATEGORIES:
        return { ...state,categories: action.payload };

    case DELETE_CATAGORIES:
        return {...state, categories: state.categories.filter(cat => String(cat._id) !== action.payload)} 


      default:
          return state;
    }
  };