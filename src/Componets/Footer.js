import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

const Footer = (props) => {
    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className='border-top p-3'>
                    <Col className='p-0' id='footer-font'>
                    Copyright © 2020 Wesbert Edouard
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};

export default Footer;
