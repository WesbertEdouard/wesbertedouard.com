import React from 'react';
import '../App.css';
import About from '../Componets/About';

function AboutPage(props) {
    return (
    <div>
        <About title={props.title} subTitle={props.subTitle}/>
    </div>
    );
}

export default AboutPage;
