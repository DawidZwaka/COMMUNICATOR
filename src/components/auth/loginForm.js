import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import FormClass from '../../util/classes/form';
import axios from '../../util/axios';

class LoginForm extends FormClass {

    constructor(props) {
        super(props);

        this.state.inputs = {
            email: '',
            password: ''
        }

    }

    loginHandler = async ev => {
        ev.preventDefault();

        try {
            const reqOptions = {
                ...this.state.inputs
            }
            const res = await axios.post('/auth/login', reqOptions);
        
            sessionStorage.setItem('token', res.data.token);
            sessionStorage.setItem('email', reqOptions.email);
        } catch(err) {
            const errors = err.response.data.errors;

            //this.setState();
        }
    }

    render() {

        return (
            <Form>
                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        onInput={this.updateValue} 
                        createUser type="email"
                        placeholder="Enter email" 
                        name="email"
                        value={this.state.inputs.email}
                        isInvalid={!!this.state.errors.email} />
                </Form.Group>
    
                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        onInput={this.updateValue} 
                        type="password" 
                        placeholder="Password"  
                        name="password"
                        value={this.state.inputs.password}
                        isInvalid={!!this.state.errors.password} />
                </Form.Group>  
    
                <Button variant="primary" type="submit" onClick={this.loginHandler}>
                    Login
                </Button>
            </Form>
        );
    }
}

export default LoginForm;