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
import Styled from 'styled-components';
import axios from '../util/axios';

/*

  ██████╗ ██████╗ ███╗   ██╗███████╗████████╗ █████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██╔══██╗████╗  ██║██╔════╝
██║     ██║   ██║██╔██╗ ██║███████╗   ██║   ███████║██╔██╗ ██║███████╗
██║     ██║   ██║██║╚██╗██║╚════██║   ██║   ██╔══██║██║╚██╗██║╚════██║
╚██████╗╚██████╔╝██║ ╚████║███████║   ██║   ██║  ██║██║ ╚████║███████║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝
																	  
*/

const Header = Styled.h1`
    text-align: center;
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
`;

/*

██╗  ██╗███████╗██╗     ██████╗ ███████╗██████╗ ███████╗
██║  ██║██╔════╝██║     ██╔══██╗██╔════╝██╔══██╗██╔════╝
███████║█████╗  ██║     ██████╔╝█████╗  ██████╔╝███████╗
██╔══██║██╔══╝  ██║     ██╔═══╝ ██╔══╝  ██╔══██╗╚════██║
██║  ██║███████╗███████╗██║     ███████╗██║  ██║███████║
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝
														 
*/

const sendRegisterReq = async inputs =>
	await axios.post('/auth/signin', inputs);

const resolveSuccess = updateRedirect => {
	updateRedirect('/login');
};

/*

  ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝
██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║   
██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║   
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║   
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝   
																				  
*/

const SignIn = props => {
	const formProps = {
		inputs: {
			nickname: {
				placeholder: 'Nickname',
				type: 'text',
				icon: '',
				validation: {
					length: {
						min: 3,
						max: 15
					},
					isAlphanumeric: true
				}
			},
			email: {
				placeholder: 'E-mail',
				type: 'email',
				icon: '',
				validation: {
					isEmail: true
				}
			},
			password: {
				placeholder: 'Password',
				type: 'password',
				icon: '',
				validation: {
					length: {
						min: 8,
						max: 200
					}
				}
			},
			confirmPassword: {
				placeholder: 'Confirm password',
				type: 'password',
				icon: '',
				validation: {
					isEqualTo: 'password'
				}
			}
		},
		submitText: 'Login',
		sendRequestFunc: sendRegisterReq,
		resolveSuccessFunc: resolveSuccess
	};

	return (
		<Layout>
			<Container
				direction='column'
				padding={[5, 2, 3, 2]}
				cntWidth={{ xs: 12 }}
				maxWidth={400}
			>
				<Header>Sign In</Header>
				<SimpleForm {...formProps} />
			</Container>
		</Layout>
	);
};

export default SignIn;
