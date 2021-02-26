import React, { useState } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import Dialog from 'material-ui/Dialog'
import Divider from 'material-ui/Divider'
import MenuItem from 'material-ui/MenuItem'
import Card from 'material-ui/Card'
import DatePicker from 'material-ui/DatePicker'
import TimePicker from 'material-ui/TimePicker'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import SnackBar from 'material-ui/Snackbar'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
  StepButton
} from 'material-ui/stepper'
import {
  RadioButton,
  RadioButtonGroup
} from 'material-ui/RadioButton'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton'

injectTapEventPlugin()

function Scheduler() {
    const [loading, setLoading] = useState(true);
    const [navOpen, setNavOpen] = useState(false);
    const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
    const [confirmationTextVisible, setConfirmationTextVisible] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);
    const [appointmentDateSelected, setAppointmentDateSelected] = useState(false);
    const [appointmentMeridiem, setAppointmentMeridiem] = useState(0);
    const [validEmail, setValidEmail] = useState(false);
    const [validPhone, setValidPhone] = useState(false);
    const [smallScreen, setSmallScreen] = useState(window.innerWidth < 768);
    const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] = useState(false);


    handleNavToggle() {
        
        }
   
    handleNextStep() {
         
        }
   
    handleSetAppointmentDate(date) {
            
        }
    
    handleSetAppointmentSlot(slot) {
            
        }
    
    handleSetAppointmentMeridiem(meridiem) {
            
        }
    
    handleFetch(response) {
            
        }
    
    handleFetchError(err) {
            
        }
    
    handleSubmit() {
            
        }
    
    validateEmail(email) {
            
        }
    
    validatePhone(phoneNumber) {
            
        }
    
    checkDisableDate(date) {
            
        }
    
    renderConfirmationString() {
            
        }
    
    renderAppointmentTimes() {
            
        }
    
    renderAppointmentConfirmation() {
            
        }
    
    resize() {
            
        }
   
   //lifecycle methods
 componentWillMount() {
         //fetch data from cosmic, watch window width
     }
   componentWillUnmount() {
         //remove window width event listener
     }
     render() {
        const data;
        const contactFormFilled = data.firstName && data.lastName && data.phone && data.email && data.validPhone && data.validEmail
        const modalActions = [
          <FlatButton
            label="Cancel"
            primary={false}
            onClick={setConfirmationModalOpen(false)} />,
          <FlatButton
            label="Confirm"
            primary={true}
            onClick={handleSubmit()} />
        ]
         return (
            <div>
            <AppBar
              title="Skin Body Connection"
              onLeftIconButtonTouchTap={handleNavToggle()}/>
            <Drawer
              docked={false}
              width={300}
              open={navOpen}
              onRequestChange={(navOpen) => setNavOpen({navOpen})} >
              <img src={logo}
                   style={{
                     height: 70,
                     marginTop: 50,
                     marginBottom: 30,
                     marginLeft: '50%',
                     transform: 'translateX(-50%)'
                   }}/>
              <a style={{textDecoration: 'none'}} href="/home"><MenuItem>Home</MenuItem></a>
              <a style={{textDecoration: 'none'}} href="/virCon"><MenuItem>Virtual Consultations</MenuItem></a>
              <a style={{textDecoration: 'none'}} href="/contact"><MenuItem>Contact</MenuItem></a>
              <MenuItem disabled={true}
                        style={{
                          marginLeft: '50%',
                          transform: 'translate(-50%)'
                        }}>
                {"© Copyright " + moment().format('YYYY')}</MenuItem>
            </Drawer>
            <section style={{
                maxWidth: !smallScreen ? '80%' : '100%',
                margin: 'auto',
                marginTop: !smallScreen ? 20 : 0,
              }}>
              {renderConfirmationString()}
              <Card style={{
                  padding: '10px 10px 25px 10px',
                  height: smallScreen ? '100vh' : null
                }}>
                <Stepper
                  activeStep={stepIndex}
                  linear={false}
                  orientation="vertical">
                  <Step disabled={loading}>
                    <StepButton onClick={setStepIndex(0)}>
                      Choose an available day for your appointment
                    </StepButton>
                    <StepContent>
                      <DatePicker
                          style={{
                            marginTop: 10,
                            marginLeft: 10
                          }}
                          value={data.appointmentDate}
                          hintText="Select a date"
                          mode={smallScreen ? 'portrait' : 'landscape'}
                          onChange={(n, date) => handleSetAppointmentDate(date)}
                          shouldDisableDate={day => checkDisableDate(day)}
                           />
                      </StepContent>
                  </Step>
                  <Step disabled={ !data.appointmentDate }>
                    <StepButton onClick={setStepIndex(1)}>
                      Choose an available time for your appointment
                    </StepButton>
                    <StepContent>
                      <SelectField
                        floatingLabelText="AM or PM"
                        value={data.appointmentMeridiem}
                        onChange={(evt, key, payload) => handleSetAppointmentMeridiem(payload)}
                        selectionRenderer={value => value ? 'PM' : 'AM'}>
                        <MenuItem value={0}>AM</MenuItem>
                        <MenuItem value={1}>PM</MenuItem>
                      </SelectField>
                      <RadioButtonGroup
                        style={{ marginTop: 15,
                                 marginLeft: 15
                               }}
                        name="appointmentTimes"
                        defaultSelected={data.appointmentSlot}
                        onChange={(evt, val) => handleSetAppointmentSlot(val)}>
                        {renderAppointmentTimes()}
                      </RadioButtonGroup>
                    </StepContent>
                  </Step>
                  <Step disabled={ !Number.isInteger(appointmentSlot) }>
                    <StepButton onClick={() => setStepIndex(2)}>
                      Share your contact information with us and we'll send you a reminder
                    </StepButton>
                    <StepContent>
                      <section>
                        <TextField
                          style={{ display: 'block' }}
                          name="first_name"
                          hintText="First Name"
                          floatingLabelText="First Name"
                          onChange={(evt, newValue) => setFirstName(newValue)}/>
                        <TextField
                          style={{ display: 'block' }}
                          name="last_name"
                          hintText="Last Name"
                          floatingLabelText="Last Name"
                          onChange={(evt, newValue) => setLastName(newValue)}/>
                        <TextField
                          style={{ display: 'block' }}
                          name="email"
                          hintText="name@mail.com"
                          floatingLabelText="Email"
                          errorText={data.validEmail ? null : 'Enter a valid email address'}
                          onChange={(evt, newValue) => validateEmail(newValue)}/>
                        <TextField
                          style={{ display: 'block' }}
                          name="phone"
                          hintText="(888) 888-8888"
                          floatingLabelText="Phone"
                          errorText={data.validPhone ? null: 'Enter a valid phone number'}
                          onChange={(evt, newValue) => validatePhone(newValue)} />
                        <RaisedButton
                          style={{ display: 'block' }}
                          label={contactFormFilled ? 'Schedule' : 'Fill out your information to schedule'}
                          labelPosition="before"
                          primary={true}
                          fullWidth={true}
                          onClick={setConfirmationModalOpen(!confirmationModalOpen)}
                          disabled={!contactFormFilled || data.processed }
                          style={{ marginTop: 20, maxWidth: 100}} />
                      </section>
                    </StepContent>
                  </Step>
                </Stepper>
              </Card>
              <Dialog
                modal={true}
                open={confirmationModalOpen}
                actions={modalActions}
                title="Confirm your appointment">
                {renderAppointmentConfirmation()}
              </Dialog>
              <SnackBar
                open={confirmationSnackbarOpen || loading}
                message={loading ? 'Loading... ' : data.confirmationSnackbarMessage || ''}
                autoHideDuration={10000}
                onRequestClose={setConfirmationSnackbarOpen(false)} />
            </section>
          </div>
           )
       }

}