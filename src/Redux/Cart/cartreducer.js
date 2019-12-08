import {cartActionTypes} from './carttypes.js';
import {addItemToCart, clearItemFromCart, removeItem} from './cartutils.js';

const INITIAL_STATE = {

	hidden: true,
	cartItems:[]
}

const cartReducer = (state = INITIAL_STATE, action) => {

	switch(action.type) {

		case cartActionTypes.TOGGLE_CART_HIDDEN:

			return {

				...state,
				hidden: !state.hidden
			}

		case cartActionTypes.ADD_ITEM:

		return {

			...state,
			cartItems: addItemToCart(state.cartItems, action.payload)
		}

		case cartActionTypes.CLEAR_ITEM_FROM_CART:

		return {

			...state,
			cartItems: clearItemFromCart(state.cartItems, action.payload)
		}

		case cartActionTypes.REMOVE_ITEM:

		return {

			...state,
			cartItems: removeItem(state.cartItems, action.payload)
		}

		default:
			return state;
	}
}

export default cartReducer;