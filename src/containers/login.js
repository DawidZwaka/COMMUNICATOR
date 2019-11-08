import React from 'react';
import Layout from '../layouts/MainLayout';
import LoginForm from '../components/auth/loginForm';

const login = () => {

    return(
        <Layout>
            <LoginForm redirectUrl="/"/>
        </Layout>
    );
}

export default login;