import React, { useState } from "react"
import { Link } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
// import Scrollspy from 'react-scrollspy';
import { NavStrings } from "./Strings"
import UseScrollSpy from "../utils/UseScrollSpy"
import HeartLogo from "./HeartLogo"
import { localLink, externalLink } from "../utils/StringHelpers"
import removeActiveClasses from "../utils/RemoveActiveClasses"

const { buttonLabels } = NavStrings

export const NavBar: React.FC = () => {
  const scroll = UseScrollSpy(50)
  const [open, setOpen] = useState(false)
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={scroll || open ? "warning" : ""}
      variant={scroll || open ? "light" : "dark"}
      fixed="top"
      id="navbar"
      onSelect={removeActiveClasses}
    >
      <Nav.Link
        className="navbar-brand"
        eventKey={"home"}
        href={localLink("home")}
      >
        R<HeartLogo />M
      </Nav.Link>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={(): void => setOpen(!open)}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        {buttonLabels.left.map(link => (
          <Nav.Link key={link} href={localLink(link)}>
            {link}
          </Nav.Link>
        ))}
        <Nav className="ml-auto">
          {buttonLabels.right.map(link => (
            <Nav.Link
              as={Link}
              eventKey={link}
              key={link}
              to={externalLink(link)}
            >
              {link}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
