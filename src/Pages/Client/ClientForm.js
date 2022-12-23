import * as React from 'react';
import Button from '@mui/material/Button';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import useFormClient from './useFormClient';
import validate from './validateInfoClient';
import { Box } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Slide from '@mui/material/Slide';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  width:600,
  pt: 2,
  px: 4,
  pb: 3,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflowY: "scroll" ,
  maxHeight: "90%",
};


const ClientForm = ({ submitForm }) =>{
  const navigate = useNavigate()
  
  //Form validation
  const {handleChange, handleSubmit, values, errors,status,fetchStatus } = useFormClient(
    submitForm,
    validate
  );
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const navigateToLoans =()=>{
    navigate("/successful-loanview")
  }
  
  const buttons = [
    <Button key="one" onClick={handleOpen}>ENTER LOAN DETAILS</Button>,
    <Button key="two" onClick={navigateToLoans}>CHECK LOANS</Button>,
  ];

  return (
    <div>
       {/* added this button group*/}
       <ButtonGroup color="secondary" variant="contained" size="large" aria-label="medium secondary button group">
          {buttons}
        </ButtonGroup>



      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ overflow: 'scroll' }}
        
      >
        
        <Box sx={style}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" >
           LOAN APPLICATION DETAILS
          </Typography>
        <form component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={1} >
            <Grid item xs={12}  >
              <TextField
                size="small"
                required
                label="Client Account Number"
                name='clientAccountNo'
                type='text'
                value={values.clientAccountNo}
                fullWidth
                autoComplete="clientAccountNo"
                onChange={handleChange}
                />
                {errors.clientAccountNo && <p>{errors.clientAccountNo}</p>}
            </Grid>

            <Grid item xs={12} >
            <InputLabel id="demo-simple-select-standard-label">New Credit Customer?</InputLabel>
              <Select
                  size="small"
                  labelId="demo-simple-select-standard-label"
                  variant="standard"
                  name='newCreditCustomer'
                  value={values.newCreditCustomer}
                  label="New Credit Customer"
                  onChange={handleChange}
              >
                  <MenuItem value="True">True</MenuItem>
                  <MenuItem value="False">False</MenuItem>
              </Select>
              {errors.newCreditCustomer && <p>{errors.newCreditCustomer}</p>}
            </Grid>

            <Grid item xs={12} >
              <TextField
                size="small"
                required
                label="Age"
                name='age'
                type='text'
                value={values.age}
                fullWidth
                autoComplete="age"
                onChange={handleChange}
                />
                {errors.age && <p>{errors.age}</p>}
            </Grid>

            <Grid item xs={12} >
            <InputLabel id="demo-simple-select-standard-label">Gender?</InputLabel>
              <Select
                  size="small"
                  labelId="demo-simple-select-standard-label"
                  variant="standard"
                  name='gender'
                  value={values.gender}
                  label="Gender"
                  onChange={handleChange}
              >
                  <MenuItem value="0">Male</MenuItem>
                  <MenuItem value="1">Female</MenuItem>
                  <MenuItem value="2">Undefined</MenuItem>
              </Select>
              {errors.gender && <p>{errors.gender}</p>}
            </Grid>

            <Grid item xs={12} >
              <TextField
                size="small"
                required
                label="Amount"
                name='amount'
                type='text'
                value={values.amount}
                fullWidth
                autoComplete="amount"
                onChange={handleChange}
                />
                {errors.amount && <p>{errors.amount}</p>}
            </Grid>

            <Grid item xs={12} >
              <TextField
                size="small"
                required
                label="Interest"
                name='interest'
                type='text'
                value={values.interest}
                fullWidth
                autoComplete="interest"
                onChange={handleChange}
                />
                {errors.interest && <p>{errors.interest}</p>}
            </Grid>

            <Grid item xs={12} >
              <TextField
                size="small"
                required
                label="Loan Duration"
                name='loanDuration'
                type='text'
                fullWidth
                autoComplete="loanDuration"
                helperText="Enter duration in months"
                value={values.loanDuration}
                 onChange={handleChange} />
              {errors.loanDuration && <p>{errors.loanDuration}</p>}
            </Grid>

            <Grid item xs={12} >
              <TextField
                size="small"
                required
                label="Monthly Payment"
                name='monthlyPayment'
                type='text'
                fullWidth
                autoComplete="monthlyPayment"
                value={values.monthlyPayment}
                onChange={handleChange}/>
              {errors.monthlyPayment && <p>{errors.monthlyPayment}</p>}
            </Grid>

            <Grid item xs={12} >
            <InputLabel id="demo-simple-select-standard-label">Education?</InputLabel>
              <Select
                  size="small"
                  labelId="demo-simple-select-standard-label"
                  variant="standard"
                  name='education'
                  value={values.education}
                  label="Education"
                  onChange={handleChange}
              >
                  <MenuItem value="1">Primary Education</MenuItem>
                  <MenuItem value="2">Basic Education</MenuItem>
                  <MenuItem value="3">Vocational Education</MenuItem>
                  <MenuItem value="4">Secondary Education</MenuItem>
                  <MenuItem value="5">Higher Education</MenuItem>
              </Select>
              {errors.education && <p>{errors.education}</p>}
            </Grid>

            <Grid item xs={12} >
            <InputLabel id="demo-simple-select-standard-label">Marital Status?</InputLabel>
              <Select
                  size="small"
                  labelId="demo-simple-select-standard-label"
                  variant="standard"
                  name='maritalStatus'
                  value={values.maritalStatus}
                  label="Marital Status"
                  onChange={handleChange}
              >
                  <MenuItem value="1">Married</MenuItem>
                  <MenuItem value="2">Cohabitant</MenuItem>
                  <MenuItem value="3">Single</MenuItem>
                  <MenuItem value="4">Divorced</MenuItem>
                  <MenuItem value="5">Widow</MenuItem>
              </Select>
              {errors.maritalStatus && <p>{errors.maritalStatus}</p>}
            </Grid>

            <Grid item xs={12} >
            <InputLabel id="demo-simple-select-standard-label">Employment Status</InputLabel>
              <Select
                  size="small"
                  labelId="demo-simple-select-standard-label"
                  variant="standard"
                  name='employmentStatus'
                  value={values.employmentStatus}
                  label="Employment Status"
                  onChange={handleChange}
              >
                  <MenuItem value="1">Unemployed</MenuItem>
                  <MenuItem value="2">Partially Employed</MenuItem>
                  <MenuItem value="3">Fully Employed</MenuItem>
                  <MenuItem value="4">Self Employed</MenuItem>
                  <MenuItem value="5">Entrepreneur</MenuItem>
                  <MenuItem value="6">Retiree</MenuItem>
              </Select>
              {errors.employmentStatus && <p>{errors.employmentStatus}</p>}
            </Grid>

            <Grid item xs={12} >
            <InputLabel id="demo-simple-select-standard-label">Employment Duration Under Current Employer</InputLabel>
              <Select
                  size="small"
                  labelId="demo-simple-select-standard-label"
                  variant="standard"
                  name='employmentDurationCurrentEmployer'
                  value={values.employmentDurationCurrentEmployer}
                  label="Employment Duration Under Current Employer"
                  onChange={handleChange}
              >
                  <MenuItem value="UpTo1Year">Up to 1 Year</MenuItem>
                  <MenuItem value="UpTo2Years">Up to 2 Years</MenuItem>
                  <MenuItem value="UpTo3Years">Up to 3 Years</MenuItem>
                  <MenuItem value="UpTo4Years">Up to 4 Years</MenuItem>
                  <MenuItem value="UpTo5Years">Up to 5 Years</MenuItem>
                  <MenuItem value="TrialPeriod">Trial Period</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
              </Select>
               {errors.employmentDurationCurrentEmployer && <p>{errors.employmentDurationCurrentEmployer}</p>}
            </Grid>

            <Grid item xs={12} >
              <TextField
                size="small"
                required
                label="Income Total"
                name='incomeTotal'
                type='text'
                fullWidth
                autoComplete="incomeTotal"
                value={values.incomeTotal}
                onChange={handleChange}/>
              {errors.incomeTotal && <p>{errors.incomeTotal}</p>}
            </Grid>

            <Grid item xs={12} >
              <TextField
                size="small"
                required
                label="Debt to Income Ratio"
                name='debtToIncomeRatio'
                type='text'
                fullWidth
                autoComplete="debtToIncomeRatio"
                value={values.debtToIncomeRatio}
                onChange={handleChange}/>
              {errors.debtToIncomeRatio && <p>{errors.debtToIncomeRatio}</p>}
            </Grid>
    
            <Grid item xs={12} >
              <TextField
                size="small"
                required
                label="Loss Given Default"
                name='lossGivenDefault'
                type='text'
                fullWidth
                autoComplete="lossGivenDefault"
                value={values.lossGivenDefault}
                onChange={handleChange}/>
              {errors.lossGivenDefault	 && <p>{errors.lossGivenDefault	}</p>}
            </Grid>

            <Grid item xs={12} >
              <TextField
                size="small"
                required
                label="Credit Score"
                name='creditScore'
                type='text'
                fullWidth
                autoComplete="creditScore"
                value={values.creditScore}
                onChange={handleChange}/>
              {errors.creditScore	 && <p>{errors.creditScore}</p>}
            </Grid>

            <Grid item xs={12} >
              <TextField
                size="small"
                required
                label="Number of previous Loans"
                name='noOfPreviousLoansBeforeLoan'
                type='text'
                fullWidth
                autoComplete="noOfPreviousLoansBeforeLoan"
                value={values.noOfPreviousLoansBeforeLoan}
                onChange={handleChange}/>
              {errors.noOfPreviousLoansBeforeLoan	 && <p>{errors.noOfPreviousLoansBeforeLoan}</p>}
            </Grid>

            <Grid item xs={12} >
              <TextField
                size="small"
                required
                label="Previous Loan Amount"
                name='amountOfPreviousLoansBeforeLoan'
                type='text'
                fullWidth
                autoComplete="amountOfPreviousLoansBeforeLoan"
                value={values.amountOfPreviousLoansBeforeLoan}
                onChange={handleChange}/>
              {errors.amountOfPreviousLoansBeforeLoan	 && <p>{errors.amountOfPreviousLoansBeforeLoan}</p>}
            </Grid>

            <Grid item xs={12} >
              <TextField
                size="small"
                required
                label="Number of Early Repayments for Previous Loans"
                name='noOfPreviousEarlyRepaymentsBeforeLoan'
                type='text'
                fullWidth
                autoComplete="noOfPreviousEarlyRepaymentsBeforeLoan"
                value={values.noOfPreviousEarlyRepaymentsBeforeLoan}
                onChange={handleChange}/>
              {errors.noOfPreviousEarlyRepaymentsBeforeLoan	 && <p>{errors.noOfPreviousEarlyRepaymentsBeforeLoan}</p>}
            </Grid>

            </Grid>
            <br></br>
          <Button  variant="contained" type='submit'>Submit</Button>
        </form>         
        </Box>

      </Modal>

    </div>
  );
}
export default ClientForm;