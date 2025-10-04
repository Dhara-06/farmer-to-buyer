import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function AppNavbar() {
  // State for each dropdown
  const [showFarmers, setShowFarmers] = useState(false);
  const [showBuyers, setShowBuyers] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  // Close all dropdowns
  const closeAll = () => {
    setShowFarmers(false);
    setShowBuyers(false);
    setShowAdmin(false);
  };

  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          <i className="fas fa-leaf"></i> SmartAgri
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">

            {/* Farmers Dropdown */}
            <NavDropdown
              title={<><i className="fas fa-tractor"></i> Farmers</>}
              id="farmers-dropdown"
              show={showFarmers}
              onToggle={(isOpen) => {
                closeAll();
                setShowFarmers(isOpen);
              }}
            >
              <NavDropdown.Item as={Link} to="/farmer/register" onClick={closeAll}>
                Register
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/farmer/login" onClick={closeAll}>
                Login
              </NavDropdown.Item>
            </NavDropdown>

            {/* Buyers Dropdown */}
            <NavDropdown
              title={<><i className="fas fa-shopping-cart"></i> Buyers</>}
              id="buyers-dropdown"
              show={showBuyers}
              onToggle={(isOpen) => {
                closeAll();
                setShowBuyers(isOpen);
              }}
            >
              <NavDropdown.Item as={Link} to="/buyer/register" onClick={closeAll}>
                Register
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/buyer/login" onClick={closeAll}>
                Login
              </NavDropdown.Item>
            </NavDropdown>

            {/* Admin Dropdown */}
            {/* Admin Dropdown */}
<NavDropdown
  title={<><i className="fas fa-user-shield"></i> Admin</>}
  id="admin-dropdown"
  show={showAdmin}
  onToggle={(isOpen) => {
    closeAll();
    setShowAdmin(isOpen);
  }}
>
  <NavDropdown.Item as={Link} to="/admin/register" onClick={closeAll}>
    Register
  </NavDropdown.Item>
  <NavDropdown.Item as={Link} to="/admin/login" onClick={closeAll}>
    Login
  </NavDropdown.Item>
</NavDropdown>


            {/* Blog */}
            <Nav.Link as={Link} to="/blog" onClick={closeAll}>
              <i className="fas fa-blog"></i> Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
