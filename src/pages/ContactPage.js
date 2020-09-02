import React from 'react';
import Contact from '../Componets/Contact';


function ContactPage(props) {
    return (
        <Contact title={props.title} subTitle={props.subTitle}/>
    
    );
}

export default ContactPage;
