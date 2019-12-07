import React from 'react';
import './cartdropdown.scss';
import CustomButton from '../CustomButton/custombutton.jsx';

const CartDropdown = () => (

	<div className='cart-dropdown'>
		<div className='cart-items' />
		<CustomButton>GO TO CHECKOUT</CustomButton>
	</div>
)

export default CartDropdown;