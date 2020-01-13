import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import Navbar from "react-bootstrap/Navbar"
import UseScrollSpy from "../utils/UseScrollSpy"
import Nav from "react-bootstrap/Nav"
import { localLink, externalLink } from "../utils/StringHelpers"
import HeartLogo from "./HeartLogo"
import { NavStrings } from "./Strings"

const { buttonLabels } = NavStrings;


const Header = ({ siteTitle }) => {
  const scroll = UseScrollSpy(50);
  const [open, setOpen] = useState(false);
  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <Navbar
        as="header"
        collapseOnSelect
        expand="lg"
        bg={scroll || open ? 'warning' : ''}
        variant={scroll || open ? 'light' : 'dark'}
        fixed="top"
        id="navbar"
        // onSelect={removeActiveClasses}
      >
              <Nav.Link
        as={Link}
        className="navbar-brand"
        eventKey={'home'}
        to={localLink('home')}
      >
        R<HeartLogo />M
      </Nav.Link>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={(): void => setOpen(!open)}
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* <Scrollspy
          items={linkifyAll(buttonLabels.left)}
          className="mr-auto"
          currentClassName="active"
          componentTag={Nav}
        > */}
          {buttonLabels.left.map(link => (
            <Nav.Link as={Link} key={link} eventKey={link} to={localLink(link)}>
              {link}
            </Nav.Link>
          ))}
        {/* </Scrollspy> */}
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
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
