import React from 'react';
import axios from '../../../util/axios';
import { Redirect } from 'react-router-dom';
import InitialBtn from '../../UI/Buttons/initialButton';
import { TimelineMax } from 'gsap';
import './contactList.scss';

class ContactList extends React.Component {

    constructor(props) {
        super(props);

        this.btns = [];
        this.tl = new TimelineMax({repeat: -1, yoyo: true, repeatDelay: .4});
    }
    
    state = {
        loading: true,
        redirect: null,
        contacts: null
    }

    getContacts = async () => {
        const {data: contacts} = await axios.get('/communicator/contact');

        return [...contacts];
    }

    async componentDidMount() {
        this.tl.staggerFromTo(this.btns, .7, {left: '60px', opacity: 0}, {left: '0', opacity: 1}, .6);

        const contacts = await this.getContacts();

        this.setState({contacts, loading: false});
    }

    createRoomHandler = async (ev, userID) => {
        const options = { userID };
        const { status, data: {roomID} } = await axios.post('/communicator/contact', options);

        if(status === 201 || status === 200) {

            this.setState({redirect: `/room/${roomID}`});   
        }
    }

    render() {
        const { redirect, loading } = this.state;

        const getLoader = () => {
            const render = [];

            for(let i=0;i<3;i++) {
                render.push( <InitialBtn key={i} ref={ref => this.btns[i] = ref}/> );
            };

            return render;
        }

        let render;
        if(loading) {
            render = getLoader();
        } else {
            render = this.state.contacts.map( user => {
        
                return <li key={user._id} className="contactList__item mb-1 mx-auto">
                        <InitialBtn user={user} clickHandler={this.createRoomHandler}/>
                    </li>
            });
        }

        return (
            <>
                {redirect? <Redirect to={redirect}/> : null}
                <ul className="list-unstyled d-flex flex-column w-100 contactList py-2">
                    {render}
                </ul>
            </>
        );
    }
}

export default ContactList;