import React from 'react'
import { Nav, Navbar, Button, NavDropdown, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../assets/image/logo.webp';
import "./Landing.css"

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';
import SupervisedUserCircleOutlinedIcon from '@material-ui/icons/SupervisedUserCircleOutlined';

export default function Navigation() {
    return (
        <React.Fragment>
            <Navbar bg="white" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="60"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Rojgar Portal"
                    />
                </Navbar.Brand>
                <Navbar.Brand id="site_Heading" >Rojgar Portol</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/" style={{ color: "rgb(10 14 140)" }} className="routes" href="#home" >
                            <HomeOutlinedIcon />
                                Home
                                </Nav.Link>

                        <Nav.Link as={Link} to="/contact" style={{ color: "rgb(10 14 140)" }} className="routes" href="#contact">
                            <ContactsOutlinedIcon />Contact Us</Nav.Link>

                        <Nav.Link as={Link} to="/about" style={{ color: "rgb(10 14 140)" }} className="routes" href="#about">
                            <SupervisedUserCircleOutlinedIcon />About Us</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button as={Link} to="/signin" className="m-1" variant="outline-success">Sign In</Button>{' '}
                        <Button as={Link} to="/signup" className="m-1" variant="outline-primary">Register</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    )
}
