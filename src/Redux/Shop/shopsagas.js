import {takeLatest, call, put, all} from 'redux-saga/effects';
import ShopActionTypes from './shoptypes.js';
import {firestore, convertCollectionsSnapshotToMap} from '../../Firebase/firebase.utils.js';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shopactions.js';

export function* fetchCollectionsAsync() {

	try {

		const collectionRef = firestore.collection('collections');
		const snapshot = yield collectionRef.get();
		const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
		yield put(fetchCollectionsSuccess(collectionsMap));
	}

	catch (error) {

		yield put(fetchCollectionsFailure(error.message));
	}
}

export function* fetchCollectionsStart() {

	yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSagas() {

	yield all ([

		call(fetchCollectionsStart)
	]);
}