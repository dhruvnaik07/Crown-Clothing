import {userActionTypes} from './usertypes.js';

export const setCurrentUser = user => ({

	type: userActionTypes.SET_CURRENT_USER,
	payload: user
});