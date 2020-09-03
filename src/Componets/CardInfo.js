import React from 'react';
import {useSpring, animated} from 'react-spring';

function CardInfo(props) {

    const style = useSpring({opacity:1, from: {opacity: 0}});

    return(
        <animated.div className='project-card-info' style={style}>
            <p className='project-card-title'>{props.title}</p>
            <p className='project-card-subtitle'>{props.subtitle}</p>
            <a className='display-inline-block' id='btn-blue' href={props.link} target='_blank' rel='nooperner noreferrer'>View</a>
            
        </animated.div>
    )
}

export default CardInfo;