import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import MyProjects from  '../Components/MyProject'
import Profile from '../Components/Profile'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard() {
  const [username,setUsername]=useState("")
  useEffect(() => {
   if(sessionStorage.getItem("username")){
    setUsername(sessionStorage.getItem("username"))
   }
  }, [])
  
  return (
    <div>
      <Header insideDashboard />
      <div style={{ marginTop: "60px" }} className="dasboard container ">
        <h1 className="fw-bolder ">
          Welcome <span className="text-warning ">{username}</span>
        </h1>
        <div className="row mt-5 ">
          <div className="col-lg-8">
            <MyProjects/>
          </div>
          <div className="col-lg-4">
            <Profile/>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} position="top-center" />
    </div>
  );
}

export default Dashboard;
