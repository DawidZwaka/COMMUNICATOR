import React from 'react';
import Layout from '../layouts/MainLayout';
import Chat from '../components/communicator/chat';
import ContactList from '../components/communicator/ContactList/ContactList';
import InfoSection from '../components/communicator/InfoSection/InfoSection';
import { Col, Row } from 'react-bootstrap';

const Room = props => {

    return (
        <Layout containerClass="">
            <ContactList/>
            <Row className="flex-grow-1">
                <Col sm="8" md="6" lg="5" className="mx-auto px-0">
                    <Chat match={props.match}/>
                </Col>
                <Col sm="8" md="6" lg="5" className="mx-auto px-0">
                    <InfoSection match={props.match}/>
                </Col>
            </Row>
        </Layout>
    );
}

export default Room;