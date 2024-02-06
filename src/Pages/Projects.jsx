import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Col } from "react-bootstrap";
import ProjectCard from "../Components/ProjectCard";
import { allProjectAPI } from "../Services/allAPI";

function Projects() {
  const [allprojects, setAllprojects] = useState([]);

  const getAllprojects = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "multipart/form-data",
      "Authorization": `Bearer ${token}`
    };

    try {
      const result = await allProjectAPI(reqHeader);
      if (result.status === 200) {
        setAllprojects(result.data);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    getAllprojects();
  }, []);

  return (
    <>
      <Header />
      <div className="my-4 " style={{ marginTop: "100px" }}>
        <div className="d-flex justify-content-between  m-5">
          <h1>All projects</h1>
          <input
            type="text"
            style={{ width: "300px" }}
            className="rounded p-2  "
            placeholder="Search My Projects"
          />
        </div>
        <div className="mt-5 container-fluid ">
          {allprojects.length > 0 ? (
            <div className="row">
              {allprojects.map((project, index) => (
                <Col key={index} sm="12" md="6" lg="4">
                  <ProjectCard  project={project} />
                </Col>
              ))}
            </div>
          ) : (
            <div style={{ height: "500px" }} className="d-flex justify-content-center align-items-center">
              <h3 className="text-danger">Nothing to show</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Projects;
