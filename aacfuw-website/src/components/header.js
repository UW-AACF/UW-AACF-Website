import React from 'react'

import { Link } from 'gatsby'

import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Image from "react-bootstrap/Image"
import logo from "../images/aacflogo.png"

import * as headerStyles from './header.module.scss'
import './header-support.scss'

function Header() {
  return (
    <Navbar className={headerStyles.navbarExpandLg} expand="lg" sticky="top" variant="light"
      style={{
        backgroundColor: "white",
        height: "10%",
      }}
    >
      <Navbar.Brand className={headerStyles.navbarBrand} >
        <Link to="/">
          <Image className={["mb-0"].join(' ')} src={logo} />
        </Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className={["ms-auto me-3", headerStyles.navbarNav].join(' ')}>
          <NavDropdown className={[headerStyles.navLink].join(' ')} title="ABOUT" id="collapsible-nav-dropdown">
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/about">AACF</NavDropdown.Item>
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/ministries">Ministries</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className={headerStyles.navLink} title="CONNECT" id="collapsible-nav-dropdown">
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/large-group">Large Group</NavDropdown.Item>
            {/* <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/bible-study">Bible Study</NavDropdown.Item> */}
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/prayer">Prayer</NavDropdown.Item>
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/mens">Men's</NavDropdown.Item>
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/womens">Women's</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className={headerStyles.navLink} title="EVENTS" id="collapsible-nav-dropdown">
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/sad-bad">SAD & BAD</NavDropdown.Item>
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/winter-retreat">Winter Retreat</NavDropdown.Item>
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/senior-sendoff">Senior Sendoff</NavDropdown.Item>
            <NavDropdown.Item className={headerStyles.dropdownItem} as={Link} to="/united">AACF United</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className={headerStyles.navLink} as={Link} to="/outreach">OUTREACH</Nav.Link>
          <Nav.Link className={headerStyles.navLink} as={Link} to="/churches">CHURCHES</Nav.Link>
          <Nav.Link className={headerStyles.navLink} as={Link} to="/contact">CONTACT</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
