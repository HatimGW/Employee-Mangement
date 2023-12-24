import React, { useState } from 'react'
import "./App.css";
import Form from './Component/Form';
import Admin from './Component/ADMIN';
import Edit from './Component/Edit';
import { Route, Routes } from 'react-router-dom';
import NavbarC from './Component/Navbar';
import AdminLogin from './Component/AdminLogin';


const App =()=>{
const[success,Setsuccess]=useState(false)

    return (
      <>
      <NavbarC Setsuccess={Setsuccess} success={success}/>
      <Routes>
      {success ? (
        <>
        <Route path='/admin' element={<Admin/>}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
        </>
        ):(
          <Route path='/admin' element={<AdminLogin Setsuccess={Setsuccess}/>}></Route>
        )}
        <Route path='/' element={<Form/>}></Route>
       
      </Routes>
      </>
    )
  }

  export default App;

