import React from 'react';
import MainMenu from '../components/UI/mainMenu';
import { Container } from 'react-bootstrap';

const mainLayout =  props => {
    return (
        <>
        <MainMenu/>
        <Container className="main d-flex">
            {props.children}
        </Container>
        </>);
}

export default mainLayout;