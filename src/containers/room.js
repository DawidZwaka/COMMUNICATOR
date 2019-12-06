import React from 'react';
import Layout from '../layouts/MainLayout';
import Chat from '../components/communicator/chat';
//import ContactList from '../components/communicator/ContactList/ContactList';
import InfoSection from '../components/communicator/InfoSection/InfoSection';
import { Col, Row } from 'react-bootstrap';
import "./room.scss";

const Room = props => {

    return (
        <Layout containerClass="">
            {//<ContactList/>
            }
            <Row className="flex-grow-1 no-gutters">
                <Col sm="8" md="8" lg="7" className="px-0 col--chat">
                    <div className="mx-auto chat__cnt h-100 py-5">
                        <Chat match={props.match}/>
                    </div>
                </Col>
                <Col sm="8" md="4" lg="5" className="mx-auto px-0 col--info d-flex align-items-center justify-content-center">
                    <InfoSection match={props.match}/>
                </Col>
            </Row>
        </Layout>
    );
}

export default Room;