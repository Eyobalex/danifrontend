import { combineReducers } from 'redux';

import posts from './posts';
import auth from './auth';
import comments from './comments';

export const reducers = combineReducers({ posts, auth, comments });
