import { DELETE_USERS, GET_USERS} from "../constants/actionTypes";

export default (state = { isLoading: true, users: [] }, action) => {
    switch (action.type) {
      // case ''
      case GET_USERS:

        // console.log(action.payload);
        return { ...state, users: action.payload };
      case DELETE_USERS:
        return {...state, users: state.users.filter(user => String(user._id) !== action.payload)}
      default:
          return state;
    }
  };