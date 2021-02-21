/*

██╗███╗   ███╗██████╗  ██████╗ ██████╗ ████████╗███████╗
██║████╗ ████║██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝
██║██╔████╔██║██████╔╝██║   ██║██████╔╝   ██║   ███████╗
██║██║╚██╔╝██║██╔═══╝ ██║   ██║██╔══██╗   ██║   ╚════██║
██║██║ ╚═╝ ██║██║     ╚██████╔╝██║  ██║   ██║   ███████║
╚═╝╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
														 
*/

import React from 'react';
import Layout from '../layouts/MainLayout';
import SimpleForm from '../components/UI/Forms/simpleForm';
import Container from '../components/UI/Container/Container';
import Header from '../components/UI/Header/Header';
import axios from '../util/axios';

/*

██╗  ██╗███████╗██╗     ██████╗ ███████╗██████╗ ███████╗
██║  ██║██╔════╝██║     ██╔══██╗██╔════╝██╔══██╗██╔════╝
███████║█████╗  ██║     ██████╔╝█████╗  ██████╔╝███████╗
██╔══██║██╔══╝  ██║     ██╔═══╝ ██╔══╝  ██╔══██╗╚════██║
██║  ██║███████╗███████╗██║     ███████╗██║  ██║███████║
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝
														 
*/

const sendForgotPasswordReq = async inputs =>
	await axios.post('/auth/forgot-password', inputs);

const resolveSuccess = updateRedirect => {
	updateRedirect('/forgot-password/?active');
};

/*

  ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝
██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║   
██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║   
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║   
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝   
																				  
*/

const ForgotPassword = () => {
	const formProps = {
		inputs: {
			email: {
				placeholder: 'E-mail',
				type: 'email',
				icon: '',
				validation: {
					isEmail: true
				}
			}
		},
		submitText: 'send',
		sendRequestFunc: sendForgotPasswordReq,
		resolveSuccessFunc: resolveSuccess,
		direction: 'row'
	};
	const cntMaxWidth = 600;

	return (
		<Layout>
			<Container
				direction='column'
				padding={[5, 2, 3, 2]}
				cntWidth={{ xs: 12 }}
				maxWidth={cntMaxWidth}
			>
				<Header size='h2'>Forgot your password</Header>
				<p>
					Enter the email you registered with in the field below and
					we'll send you an email with a "Password Reset" link.
				</p>
				<SimpleForm {...formProps} />
			</Container>
		</Layout>
	);
};

export default ForgotPassword;
