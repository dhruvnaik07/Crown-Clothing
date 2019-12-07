import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCattItems = createSelector(
		[selectCart],
		(cart) => cart.cartItems
	);

export const selectCartHidden = createSelector(
		[selectCart],
		(cart) => cart.hidden
	);

export const selectCartItemsCount = createSelector(
		[selectCattItems],
		(cartItems) => cartItems.reduce(
			(accumlatedQuantity, cartItem) => 
				accumlatedQuantity + cartItem.quantity, 0)
	);

export const selectCartTotal = createSelector(
		[selectCattItems],
		(cartItems) => cartItems.reduce(
			(totalPrice, cartItem) =>
				totalPrice + cartItem.quantity*cartItem.price, 0)
	);