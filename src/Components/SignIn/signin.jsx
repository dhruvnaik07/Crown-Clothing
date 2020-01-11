import React, {useState} from 'react';
import './signin.scss';
import FormInput from '../FormInput/forminput.jsx';
import CustomButton from '../CustomButton/custombutton.jsx';
import {googleSignInStart, emailSignInStart} from '../../Redux/User/useractions.js';
import {connect} from 'react-redux';

const SignIn = ({emailSignInStart, googleSignInStart}) => {

	const [userCredentials, setCredentials] = useState({email:'', password:''});
	const {email, password} = userCredentials;

	const handleSubmit = async event => {

		event.preventDefault();
		emailSignInStart(email, password);
	}

	const handleChange = event => {

		const {value, name} = event.target;
		setCredentials({...userCredentials, [name]: value });
	}

	return (

		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				
				<FormInput 
					name='email'
					type='email'
					label='Email'
					value={email} 
					handleChange={handleChange} required />
				
				<FormInput 
					name='password'
					type='password'
					label='Password'
					value={password}
					handleChange={handleChange} required />
				
				<div className='buttons'>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
				</div>
			</form>
		</div>
	)
}

const mapDistpatchToProps = dispatch => ({

	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDistpatchToProps)(SignIn);