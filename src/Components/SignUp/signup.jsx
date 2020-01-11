import React, {useState} from 'react';
import FormInput from '../FormInput/forminput.jsx';
import CustomButton from '../CustomButton/custombutton.jsx';
import {signUpStart} from '../../Redux/User/useractions.js';
import './signup.scss';
import {connect} from 'react-redux';

const SignUp = ({signUpStart}) => {

	const [userCredentials, setCredentials] = useState({displayName:'', email:'', password:'', confirmPassword:''});
	const {displayName, email, password, confirmPassword} = userCredentials; 

	const handleSubmit = async event => {

		event.preventDefault();

		if (password !== confirmPassword) {

			alert('passwords do not match!');
			return;
		}

		signUpStart({displayName, email, password});
	}

	const handleChange = event => {

		const {name, value} = event.target;
		setCredentials({...userCredentials, [name]: value});
	}

	return (

		<div className='sign-up'>

			<h2 className='title'>I do not have an account</h2>
			<span>Sign up with your email and password</span>

			<form className='sign-up-form' onSubmit={handleSubmit}>

				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					handleChange={handleChange}
					label='Display Name'
					required />

				<FormInput
					type='email'
					name='email'
					value={email}
					handleChange={handleChange}
					label='Email'
					required />
				<FormInput
					type='password'
					name='password'
					value={password}
					handleChange={handleChange}
					label='Password'
					required />

				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					handleChange={handleChange}
					label='Confirm Password'
					required />

				<CustomButton type='submit'>SIGN UP</CustomButton>
			</form>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({

	signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);