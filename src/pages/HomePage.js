import React from 'react';

import Hero from '../Componets/Hero';

function HomePage(props) {
    return (
       <Hero title={props.title} subTitle1={props.subTitle1} subTitle2={props.subTitle2} subTitle3={props.subTitle3} text={props.text}/>
    );
}

export default HomePage;
