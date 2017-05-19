import React from 'react';
import { Link } from 'react-router';

import { Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';

export default function Login(props) {
    var login = props.login;
    if(login) {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">{ login }</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href='/#/' >Home</NavItem>
                        <NavItem eventKey={2} href='/#/allbooks' >All Books</NavItem>
                        <NavDropdown eventKey={3} title={<Glyphicon glyph="menu-hamburger" />} id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} href='/#/mybooks'>My Books</MenuItem>
                            <MenuItem eventKey={3.2} href='/#/settings'><Glyphicon glyph="cog" />Settings</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3} href='/logout'><Glyphicon glyph="log-out" />Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        )
    } else {
        return  (
            <div>
                <Navbar>
                    <Nav pullRight>
                        <NavItem eventKey={1} href='/#/registration' >Registration</NavItem>
                        <NavItem eventKey={2} href='/#/login' >Login</NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}