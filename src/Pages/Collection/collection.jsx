import React from 'react';
import './collection.scss';
import CollectionItem from '../../Components/CollectionItem/collectionitem.jsx';
import {selectCollection} from '../../Redux/Shop/shopselectors.js';
import {connect} from 'react-redux';

const CollectionPage = ({collections}) => {

	const {title, items} = collections;

	return (

		<div className='collection-page'>

			<h2 className='title'>{title.toUpperCase()}</h2>

			<div className='items'>
			{
				items.map(item => <CollectionItem key={item.id} item={item} />)
			}
			</div>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => ({

	collections: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);