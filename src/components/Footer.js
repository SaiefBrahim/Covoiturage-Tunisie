import React from "react";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container-fluid mt-5">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
        <div className="row mx-auto">
          <span className="mb-2 text-light">
            Copyright &copy; 2022
            <a
              href="https://github.com/SAIEFIBRAHIM"
              className=" text-decoration-none lh-1"
            >
              {" "}
              Saief Brahim
            </a>
            <ul className="nav mx-auto d-flex justify-content-center mt-2">
              <li>
                <a
                  className="text-light"
                  href="https://www.facebook.com/seefbrahim"
                  rel="noreferrer"
                  target="_blank"
                >
                  <BsFacebook size={25} />
                </a>
              </li>
              <li className="ms-3">
                <a
                  className="text-light"
                  href="https://www.instagram.com/seefbrahim/"
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
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
