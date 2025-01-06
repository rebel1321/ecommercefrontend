import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const stepFromQuery = parseInt(querySearch.get("step"), 10) - 1; // Subtract 1 to adjust for zero-indexing

  const [activeStep, setActiveStep] = React.useState(stepFromQuery || 0); // Default to 0 if no step in URL
  const navigate = useNavigate();

  const updateStepInURL = (newStep) => {
    setActiveStep(newStep);
    navigate({
      pathname: location.pathname,
      search: `?step=${newStep + 1}`, // Add 1 to match user-facing step
    });
  };

  const handleNext = () => {
    updateStepInURL(activeStep + 1);
  };

  const handleBack = () => {
    updateStepInURL(activeStep - 1);
  };

  // Render content based on the current step
  
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return null;; 
      case 1:
        return <DeliveryAddressForm />;
      case 2:
        return <OrderSummary />;
      case 3:
        return null;
      default:
        return <Typography>Unknown step</Typography>;
    }
  };

  return (
    <div className='px-10 lg:px-10'>
      <Box className='text-left' sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {renderStepContent(activeStep)}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
