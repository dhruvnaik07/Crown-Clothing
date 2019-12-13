import React from 'react';
import './collectionoverview.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PreviewCollection from '../PreviewCollection/previewcollection.jsx';
import {selectCollectionsForPreview} from '../../Redux/Shop/shopselectors.js';

const CollectionOverview = ({collections}) => (

	<div className='shop-page'>
	{
		collections.map(({id, ...otherCollectionPros}) => (
			<PreviewCollection key={id} {...otherCollectionPros} />
		))
	}
	</div>
);

const mapStateToProps = createStructuredSelector({

	collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);