import React, { Component } from 'react';
import './Navbar.css';
//import { HashLink as Link } from 'react-router-hash-link';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
//import { Link, animateScroll as scroll } from "react-scroll";



class NavBar extends Component {
    state = {clicked: false}

    handleClick = () => {
    	this.setState({ clicked: !this.state.clicked})
    }
     
	render() {
		return(
			<Navbar fixed="top" bg="#001e33" expand="lg" variant="light">
  <Navbar.Brand  className="roti" variant="light" href="/"><img
        alt=""
        src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        width="40"
        height="40"
        className="d-inline-block align-top"
      />{' '}Aestate</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active" href="#home">Home</Nav.Link>
      
      <Nav.Link smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active" href="#project">Project</Nav.Link>
      <Nav.Link smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass="active" href="#gallery">Gallery</Nav.Link>
      <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light"><i class="fas fa-search"></i></Button>
    </Form>

    </Nav>
    
  </Navbar.Collapse>
</Navbar>)
	}
}

export default NavBar