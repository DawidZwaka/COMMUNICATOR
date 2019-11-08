import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const InitialBtn = (props, ref) => {

    if(!props.user) {
        return (
            <div ref={ref} className="contactList__item position-relative mx-1">
                <div ref={ref} className="rounded-circle bg-gray contactList__itemInside position-absolute">
                </div>
            </div>
        );
    }

    const { user: {type, _id, nickname}, clickHandler } = props;
    const initial = nickname.substr(0,1);
    let btn;



    if(type === 'user') {
        btn = (
        <Form className="ratio ratio--1x1">
            <Button 
                onClick={ev => clickHandler(ev, _id)}
                className="text-white rounded-circle p-4 bg-dark border-0 ratio__inside">
                {initial}
            </Button>
        </Form>
        );
    }else if(type === 'room') {
        btn = (
        <div className="ratio ratio--1x1">
            <Link to={`/room/${_id}`} className="text-white rounded-circle p-4 bg-dark ratio__inside d-flex align-items-center justify-content-center">
                {initial}
            </Link>
        </div>
        );
    }

    return btn;
}

export default React.forwardRef(InitialBtn);