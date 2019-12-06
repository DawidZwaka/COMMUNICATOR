import React from 'react';
import Layout from '../layouts/MainLayout';
import SignInForm from '../components/auth/signinForm';
import Container from '../components/UI/Container/Container';
import Styled from 'styled-components';

const Header = Styled.h1`
    text-align: center;
    position: absolute;
    top: 0;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
`

class SignIn extends React.Component {

    render() {
        return(
            <Layout>
                <Container
                    direction='column'
                    padding={[5,2,3,2]}
                    cntWidth={{xs: 12}}
                    maxWidth={400}>
                    <Header>Sign In</Header>
                    <SignInForm/>
                </Container>
            </Layout>
            );
    }
}

export default SignIn;