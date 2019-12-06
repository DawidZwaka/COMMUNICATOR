import React from 'react';
import Layout from '../layouts/MainLayout';
//import Chat from '../components/chat';
//import ContactList from '../components/communicator/ContactList/ContactList';
import axios from '../util/axios';
import { Redirect } from 'react-router-dom';

class messenger extends React.Component {

    state = {
        users: [],
        room: {},
        loading: true,
        redirect: {
            url: '/',
            active: false
        }
    }
    getContacts = async () => await axios.get('/communicator/contact');

    getRoom = async () => await axios.get('communicator/room/5db02ab711098c1a4c69e191');

    async componentDidMount() { 
        try{  
            const {data: contacts} = await this.getContacts();
            const {data: room} = await this.getRoom();

            this.setState({
                users: [...this.state.users, ...contacts],
                room,
                loading: false
            });
        } catch ({response: {status}}) {

            if(status === 401) {

                return this.setState({redirect: {
                    url: '/login',
                    active: true
                }});
            }
        }
 
    }

    render() {
        
        return (
            <>
                {this.state.redirect.active? <Redirect to={this.state.redirect.url}/> : null}
                    <Layout>
                        {/*<ContactList users={this.state.users}/>
                        */}
                        {//<Chat room={this.state.room}/>
                        }
                    </Layout>
            </>
        );
    }
}

export default messenger;