import React, { useState } from 'react';
import { Form, Button} from 'react-bootstrap';
import REST from '../../util/getRESTapi';
import { Redirect } from 'react-router-dom';

const SignInForm = props => {

    //state
    const [inputs, setInputs] = useState({
        nickname: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({});
    const [redirect, renderRedirect] = useState(false);


    const updateValue = ev => {
        const input = ev.target;
    
        setInputs({...inputs ,[input.name]: input.value});
    }
    
    const createUser = async ev => {
        ev.preventDefault();
    
        const reqData = JSON.stringify({...inputs});
    
        console.log(reqData);
        const res = await fetch(`${REST}/auth/signin`, {
            method: 'POST', 
            body: reqData,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const resObject = await res.json();

        if(res.status === 422) {
            const ErrObject = {};

            resObject.errors.forEach(err => {
               ErrObject[err.param] = err.msg 
            });

            setErrors(ErrObject);
        } else {

            return renderRedirect(true);
        }
    }

        return (
            <>
            {redirect? <Redirect to="/login"/> : null}
            <Form>
                <Form.Group controlId="formPassword">
                    <Form.Label>Nickname</Form.Label>
                    <Form.Control 
                        onInput={updateValue} 
                        type="text" 
                        placeholder="Your nickname" 
                        name="nickname"
                        value={inputs.nickname}
                        isInvalid={!!errors.nickname} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        onInput={updateValue} 
                        type="email"
                        placeholder="Enter email" 
                        name="email"
                        value={inputs.email}
                        isInvalid={!!errors.email} />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        onInput={updateValue} 
                        type="password" 
                        placeholder="Password"  
                        name="password"
                        value={inputs.password}
                        isInvalid={!!errors.password} />
                </Form.Group>  

                <Form.Group controlId="formConfirmPassword">
                    <Form.Control 
                        onInput={updateValue} 
                        type="password" 
                        placeholder="Confirm password" 
                        name="confirmPassword"
                        value={inputs.confirmPassword}
                        isInvalid={!!errors.confirmPassword} />
                </Form.Group> 

                <Button variant="primary" type="submit" onClick={createUser}>
                    Sign In
                </Button>
            </Form>
            </>
        );

}

export default SignInForm;