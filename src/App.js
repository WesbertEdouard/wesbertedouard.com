import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
 
import Footer from './Componets/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import DesignPage from './pages/DesignPage';



  class App extends React.Component {
  
    constructor(props) {
        super(props);
        this.state = {
        title: "Wesbert Jr Edouard",
        headerLinks: [
            {title: 'home', path:'/'},
            {title: 'about', path:'/about'},
            {title: 'contact', path:'/contact'},
            {title: 'projects', path:'/projects'},
            {title: 'skills', path:'/skills'},
            {title: 'design', path:'/design'}
        ],
        home: {
            title: 'Wesbert Edouard',
            subtitle1: 'I am a Student',
            subtitle2: 'Front-End Developer',
            subtitle3: 'UX Designer',
            text: 'check out my projects below'
        },
        about: {
            title: 'About Me',
            subtitle: 'A Passion for Learning'
        },
        contact: {
            title: 'Contact',
            subtitle: 'Let\'s Work Together'
        },
        projects: {
            title: 'My Projects',
            subtitle: 'Always Learning, Constantly Improving'
        },
        skills: {
            title: 'Skills',
            subtitle: 'To Pay The Bills'
        },
        design: {
            title: 'Designs & Illustrations',
            subtitle: 'Creative Development starts here'
        },
    
      }
    }
  

     render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
            <Navbar className='border-bottom' bg='transparent' expand='lg'>
                <NavbarBrand id='nav-fontL'>wesbert<NavbarBrand className='d-inline-block p-0' id='nav-fontR'>.com</NavbarBrand></NavbarBrand>
                <Navbar.Toggle className='border-0' aria-controls='navbar-toggle'/>
                <Navbar.Collapse id='navbar-toggle'>
                    <Nav id='nav-link-position'>
                        <Link className='nav-link' id='nav-link-font' to='/'>home</Link>
                        <Link className='nav-link' id='nav-link-font' to='/about'>about</Link>
                        <Link className='nav-link' id='nav-link-font' to='/contact'>contact</Link>
                        <Link className='nav-link' id='nav-link-font' to='/projects'>projects</Link>
                        <Link className='nav-link' id='nav-link-font' to='/skills'>skills</Link>
                        <Link className='nav-link' id='nav-link-font' to='/design'>design</Link>

                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        
            <Route path='/' exact render={() => <HomePage title={this.state.home.title} subTitle1={this.state.home.subtitle1} subTitle2={this.state.home.subtitle2} subTitle3={this.state.home.subtitle3} text={this.state.home.text}/>}/>
            <Route path='/contact' render={() => <ContactPage title={this.state.contact.title} subTitle={this.state.contact.subtitle} text={this.state.contact.text}/>}/>
            <Route path='/about' render={() => <AboutPage title={this.state.about.title} subTitle={this.state.about.subtitle} text={this.state.about.text}/>}/>
            <Route path='/projects' render={() => <ProjectsPage title={this.state.projects.title} subTitle={this.state.projects.subtitle} text={this.state.projects.text}/>}/>
            <Route path='/skills' render={() => <SkillsPage title={this.state.skills.title} subTitle={this.state.skills.subtitle} text={this.state.skills.text}/>}/>
            <Route path='/design' render={() => <DesignPage title={this.state.design.title} subTitle={this.state.design.subtitle} text={this.state.design.text}/>}/>
            
            
            <Footer/> 
        </Container>
      </Router>
    );
     
    }
  }
  
  export default App;
  