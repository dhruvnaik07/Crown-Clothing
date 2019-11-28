import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import './header.scss';
import {auth} from '../../Firebase/firebase.utils.js';

const Header = ({currentUser}) => (

	<div className='header'>

		<Link to='/'>
			<Logo className='logo' />
		</Link>

		<div className='options'>

			<Link className='option' to="/shop">SHOP</Link>
			<Link className='option' to="/shop">CONTACT</Link>
			{
			currentUser ?
			<Link className='option' to='/' onClick={() => auth.signOut()}>SIGN OUT</Link> :
			<Link className='option' to='/signin'>SIGN IN</Link>
		}
		</div>
	</div>
);

export default Header;