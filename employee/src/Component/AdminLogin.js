import React, { useState } from 'react'
import "../App.css"
import axios from 'axios'
import BASE_URL from './uri'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Fetch from './Redux/Action'
import imgdata from "../icons8-user-shield-96.png"

const AdminLogin = ({Setsuccess}) => {
    const[dataadmin,setDataadmin]= useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
console.log(dataadmin)

const loginadmin = async(e)=>{
    const {email,password}=dataadmin
   e.preventDefault()
    try {
        const response = await axios.post(`${BASE_URL}/login`,{email,password},{withCredentials:true,credentials:"include"})
        if(response.data.success){
            dispatch(Fetch())
            Setsuccess(response.data.success)
            navigate("/admin")
        }
       
    } catch (error) {
        console.log(error)
    }
}

  return (
    <section id='login'>
    <div className='adminMain'>
    <div className='adminMain2'>
    <h1><img alt='login' style={{borderRadius:"10px",maxWidth:"3rem"}} src={imgdata}></img></h1>
    <form id='AdminForm'>
      <div className='group'>
          <label className='labelAdmin'><i style={{color:"black",position:"absolute",left:"10px",top:"10px"}} class="fa-solid fa-user"></i></label>
          <input autoComplete='off' value={dataadmin.email} onChange={(e)=>setDataadmin({...dataadmin,email:e.target.value})} id='email' type='text' placeholder='Email'></input><br></br>
          </div>
          <div className='group'>
          <label className='labelAdmin'><i style={{color:"black",position:"absolute",left:"10px",top:"10px"}} class="fa-solid fa-lock"></i></label>
          <input autoComplete='off' value={dataadmin.password} onChange={(e)=>setDataadmin({...dataadmin,password:e.target.value})} id='password' type='password' placeholder='Password'></input>
          </div>
          <div className='groupB'>
          <button onClick={loginadmin}>LOGIN</button>
          </div>
        </form>
    </div>
    </div>
    </section>
  )
}

export default AdminLogin