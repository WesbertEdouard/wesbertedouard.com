import React from 'react';
import CardInfo from '../Componets/CardInfo';

function Card(props) { 

    return(
        <div className='d-inline-block project-card' onClick={(e) => props.click(props.item)}>
            <div className='project-card-image-container'>
            <img className="project-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            <div class="project-card-image-overlay">
                <div class="project-card-image-text">{props.item.title}</div>
            </div>
            </div>
            {props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link}/>}
        </div>
    )
 }

export default Card;