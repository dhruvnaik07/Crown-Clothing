import {combineReducers} from 'redux';
import userReducer from './User/userreducer.js';
import cartReducer from './Cart/cartreducer.js';

export default combineReducers({

	user: userReducer,
	cart: cartReducer
});