import React from 'react';
import './cartdropdown.scss';
import CustomButton from '../CustomButton/custombutton.jsx';
import CartItem from '../CartItem/cartitem.jsx';
import {connect} from 'react-redux';
import {selectCattItems} from '../../Redux/Cart/cartselectors.js';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../Redux/Cart/cartactions.js';

const CartDropdown = ({cartItems, history, dispatch}) => (

	<div className='cart-dropdown'>
		<div className='cart-items'>
			{
				cartItems.length ? 
				cartItems.map(cartItem => 
							  <CartItem key={cartItem.id} item={cartItem}/>) :
				<span className='empty-message'>Your cart is empty</span>
			}
		</div>
		<CustomButton onClick={() => {
			history.push('/checkout'); 
			dispatch(toggleCartHidden())}
		}>
			GO TO CHECKOUT
		</CustomButton>
	</div>
)

const mapStateToProps = createStructuredSelector({

	cartItems: selectCattItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));