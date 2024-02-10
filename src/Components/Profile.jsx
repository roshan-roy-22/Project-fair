import React, { useEffect } from "react";
import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import uploadProfile from "../assets/images/noprofileimages.png";
import { SERVER_URL } from "../Services/serverURL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateUserProfileAPI } from "../Services/allAPI";

function Profile() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    github: "",
    linkedin: "",
    profileImage: "",
  });
  const [open, setOpen] = useState(false);
  const [existingImage, setExistingImage] = useState("");
  const [preview, setPreview] = useState("");
  useEffect(() => {
    if (sessionStorage.getItem("userDetails")) {
      const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
      setUserData({
        ...userData,
        username: userDetails.username,
        password: userDetails.password,
        email: userDetails.email,
        github: userDetails.github,
        linkedin: userDetails.linkedin,
      });
      setExistingImage(userDetails.profile);
    }
  }, [open]);

  useEffect(() => {
    if (userData.profileImage) {
      setPreview(URL.createObjectURL(userData.profileImage));
    } else {
      setPreview("");
    }
  }, [userData.profileImage]);
  console.log(userData);

  const handleUpdateProfile = async () => {
    const { username, password, email, github, linkedin, profileImage } =
      userData;
    if (!github || !linkedin) {
      toast.info("Please fill the form completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("username", username);
      reqBody.append("password", password);
      reqBody.append("email", email);
      reqBody.append("github", github);
      reqBody.append("linkedin", linkedin);
      preview
        ? reqBody.append("profileImage", profileImage)
        : reqBody.append("profileImage", existingImage);

      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" : "application/json",
          Authorization: `Bearer ${token}`,
        };
        //api call
        try {
          const result = await updateUserProfileAPI(reqBody, reqHeader);
          if (result.status == 200) {
            setOpen(!open);
            sessionStorage.setItem("userDetails", JSON.stringify(result.data));
          } else {
            console.log(result);
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

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
              <input
                onChange={(e) =>
                  setUserData({ ...userData, profileImage: e.target.files[0] })
                }
                style={{ display: "none" }}
                type="file"
              />
              {existingImage == "" ? (
                <img
                  className=""
                  width={"200px"}
                  height={"200px"}
                  src={preview ? preview : uploadProfile}
                  alt="upload image"
                />
              ) : (
                <img
                  className=""
                  width={"200px"}
                  height={"200px"}
                  src={
                    preview ? preview : `${SERVER_URL}/uploads/${existingImage}`
                  }
                  alt="upload image"
                />
              )}
            </label>
            <div className="mt-3">
              <input
                value={userData.github}
                onChange={(e) =>
                  setUserData({ ...userData, github: e.target.value })
                }
                type="text"
                className="form-control"
                placeholder="GitHub"
              />
            </div>
            <div className="mt-3">
              <input
                value={userData.linkedin}
                onChange={(e) =>
                  setUserData({ ...userData, linkedin: e.target.value })
                }
                type="text"
                className="form-control"
                placeholder="LinkedIn"
              />
            </div>
            <div className="mt-3 text-center d-grid">
              <button onClick={handleUpdateProfile} className="btn btn-warning">
                Update
              </button>
            </div>
          </div>
        </div>
      </Collapse>
      <ToastContainer autoClose={2000} position="top-center" />
    </>
  );
}

export default Profile;
