import {combineReducers} from 'redux';
import userReducer from './User/userreducer.jsx';

export default combineReducers({

	user: userReducer
})