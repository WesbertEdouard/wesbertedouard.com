import React from 'react';
import Hero from '../Componets/Hero';

function HomePage(props) {
    return (
    <div>
        <Hero title={props.title} subTitle1={props.subTitle1} subTitle2={props.subTitle2} subTitle3={props.subTitle3} text={props.text}/>
        
    </div>
    
       
    );
}

export default HomePage;
