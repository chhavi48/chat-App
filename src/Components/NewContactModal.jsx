import React,{useRef} from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useContacts } from '../Contacts/ContactProvider'
const NewContactModal = ({closeModel}) => {
    const idRef = useRef()
    const nameRef = useRef()
    const { createContact } = useContacts()
    function handleSubmit(e) {
        e.preventDefault()
    
        createContact(idRef.current.value, nameRef.current.value)
        closeModel()
      }
  return (
    <>
    <Modal.Header closeButton>Create contact</Modal.Header>
    <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  )
}

export default NewContactModal