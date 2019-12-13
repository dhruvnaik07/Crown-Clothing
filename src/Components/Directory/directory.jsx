import React from 'react';
import MenuItem from '../MenuItem/menuitem.jsx';
import './directory.scss';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../Redux/Directory/directoryselectors.js';
import {createStructuredSelector} from 'reselect';

const Directory = ({sections}) => (

	<div className='directory-menu'>
			{
				sections.map(({title, id, imageUrl, size, linkUrl}) => (
					<MenuItem title={title} key={id} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
			))
		}
	</div>
);

const mapStateToProps = createStructuredSelector({

	sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);