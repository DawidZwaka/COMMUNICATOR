import React from 'react';
import { Redirect } from 'react-router-dom';

class Form extends React.Component {
    state = {
        inputs: {},
        errors: [],
        redirect: false
    }

    updateValue = ev => {
        const input = ev.target;
    
        this.setState({
            inputs: {...this.state.inputs ,[input.name]: input.value}
        });
    }
}

export default Form;