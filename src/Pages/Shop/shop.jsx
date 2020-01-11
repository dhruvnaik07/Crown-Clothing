import React, {useEffect} from 'react';
import CollectionOverviewContainer from '../../Components/CollectionOverview/collectionoverview.container.jsx';
import {Route} from 'react-router-dom';
import CollectionPageContainer from '../Collection/collection.container.jsx';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../Redux/Shop/shopactions.js';
import {createStructuredSelector} from 'reselect';

const ShopPage = ({fetchCollectionsStart, match}) => {

	useEffect(() => {

		fetchCollectionsStart();
	},[]);

	return (

		<div className='shop-page'>
			<Route exact path={`${match.path}`}
				component={CollectionOverviewContainer}
			/>
			<Route path={`${match.path}/:collectionId`}
				component={CollectionPageContainer}
			/>
		</div>
	);
}

const mapDispatchToProps = dispatch => ({

	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);