import React from 'react'
import AddProjects from './AddProject'
import EditProject from './EditProject'
function MyProject() {
  return (
    <div className='card shadow p-3 '>
      <div className="d-flex justify-content-between ">
        <h3>My Projects</h3>
        <div> <AddProjects/> </div>
      </div>
      <div className="mt-4  ">
        <div className="border rounded justify-content-between  d-flex align-items-center text-danger mb-3 p-2 ">
          <h5>Project Title</h5>
          <div className="d-flex align-items-center   icons">
            <EditProject/>
            <a href="" target="_blank" className="btn"><i class="fa-brands fa-github fa-2x"></i></a>
                <button className="btn"><i class="fa-solid fa-trash fa-2x"></i></button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MyProject