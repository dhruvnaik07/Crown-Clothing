import {all, call} from 'redux-saga/effects';
import {shopSagas} from './Shop/shopsagas.js';
import {userSagas} from './User/usersagas.js';
import {cartSagas} from './Cart/cartsagas.js';

export default function* rootSaga() {

	yield all([

		call(shopSagas),
		call(userSagas),
		call(cartSagas)
	]);
}