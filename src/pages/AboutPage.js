import React from 'react';
import '../App.css';
import About from '../Componets/About';
import Content from '../Componets/Content';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import dribbble from '../assets/images/dribbble.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AboutPage(props) {
    return (
    <div>
        <About title={props.title} subTitle={props.subTitle}/>
        <Content className='justify-content-left '>
            <p className='about-content-text'>Hello, my name is Wesbert. I am a Front-End developer and UI designer with experience in ReactJS, NodeJS, AWS, Bootstrap, and DynamoDB. Additionally, I am experienced in Adobe XD, Photoshop, and Illustrator.</p>

            <p className='about-content-text'>From a young age I've been drawn to problem solving and being creative, as a result I developed a deep love for both technology and art.</p>

            <p className='about-content-text'>When I'm not learning something new my interests include, spending time with family, playing basketball with friends, reading manga, or creating digital art.</p>


            <Container className='icon-p' fluid={true}>
                <Row className="justify-content-right py-5 pl-5">
                    <Col lg={12} sm={12}>
                    <img className='icon' src={github} alt='Github Logo-icon'/><a className='icon-text1' href={'https://github.com/WesbertEdouard'} target='_blank' rel='nooperner noreferrer'> Github</a>
                    <img className='icon' src={linkedin} alt='LinkedIn Logo-icon'/> <a className='icon-text2' href={'https://www.linkedin.com/in/wesberte/'} target='_blank' rel='nooperner noreferrer'> LinkedIn</a>
                    <img className='icon' src={dribbble} alt='Dribbble Logo-icon'/><a className='icon-text3' href={'https://dribbble.com/wesberte'} target='_blank' rel='nooperner noreferrer'>  Dribbble</a>
                    </Col>
                </Row>
                
            </Container>
        </Content>
    </div>
    );
}

export default AboutPage;
