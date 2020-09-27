import React, { FC } from "react";
import { Navbar, Nav } from "rsuite";

export const Header: FC = () => {
  return (
    <Navbar>
      <Navbar.Header></Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item>Home</Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item>Login</Nav.Item>
          <Nav.Item>Register</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};
