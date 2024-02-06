import React, { useContext, useEffect, useState } from "react";
import AddProjects from "./AddProject";
import EditProject from "./EditProject";
import { userProjectAPI } from "../Services/allAPI";
import { addProjectResponseContext } from "../Context API/ContextShare";
// import { allProjectAPI } from "../Services/allAPI";

function MyProject() {
  const {addProjectResponse,setAddProjectResponse}=useContext(addProjectResponseContext)
  const [allProjects, setAllprojects] = useState([]);
  const getUserprojects = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    };

    try {
      const result = await userProjectAPI(reqHeader);
      if (result.status === 200) {
        setAllprojects(result.data);
      } else {
        console.log(result);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  console.log(allProjects);
  useEffect(() => {
    getUserprojects();
  }, [addProjectResponse]);
  return (
    <div className="card shadow p-3 ">
      <div className="d-flex justify-content-between ">
        <h3>My Projects</h3>
        <div>
          {" "}
          <AddProjects />{" "}
        </div>
      </div>
      <div className="mt-4  ">
        {allProjects.length > 0 ? (
          allProjects.map((project, index) => (
            <div key={index} className="border rounded justify-content-between  d-flex align-items-center text-danger mb-3 p-2 ">
              <h5>{project?.title}</h5>
              <div className="d-flex align-items-center   icons">
                <EditProject />
                <a href="" target="_blank" className="btn">
                  <i class="fa-brands fa-github fa-2x"></i>
                </a>
                <button className="btn">
                  <i class="fa-solid fa-trash fa-2x"></i> 
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-danger ">No projects is uploaded Yet</div>
        )}
      </div>
    </div>
  );
}

export default MyProject;
