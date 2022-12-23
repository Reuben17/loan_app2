export default function validateInfoClient(values) {
    let errors = {};
  
    if (!values.clientAccountNo) {
      errors.clientAccountNo = 'Client Account Number required';
    }

    if (!values.newCreditCustomer) {
      errors.newCreditCustomer = 'New Credit Customer  required';
    }

    if (!values.age) {
      errors.age = 'Age required';
    }

    if (!values.gender) {
      errors.gender = 'Gender required';
    }

    if (!values.amount) {
      errors.amount = 'Loan Amount required';
    }
   
    if (!values.interest) {
      errors.interest = 'Interest required';
    }
  
      if (!values.loanDuration) {
        errors.loanDuration = 'Loan Duration is required';
      } else if (values.loanDuration.length >2) {
        errors.loanDuration = 'loan Duration should not be more than 8 years';
      }

      
    if (!values.monthlyPayment) {
      errors.monthlyPayment = 'Monthly Repayment amount required';
    }

      if (!values.education) {
        errors.education = 'Education required';
      }

      if (!values.maritalStatus) {
        errors.maritalStatus = 'Marital Status required';
      }

      if (!values.employmentStatus) {
        errors.employmentStatus = 'Employment Status required';
      }

      if (!values.employmentDurationCurrentEmployer) {
        errors.employmentDurationCurrentEmployer = 'Employment Duration Under Current Employer required';
      }

      if (!values.incomeTotal) {
        errors.incomeTotal= 'Income Total required';
      }

      if (!values.debtToIncomeRatio) {
        errors.debtToIncomeRatio = 'Debt to Income Ratio required';
      }

      if (!values.lossGivenDefault) {
        errors.lossGivenDefault = 'loss Given Default required';
      }

      if (!values.creditScore) {
        errors.creditScore = 'Credit Score required';
      }

      if (!values.noOfPreviousLoansBeforeLoan) {
        errors.noOfPreviousLoansBeforeLoan = 'Number of Previous Loans required';
      }

      if (!values.amountOfPreviousLoansBeforeLoan) {
        errors.amountOfPreviousLoansBeforeLoan = 'Previous Loan Amount required';
      }
      
      if (!values.noOfPreviousEarlyRepaymentsBeforeLoan) {
        errors.noOfPreviousEarlyRepaymentsBeforeLoan = 'Number of Early Repayments for Previous Loans required';
      }
      
    return errors;
  }
  