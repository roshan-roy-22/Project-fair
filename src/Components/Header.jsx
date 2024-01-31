import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(insideDashboard) {
  console.log(insideDashboard);
  const linkStyle = {
    color: "inherit", // Use the default text color
    textDecoration: "none", // Remove underline
  };
  return (
    <div>
      <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand className="text-white ">
            <Link className="fw-bolder " style={linkStyle} to={"/"}>
              <i class="fa-solid fa-laptop-code me-2"></i>Project Fair
            </Link>
          </Navbar.Brand>
          {insideDashboard && 
            <div className="ms-auto ">
              <button className="btn text-white border  ">
                Logout<i class="fa-solid fa-arrow-right-from-bracket ms-2 "></i>
              </button>
            </div>
          }
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
