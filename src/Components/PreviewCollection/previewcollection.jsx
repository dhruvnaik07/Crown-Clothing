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
			.map(({id, ...otherItemProps}) => (

				<CollectionItem key={id} {...otherItemProps}/>
			))
		}
		</div>
	</div>
);

export default PreviewCollection;