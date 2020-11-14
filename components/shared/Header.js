import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import Link from "next/link";

const BSNavLink = (props) => {
  const { title, href } = props;
  return (
    <Link href={href}>
      <a className="nav-link port-navbar-link">{title}</a>
    </Link>
  );
};

const BsNavBrand = () => {
  return (
    <Link href="/">
      <a className="navbar-brand port-navbar-brand">Arhan Choudhury</a>
    </Link>
  );
};

const LogoutLink = () => {
  return <span className="nav-link port-navbar-link clickable">Logout</span>;
};

const LoginLink = () => {
  return <span className="nav-link port-navbar-link clickable">Login</span>;
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar
        className="port-navbar port-default absolute"
        color="transparent"
        dark
        expand="md"
      >
        <BsNavBrand />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
              <BSNavLink href="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BSNavLink href="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BSNavLink href="/portfolios" title="Portfolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BSNavLink href="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BSNavLink href="/cv" title="Cv" />
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem className="port-navbar-item">
              <LoginLink />
            </NavItem>
            <NavItem className="port-navbar-item">
              <LogoutLink />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
