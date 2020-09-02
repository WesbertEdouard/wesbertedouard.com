import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function About(props) {

    return(
        <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
            <Container fluid={true}>
                <Row className="justify-content-left py-5 pl-5">
                    <Col md={8} sm={12}>
                        {props.title && <h1 className='display-4 font-weight-bolder' id='Name_header'>{props.title}</h1>}

                        {props.subtitle && <h2 className='display-4 font-weight-light'>{props.subTitle}</h2>}
                    </Col>
                </Row>
            </Container>
            
        </Jumbotron>
        
    );
}

export default About;