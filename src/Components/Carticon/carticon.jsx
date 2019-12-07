import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../Assets/shopping-bag.svg';
import './carticon.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../Redux/Cart/cartactions.js';
import {selectCartItemsCount} from '../../Redux/Cart/cartselectors.js';

const CardIcon = ({toggleCartHidden, itemCount}) => (

	<div className='cart-icon' onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>{itemCount}</span>
	</div>
);

const mapDispatchToProps = dispatch => ({

	toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({

	itemCounts: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon);
