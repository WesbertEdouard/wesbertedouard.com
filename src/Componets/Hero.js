import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Hero(props) {

    return(
        <Jumbotron className='bg-transparent jumbotron-fluid p-0'>
            <Container fluid={true}>
                <Row className="justify-content-left py-5 pl-5">
                    <Col md={8} sm={12}>
                        {props.title && <h1 className='display-3 font-weight-bolder' id='Name_header'>{props.title}</h1>}
                        
                        {props.subTitle1 && <h3 className='display-4 font-weight-light'>{props.subTitle1}</h3>}
                        
                        {props.subTitle2 && <h3 className='display-4 font-weight-light'>{props.subTitle2}</h3>}
                        
                        {props.subTitle3 && <h3 className='display-4 font-weight-light'>{props.subTitle3}</h3>}
                        {props.text && <h3 className='lead font-weight-light'>{props.text}</h3>}
                        <div className='pt-10'>
                            <button className='Button' id='btn-red'>My Projects</button>
                            <button className='Button' id='btn-green'>Contact Me</button>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </Jumbotron>
        
    );
}

export default Hero;