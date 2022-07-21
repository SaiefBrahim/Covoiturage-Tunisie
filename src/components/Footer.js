import React from "react";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container-fluid mt-5">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="ms-5 mb-md-0 text-light">Copyright &copy; 2022</span>
          <a
            href="https://github.com/SAIEFIBRAHIM"
            className="ms-2 mb-md-0 text-light text-decoration-none lh-1"
          >
            Saief Brahim
          </a>
        </div>

        <ul className="nav col-md-4 me-5 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-light"
              href="https://github.com/SAIEFIBRAHIM"
              rel="noreferrer"
              target="_blank"
            >
              <BsFacebook size={25} />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-light"
              href="https://github.com/SAIEFIBRAHIM"
              rel="noreferrer"
              target="_blank"
            >
              <BsInstagram size={25} />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-light"
              href="https://github.com/SAIEFIBRAHIM"
              rel="noreferrer"
              target="_blank"
            >
              <BsGithub size={25} />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
