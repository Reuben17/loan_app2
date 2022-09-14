import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ClientLoginSuccess from './components/pages/ClientLoginSuccess';
import AdminLoginSuccess from './components/pages/AdminLoginSuccess';
import UnderwriterLoginSuccess from './components/pages/UnderwriterLoginSuccess';

function App() {
  return (
  <>
    <Router>
    <Navbar/> 
      <Routes>
      <Route path ='/successful-clientlogin' element = {<ClientLoginSuccess/>} />
      <Route path ='/successful-adminlogin' element = {<AdminLoginSuccess/>} />
      <Route path ='/successful-underwriterlogin' element = {<UnderwriterLoginSuccess/>} />
      </Routes>
  </Router>
  
  </> 
  );
}

export default App;

