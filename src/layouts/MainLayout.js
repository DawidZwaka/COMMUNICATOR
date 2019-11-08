import React from 'react';
import MainMenu from '../components/UI/MainMenu/MainMenu';
import { Container } from 'react-bootstrap';

const MainLayout = ({containerClass, children}) => {
    let classes = ['main', 'd-flex', 'h-100', 'm-0', 'flex-grow-1', 'p-0'];

    if( typeof containerClass !== undefined ) {
        classes = classes.concat(containerClass); 
    }
    return (
        <>
            <MainMenu/>
            <Container fluid="true" as="main" className={classes}>
                {children}
            </Container>
        </>);
}

export default MainLayout;