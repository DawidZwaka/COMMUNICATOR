import React, { useState } from 'react';
import Layout from '../layouts/mainLayout';
import LoginForm from '../components/auth/loginForm';

const login = () => {

    return(
        <Layout>
            <LoginForm/>
        </Layout>
    );
}

export default login;