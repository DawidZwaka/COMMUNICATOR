import React from 'react';
import { Form, Button } from 'react-bootstrap';
import FormClass from '../../util/classes/form';
import axios from '../../util/axios';
import { Redirect } from 'react-router-dom';

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

        return (
            <>
                {this.state.redirect.active? <Redirect to={this.state.redirect.url}/> : null}
                <Form>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            onChange={this.updateValue} 
                            type="email"
                            placeholder="Enter email" 
                            name="email"
                            value={this.state.inputs.email}
                            isInvalid={!!this.state.errors.email} />
                    </Form.Group>
            
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            onChange={this.updateValue} 
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
            </>
        );
    }
}

export default LoginForm;