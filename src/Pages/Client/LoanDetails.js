import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './LoanDetails.css';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'


class LoanDetails extends React.Component{
// Class constructor used to declare the state and bind functions
  constructor(props){
    super(props);
      this.state = {
        loanDetails:[],
      }
      this.fetchTasks = this.fetchTasks.bind(this)
      this.authentication = this.authentication.bind(this)
      this.tokenDestroy =this.tokenDestroy.bind(this)
      this.download=this.download.bind(this)
  };

// Loads Loan Details on page load
  componentWillMount(){
    this.fetchTasks()
    this.authentication()
  }
// Gets the loan Details from the Django Api
  fetchTasks(){
    fetch('http://127.0.0.1:8000/loan/apilist/')
    .then(response => response.json())
    .then(data =>
      this.setState({
        loanDetails:data
      }),
      
      )
  }
  authentication(){
    let token = localStorage.getItem('token')
    /*let role = localStorage.getItem('role') */
    if (!token){
      window.location.href="http://localhost:3000" 
    }
  }

   tokenDestroy(){
    localStorage.removeItem('token')
      }

download(){
 var detail =this.state.loanDetails
 var doc = new jsPDF() 

autoTable(doc, {
  headStyles: { fillColor: [10, 107, 192] },
  head: [['Loan Id', 'Client Account Number', 'Amount','Interest','Loan Duration(In Months)',
  'Monthly Payment','Debt To Income Ratio','Loss Given Default','Verdict']],
  body: 
    detail.map(object => {
      return [object.id,object.clientAccountNo,object.amount,
      object.interest,object.loanDuration,object.monthlyPayment,
    object.debtToIncomeRatio,object.lossGivenDefault,object.verdict];}),  
})
doc.save('Loan Details.pdf')
}

  render(){
    var loanDetails= this.state.loanDetails
    return(
      <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="/successful-clientlogin" >
                  Dashboard
                </Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link  href="/" onClick={()=>this.tokenDestroy()}>
                    Log out
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <button 
          style={{float: "right",marginTop: "10px",marginRight:"125px"}}
          type="button"
          class="btn btn-danger"
          onClick={()=>this.download()}
          >Download Loan Details</button>
          <Container className='loantable'>
            <h3>Loan Application Requests</h3>
          <Table striped bordered hover >
            <thead>
              <tr>
              <th>Loan ID</th>
                <th>Client Account No</th>
                <th>Amount</th>
                <th>Interest</th>
                <th>Loan Duration(In Months) </th>
                <th>Monthly Payment </th>
                <th>Debt To Income Ratio </th>
                <th>Loss Given Default </th>
                <th>Verdict </th>

              </tr>
            </thead>
            <tbody>
              <tr>
              <td>
              {/*This function inserts values from the loaded loan
              details array into the laon application table.
              The filter sets the values only to appear when the 
              status is "pending"*/}
              {loanDetails.map(function(loanDetails, index){
                      return(
                          <div key={index} >
                          <span>{loanDetails.id}</span>
                          </div>)})}             
              </td>
              <td>
              {loanDetails.map(function(loanDetails, index){
                      return(
                          <div key={index}>
                          <span>{loanDetails.clientAccountNo}</span>
                          </div>)})}
              </td>
              <td>
              {loanDetails.map(function(loanDetails, index){
                      return(
                          <div key={index}>
                          <span>{loanDetails.amount}</span>
                          </div>)})}
              </td>
              <td>
              {loanDetails.map(function(loanDetails, index){
                      return(
                          <div key={index}>
                          <span>{loanDetails.interest}</span>
                          </div>)})}
              </td>
              <td>
              {loanDetails.map(function(loanDetails, index){
                      return(
                          <div key={index}>
                          <span>{loanDetails.loanDuration}</span>
                          </div>)})}
              </td>
              <td>
              {loanDetails.map(function(loanDetails, index){
                      return(
                          <div key={index}>
                          <span>{loanDetails.monthlyPayment}</span>
                          </div>)})}
              </td>
              <td>
              {loanDetails.map(function(loanDetails, index){
                      return(
                          <div key={index}>
                          <span>{loanDetails.debtToIncomeRatio}</span>
                          </div>)})}
              </td>
              <td>
              {loanDetails.map(function(loanDetails, index){
                      return(
                          <div key={index}>
                          <span>{loanDetails.lossGivenDefault}</span>
                          </div>)})}
              </td>
              <td>
              {loanDetails.map(function(loanDetails, index){
                      return(
                          <div key={index}>
                          <span>{loanDetails.verdict}</span>
                          </div>)})}
              </td>
              </tr>
            </tbody>
          </Table>
          </Container>

    </div>
    );
  }
}
export default LoanDetails;