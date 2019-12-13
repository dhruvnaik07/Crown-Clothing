import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import './header.scss';
import {auth} from '../../Firebase/firebase.utils.js';
import CartDropdown from '../CartDropdown/cartdropdown.jsx';
import CartIcon from '../CartIcon/carticon.jsx';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../Redux/Cart/cartselectors.js';
import {selectCurrentUser} from '../../Redux/User/userselectors.js';

const Header = ({currentUser, hidden}) => (

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

			<CartIcon />
		</div>

		{
			!hidden ? <CartDropdown /> : null
		}
	</div>
);

const mapStateToProps = state => createStructuredSelector({

	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);