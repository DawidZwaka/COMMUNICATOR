import React from 'react';
import FormClass from '../../../util/classes/form';
import { Form, Button } from 'react-bootstrap';
import axios from '../../../util/axios';
import './CreateMessageForm.scss';

class CreateMessageForm extends FormClass {
	constructor(props) {
		super(props);
		this.updateMessages = this.props.updateMessages;
	}

	createMessageHandler = async ev => {
		ev.preventDefault();

		const { _id: userID } = this.getCurrentUser();
		const { _id: roomID } = this.props.room;
		const messageHook = ev.target.parentNode.querySelector(
				'[name="messageArea"]'
			),
			message = {
				content: messageHook.value,
				userID
			};

		const res = await axios.post(`/communicator/message/`, {
			message,
			roomID
		});
		const newMessages = [...this.state.messages];
		newMessages.push(message);

		this.props.setState({ messages: newMessages });
	};

	render() {
		const { loading } = this.props;
		let render;

		if (loading) {
			render = (
				<div className='CMFLoader'>
					<div className='bg-gray rounded-lg w-100 CMF__inputArea'></div>
				</div>
			);
		} else {
			render = (
				<Form className='CMF'>
					<Form.Group className='d-flex flex-column'>
						<Form.Control
							as='textarea'
							name='messageArea'
							className='mb-2 CMF__inputArea'
						/>

						<Button
							type='submit'
							onClick={this.createMessageHandler}
							className='CMF__submit'
						>
							Send
						</Button>
					</Form.Group>
				</Form>
			);
		}

		return render;
	}
}

export default CreateMessageForm;
