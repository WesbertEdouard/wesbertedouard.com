import React from 'react';
import Pro from '../Componets/Pro';
import Carousel from '../Componets/Carousel';
import { Container } from 'react-bootstrap';

function ProjectPage(props) {
    return (
        <div>
        <Pro title={props.title} subTitle={props.subtitle}/>
        <Carousel/>
        </div>
    );
}

export default ProjectPage;

