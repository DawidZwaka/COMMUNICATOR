import FormClass from '../util/classes/form';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from '../util/axios';

class Chat extends FormClass {
    constructor(props) {
        super(props);

        this.state.messages = [];
    }


    createMessage = async ev => {
        ev.preventDefault();

        const messageHook = ev.target.parentNode.querySelector('[name="messageArea"]');
        const message = {
            date: new Date().toUTCString(),
            content: messageHook.value
        }

        const res = await axios.post('/messages');

        const newMessages = [...this.state.messages];
        newMessages.push(message);


        //this.setState({messages: newMessages});
    }

    render() {

        const messages = this.state.messages.map( message => {
            return <div key={message.date} >{message.content}</div>;
        });

        return (
            <div className="messenger h-100 mx-auto d-flex flex-column">
                <div className="messages flex-column-reverse d-flex">
                    {messages}
                </div>
                <Form>
                    <Form.Group className="d-flex flex-column">
                        <Form.Control as="textarea" name="messageArea" className="mb-2"/>

                        <Button type="submit" onClick={this.createMessage}>
                            Send
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default Chat;