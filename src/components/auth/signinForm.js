import React from 'react';
import REST from '../../util/getRESTapi';
import { Redirect } from 'react-router-dom';
import Styled from 'styled-components';
import Button from '../UI/Buttons/SimpleButton';
import Input from '../UI/FormInput/FormInput';
import FormClass from '../../util/classes/form';

//svgs
import { ReactComponent as EmailIcon } from '../../assets/email.svg';
import { ReactComponent as KeyIcon } from '../../assets/key.svg';
import { ReactComponent as NicknameIcon } from '../../assets/user.svg';

const Form = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

class SignInForm extends FormClass {
	constructor(props) {
		super(props);

		this.state.inputs = {
			nickname: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
		this.state.redirect = {
			active: false,
			url: this.props.redirectUrl
		};
	}

	createUser = async ev => {
		ev.preventDefault();

		const reqData = JSON.stringify({ ...this.state.inputs });

		const res = await fetch(`${REST}/auth/signin`, {
			method: 'POST',
			body: reqData,
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const resObject = await res.json();

		if (res.status === 422) {
			const ErrObject = {};

			resObject.errors.forEach(err => {
				ErrObject[err.param] = err.msg;
			});

			this.setState({ errors: ErrObject });
		} else {
			return this.setState({ redirect: { active: true } });
		}
	};

	render() {
		const {
			inputs: { password, email },
			errors: { password: passwordErr, email: emailErr },
			redirect
		} = this.state;

		return (
			<>
				{redirect.active ? <Redirect to={redirect.url} /> : null}
				<Form>
					<Input
						type='text'
						placeholder='Nickname'
						name='nickname'
						value={email}
						change={this.updateValue}
					>
						<NicknameIcon />
					</Input>
					<Input
						type='email'
						placeholder='Email'
						name='email'
						value={email}
						change={this.updateValue}
					>
						<EmailIcon />
					</Input>
					<Input
						type='password'
						name='password'
						placeholder='Password'
						value={password}
						change={this.updateValue}
					>
						<KeyIcon />
					</Input>
					<Input
						type='password'
						name='confirmPassword'
						placeholder='Confirm Password'
						value={password}
						change={this.updateValue}
					>
						<KeyIcon />
					</Input>
					<Button type='submit' click={this.createUser}>
						Login
					</Button>
				</Form>
			</>
		);
	}
}

export default SignInForm;
