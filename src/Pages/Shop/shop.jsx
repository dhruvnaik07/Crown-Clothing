import React from 'react';
import ShopData from './shopdata.jsx';
import PreviewCollection from '../../Components/PreviewCollection/previewcollection.jsx';

class ShopPage extends React.Component {

	constructor(props) {

		super();

		this.state = {

			collections: ShopData
		}
	}

	render() {

		const {collections} = this.state;

		return (

			<div className='shop-page'>
			{
				collections.map(({id, ...otherCollectionPros}) => (

					<PreviewCollection key={id} {...otherCollectionPros} />
				))
			}
			</div>
		);
	}
}

export default ShopPage;