import React from 'react';
import './signin.scss';
import FormInput from '../FormInput/forminput.jsx';
import CustomButton from '../CustomButton/custombutton.jsx';
import {auth, signInWithGoogle} from '../../Firebase/firebase.utils.js';

class SignIn extends React.Component {

	constructor(props) {

		super(props);

		this.state = {

			email: '',
			password: ''
		}
	}

	handleSubmit = async event => {

		event.preventDefault();
		const {email, password} = this.state;

		try {

			await auth.signInWithEmailAndPassword(email, password);
			this.setState({email:'', password:''});
		}

		catch(error) {

			console.log(error.message);
		}
		
	}

	handleChange = event => {

		const {value, name} = event.target;
		this.setState({ [name]: value });
	}

	render() {

		return (

			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					
					<FormInput 
						name='email'
						type='email'
						label='Email'
						value={this.state.email} 
						handleChange={this.handleChange} required />
					
					<FormInput 
						name='password'
						type='password'
						label='Password'
						value={this.state.password}
						handleChange={this.handleChange} required />
					
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn;