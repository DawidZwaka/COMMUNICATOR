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
import { Link } from 'react-router-dom';
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

const sendAuthReq = async inputs => await axios.post('/auth/login', inputs);

const resolveSucces = updateRedirect => {
	updateRedirect('/');
};

/*

  ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝
██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║   
██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║   
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║   
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝   
																				  
*/

const login = () => {
	const formProps = {
		inputs: {
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
			}
		},
		submitText: 'Login',
		sendRequestFunc: sendAuthReq,
		resolveSuccessFunc: resolveSucces
	};
	const cntMaxWidth = 400;

	return (
		<Layout direction='column'>
			<Container
				direction='column'
				padding={[5, 2, 3, 2]}
				cntWidth={{ xs: 12 }}
				maxWidth={cntMaxWidth}
			>
				<Header>Login Form</Header>
				<SimpleForm {...formProps} />
			</Container>
			<Container
				direction='column'
				cntWidth={{ xs: 12 }}
				padding={[1, 2]}
				margin={[1.5, 0, 0, 0]}
				maxWidth={cntMaxWidth}
			>
				<Link to='/forgot-password'>Forgot your password?</Link>
			</Container>
		</Layout>
	);
};

export default login;
