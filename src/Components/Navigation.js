import React, {Component} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {Link} from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './CSS/Navigation.css';

export default class Navigation extends Component {
    
    render(){
        return(
            <div className="wholeNav">
                <Navbar collapseOnSelect className="whole-nav" expand='sm' variant='dark'>
                    <Navbar.Brand as={Link} to="/" className="nav">
                        PhyoPyaeZaw<sub>developer</sub>
                    </Navbar.Brand>
                    <Container>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className="right-nav navbar-collapse justify-content-end">
                                <Nav.Link eventKey="1" as={Link} to="/">Home</Nav.Link>
                                <Nav.Link eventKey="3" as={Link} to="/portfolio">Portfolio</Nav.Link>
                                <Nav.Link eventKey="4" as={Link} to="/projects">Projects</Nav.Link>
                                {/* <Nav.Link eventKey="2" as={Link} to="/about">About</Nav.Link> */}
                                {/* <Nav.Link eventKey="3" as={Link} to="/blogs">Blog</Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
};

