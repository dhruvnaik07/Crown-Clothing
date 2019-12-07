import React from 'react';
import './cartdropdown.scss';
import CustomButton from '../CustomButton/custombutton.jsx';
import CartItem from '../CartItem/cartitem.jsx';
import {connect} from 'react-redux';
import {selectCattItems} from '../../Redux/Cart/cartselectors.js';

const CartDropdown = ({cartItems}) => (

	<div className='cart-dropdown'>
		<div className='cart-items'>
			{
				cartItems.map(cartItem => 
							  <CartItem key={cartItem.id} item={cartItem}/>)
			}
		</div>
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({

	cartItems: selectCattItems(state);
});

export default connect(mapStateToProps)(CartDropdown);