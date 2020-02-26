import React from 'react';
import Layout from '../layouts/MainLayout';
import SimpleForm from '../components/UI/Forms/simpleForm';
import Container from '../components/UI/Container/Container';
import Header from '../components/UI/Header/Header';
import axios from '../util/axios';
import ResolveError from '../util/resolveError';

const sendForgotPasswordReq = async inputs => {
	return await axios.post('/auth/forgot-password', inputs);
};

const ForgotPassword = () => {
	const formProps = {
		inputs: {
			email: {
				placeholder: 'E-mail',
				type: 'email',
				icon: ''
			}
		},
		submitText: 'send',
		sendRequest: sendForgotPasswordReq,
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
