import ShopActionTypes from './shoptypes.js';
import {firestore, convertCollectionsSnapshotToMap} from '../../Firebase/firebase.utils.js';

export const fetchCollectionsStart = () => ({
  	type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({

	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({

	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: errorMessage
});

