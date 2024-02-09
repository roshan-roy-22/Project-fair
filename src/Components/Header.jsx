import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { tokenAuthenticalContext } from "../Context API/TokenAuth";

function Header(insideDashboard) {

  const {isAuthorised, setIsAuthorised} = useContext(tokenAuthenticalContext);
  const navigate = useNavigate("/");
  console.log(insideDashboard);
  const linkStyle = {
    color: "inherit", // Use the default text color
    textDecoration: "none", // Remove underline
  };
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    setIsAuthorised(false);
    navigate("/");
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
          {insideDashboard && (
            <div className="ms-auto ">
              <button
                onClick={handleLogout}
                className="btn text-white border  "
              >
                Logout<i class="fa-solid fa-arrow-right-from-bracket ms-2 "></i>
              </button>
            </div>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
