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
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles.jsx';

const Header = ({currentUser, hidden}) => (

	<HeaderContainer>

		<LogoContainer to='/'>
			<Logo className='logo' />
		</LogoContainer>

		<OptionsContainer>

			<OptionLink to="/shop">SHOP</OptionLink>
			<OptionLink to="/shop">CONTACT</OptionLink>
			{
				currentUser ?
				<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> :
				<OptionLink to='/signin'>SIGN IN</OptionLink>
			}

			<CartIcon />
		</OptionsContainer>

		{
			!hidden ? <CartDropdown /> : null
		}
	</HeaderContainer>
);

const mapStateToProps = state => createStructuredSelector({

	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);