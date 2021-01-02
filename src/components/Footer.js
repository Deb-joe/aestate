import React, { Component } from 'react';
import './Footer.css';
import { Nav, Navbar, Form, FormControl, NavDropdown, Button } from 'react-bootstrap';


class Footer extends Component {
    state = {clicked: false}

    handleClick = () => {
    	this.setState({ clicked: !this.state.clicked})
    }
     
	render() {
		return(
			<Navbar bg="" variant="light">
    <Navbar.Brand href="#home">Aestate</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home"><i class="fab fa-facebook"></i></Nav.Link>
      <Nav.Link href="#features"><i class="fas fa-envelope"></i></Nav.Link>
       <Nav.Link href="#features"><i class="fab fa-linkedin"></i></Nav.Link>
        <Nav.Link href="#features"><i class="fab fa-youtube"></i></Nav.Link>
      <Nav.Link href="#pricing"><i class="fab fa-instagram"></i></Nav.Link>
      <Nav.Link href="#pricing"><i class="fab fa-google"></i></Nav.Link>
      <Nav.Link href="#pricing"><i class="fab fa-google-plus-g"></i></Nav.Link>
    </Nav>
  </Navbar>)
	}
}

export default Footer