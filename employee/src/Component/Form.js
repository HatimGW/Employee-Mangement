import React,{useState} from 'react'
import axios from "axios"
import BASE_URL from './uri'
import { Badge } from 'react-bootstrap'
import "../App.css"

const Form = () => {
    const[Data,setData]=useState({})
    const [submit,setsubmit]=useState(false)
    const[already,setAlready]=useState(false)

    const add = async(e)=>{
        e.preventDefault()
        try {
            const response = await axios.post(`${BASE_URL}/add`,Data,{withCredentials:true,credentials:'include'})
           
            if(response.data.success){
             setsubmit(response.data.success)
             setTimeout(()=>{
                setsubmit(false)
             },2000)
             setData({
                id: "",
                name: "",
                age: "",
                city: "",
                salary: "",
            });
        
            }
            else if(response.data.already){
              setAlready(response.data.already)
              setTimeout(()=>{
                setAlready(false)
             },2000)
             setData({
                id: "",
                name: "",
                age: "",
                city: "",
                salary: "",
            });
            }
            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <section>
    <div className='one'>
      <h1 style={{textAlign:"center"}}><i class="fa-solid fa-users-rectangle"></i></h1>
     <div className='main'>
      {submit ?(
        <Badge bg='none' style={{display:"flex",backgroundColor:"rgb(39, 26, 37)",color:"antiquewhite",height:"2rem",alignItems:"center",position: "absolute",left: "96px"}}>Data Successfully Saved</Badge>
        ):null}
      {already ?(
        <Badge bg='none' style={{display:"flex",backgroundColor:"rgb(39, 26, 37)",color:"antiquewhite",height:"2rem",alignItems:"center",position: "absolute",left: "56px"}}>Employee with same ID already exist</Badge>
        ):null}
      <form id="Form">
     
     <div className='group1'>
       <label>EMP ID</label>
       <input className='inp1'  value={Data.id} onChange={(e)=>setData({...Data,id:e.target.value})}/><br></br>
       </div>
       <div className='group1'>
       <label>EMP Name</label>
       <input className='inp2'  value={Data.name} onChange={(e)=>setData({...Data,name:e.target.value})}/><br></br>
       </div>
       <div className='group1'>
       <label>EMP Age</label>
       <input className='inp3' value={Data.age} onChange={(e)=>setData({...Data,age:e.target.value})}/><br></br>
       </div>
       <div className='group1'>
       <label>EMP City</label>
       <input className='inp4'  value={Data.city} onChange={(e)=>setData({...Data,city:e.target.value})}/><br></br>
       </div>
       <div className='group1'>
       <label>EMP Salary</label>
       <input className='inp5'  value={Data.salary} onChange={(e)=>setData({...Data,salary:e.target.value})}/>
      </div>
      <div className='groupB2'>
       <button onClick={add}><i class="fa-solid fa-user-plus"></i></button>
       </div>

      </form>
      </div>
      </div>
        </section>
  )
}

export default Form
