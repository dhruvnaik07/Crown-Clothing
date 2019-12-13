import React from 'react';
import CollectionOverview from '../../Components/CollectionOverview/collectionoverview.jsx';
import {Route} from 'react-router-dom';
import CollectionPage from '../Collection/collection.jsx';

const ShopPage = ({match}) => (

	<div className='shop-page'>
		<Route exact path={`${match.path}`} component={CollectionOverview} />
		<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
	</div>
);

export default ShopPage;