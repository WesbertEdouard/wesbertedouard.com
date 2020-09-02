import React from 'react';
import '../App.css';
import Design from '../Componets/Design';

function DesignPage(props) {
    return (
    <div>
        <Design title={props.title} subTitle={props.subTitle}/>
    </div>
    );
}

export default DesignPage;
