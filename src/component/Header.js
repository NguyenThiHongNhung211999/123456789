import React from 'react';
import {Navbar, Nav, NavItem, NavDropdown,MenuItem} from 'react-bootstrap';

class Header extends React.Component {
    render() {
        return (
            <div className="app-header">
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                    <a href="/">GUNI SHOP</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavDropdown eventKey={3} title="Sản Phẩm" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} href="/san-pham">Tất Cả Sản Phẩm</MenuItem>
                            <MenuItem eventKey={3.1} href="/san-pham-sony">Tai Nghe Sony</MenuItem>
                            <MenuItem eventKey={3.2} href="/san-pham-bluetooth">Tai Nghe Bluetooth</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={2} href="/gioi-thieu">
                            About
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;