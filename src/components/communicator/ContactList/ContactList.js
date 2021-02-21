import React from 'react';
import axios from '../../../util/axios';
import { Redirect } from 'react-router-dom';
import gsap from 'gsap';
import Styled from 'styled-components';
import { up } from 'styled-breakpoints';
import ContactCard from '../ContactCard/ContactCard';

const List = Styled.ul`
    list-style: none;
    padding: .5em 0;
	margin: 0;
`;

class ContactList extends React.Component {
	constructor(props) {
		super(props);

		this.cards = [];
		this.tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 0.4 });
	}

	async componentDidMount() {
		this.tl.staggerFromTo(
			this.cards,
			0.7,
			{ top: '60px', opacity: 0 },
			{ top: '0', opacity: 1 },
			0.6
		);
	}
	/*
	createRoomHandler = async (ev, userID) => {
		const options = { userID };
		const {
			status,
			data: { roomID }
		} = await axios.post('/communicator/contact', options);

		if (status === 201 || status === 200) {
			this.setState({ redirect: `/room/${roomID}` });
		}
	}; */

	getContactsCard = () => {
		let render = [];
		const { loading, contacts } = this.props;

		if (loading) {
			for (let i = 0; i < 3; i++)
				render.push(
					<ContactCard
						ref={ref => (this.cards[i] = ref)}
						loading={true}
					/>
				);
		} else {
			contacts.forEach(contact => {
				render.push(<ContactCard />);
			});
		}

		return render;
	};

	render() {
		return <List>{this.getContactsCard()}</List>;
	}
}

export default ContactList;
