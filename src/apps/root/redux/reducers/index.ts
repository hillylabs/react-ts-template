import { combineReducers } from 'redux';

import userReducer from './users';

// Reducers
export default combineReducers({
  // More reducers will go here
  users: userReducer,
});
