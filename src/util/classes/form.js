import React from 'react';

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