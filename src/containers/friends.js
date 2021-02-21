/*

██╗███╗   ███╗██████╗  ██████╗ ██████╗ ████████╗███████╗
██║████╗ ████║██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝
██║██╔████╔██║██████╔╝██║   ██║██████╔╝   ██║   ███████╗
██║██║╚██╔╝██║██╔═══╝ ██║   ██║██╔══██╗   ██║   ╚════██║
██║██║ ╚═╝ ██║██║     ╚██████╔╝██║  ██║   ██║   ███████║
╚═╝╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
                                                         
*/

import React, { PureComponent } from 'react';
import Layout from '../layouts/MainLayout';
import Container from '../components/UI/Container/Container';
import Header from '../components/UI/Header/Header';
import Search from '../components/UI/Search/Search';
import ContactsList from '../components/communicator/ContactList/ContactList';

/* 

 ██████╗ ██████╗ ███╗   ███╗██████╗  ██████╗ ███╗   ██╗███████╗███╗   ██╗████████╗
██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔═══██╗████╗  ██║██╔════╝████╗  ██║╚══██╔══╝
██║     ██║   ██║██╔████╔██║██████╔╝██║   ██║██╔██╗ ██║█████╗  ██╔██╗ ██║   ██║   
██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██║   ██║██║╚██╗██║██╔══╝  ██║╚██╗██║   ██║   
╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ╚██████╔╝██║ ╚████║███████╗██║ ╚████║   ██║   
 ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═══╝   ╚═╝   
                                                                                  
*/

class Friends extends PureComponent {
	state = {
		friendsList: [],
		loading: true
	};

	updateFriendsState = friendsList => {
		this.setState({ friendsList, loading: false });
	};

	render() {
		const { friendsList, loading } = this.state;

		return (
			<Layout direction='column'>
				<Container
					direction='column'
					padding={[5, 2, 3, 2]}
					cntWidth={{ xs: 12 }}
				>
					<Header>Your Friends</Header>
					<Search addResToState={this.updateFriendsState} />
					<ContactsList contacts={friendsList} loading={loading} />
				</Container>
			</Layout>
		);
	}
}

export default Friends;
