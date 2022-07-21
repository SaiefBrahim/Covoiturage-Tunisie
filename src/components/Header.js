import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../img/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="primary" expand="md" className="fixed-top">
      <Container fluid className="mx-4 text-light">
        <Button
          className="text-left text-light fs-5 d-flex align-items-center ps-0"
          style={{ fontWeight: 500 }}
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={Logo} alt="Logo" width={33} className="me-1" />
          Covoiturage Tunisie
        </Button>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 gap-1"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Button
              className="text-light fw-semibold"
              onClick={() => {
                navigate("/nouvelle-annonce");
              }}
            >
              Ajouter une Annonce
            </Button>
            <Button
              className="text-light fw-semibold"
              href="https://github.com/SAIEFIBRAHIM"
              rel="noreferrer"
              target="_blank"
            >
              Centre d'aide
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
