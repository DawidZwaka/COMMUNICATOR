import React from 'react';
import Layout from '../layouts/mainLayout';
import Chat from '../components/chat';
import UsersList from '../components/usersList';
import axios from '../util/axios';
import IO from 'socket.io-client';
import REST from '../util/getRESTapi';

class messenger extends React.Component {

    state = {
        users: []
    }

    async componentDidMount() { 

        const res = await axios.get('/auth/contacts');

        
        this.setState({users: [...this.state.users, ...res.data.contacts]});

        const socket = IO(REST);
        socket.on('userSignIn', data => {
            
            this.setState({users: [...this.state.users, {...data}]});
        });
    }

    render() {

        return (
            <Layout>
                <UsersList users={this.state.users}/>
                <Chat/>
            </Layout>
        );
    }
}

export default messenger;