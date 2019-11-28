import React from 'react';
import './signupsignin.scss';
import SignIn from '../../Components/SignIn/signin.jsx';
import SignUp from '../../Components/SignUp/signup.jsx';

const SignUpSignIn = () => (

	<div className='sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>
);

export default SignUpSignIn;