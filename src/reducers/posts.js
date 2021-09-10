import { FETCH_ALL,GET_OWN_POSTS, FETCH_BY_SEARCH, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, CREATE_COMMENT, GET_LISTING, RATE, UPLOAD_PRODUCT_IMAGE } from '../constants/actionTypes';

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.post };
    case LIKE:
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
      return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
    case DELETE:
      return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };

    case CREATE_COMMENT:
      return { ...state, posts: state.posts.map(p => { if (p._id === action.payload.postId) p.comments.push(action.payload.data) }) };
    case RATE:
      return {...state, posts: state.posts.map(p => (p._id === action.payload.postId) ? action.payload : p) };


    case GET_LISTING:
      return {...state, posts: action.payload}
    case GET_OWN_POSTS:
      return {...state, posts: action.payload}
    
    case UPLOAD_PRODUCT_IMAGE:
      return {...state, posts: state.posts.map(post => post._id === action.payload._id ? action.payload : post )}
    default:
      return state;
  }
};

