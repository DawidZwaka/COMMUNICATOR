/*

██╗███╗   ███╗██████╗  ██████╗ ██████╗ ████████╗███████╗
██║████╗ ████║██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝
██║██╔████╔██║██████╔╝██║   ██║██████╔╝   ██║   ███████╗
██║██║╚██╔╝██║██╔═══╝ ██║   ██║██╔══██╗   ██║   ╚════██║
██║██║ ╚═╝ ██║██║     ╚██████╔╝██║  ██║   ██║   ███████║
╚═╝╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
														 
*/

import Form from '../../../util/classes/form';
import React from 'react';
import Button from '../Buttons/SimpleButton';
import Input from '../Input/Input';
import Styled, { css } from 'styled-components';
import { Redirect } from 'react-router-dom';
import resolveError from '../../../util/resolveError';

/*

  ██████╗ ██████╗ ███╗   ██╗███████╗████████╗ █████╗ ███╗   ██╗███████╗
██╔════╝██╔═══██╗████╗  ██║██╔════╝╚══██╔══╝██╔══██╗████╗  ██║██╔════╝
██║     ██║   ██║██╔██╗ ██║███████╗   ██║   ███████║██╔██╗ ██║███████╗
██║     ██║   ██║██║╚██╗██║╚════██║   ██║   ██╔══██║██║╚██╗██║╚════██║
╚██████╗╚██████╔╝██║ ╚████║███████║   ██║   ██║  ██║██║ ╚████║███████║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝
																	  
*/

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

/*

  ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝
██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║   
██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║   
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║   
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝   
																				  
*/

class SimpleForm extends Form {
	getInputs = () =>
		Object.entries(this.state.inputs).map(([name, input]) => (
			<Input
				{...input}
				name={name}
				onChange={this.updateValue}
				value={this.state.inputs[name].value}
			/>
		));

	getParsedInputState = () => {
		const obj = {};

		Object.entries(this.state.inputs).forEach(
			([name, input]) => (obj[name] = input.value)
		);

		return obj;
	};

	updateValidationErrors = errs => {
		const inputs = { ...this.state.inputs },
			errsArr = Object.values(errs),
			inputIndexes = Object.keys(inputs);

		inputIndexes.forEach(index => {
			const err = errsArr.find(({ name }) => name === index);
			let errValid;

			if (err) errValid = { isValid: false, errorMessage: err.value };
			else errValid = { isValid: true, errorMessage: null };

			inputs[index].validation = {
				...inputs[index].validation,
				...errValid
			};
		});

		this.setState({ inputs, frontValidation: true });
	};

	updateRedirectionPath = path => this.setState({ redirect: path });

	submitHandler = async ev => {
		ev.preventDefault();

		const {
			state,
			getParsedInputState,
			updateRedirectionPath,
			updateValidationErrors,
			props: { sendRequestFunc, resolveSuccessFunc }
		} = this;

		try {
			const res = await sendRequestFunc(getParsedInputState());

			return resolveSuccessFunc(
				this.updateRedirectionPath,
				res,
				this.props
			);
		} catch (res) {
			return resolveError(
				res,
				updateValidationErrors,
				updateRedirectionPath
			);
		}
	};

	render() {
		const {
			props: { direction, submitText },
			submitHandler,
			state: { redirect }
		} = this;
		const inputs = this.getInputs();

		return (
			<>
				{redirect ? <Redirect to={redirect} /> : null}
				<FormCnt direction={direction} noValidate>
					{inputs}
					<Button click={submitHandler}>{submitText}</Button>
				</FormCnt>
			</>
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
