import React from 'react';
import Skills from '../Componets/Skills';

function SkillsPage(props) {
    return (
    <div>
        <Skills title={props.title} subTitle={props.subTitle}/>
    </div>
    );
}

export default SkillsPage;
