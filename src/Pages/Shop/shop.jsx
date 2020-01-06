import React from 'react';
import CollectionOverviewContainer from '../../Components/CollectionOverview/collectionoverview.container.jsx';
import {Route} from 'react-router-dom';
import CollectionPageContainer from '../Collection/collection.container.jsx';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../Redux/Shop/shopactions.js';
import {createStructuredSelector} from 'reselect';
import {selectCollectionIsFetching, selectIsCollectionsLoaded} from '../../Redux/Shop/shopselectors.js';

class ShopPage extends React.Component {

	componentDidMount() {

		const {fetchCollectionsStart} = this.props;
		fetchCollectionsStart();
	}

	render() {

		const {match} = this.props;

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
}

const mapStateToPros = createStructuredSelector({

	isCollectionFetching: selectCollectionIsFetching,
	isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({

	fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(mapStateToPros, mapDispatchToProps)(ShopPage);