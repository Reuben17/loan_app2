import { useState, useEffect } from 'react';
import * as React from 'react';
import {SelectChangeEvent} from '@mui/material/Select';

const useFormClient = (callback, validate) => {

  //file uploads
  const [files, setFiles] = useState();
  const handleFiles=e=>{
    setFiles(e.target.files[0]);
  };
  

  const [values, setValues] = useState({
    amount: '',
    monthlyPayment: '',
    loanDuration: '',
    loanPurpose:'',
    images:'',
    accountNo:'',
    interest:'',
    lossGivenDefault:'',
    default:'',
    repayed:'',
    status:'',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  {/* To allow changing of values in the form*/}
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  }; 

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);

    values.images=files
    values.accountNo=localStorage.getItem('accountNo')
    console.log(values);


    values.interest=1
    values.lossGivenDefault=1
    values.default=1
    values.status=1
    values.repayed=1
    /*Register loan details using the set values*/
    /*After loan details have been created,clear the set values*/
    const formData = new FormData();
    formData.append("amount", values.amount);
    formData.append("monthlyPayment", values.monthlyPayment);
    formData.append("loanDuration", values.loanDuration);
    formData.append("loanPurpose", values.loanPurpose);
    formData.append("images", values.images,values.images.name);
    formData.append("accountNo", values.accountNo);
    formData.append("interest", values.interest);
    formData.append("lossGivenDefault", values.lossGivenDefault);
    formData.append("default", values.default);
    formData.append("repayed", values.repayed);
    formData.append("status", values.status);

    var url = 'http://127.0.0.1:8000/loan/apicreate/'
    
    fetch(url, {
      method:'POST',
      body:formData
    }).then((response)  => {
      setValues({
        ...values,
       id:null,
       amount: '',
       monthlyPayment: '',
       loanDuration: '',
       loanPurpose:'',
       images:'',
       accountNo:'',
       interest:'',
       lossGivenDefault:'',
       default:'',
       repayed:'',
       status:'',
      });
    }).catch(function(error){
      console.log('ERROR:', error)
    })
  };

   {/* To recognize any errors if any before form submission*/}
   useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return {setValues,handleChange, handleSubmit, values, errors ,
   files,setFiles,handleFiles};
};


export default useFormClient;