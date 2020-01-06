import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionIsFetching} from '../../Redux/Shop/shopselectors.js'
import WithSpinner from '../WithSpinner/withspinner.jsx';
import CollectionOverview from './collectionoverview.jsx';
import {compose} from 'redux';

const mapStateToPros = createStructuredSelector({

	isLoading: selectCollectionIsFetching
});

const CollectionOverviewContainer = compose(connect(mapStateToPros), WithSpinner)(CollectionOverview);

export default CollectionOverviewContainer;