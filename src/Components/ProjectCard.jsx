import React, { useState } from "react";
import { Card, Modal, Row, Col } from "react-bootstrap";
import { SERVER_URL } from "../Services/serverURL";

function ProjectCard({ project }) {
  const [show, setShow] = useState(false);
  // console.log(project);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Card
        className="shadow-lg "
        onClick={handleShow}
        style={{ width: "28rem" ,marginBottom:'20px'}}

      >
        <Card.Img
        width={'200px'}
        height={'230px'}
          variant="top"
          src={`${SERVER_URL}/uploads/${project?.projectImage}`}
        />
        <Card.Body>
          <Card.Title>{project?.title}</Card.Title>
        </Card.Body>
      </Card>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md="6">
              <img
                
                className="img-fluid "
                height={"350px"}
                src={`${SERVER_URL}/uploads/${project?.projectImage}`}
                alt=""
              />
            </Col>
            <Col md="6">
              <h2 className="fw-bolder text-dark">{project?.title}</h2>
              <p className="fw-bolder ">{project?.overview}</p>
              <p>
                Language Used{" "}
                <span className="fw-bolder text-danger">
                  {project?.languages}
                </span>
              </p>
            </Col>
          </Row>
          <div className="mt-3">
            <a href={project?.github} target="_blank" className="btn me-3">
              <i
                style={{ fontSize: "40px" }}
                className="fa-brands fa-github"
              ></i>
            </a>
            <a href={project?.website} target="_blank" className="btn me-3">
              <i style={{ fontSize: "40px" }} className="fa-solid fa-link"></i>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProjectCard;
