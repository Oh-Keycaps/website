import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import logo from '../logo.svg';

const Navigation = (props: any) => {
  return (
    <Navbar bg={"dark"} expand="lg">
      <Navbar.Brand href='/'>
        <img src={logo}
             width="100"
             height="100"
             className="d-inline-block align-top"
             alt="React Bootstrap logo"/>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#hex">Hex Files</Nav.Link>
          <Nav.Link href="#qmk">QMK Keymaps</Nav.Link>
          <Nav.Link href="#wiring">Wiring Tutorial</Nav.Link>
          <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
