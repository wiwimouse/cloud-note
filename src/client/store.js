import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import user from './reducers/user';
import home from './routes/home/reducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const rootReducer = combineReducers({
  user,
  home,
});

export default createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
