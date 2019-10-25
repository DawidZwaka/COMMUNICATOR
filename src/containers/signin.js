import React from 'react';
import Layout from '../layouts/mainLayout';
import { Jumbotron, Container, Col } from 'react-bootstrap';
import SignInForm from '../components/auth/signinForm';

class SignIn extends React.Component {

    render() {
        return(
            <Layout>
                <Container className="align-self-center">
                    <Col className="mx-auto" md={8} lg={7} xl={6}>
                        <Jumbotron className="bg-light py-5">
                            <h2 className="display-4">Sign In</h2>
                            <hr/>
                            <SignInForm/>
                        </Jumbotron>
                    </Col>
                </Container>
            </Layout>
            );
    }
}

export default SignIn;