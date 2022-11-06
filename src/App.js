import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './Signup/Form';
import Formtwo from './Login/Formtwo';
import ClientLoginSuccess from './components/pages/ClientLoginSuccess';
import AdminLoginSuccess from './components/pages/AdminLoginSuccess';
import UnderwriterLoginSuccess from './components/pages/UnderwriterLoginSuccess';
import FormSuccessLogin from './Login/FormSuccessLogin';
import ClientLandingPage from './Client/ClientLandingpage';

function App() {
  return (
  <>
    <Router>
    {/*   <Navbar/>   */} 
      <Routes>
      <Route path ='/' element = {<Formtwo/>} /> 
      <Route path ='/register' element = {<Form/>} /> 
      <Route path ='/successful-clientlogin' element = {<ClientLandingPage/>} />
      <Route path ='/successful-adminlogin' element = {<AdminLoginSuccess/>} />
      <Route path ='/successful-underwriterlogin' element = {<UnderwriterLoginSuccess/>} />
      </Routes>
  </Router>
  
  </> 
  );
}

export default App;
