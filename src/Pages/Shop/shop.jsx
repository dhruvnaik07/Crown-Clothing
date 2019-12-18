import React from 'react';
import CollectionOverview from '../../Components/CollectionOverview/collectionoverview.jsx';
import {Route} from 'react-router-dom';
import CollectionPage from '../Collection/collection.jsx';
import {firestore, convertCollectionsSnapshotToMap} from '../../Firebase/firebase.utils.js';
import {connect} from 'react-redux';
import {updateCollections} from '../../Redux/Shop/shopactions.js';

class ShopPage extends React.Component {

	unSubscribeFromSnapshot = null;

	componentDidMount() {

		const {updateCollections} = this.props;
		const collectionRef = firestore.collection('collections');

		collectionRef.onSnapshot(async snapshot => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
		});
	}

	render() {

		const {match} = this.props;

		return (

			<div className='shop-page'>
				<Route exact path={`${match.path}`} component={CollectionOverview} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPage} />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({

	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);