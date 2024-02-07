import React from "react";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { SERVER_URL } from "../Services/serverURL";

function EditProject({ project }) {
  console.log(project);
  const [projectData, setProjectData] = useState({
    id: project._id,
    title: project.title,
    languages: project.languages,
    overview: project.overview,
    github: project.github,
    website: project.website,
    projectImage: "",
  });

  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (projectData.projectImage) {
      setPreview(URL.createObjectURL(projectData.projectImage));
    } else {
      setPreview("");
    }
  }, [projectData.projectImage]);

  const handleUpdate = () => {
    const { title, languages, overview, github, website } = projectData;

    if (!title || !languages || !overview || !github || !website) {
      alert("Plase fill form completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("languages", languages);
      reqBody.append("overview", overview);
      reqBody.append("github", github);
      reqBody.append("website", website);
      preview
        ? reqBody.append("projectImage", projectImage)
        : reqBody.append("projectImage", project.projectImage);

      //api call -reqHeader

      const token = sessionStorage.getItem("token");
      console.log(token);
      if (token) {
        if (preview) {
          const reqHeader = {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          };
          //api call
        } else {
          const reqHeader = {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          };
          //api call
        }
      }
    }
  };

  const handleClose = () => {
    setShow(false);
    setProjectData({
      ...projectData,
      id: project._id,
      title: project.title,
      languages: project.languages,
      overview: project.overview,
      github: project.github,
      website: project.website,
      projectImage: "",
    });
    setPreview("");
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <button onClick={handleShow} className="btn">
        <i class="fa-solid fa-pen-to-square fa-2x"></i>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setProjectData({
                      ...projectData,
                      projectImage: e.target.files[0],
                    })
                  }
                />
                <img
                  style={{ height: "300px" }}
                  className="w-100 "
                  src={
                    preview
                      ? preview
                      : `${SERVER_URL}/uploads/${project.projectImage}`
                  }
                  alt="project picture"
                />
              </label>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={projectData.title}
                  onChange={(e) =>
                    setProjectData({ ...projectData, title: e.target.value })
                  }
                  placeholder="Project Title"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={projectData.languages}
                  onChange={(e) =>
                    setProjectData({
                      ...projectData,
                      languages: e.target.value,
                    })
                  }
                  placeholder="Language Used"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={projectData.github}
                  onChange={(e) =>
                    setProjectData({ ...projectData, github: e.target.value })
                  }
                  placeholder="Github Link"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={projectData.website}
                  onChange={(e) =>
                    setProjectData({ ...projectData, website: e.target.value })
                  }
                  placeholder="Website Link"
                />
              </div>
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  value={projectData.overview}
                  onChange={(e) =>
                    setProjectData({ ...projectData, overview: e.target.value })
                  }
                  placeholder="Project Overview"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditProject;
