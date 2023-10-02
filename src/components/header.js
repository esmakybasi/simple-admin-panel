// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Form, FormControl, FormGroup } from 'react-bootstrap';

const Header = ({ username }) => {
    return (
        <Navbar bg="light" expand="lg" className="flex-shrink-0" style={{ boxShadow: '0px 3px 6px #00000029' }}>
            <Navbar.Brand href="#home" style={{marginLeft: '20px'}} className="fw-bold d-flex align-items-center">
                {username}
                <img src={process.env.PUBLIC_URL + '/img/iconh.svg'} alt="icon" style={{height: '20px', marginLeft: '10px'}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Form inline style={{marginRight: '15px'}} className="d-flex align-items-center">
                    <FormGroup style={{ position: 'relative' }}>
                        <i className="fas fa-search" style={{ position: 'absolute', top: '10px', right: '10px', opacity: '0.5'}}></i>
                        <FormControl type="text" className="mr-sm-2" style={{borderRadius: '20px', paddingLeft: '30px'}}  />
                    </FormGroup>
                    <img src={process.env.PUBLIC_URL + '/img/avatar.svg'} alt="avatar" style={{height: '40px', borderRadius: '50%', marginLeft: '10px'}} />
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
