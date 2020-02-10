import React from 'react';
import Layout from '../layouts/MainLayout';
import SimpleForm from '../components/UI/Forms/simpleForm';
import Container from '../components/UI/Container/Container';
import Header from '../components/UI/Header/Header';
import axios from '../util/axios';

const sendForgotPasswordReq = async (inputs) => {
    console.log(inputs);
    return await axios.post("/auth/forgot-password", inputs);
}

const forgotPasswordHandler = async (ev, inputs) => {
    ev.preventDefault();

    try {
        const res = sendForgotPasswordReq(inputs);

        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

const ForgotPassword = () => {

    const formProps = {
        inputs: {
            email: {
                placeholder: "E-mail",
                type: "email",
                icon: "",
            }
        },
        submit: {
            text: "send",
            handler: forgotPasswordHandler
        },
        direction: "row"
    };
    const cntMaxWidth = 600;

    return (<Layout>
        <Container
            direction='column'
            padding={[5,2,3,2]}
            cntWidth={{xs: 12}}
            maxWidth={cntMaxWidth}>
            <Header size="h2">
                Forgot your password
            </Header>
            <p>
                Pass your account email to change password
            </p>
            <SimpleForm {...formProps}/>
        </Container>
        </Layout>);
}

export default ForgotPassword;