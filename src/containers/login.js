import React from 'react';
import Layout from '../layouts/MainLayout';
import LoginForm from '../components/auth/loginForm';
import Container from '../components/UI/Container/Container';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = Styled.h1`
    text-align: center;
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
`;

const login = () => {
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
				<LoginForm redirectUrl='/' />
			</Container>
			<Container
				direction='column'
				cntWidth={{ xs: 12 }}
				padding={[1, 2]}
				margin={[1.5, 0, 0, 0]}
				maxWidth={cntMaxWidth}
			>
				<Link>Forgot your password?</Link>
			</Container>
		</Layout>
	);
};

export default login;
