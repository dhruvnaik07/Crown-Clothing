import {combineReducers} from 'redux';
import userReducer from './User/userreducer.js';
import cartReducer from './Cart/cartreducer.js';
import directoryReducer from './Directory/directoryreducer.js';
import shopReducer from './Shop/shopreducer.js';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {

	key: 'root',
	storage,
	whitelist: ['cart']
}

const rootReducer = combineReducers({

	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer
}); 

export default persistReducer(persistConfig, rootReducer);