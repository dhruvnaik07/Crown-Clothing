import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionsLoaded} from '../../Redux/Shop/shopselectors.js';
import WithSpinner from '../../Components/WithSpinner/withspinner.jsx';
import CollectionPage from './collection.jsx';

const mapStateToProps = createStructuredSelector({

	isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(connect(mapStateToProps), WithSpinner)(CollectionPage);

export default CollectionPageContainer;