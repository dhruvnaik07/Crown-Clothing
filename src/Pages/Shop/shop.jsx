import React from 'react';
import CollectionOverview from '../../Components/CollectionOverview/collectionoverview.jsx';
import {Route} from 'react-router-dom';
import CollectionPage from '../Collection/collection.jsx';
import {firestore, convertCollectionsSnapshotToMap} from '../../Firebase/firebase.utils.js';
import {connect} from 'react-redux';
import {updateCollections} from '../../Redux/Shop/shopactions.js';
import WithSpinner from '../../Components/WithSpinner/withspinner.jsx';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

	state = {
		loading: true
	};

	unSubscribeFromSnapshot = null;

	componentDidMount() {

		const {updateCollections} = this.props;
		const collectionRef = firestore.collection('collections');

		collectionRef.get().then(snapshot => {

			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({loading: false});
		});
	}

	render() {

		const {match} = this.props;
		const {loading} = this.state;

		return (

			<div className='shop-page'>
				<Route exact path={`${match.path}`}
					render={ props => ( 
						<CollectionOverviewWithSpinner isLoading={loading} {...props} />
					)}
				/>
				<Route path={`${match.path}/:collectionId`}
					render={ props => (
						<CollectionPageWithSpinner isLoading={loading} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({

	updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);