import React from 'react';
import axios from '../../../util/axios';
import { Redirect } from 'react-router-dom';
import InitialBtn from '../../UI/Buttons/initialButton';
import gsap from 'gsap';
import Styled from 'styled-components';
import { up } from 'styled-breakpoints';

const List = Styled.ul`
    list-style: none;
    padding: .5em 0;
    flex: 0 0 100%;
    height: 80px;
    display: flex;
    margin: 0;

    ${up('tablet')} {
        flex: 0 0 80px
        height: 100%
        flex-direction: column;
        align-items: center;
    }
`

class ContactList extends React.Component {

    constructor(props) {
        super(props);

        this.btns = [];
        this.tl = gsap.timeline({repeat: -1, yoyo: true, repeatDelay: .4});
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
        this.tl.staggerFromTo(this.btns, .7, {top: '60px', opacity: 0}, {top: '0', opacity: 1}, .6);

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
                render.push( <InitialBtn size="50" key={i} ref={ref => this.btns[i] = ref}/> );
            };

            return render;
        }

        let render;
        if(loading) {
            render = getLoader();
        } else {
            render = this.state.contacts.map( user => {
        
                return (
                    <li key={user._id}>
                        <InitialBtn size="50" user={user} clickHandler={this.createRoomHandler}/>
                    </li>);
            });
        }

        return (
            <>
                {redirect? <Redirect to={redirect}/> : null}
                <List>
                    {render}
                </List>
            </>
        );
    }
}

export default ContactList;