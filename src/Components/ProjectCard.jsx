import React, { useState } from "react";
import { Card, Modal, Row, Col } from "react-bootstrap";

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
        style={{ width: "28rem" }}
      >
        <Card.Img
          variant="top"
          src="https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/0d373b57e250525e2556015c5ad6fe84f66f2f632357a97c5de6e73043c0e0d51628682335902.jpg"
        />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
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
                src="https://images-wixmp-530a50041672c69d335ba4cf.wixmp.com/templates/image/0d373b57e250525e2556015c5ad6fe84f66f2f632357a97c5de6e73043c0e0d51628682335902.jpg"
                alt=""
              />
            </Col>
            <Col md="6">
              <h2 className="fw-bolder text-dark">{project.title}</h2>
              <p className="fw-bolder ">{project.overview}</p>
              <p>
                Language Used{" "}
                <span className="fw-bolder text-danger">
                  {project.languages}
                </span>
              </p>
            </Col>
          </Row>
          <div className="mt-3">
            <a href={project.github} target="_blank" className="btn me-3">
              <i
                style={{ fontSize: "40px" }}
                className="fa-brands fa-github"
              ></i>
            </a>
            <a href={project.website} target="_blank" className="btn me-3">
              <i style={{ fontSize: "40px" }} className="fa-solid fa-link"></i>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProjectCard;
