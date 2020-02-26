import React from 'react';

class Form extends React.Component {
	state = {
		inputs: { ...this.props.inputs },
		redirect: false
	};

	updateValue = ev => {
		const { name, value } = ev.target;
		const inputs = { ...this.state.inputs };

		inputs[name] = { ...inputs[name], value };

		this.setState({ inputs });
	};
}

export default Form;
