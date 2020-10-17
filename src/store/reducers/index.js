import {combineReducers} from 'redux';
import userReducer from './AuthReducer'
import productReducer from './ProductReducer'


const appReducer = combineReducers({
    auth: userReducer,
    productList:productReducer
});

export default (rootReducer = (state, action) => {
  // NOTE: Resets the redux store on user logout
  if (action.type === 'LOGOUT_REQUEST') {
    state = undefined;
  }

  return appReducer(state, action);
});