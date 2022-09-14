import React from 'react';
import '../csspages/UnderwriterLoginSuccess.css';

export default function AdminLoginSuccess(){
    return (
    <> 
    <div className='underwriter-primary-container'>
    <div className='underwriter-secondary-container'>
    <h1>Pending Loan Applications</h1>
    <table>
    <tr>
    <th>Loan Id</th>
    <th>Account No</th>
    <th>First Name</th>   
    </tr>
    <tr>
    <th>1</th>
    <th>123</th>
    <th>Zablon</th>   
    </tr>
    </table>
    </div>
    </div>
    </>
    );
    }