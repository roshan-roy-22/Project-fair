import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginAPI, registerAPI } from "../Services/allAPI";
import SyncLoaderr from "../Components/SyncLoader";
import { tokenAuthenticalContext } from "../Context API/TokenAuth";

function Auth({ insideRegister }) {
  const{isAuthorised, setIsAuthorised}=useContext(tokenAuthenticalContext)
  const [loading ,setLoading]= useState(false)
  const [userData, setUserdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  console.log(userData.username, userData.email, userData.password);
  
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(userData);
    const { username, email, password } = userData;
    if (!username || !email || !password)
      toast.info("Please enter the input field");
    else {
      try {
        const result = await registerAPI(userData);
        console.log(result);
        if (result.status === 200) {
          toast.success(`${result.data.username} has registered succesfully`);
          setUserdata({ username: "", email: "", password: "" });
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        } else {
          toast.warning(result.response.data);
          setUserdata({ email: "", password: "" });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = userData;
    if (!email || !password) {
            setLoading(false)
      toast.info("Please complete the form");
    } else {
      try {
        const result = await loginAPI({ email, password });
        console.log(result);
        if (result.status === 200) {
          sessionStorage.setItem(
            "username", result.data.existingUser.username
          );
          sessionStorage.setItem("token", result.data.token);
            setIsAuthorised(true)
          setTimeout(()=>{
            setLoading(false)
            setUserdata({ email: "", password: "" });
            navigate("/");
          },1200)
        } else {
           setTimeout(() => {
            setLoading(false)
            toast.warning(result.response.data);
            setUserdata({ email: "", password: "" });
           }, 500);
        }
      } catch (error) {
        
        console.log(error);
      }
    }
  };

  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="container w-75">
        <Link className="btn btn-success mb-3" to={"/"}>
          <i class="fa-solid fa-arrow-left me-2"></i>Back to home
        </Link>
        <div
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
          className="card p-5"
        >
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                className="w-100"
                src="https://www.merideanoverseas.in/frontend/images/web-student-login-img.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="d-flex  align-items-center flex-column">
                <h1
                  style={{ fontSize: "35px" }}
                  className="ms-5 text-center mb-3"
                >
                  <i class="fa-solid fa-laptop-code me-2 mt-5"></i>PROJECT FAIR
                </h1>
                <h5 className="fw-bolder mt-2 pb-3 ">
                  {insideRegister
                    ? `Sign up your Account `
                    : `Sign in your Account`}
                </h5>
                <Form>
                  {insideRegister && (
                    <Form.Group className="mb-3" controlId="formBasicName">
                      <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        value={userData.username}
                        onChange={(e) =>
                          setUserdata({ ...userData, username: e.target.value })
                        }
                      />
                    </Form.Group>
                  )}

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      value={userData.email}
                      onChange={(e) =>
                        setUserdata({ ...userData, email: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={userData.password}
                      onChange={(e) =>
                        setUserdata({ ...userData, password: e.target.value })
                      }
                    />
                  </Form.Group>
                  {insideRegister ? (
                    <div>
                      <button
                        onClick={handleRegister}
                        className="btn shadow  btn-primary mb-2"
                      >
                        Register
                      </button>
                      <p>
                        Already have an Account? Click here{" "}
                        <Link to={"/login"}>Login</Link>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={handleLogin}
                        className="btn btn-primary mb-2"
                      >
                        Login
                      </button>
                      <p>
                        New user? Click here{" "}
                        <Link to={"/register"}>Register</Link>
                      </p>
                    </div>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} position="top-center" />
      {loading && <SyncLoaderr/>}
    </div>
  );
}

export default Auth;
