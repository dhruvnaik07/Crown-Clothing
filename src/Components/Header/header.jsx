import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../Assets/crown.svg';
import {auth} from '../../Firebase/firebase.utils.js';
import CartDropdown from '../CartDropdown/cartdropdown.jsx';
import CartIcon from '../CartIcon/carticon.jsx';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../Redux/Cart/cartselectors.js';
import {selectCurrentUser} from '../../Redux/User/userselectors.js';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles.jsx';
import {signOutStart} from '../../Redux/User/useractions.js';

const Header = ({currentUser, hidden, signOutStart}) => (

	<HeaderContainer>

		<LogoContainer to='/'>
			<Logo className='logo' />
		</LogoContainer>

		<OptionsContainer>

			<OptionLink to="/shop">SHOP</OptionLink>
			<OptionLink to="/shop">CONTACT</OptionLink>
			{
				currentUser ?
				<OptionLink to='/' as='div' onClick={signOutStart}>SIGN OUT</OptionLink> :
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

const mapDispatchToProps = dispatch => ({

	signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);