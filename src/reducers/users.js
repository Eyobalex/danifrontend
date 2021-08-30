import { GET_USERS} from "../constants/actionTypes";

export default (state = { isLoading: true, users: [] }, action) => {
    switch (action.type) {
      // case ''
      case GET_USERS:

        console.log(action.payload);
        return { ...state, users: action.payload };

      default:
          return state;
    }
  };