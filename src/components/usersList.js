import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from '../util/axios';

const usersList = props => {

    const createRoom = async (ev, userID) => {
        const options = {
            userID: userID
        }
        const res = await axios.post('/auth/contacts', options);
        
        console.log(res);
    }

    const users = props.users.map( user => {
        const userBtnText = user.nickname.substr(0,1);
        let userBtn;

        if(user.type === 'user') {
            userBtn = <Form>
                <Button 
                    onClick={ev => createRoom(ev, user._id)}
                    className="text-white rounded-circle p-4 bg-dark border-0">
                    {userBtnText}
                </Button>
            </Form>

        } else {
            userBtn = <Link to={`chat/${user._id}`} className="text-white rounded-circle p-4 bg-dark">
                    {userBtnText}
                </Link>
        }

        return <li key={user._id} className="d-flex">
                {userBtn}
            </li>
    })

    return (
        <ul className="list-unstyled">
            {users}
        </ul>
    );
}

export default usersList;