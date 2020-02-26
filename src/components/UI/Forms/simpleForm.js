import Form from '../../../util/classes/form';
import React from 'react';
import Button from '../Buttons/SimpleButton';
import Input from '../FormInput/FormInput';
import Styled, { css } from 'styled-components';

const FormCnt = Styled.form`
    display: flex;
    ${({ direction }) => {
		let style;

		if (direction === 'row')
			style = css`
				flex-direction: row;
				align-items: start;
			`;
		else
			style = css`
				flex-direction: column;
				align-items: center;
			`;

		return style;
	}};
`;

class SimpleForm extends Form {
	getInputs = () =>
		Object.entries(this.state.inputs).map(([name, input]) => {
			return <Input {...input} name={name} onChange={this.updateValue} />;
		});

	getParsedInputState = () => {
		const obj = {};

		Object.entries(this.state.inputs).forEach(
			([name, input]) => (obj[name] = input.value)
		);

		return obj;
	};

	setErrorsForInputs = errs => {
		const inputs = { ...this.state.inputs };

		errs.forEach(({ name, value }) => {
			inputs[name].error = value;
		});

		return inputs;
	};

	submitHandler = async ev => {
		ev.preventDefault();
		const {
			state,
			getParsedInputState,
			props: { sendRequest }
		} = this;

		try {
			const res = await sendRequest(getParsedInputState());
		} catch ({ response: { status, data } }) {
			if (status === 422) {
				this.setErrorsForInputs(data);
			}
		}
	};

	render() {
		const {
			props: { direction, submitText },
			submitHandler
		} = this;
		const inputs = this.getInputs();

		return (
			<FormCnt direction={direction} noValidate>
				{inputs}
				<Button click={submitHandler}>{submitText}</Button>
			</FormCnt>
		);
	}
}

SimpleForm.defaultProps = {
	direction: 'column',
	submit: {
		text: 'Submit'
	}
};

export default SimpleForm;
