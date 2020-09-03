import React from 'react';
import memoboat from '../assets/images/memoboat.png';
import tba from '../assets/images/tba.jpg';
import Card from '../Componets/Card';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
class Carousel extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
        items: [
            {
                id:0,
                title: 'Memo Boat',
                subtitle: 'Status Reporting System',
                imgSrc: memoboat,
                link: 'https://memoboat.tk',
                selected: false
            },
            {
                id:1,
                title: 'WesbertEdouard.com',
                subtitle: 'Personal Portfolio Website',
                imgSrc: tba,
                link: 'https://wesbertedouard.com',
                selected: false
            },
            {
                id:2,
                title: 'Coming Soon',
                subtitle: 'New Project TBA',
                imgSrc: tba,
                selected: false
            },
            {
                id:3,
                title: 'Coming Soon',
                subtitle: 'New Project TBA',
                imgSrc: tba,
                selected: false
            },

        ]
    } 
}

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id){
                item.selected = false;
            }
        });

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id,e))} key={item.id}/>
        })
    }

    render() {
        return(
            <div> 
            <Container  fluid={true}>
                <Row className='project-carosuel-bg justify-content-around m-100 '>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
            </div>
        );
    }
}

export default Carousel;