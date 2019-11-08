import React, {useEffect} from 'react';
import MessageBallon from '../MessageBallon/MessageBallon';
import { TimelineMax, Linear } from 'gsap';
import './MessageList.scss';

const MessageList = ({currentUser, messages, loading}) => {

    const tl = new TimelineMax({
        yoyo: true,
        repeat: -1,
        repeatDelay: .7
    });
    const messagesRefs = [];

    useEffect(() => {
        tl.staggerFromTo(
            messagesRefs, 
            .7, 
            {ease:Linear.easeNone, opacity: 0, transform: 'translateY(-50%)'},
            {ease:Linear.easeNone, opacity: 1, transform: 'translateY(0)'},
            .6);
    });
    
    const getMessagesList = () => {
        const { _id: userID } = currentUser;

        return messages.map( message => {

            if(String(message.userID) === String(userID) ) {
                return <div key={message.date} className="ml-auto" >{message.content}</div>
            } else {
                return <div key={message.date} >{message.content}</div>
            }
        });
    }

    const getLoader = () => {
        const loader = [];

        for(let i=0;i<3;i++) {
            let pos = i%2 === 0? 'left' : 'right';

            loader.push(<MessageBallon key={'messagesLoader'+i} position={pos} ref={ref => messagesRefs[i] = ref}/>);
        }
        return loader;
    }

    const messagesList = loading? getLoader() : getMessagesList();

    return (
        <div className="messageList flex-column-reverse d-flex">
            {messagesList}
        </div>);
}

export default MessageList;