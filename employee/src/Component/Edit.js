import React from 'react'
import { useState } from 'react'
import "../App.css"
import {useLocation, useNavigate} from "react-router-dom"
import { Modal, Button, Form,Row,Col } from 'react-bootstrap';
import axios from "axios"
import BASE_URL from './uri';

const Edit = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [name,setname]=useState(location.state.item.name)
  const [age,setage]=useState(location.state.item.age)
  const [city,setcity]=useState(location.state.item.city)
  const [salary,setsalary]=useState(location.state.item.salary)

 
  const edit = async()=>{
    try {
     const response =  await axios.post(`${BASE_URL}/edit/`+location.state.item._id,{
        name,age,city,salary
      },{
        withCredentials:true,
        credentials:'include'
      })
      if(response.data.success){
       navigate("/admin")
      }
  
    } catch (error) {
      console.log(error)
    }
   
  }
  return (
    <section>
     <Modal style={{borderRadius:"10px"}} show={true} onHide={()=>navigate('/admin')}>
      <Modal.Header style={{boxShadow:"0 0 10px rgb(39, 26, 37)",backgroundColor:"antiquewhite"}} closeButton>
        <Modal.Title style={{color:"rgb(39, 26, 37)"}}>Edit Details</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{borderRadius:"0 0 5px 5px",backgroundColor:"rgb(106 89 71)",boxShadow:"0 0 10px rgb(39, 26, 37)"}}>
      <Row>
      <Col>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              style={{border:"1px solid rgb(39, 26, 37)",borderRadius:"20px",margin:"0",backgroundColor:"transparent",color:"antiquewhite"}}
              type="text"
              autoComplete='off'
              defaultValue={location.state.item.name}
              onChange={(e)=>setname(e.target.value)}
            />
          </Form.Group>
          </Form>
          </Col>
          <Col>
          <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Age</Form.Label>
            <Form.Control
              style={{border:"1px solid rgb(39, 26, 37)",borderRadius:"20px",margin:"0",backgroundColor:"transparent",color:"antiquewhite"}}
              type="text"
              autoComplete='off'
              defaultValue={location.state.item.age}
              onChange={(e)=>setage(e.target.value)}
            />
          </Form.Group>
          </Form>
          </Col>
          </Row>
          <Row>
      <Col>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>City</Form.Label>
            <Form.Control
              style={{border:"1px solid rgb(39, 26, 37)",borderRadius:"20px",margin:"0",backgroundColor:"transparent",color:"antiquewhite"}}
              type="text"
              autoComplete='off'
              defaultValue={location.state.item.city}
              onChange={(e)=>setcity(e.target.value)}
            />
          </Form.Group>
          </Form>
          </Col>
          <Col>
          <Form>
          <Form.Group>
            <Form.Label>Salary</Form.Label>
            <Form.Control
             style={{border:"1px solid rgb(39, 26, 37)",borderRadius:"20px",margin:"0",backgroundColor:"transparent",color:"antiquewhite"}}
              type="text"
              autoComplete='off'
              defaultValue={location.state.item.salary}
              onChange={(e)=>setsalary(e.target.value)}
            />
          </Form.Group>
          </Form>
          </Col>
          </Row>
          <Button onClick={edit} style={{backgroundColor:"antiquewhite", color:"rgb(39, 26, 37)"}} variant="none" type="submit">
            Submit
          </Button>
      </Modal.Body>
    </Modal>
    </section>
)
}
export default Edit