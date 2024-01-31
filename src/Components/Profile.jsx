import React from "react";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import uploadProfile from "../assets/images/noprofileimages.png";

function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="d-flex rounded p-2 justify-content-between">
        <h3>Profile</h3>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="btn btn-outline-warning"
        >
          <i className="fa-solid fa-chevron-down"></i>
        </button>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div
            className="row shadow p-3 justify-content-center mt-3"
            id="example-collapse-text"
          >
            <label className="text-center">
              <input style={{ display: "none" }} type="file" />
              <img
                className=""
                width={"200px"}
                height={"200px"}
                src={uploadProfile}
                alt="upload image"
              />
            </label>
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="GitHub"
              />
            </div>
            <div className="mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="LinkedIn"
              />
            </div>
            <div className="mt-3 text-center d-grid">
              <button className="btn btn-warning">Update</button>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
}

export default Profile;
