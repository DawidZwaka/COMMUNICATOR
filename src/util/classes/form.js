import React from 'react';
import validator from 'validator';

class Form extends React.PureComponent {
	constructor(props) {
		super(props);
		const inputs = { ...this.props.inputs };

		Object.keys(inputs).forEach(name => {
			inputs[name].validation.isValid = true;
			inputs[name].value = '';
		});

		this.state = {
			inputs,
			redirect: false,
			frontValidation: false
		};
	}

	validate = input => {
		const { validation, value } = input;
		let valid = true;

		Object.entries(validation).forEach(([key, options]) => {
			let validRes = true;
			switch (key) {
				case 'length': {
					validRes = validator.isLength(value, options);
					break;
				}
				case 'isEmail': {
					validRes = validator.isEmail(value);
					break;
				}
				case 'isAlphanumeric': {
					validRes = validator.isAlphanumeric(value);
					break;
				}
				case 'isEqualTo': {
					validRes = validator.equals(
						value,
						this.state.inputs[options].value
					);
					break;
				}
				default:
					break;
			}

			valid = validRes && valid;
		});

		input.validation.isValid = valid;

		return input;
	};

	updateValue = async ev => {
		const { name, value } = ev.target;
		const inputs = { ...this.state.inputs };
		const { frontValidation } = this.state;

		inputs[name] = { ...inputs[name], value: value.trim() };

		if (frontValidation) inputs[name] = this.validate(inputs[name]);

		this.setState({ inputs });
	};
}

export default Form;
