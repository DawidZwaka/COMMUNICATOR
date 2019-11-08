import React from 'react';
import axios from '../../util/axios';
import jwtDecode from 'jwt-decode';
import MessageList from './MessageList/MessageList';
import CreateMessageForm from './CreateMessageForm/CreateMessageForm';

class Chat extends React.Component {

    state = {
        room: null,
        loading: true
    }

    getDecodedToken = () => {
        const token = sessionStorage.getItem('token');

        return jwtDecode(token);
    }

    getRoom = async () => {
        const { roomID } = this.props.match.params;

        const {data: room} = await axios.get(`/communicator/room/${roomID}`);
        const { userID } = this.getDecodedToken();

        room.users = room.users.map( user => {
            const userObj = {...user};

            if( String(userID) === String(user._id) ) {
                userObj.currentUser = true;
            }

            return userObj;
        });

        return room;
    }

    getCurrentUser = () => this.state.room.users.find( user => user.currentUser);

    updateMessages = messages => this.setState({messages});

   /* async componentDidMount() {
        const room = await this.getRoom();

        this.setState({room, loading: true});
    }

    async componentDidUpdate(prevProps) {
        const { roomID: prevID} = prevProps.match.params;
        const { roomID: nextID} = this.props.match.params;

        if(String(prevID) !== String(nextID)) {

            const room = await this.getRoom();

            this.setState({room, loading: true});
        }
    }*/

    render() {
        const { loading } = this.state;

        return(
            <div className="messenger h-100 mx-auto d-flex flex-column">
                <MessageList 
                    loading={loading} 
                    currentUser={loading? null : this.getCurrentUser()} 
                    messages={loading? null : this.state.room.messages}/>
                <CreateMessageForm 
                    loading={loading}
                    updateMessages={this.updateMessages}/>
            </div>
        );
    }
}

export default Chat;