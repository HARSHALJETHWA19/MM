import { combineReducers } from 'redux';
import authReducer from './authReducer';
import websiteReducer from './websiteReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  websites: websiteReducer,
});

export default rootReducer;
