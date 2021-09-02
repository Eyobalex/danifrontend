import { GET_CATEGORIES } from "../constants/actionTypes";

export default (state = { isLoading: true, categories: [] }, action) => {
    switch (action.type) {
      // case ''
      case GET_CATEGORIES:
        return { ...state,categories: action.payload };


      default:
          return state;
    }
  };