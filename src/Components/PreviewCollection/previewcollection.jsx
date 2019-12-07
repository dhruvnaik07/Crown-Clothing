import React from 'react';
import './previewcollection.scss';
import CollectionItem from '../CollectionItem/collectionitem.jsx';

const PreviewCollection = ({title, items}) => (

	<div className='collection-preview'>

		<h1>{title.toUpperCase()}</h1>

		<div className='preview'>

		{
			items
			.filter((item, id) => id<4)
			.map(item => (

				<CollectionItem key={item.id} item={item}/>
			))
		}
		</div>
	</div>
);

export default PreviewCollection;