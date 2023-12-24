import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "../App.css";
import axios from 'axios';
import BASE_URL from './uri';

const NavbarC = ({success,Setsuccess}) => {
  const [Toggle,setToggle]=useState(false)

const logout = async()=>{
    const response =await axios.get(`${BASE_URL}/logout`,{withCredentials:true, credentials:'include'})
    if(response.data.success){
      Setsuccess(false)
    }
    else{
      console.log("Internal Error")
    }
}
const toggle = ()=>{
  setToggle(!Toggle)
}

  return (
    
     <div className='navbar'> 
     
         <div className='navbar2'>
         <h1>Employee Management</h1>
         <div className='toggle'>
         <i className='tog' onClick={toggle} class="fa-solid fa-bars"></i>
         {Toggle ?(
          <div className='toggleBtn'>
          <Link className='link' onClick={()=>setToggle(false)} as={Link} to="/admin" >Admin</Link>
          <Link className='link'  onClick={()=>setToggle(false)} style={{paddingLeft:"14px",paddingRight:"14px"}} as={Link} to="/" >Add</Link>
          </div>
         ):null}
         </div>
         <div className='togglemain'>
         <Link className='link'  as={Link} to="/admin" href="#home">Admin</Link>
            <Link className='link'  as={Link} to="/" href="#features">Add</Link>
          </div>
          {success?(
          <Link className='linklogout' onClick={logout} style={{color:"azure",textDecoration:"none"}}><i class="fa-solid fa-right-from-bracket"></i></Link>
          ):null}
            </div>
         
        </div>
  )
}

export default NavbarC