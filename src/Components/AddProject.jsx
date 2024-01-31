import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const defaultImg="https://t4.ftcdn.net/jpg/05/65/22/41/360_F_565224180_QNRiRQkf9Fw0dKRoZGwUknmmfk51SuSS.jpg"

function AddProject() {

  const [show, setShow] = useState(false);
  const [projectData,setProjectData]=useState({
    title:"",languages:"",overview:"",github:"",website:"",projectImage:""
  });
  const [fileStatus,setFileStatus]=useState(false)
  const [preview,setPreview]=useState("");

  console.log(projectData);

  useEffect(() => {
    if(projectData.projectImage.type=="image/png" || projectData.projectImage.type=="image/jpg" || projectData.projectImage.type=="image/jpeg"){
      console.log("Generate image url");
      setPreview(URL.createObjectURL(projectData.projectImage))
      setFileStatus(false)
    }
    else{
      setFileStatus(true)
      setProjectData({...projectData,projectImage:""})
      setPreview("")
    }
  }, [projectData.projectImage])
  
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false)
    setProjectData({ title:"",languages:"",overview:"",github:"",website:"",projectImage:""})
  }

  const handleAddProject = async () => {
    const { title, languages, overview, github, website, projectImage } = projectData;
    if (!title || !languages || !overview || !github || !website || !projectImage) {
      toast.info("Please fill the form completely")
    } else {
      //api call =reqBody
      const reqBody= new FormData();
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("projectImage",projectImage)
      //api call -reqHeader
      const reqHeader ={
        "Content-Type":"multipart/form-data"
      }
    }
  }

  return (
    <div>
      <Button variant="success" onClick={handleShow}>
        Add Project
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
               <label> 
                <input type="file" onChange={e=>setProjectData({...projectData,projectImage:e.target.files[0]})} style={{display:'none'}} />
                <img style={{height:'300px'}} className='w-100 ' src={preview?preview:defaultImg} alt="project picture" />
                </label>
                {
                  fileStatus && <div className='text-danger' mt-2>"Please Upload file with following format (png,jpg,jepg) only *</div>
                }
            </div>
            <div className="col-lg-6">
               <div className='mb-3'>
                    <input onChange={e=>setProjectData({...projectData,title:e.target.value})} type="text" className="form-control" placeholder='Project Title'    />
               </div>
                <div className='mb-3'>
                    <input onChange={e=>setProjectData({...projectData,languages:e.target.value})} type="text" className="form-control" placeholder='Language Used' />
                </div>
                <div className='mb-3'>
                    <input onChange={e=>setProjectData({...projectData,github:e.target.value})} type="text" className="form-control" placeholder='Github Link' />
                </div>
                <div className='mb-3'>
                    <input onChange={e=>setProjectData({...projectData,website:e.target.value})} type="text" className="form-control" placeholder='Website Link'  />
                </div>
                <div className=''>
                    <input onChange={e=>setProjectData({...projectData,overview:e.target.value})} type="text" className="form-control" placeholder='Project Overview' />
                </div>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddProject}  variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={2000} position="top-center" />
    </div>
  )
}

export default AddProject