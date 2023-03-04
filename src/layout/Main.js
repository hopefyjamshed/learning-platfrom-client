import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Leftpage from '../pages/left/Leftpage';
import Header from '../shares/header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='3'>
                        <Leftpage></Leftpage>
                    </Col>
                    <Col lg='9'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;