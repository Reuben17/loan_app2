import React from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom';


export default function Navbar(){
  return (
    <>

    <nav className='navbar-container'>
    <h1>Welcome Username</h1> 
    <h1><Link to="/">logout</Link></h1>
    </nav>
    
    </>
  );
  }


