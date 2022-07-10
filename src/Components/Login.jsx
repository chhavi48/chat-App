import React,{useRef} from 'react'
import {Button, Container,Form} from "react-bootstrap";
import {v4 as uuidV4} from "uuid"
const Login = ({onIdSubmit}) => {
    const idRef=useRef()
    function handleSubmit(e){
         e.preventDefault()


         onIdSubmit(idRef.current.value)
    }
    function createNewid(){
        
        onIdSubmit(uuidV4())
    }
  return (
    <Container className='align-items-center d-flex' style={{height:"100vh"}}>
        <Form onSubmit={handleSubmit}  className='w-100'>
            <Form.Group>
                <Form.Label>Enter Your id</Form.Label>
                <Form.Control type="text" ref={idRef} required/>
            </Form.Group>
            <Button type="submit" className='mt-4' style={{marginRight:"20px"}}>Login</Button>
            <Button onClick={createNewid} variant='secondary' className='mt-4'>Create a new id</Button>
        </Form>
    </Container>
  )
}

export default Login