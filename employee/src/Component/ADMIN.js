import React,{useEffect} from 'react'
import "../App.css";
import axios from "axios"
import { useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Fetch from './Redux/Action';
import BASE_URL from './uri';


const Admin = () => {
 const navigate = useNavigate()
 const dispatch = useDispatch()

const del = async(id)=>{
    try {
        const response = await axios.delete(`${BASE_URL}/del?id=${id}`,{withCredentials:true,credentials:'include'})
        if(response){
          dispatch(Fetch())
          console.log("Deleted")
        }
    } catch (error) {
        console.log(error)
    }
}

const click =(item)=>{
  navigate("/edit", {state:{item}})
}
 

 const{data}=useSelector((state)=> state.item)
 const{name}=useSelector((state)=> state.item)

 useEffect(()=>{
  dispatch(Fetch())
 },[dispatch])


  return (
    <section>
    <h1 style={{padding:"5px",backgroundColor:"rgb(39, 26, 37)",color:"antiquewhite",fontFamily:"math",fontSize:"18px",position:"absolute",top:"2.8rem",left:"0rem"}}>Admin: {name}</h1>
    <div className='admin'>
    <table>
      <tr>
        <th style={{textAlign:"center"}}>ID</th>
        <th style={{textAlign:"center"}}>First Name</th>
        <th style={{textAlign:"center"}}>Age</th>
        <th style={{textAlign:"center"}}>City</th>
        <th style={{textAlign:"center"}}>Salary</th>
        <th style={{textAlign:"center"}}>Edit</th>
        <th style={{textAlign:"center"}}>Remove</th>
      </tr>
      {data?.map((e,i)=>{
        return(
          <tr index={i}>
            <td style={{padding:"0",textAlign:"center"}}>{e.id}</td>
            <td style={{padding:"0",textAlign:"center"}}>{e.age}</td>
            <td style={{padding:"0",textAlign:"center"}}>{e.city}</td>
            <td style={{padding:"0",textAlign:"center"}}>{e.name}</td>
            <td style={{padding:"0",textAlign:"center"}}>{e.salary}</td>
            <td style={{padding:"0",textAlign:"center"}}><button onClick={()=>click(e)} type="button" class="btn btn-none">
            <i class="fa-solid fa-pen-to-square"></i>
              </button>
            </td>
            <td style={{textAlign:"center"}}><button style={{border:"none",backgroundColor:"transparent"}} onClick={()=>del(e.id)}><i style={{color:"darkred"}} class="fa-solid fa-trash"></i></button></td>
          </tr>
        )
      })}
</table>
</div>
</section>

  )
}


export default Admin
