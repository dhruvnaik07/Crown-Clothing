import React from 'react';
import './signin.scss';
import FormInput from '../FormInput/forminput.jsx';
import CustomButton from '../CustomButton/custombutton.jsx';
import {googleSignInStart, emailSignInStart} from '../../Redux/User/useractions.js';
import {connect} from 'react-redux';

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
		const {emailSignInStart} = this.props;
		const {email, password} = this.state;
		
		emailSignInStart(email, password);
	}

	handleChange = event => {

		const {value, name} = event.target;
		this.setState({ [name]: value });
	}

	render() {

		const {googleSignInStart} = this.props;

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
						<CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

const mapDistpatchToProps = dispatch => ({

	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
});

export default connect(null, mapDistpatchToProps)(SignIn);