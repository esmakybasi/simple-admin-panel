// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';

const Header = ({ username }) => {
    return (
        <Navbar bg="light" expand="lg" className="flex-shrink-0">
            <Navbar.Brand href="#home" style={{marginLeft: '15px'}} className="fw-bold d-flex align-items-center">
                {username}
                <img src={process.env.PUBLIC_URL + '/img/iconh.svg'} alt="icon" style={{height: '20px', marginLeft: '10px'}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Form inline style={{marginRight: '15px'}} className="d-flex align-items-center">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{borderRadius: '20px'}} />
                    <img src={process.env.PUBLIC_URL + '/img/avatar.svg'} alt="avatar" style={{height: '40px', borderRadius: '50%', marginLeft: '10px'}} />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
