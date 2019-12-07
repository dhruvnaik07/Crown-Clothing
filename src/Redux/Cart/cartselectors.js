import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCattItems = createSelector(
		[selectCart],
		(cart) => cart.cartItems
	);

export const selectCartItemsCount = createSelector(
		[selectCartItems],
		cartItems => cartItems.reduce(
			(accumlatedQuantity, cartItem) => 
				accumlatedQuantity + cartItem.quantity, 0)
	);