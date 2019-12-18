import React from 'react';
import './collectionitem.scss';
import CustomButton from '../CustomButton/custombutton.jsx';
import {connect} from 'react-redux';
import {addItem} from '../../Redux/Cart/cartactions.js';

const CollectionItem = ({item, addItem}) => {

	const {name, price, imageUrl} = item;

	return (

		<div className='collection-item'>
			<div 
				className='image'
				style={{backgroundImage: `url(${imageUrl})`}} />

			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>{price}</span>
			</div>

			<CustomButton className='custom-button' onClick={() => addItem(item)} inverted>Add to Cart</CustomButton>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({

	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);