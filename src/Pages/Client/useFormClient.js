import { useState, useEffect } from 'react';

const useFormClient = (callback, validate) => {
  const [values, setValues] = useState({
    clientAccountNo:'',
    newCreditCustomer:'',
    age:'',
    gender:'',
    amount: '',
    interest:'',
    loanDuration: '',
    monthlyPayment: '',
    education:'',
    maritalStatus:'',
    employmentStatus:'',
    employmentDurationCurrentEmployer:'',
    incomeTotal:'',
    debtToIncomeRatio:'',
    lossGivenDefault:'',
    creditScore:'',
    noOfPreviousLoansBeforeLoan:'',
    amountOfPreviousLoansBeforeLoan:'',	
    noOfPreviousEarlyRepaymentsBeforeLoan:'',
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
  
    console.log(values);

    /*After loan details have been created,clear the set values*/
    var url = 'http://127.0.0.1:8000/loan/apicreate/'
    
    fetch(url, {
      method:'POST',
      headers:{
        'Content-type':'application/json',
        'Accept': 'application/json',
      },
      body:JSON.stringify(values)
    }).then((response)  => {
      setValues({
        ...values,
       clientAccountNo:'',
       newCreditCustomer:'',
       age:'',
       gender:'',
       amount: '',
       interest:'',
       loanDuration: '',
       monthlyPayment: '',
       education:'',
       maritalStatus:'',
       employmentStatus:'',
       employmentDurationCurrentEmployer:'',
       incomeTotal:'',
       debtToIncomeRatio:'',
       lossGivenDefault:'',
       creditScore:'',
       noOfPreviousLoansBeforeLoan:'',
       amountOfPreviousLoansBeforeLoan:'',	
       noOfPreviousEarlyRepaymentsBeforeLoan:'',
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
 
  return {handleChange, handleSubmit, values, errors};
};


export default useFormClient;