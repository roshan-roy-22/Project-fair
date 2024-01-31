import React from "react";
import Header from "../Components/Header";
import { Col } from "react-bootstrap";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  return (
    <>
      <Header />
      <div className="my-4 " style={{ marginTop: "100px" }}>
        <div className="d-flex justify-content-between  m-5">
          <h1>All products</h1>
          <input
            type="text"
            style={{ width: "300px" }}
            className="rounded p-2  "
            placeholder="Search My Projects"
          />
        </div>
        <div className="mt-5 container-fluid ">
          <Col sm="12" md="6" lg="4">
            <ProjectCard />
          </Col>
        </div>
      </div>
    </>
  );
}

export default Projects;
