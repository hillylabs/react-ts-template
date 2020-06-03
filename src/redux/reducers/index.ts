import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import rootReducer from '../../apps/root/redux/reducers';

// Reducers
export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    // More reducers will go here
    // users: userReducer,
    root: rootReducer,
  });
