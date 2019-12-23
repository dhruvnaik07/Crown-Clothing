import React from 'react';
import {SpinnerContainer, SpinnerOverlay} from './withspinner.styles.jsx';

const WithSpinner = WrapperComponent => {

	const Spinner = ({isLoading, ...otherProps}) => {
	
		return isLoading ?
		(
		
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) :
		(
			<WrapperComponent {...otherProps} />
		);
	}

	return Spinner;
}

export default WithSpinner;