import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';
import './carticon.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../Redux/Cart/cartactions.js';

const CardIcon = ({toggleCartHidden}) => (

	<div className='cart-icon' onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>0</span>
	</div>
);

const mapDispatchToProps = dispatch => ({

	toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CardIcon);
