import './App.css';
import Grid from '@mui/material/Grid';
import * as yup from 'yup';
import { Form, Formik } from 'formik';
import MyText from '../src/Components/TextField.js';
import MySelect from '../src/Components/Select.js';
import data from "./countries.json";
import DateTimePicker from '../src/Components/DateTimePicker.js';
import CheckB from './Components/CheckBox';
import Button from '../src/Components/Button.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const INITIAL_STATES =
{
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  addressone: '',
  addresstwo: '',
  city: '',
  statez: '',
  country: '',
  arrivaldate: '',
  departuredate: '',
  message: '',
  terms: '',
};
const FORM_VALIDATION = yup.object().shape({
  firstname: yup.string().required("First Name is required"),
  lastname: yup.string().required("Last Name is required"),
  email: yup.string().email("Please Enter Valid Email").required("Email Address is required"),
  phone: yup.number().integer().typeError("Please Enter a valid Phone Number").required("Phone number is required"),
  addressone: yup.string().required("Address Line is required"),
  addresstwo: yup.string(),
  city: yup.string().required("City is required"),
  statez: yup.string().required("State is required"),
  country: yup.string().required("Country is required"),
  arrivaldate: yup.date().required("Arrival date is required ").min(new Date(), 'Date cannot be in the past'),
  departuredate: yup.date().required("Departure date is required").min(
    yup.ref('arrivaldate'),
    "Departure date can't be before Arrival date"
  ).min(new Date(), 'Date cannot be in the past'),
  message: yup.string(),
  terms: yup.boolean().oneOf([true], "You must accept terms and conditions").required("You must accept terms and conditions"),
});
function App() {
  return (
    <div className='background'>
      <div className='whitepart'>
        <div style={{ textAlign: 'center', marginTop: '2%' }}>
          <p className='signup' style={{ fontSize: 40 }}>Sign Up For Free</p>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className='largediv'>
              <Formik
                initialValues={{ ...INITIAL_STATES }}
                validationSchema={FORM_VALIDATION}
                onSubmit={values => {
                  console.log(values); toast.success('Completed Succesfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }}>
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <p>
                        Your Details
                      </p>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MyText name="firstname" label="First Name" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MyText name="lastname" label="Last Name" />
                    </Grid>
                    <Grid item xs={12}>
                      <MyText name="email" label="Email Address" />
                    </Grid>
                    <Grid item xs={12}>
                      <MyText name="phone" label="Phone Number" />
                    </Grid>
                    <Grid item xs={12}>
                      <p>
                        Address
                      </p>
                    </Grid>
                    <Grid item xs={12}>
                      <MyText name="addressone" label="Address Line 1" />
                    </Grid>
                    <Grid item xs={12}>
                      <MyText name="addresstwo" label="Address Line 2" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MyText name="city" label="City" />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MyText name="statez" label="State" />
                    </Grid>
                    <Grid item xs={12}>
                      <MySelect options={data} name="country" label="Country" />
                    </Grid>
                    <Grid item xs={12}>
                      <p>
                        Booking Information
                      </p>
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <DateTimePicker name="arrivaldate" label="Arrival Date" />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <DateTimePicker name="departuredate" label="Departure Date" />
                    </Grid>
                    <Grid item xs={12}>
                      <MyText name="message" label="Message" rows='4' multiline={true} />
                    </Grid>
                    <Grid item xs={12}>
                      <CheckB name='terms' legend='Terms of Service' label='I agree on terms and conditions' />
                    </Grid>
                    <Grid item xs={12}>
                      <Button name='Submit Form' />
                    </Grid>
                  </Grid>
                </Form>
              </Formik>
            </div>
          </Grid>
        </Grid>
      </div>

    </div>
  );
}

export default App;
