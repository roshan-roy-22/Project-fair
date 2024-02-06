import React, { useEffect, useState } from "react";
import landingimg from "../assets/images/freelancer.png";
import { Link, useNavigate } from "react-router-dom";
import ProjectCard from "../Components/ProjectCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getHomeProjectAPI } from "../Services/allAPI";

function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsloggedIn] = useState(false);
  const [allProjects,setAllprojects]=useState([]);

  console.log(allProjects);

  const getHomeProject = async ()=>{
    const result = await getHomeProjectAPI();
    if(result.status===200) setAllprojects(result.data)
    else console.log(result);
  }

  const handleProjectPage = () => {
    if(sessionStorage.getItem("token")){
      navigate("/projects");
    }else{
      toast.warning("Please Login to explore our projects")
    }
  };

  useEffect(() => {
    getHomeProject();
    if (sessionStorage.getItem("token")) {
      setIsloggedIn(true);
    } else {
      setIsloggedIn(false);
    }
  }, []);

  return (
    <>
      {/* //landing Page */}
      <div style={{ width: "100%", height: "90vh" }} className="bg-dark ">
        <div className="container-fluid  mx-auto " style={{ height: "100%" }}>
          <div className="row align-items-center ">
            <div className="col-lg-1"></div>
            <div className="col-lg-5 text-white align-items-center">
              <h1 className="mt-5" style={{ fontSize: "70px" }}>
                Project Fair
              </h1>
              <p className="my-4">
                One Stop Destination for all Software Development Projects.
                Where User can add and manage their projects. As well as access
                all projects available in our website... What are you waiting
                for!!!
              </p>
              {isLoggedIn ? (
                <Link to={"/dashboard"} className="btn btn-warning">
                  Manage Your Projects
                  <i class="fa-solid fa-right-long fa-beat ms-2"></i>{" "}
                </Link>
              ) : (
                <Link to={"/login"} className="btn btn-warning">
                  Start to Explore{" "}
                  <i class="fa-solid fa-right-long fa-beat ms-2"></i>{" "}
                </Link>
              )}
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-4">
              <img
                style={{ marginTop: "100px" }}
                className="img-fluid "
                src={landingimg}
                alt=""
              />
            </div>
            <div className="col-lg-1"></div>
          </div>
        </div>
      </div>
      {/* all projects */}
      <div className="projects mt-5">
        <h2 className="text-center mb-5 mt-2">Explore our projects</h2>
        <marquee>
          <div style={{height:'300px'}} className="d-flex justify-content-between">
            {allProjects.length>0 ?allProjects.map((project,index)=>(
              <div key={index}>
              <ProjectCard project={project} />
            </div>
            )):null }
          </div>
        </marquee>
        <div className="text-center my-2 ">
          <button onClick={handleProjectPage} className="btn btn-dark">
            View more projects
          </button>
        </div>
      </div>
      <ToastContainer autoClose={2000} position="top-center" />
    </>
  );
}

export default Home;
