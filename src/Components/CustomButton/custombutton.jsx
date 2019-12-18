import React from 'react';
import './custombutton.scss';
import {CustomButtonContainer} from './custombutton.styles.jsx';

const CustomButton = ({children, ...props}) => (

		<CustomButtonContainer {...props}>
			{children}
		</CustomButtonContainer>
);

export default CustomButton;