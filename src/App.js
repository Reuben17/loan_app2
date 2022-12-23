import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Formtwo from './Pages/Login/Formtwo';
import ClientLandingPage from './Pages/Client/ClientLandingpage';
import "bootstrap/dist/css/bootstrap.min.css"; 
import LoanDetails from './Pages/Client/LoanDetails';

function App() {
  return (
  <>
    <Router>
    {/*   <Navbar/>   */} 
      <Routes>
      <Route path ='/' element = {<Formtwo/>} /> 
      <Route path ='/successful-clientlogin' element = {<ClientLandingPage/>} />
      <Route path ='/successful-loanview' element = {<LoanDetails/>} />
      </Routes>
  </Router>
  
  </> 
  );
}

export default App;
