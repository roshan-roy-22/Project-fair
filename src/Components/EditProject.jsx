import React from 'react'
import  { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

function EditProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button onClick={handleShow} className="btn"><i class="fa-solid fa-pen-to-square fa-2x"></i></button>
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
                <input type="file" style={{display:'none'}} />
                <img style={{height:'300px'}} className='w-100 ' src="https://t4.ftcdn.net/jpg/05/65/22/41/360_F_565224180_QNRiRQkf9Fw0dKRoZGwUknmmfk51SuSS.jpg" alt="project picture" />
                </label>
            </div>
            <div className="col-lg-6">
               <div className='mb-3'>
                    <input type="text" className="form-control" placeholder='Project Title'    />
               </div>
                <div className='mb-3'>
                    <input type="text" className="form-control" placeholder='Language Used' />
                </div>
                <div className='mb-3'>
                    <input type="text" className="form-control" placeholder='Github Link' />
                </div>
                <div className='mb-3'>
                    <input type="text" className="form-control" placeholder='Website Link'  />
                </div>
                <div className=''>
                    <input type="text" className="form-control" placeholder='Project Overview' />
                </div>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditProject