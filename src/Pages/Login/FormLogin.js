import React from 'react'
import validateInfoLogin from '../../Templates/validateInfoLogin';
import useFormLogin from '../../Templates/useFormLogin';
import '../../Templates/Form.css';
import {Link} from 'react-router-dom';
import { margin } from '@mui/system';


const FormLogin= ({submitForm}) => {
    const { handleChangeLogin, handleSubmitLogin, values, 
        errors } = useFormLogin(submitForm, validateInfoLogin);

    return(
        <div className='form-content-right'>
        <form onSubmit={handleSubmitLogin} className='form' noValidate>
            {/*username form input */}
            <p className='form-label'
            style={{marginBottom: '40px',fontSize:'1.4rem'}}
            >
            Welcome to the Loan Application System
            </p>
            <div className='form-inputs'>
            <label className='form-label'>Username</label>
            <input
                className='form-input'
                type='text'
                name='username'
                placeholder='Enter your username'
                value ={values.username}
                onChange={handleChangeLogin}
            />
            {errors.username && <p>{errors.username}</p>}
            </div>
            {/*Password form input */}
            <div className='form-inputs'>
            <label className='form-label'>Password</label>
            <input
                className='form-input'
                type='password'
                name='password'
                placeholder='Enter your password'
                value={values.password}
                onChange={handleChangeLogin}
            />
            {errors.password && <p>{errors.password}</p>}
            </div>
            <button className='form-input-btn' type='submit'>
            Login
             </button>
             <br></br>
            <a href='http://localhost:8000/admin'>
                Admin Login</a>

        </form>
      </div>

    )
    }


export default FormLogin;