import React from 'react';
import FormClass from '../../util/classes/form';
import axios from '../../util/axios';
import { Redirect } from 'react-router-dom';
import Button from '../UI/Buttons/SimpleButton';
import Input from '../UI/FormInput/FormInput';
import Styled from 'styled-components';

//svgs
import { ReactComponent as KeyIcon } from '../../assets/key.svg';
import { ReactComponent as EmailIcon } from '../../assets/email.svg';

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class LoginForm extends FormClass {

    constructor(props) {
        super(props);

        this.state.inputs = {
            email: '',
            password: ''
        }
        this.state.redirect = {
            active: false,
            url: this.props.redirectUrl
        }
    }

    sendAuthReq = async () => {
        const reqOptions = {
            ...this.state.inputs
        }
        return await axios.post('/auth/login', reqOptions);
    }

    loginHandler = async ev => {
        ev.preventDefault();

        try {
            const {data: {token}} = await this.sendAuthReq();
        
            sessionStorage.setItem('token', token);
            this.setState({redirect: { active: true } });

        } catch({response: {status}}) {

        }
    }

    render() {
        const {
            inputs: {password, email},
            errors: {password: passwordErr, email: emailErr},
            redirect
        } = this.state;

        return (
            <>
                {redirect.active? <Redirect to={redirect.url}/> : null}
                <Form>
                    <Input 
                        type='email' 
                        placeholder="Email" 
                        value={email}
                        change={this.updateValue}>
                        <EmailIcon/>
                    </Input>
                    <Input 
                        type='password' 
                        placeholder="Password"
                        value={password}
                        change={this.updateValue}>
                        <KeyIcon/>
                    </Input>
                    <Button type='submit' click={this.loginHandler}>Login</Button>
                </Form>
            </>
        );
    }
}

export default LoginForm;