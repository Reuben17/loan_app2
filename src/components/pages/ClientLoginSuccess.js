import React, { useState } from 'react';

import '../csspages/ClientLoginSuccess.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";


function LoanApplicationModal() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


return (
<>
<button id='lap-button' onClick={handleShow}>Apply For Loan </button>
<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
  <Modal.Header>
  <Modal.Title>Loan Application Form</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="name@example.com" autoFocus/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <Form.Label>Example textarea</Form.Label>
  <Form.Control as="textarea" rows={3} />
  </Form.Group>
  </Form>
  </Modal.Body>
  <Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>Close</Button>
  <Button variant="primary" onClick={handleClose}>Save Changes</Button>
  </Modal.Footer>
  </Modal>
</>
 );
}

console.log(localStorage.getItem('username'))
const y =localStorage.getItem('id')
console.log(y)
export default function ClientLoginSuccess(){

return (
<> 
<div className='client-primary-container'>
<div className='client-secondary-container'>
<h1>Loan Status:</h1>
<p>Approved/Declined</p> 
<LoanApplicationModal/>
</div>
</div>

</>
);
}

