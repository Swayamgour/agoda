import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';
import EventIcon from '@mui/icons-material/Event';
import WcIcon from '@mui/icons-material/Wc';
import FlightPaymentPage from './FlightPaymentPage';
import UpgradeSupport from './UpgradeSupport';
import styled from 'styled-components';

const BookingConfirmation = () => {
  const [contactInfo, setContactInfo] = useState({
    firstName: 'Swayam',
    lastName: 'Gaur',
    email: 'goura0775@gmail.com',
    country: 'India',
    phoneNumber: '',
    countryCode: '+91'
  });

  const [passengerInfo, setPassengerInfo] = useState({
    gender: '',
    firstName: '',
    lastName: '',
    day: '',
    month: '',
    year: '',
    nationality: ''
  });

  const handleContactChange = e => {
    const { name, value } = e.target;
    setContactInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePassengerChange = e => {
    const { name, value } = e.target;
    setPassengerInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Booking submitted:', { contactInfo, passengerInfo });
    // Proceed to next step
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <BookingContainer>
      <MainContent>
        <BookingHeader>
          <h1>Complete Your Booking</h1>
          <ProgressIndicator>
            <ProgressStep completed>Flight Details</ProgressStep>
            <ProgressStep completed>Passenger Info</ProgressStep>
            <ProgressStep active>Review & Pay</ProgressStep>
          </ProgressIndicator>
        </BookingHeader>

        <FormContainer>
          {/* Contact Information Section */}
          <FormSection>
            <SectionHeader>
              <PersonIcon className="section-icon" />
              <h2>Contact Information</h2>
            </SectionHeader>
            <SectionDescription>
              Your booking confirmation and e-ticket will be sent to this email address
            </SectionDescription>

            <FormGrid>
              <InputGroup>
                <Label>First Name <Required>*</Required></Label>
                <Input 
                  type="text" 
                  name="firstName" 
                  value={contactInfo.firstName}
                  onChange={handleContactChange}
                  required
                  icon={<PersonIcon fontSize="small" />}
                />
              </InputGroup>

              <InputGroup>
                <Label>Last Name <Required>*</Required></Label>
                <Input 
                  type="text" 
                  name="lastName" 
                  value={contactInfo.lastName}
                  onChange={handleContactChange}
                  required
                />
              </InputGroup>

              <InputGroup>
                <Label>Email <Required>*</Required></Label>
                <Input 
                  type="email" 
                  name="email" 
                  value={contactInfo.email}
                  onChange={handleContactChange}
                  required
                  icon={<EmailIcon fontSize="small" />}
                />
              </InputGroup>

              <InputGroup>
                <Label>Country/Region <Required>*</Required></Label>
                <Select 
                  name="country" 
                  value={contactInfo.country}
                  onChange={handleContactChange}
                  required
                  icon={<PublicIcon fontSize="small" />}
                >
                  <option value="India">India</option>
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</option>
                </Select>
              </InputGroup>

              <InputGroup>
                <Label>Phone Number <Required>*</Required></Label>
                <PhoneInputContainer>
                  <CountryCodeSelect 
                    name="countryCode"
                    value={contactInfo.countryCode}
                    onChange={handleContactChange}
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                  </CountryCodeSelect>
                  <PhoneInput 
                    type="tel" 
                    name="phoneNumber"
                    value={contactInfo.phoneNumber}
                    onChange={handleContactChange}
                    required
                    placeholder="Phone number"
                  />
                </PhoneInputContainer>
              </InputGroup>
            </FormGrid>
          </FormSection>

          {/* Flight Summary Section */}
          <FormSection>
            <SectionHeader>
              <FlightTakeoffIcon className="section-icon" />
              <h2>Flight Details</h2>
            </SectionHeader>
            
            <FlightCard>
              <FlightSegment>
                <FlightHeader>
                  <AirlineLogo>✈️</AirlineLogo>
                  <AirlineInfo>
                    <div>IndiGo • Flight 6E-123</div>
                    <div>Economy • Airbus A320</div>
                  </AirlineInfo>
                </FlightHeader>
                
                <FlightTiming>
                  <TimingBlock>
                    <Time>10:30</Time>
                    <Date>Mon, 15 Jul</Date>
                    <Airport>DEL</Airport>
                  </TimingBlock>
                  
                  <FlightDuration>
                    <div>2h 15m</div>
                    <FlightLine>
                      <Circle />
                      <Line />
                      <Plane>✈</Plane>
                      <Line />
                      <Circle />
                    </FlightLine>
                    <div>Direct</div>
                  </FlightDuration>
                  
                  <TimingBlock alignRight>
                    <Time>12:45</Time>
                    <Date>Mon, 15 Jul</Date>
                    <Airport>BOM</Airport>
                  </TimingBlock>
                </FlightTiming>
              </FlightSegment>
            </FlightCard>
          </FormSection>

          {/* Passenger Information Section */}
          <FormSection>
            <SectionHeader>
              <PersonIcon className="section-icon" />
              <h2>Passenger 1: Adult</h2>
            </SectionHeader>
            <SectionDescription>
              Passenger details must match your passport or government-issued ID
            </SectionDescription>

            <form onSubmit={handleSubmit}>
              <InputGroup>
                <Label>Gender <Required>*</Required></Label>
                <RadioGroup>
                  <RadioOption>
                    <RadioInput 
                      type="radio" 
                      name="gender" 
                      value="male" 
                      checked={passengerInfo.gender === 'male'}
                      onChange={handlePassengerChange}
                      required
                    />
                    <RadioLabel>
                      <RadioMark />
                      Male
                    </RadioLabel>
                  </RadioOption>
                  
                  <RadioOption>
                    <RadioInput 
                      type="radio" 
                      name="gender" 
                      value="female" 
                      checked={passengerInfo.gender === 'female'}
                      onChange={handlePassengerChange}
                      required
                    />
                    <RadioLabel>
                      <RadioMark />
                      Female
                    </RadioLabel>
                  </RadioOption>
                </RadioGroup>
              </InputGroup>

              <FormGrid>
                <InputGroup>
                  <Label>First Name <Required>*</Required></Label>
                  <Input 
                    type="text" 
                    name="firstName" 
                    value={passengerInfo.firstName}
                    onChange={handlePassengerChange}
                    required
                  />
                </InputGroup>

                <InputGroup>
                  <Label>Last Name <Required>*</Required></Label>
                  <Input 
                    type="text" 
                    name="lastName" 
                    value={passengerInfo.lastName}
                    onChange={handlePassengerChange}
                    required
                  />
                </InputGroup>
              </FormGrid>

              <FormGrid>
                <InputGroup>
                  <Label>Date of Birth <Required>*</Required></Label>
                  <DobContainer>
                    <DobInput 
                      type="number" 
                      name="day" 
                      placeholder="DD"
                      min="1"
                      max="31"
                      value={passengerInfo.day}
                      onChange={handlePassengerChange}
                      required
                    />
                    <DobSelect 
                      name="month"
                      value={passengerInfo.month}
                      onChange={handlePassengerChange}
                      required
                    >
                      <option value="">Month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      {/* All months */}
                    </DobSelect>
                    <DobInput 
                      // type="number" 
                      // name="year" 
                      // placeholder="YYYY"
                      // min="1900"
                      // max={new Date().getFullYear()}
                      // value={passengerInfo.year}
                      // onChange={handlePassengerChange}
                      // required
                    />
                  </DobContainer>
                </InputGroup>

                <InputGroup>
                  <Label>Nationality <Required>*</Required></Label>
                  <Select 
                    name="nationality"
                    value={passengerInfo.nationality}
                    onChange={handlePassengerChange}
                    required
                  >
                    <option value="">Select Nationality</option>
                    <option value="Indian">Indian</option>
                    <option value="American">American</option>
                    <option value="British">British</option>
                  </Select>
                </InputGroup>
              </FormGrid>

              <SaveInfoCheckbox>
                <CheckboxInput type="checkbox" id="save-info" />
                <CheckboxLabel htmlFor="save-info">
                  Save passenger details for future bookings
                </CheckboxLabel>
              </SaveInfoCheckbox>

              <SubmitButton type="submit">
                Continue to Payment
              </SubmitButton>
            </form>
          </FormSection>

          <UpgradeSupport />
        </FormContainer>
      </MainContent>

      <Sidebar>
        <FlightPaymentPage />
      </Sidebar>
    </BookingContainer>
  );
};

// Styled Components
const BookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // background-color: #f5f7fa;
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 24px;
  
  margin: 0 auto;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 32px;
    margin-right: 0;
  }
`;

const Sidebar = styled.div`
  width: 100%;
  padding: 24px;
  // background-color: #fff;
  // box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);

  @media (min-width: 1024px) {
    width: 380px;
    padding: 32px;
    // box-shadow: -2px 0 10px rgba(0, 0, 0, 0.05);
  }
`;

const BookingHeader = styled.div`
  margin-bottom: 32px;

  h1 {
    font-size: 28px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 16px;
  }
`;

const ProgressIndicator = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 24px;

  &::before {
    content: '';
    position: absolute;
    top: 12px;
    left: 0;
    right: 0;
    height: 4px;
    background-color: #e2e8f0;
    z-index: 1;
  }
`;

const ProgressStep = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.active ? '#3182ce' : props.completed ? '#38a169' : '#a0aec0'};
  font-weight: ${props => (props.active || props.completed) ? '600' : '400'};

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#3182ce' : props.completed ? '#38a169' : '#e2e8f0'};
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 8px;
    ${props => props.completed && 'content: "✓"; color: white; font-size: 14px;'}
  }
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const FormSection = styled.section`
  padding: 24px;
  border-bottom: 1px solid #edf2f7;

  &:last-child {
    border-bottom: none;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  h2 {
    font-size: 20px;
    font-weight: 600;
    color: #2d3748;
    margin-left: 8px;
  }

  .section-icon {
    color: #3182ce;
  }
`;

const SectionDescription = styled.p`
  color: #718096;
  font-size: 14px;
  margin-bottom: 16px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #4a5568;
  margin-bottom: 8px;
`;

const Required = styled.span`
  color: #e53e3e;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s;
  background-color: ${props => props.icon ? 'white' : 'white'};
  padding-left: ${props => props.icon ? '40px' : '16px'};
  position: relative;

  &:focus {
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
    outline: none;
  }

  &::placeholder {
    color: #a0aec0;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  transition: all 0.2s;
  appearance: none;
  background-color: white;
  padding-left: ${props => props.icon ? '40px' : '16px'};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%234a5568' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;

  &:focus {
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
    outline: none;
  }
`;

const PhoneInputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const CountryCodeSelect = styled(Select)`
  width: 100px;
`;

const PhoneInput = styled(Input)`
  flex: 1;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 24px;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
`;

const RadioInput = styled.input`
  opacity: 0;
  position: absolute;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: #4a5568;
`;

const RadioMark = styled.span`
  width: 18px;
  height: 18px;
  border: 2px solid #cbd5e0;
  border-radius: 50%;
  margin-right: 8px;
  position: relative;
  transition: all 0.2s;

  ${RadioInput}:checked + & {
    border-color: #3182ce;
    background-color: #3182ce;
    &::after {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 8px;
      height: 8px;
      background-color: white;
      border-radius: 50%;
    }
  }

  ${RadioInput}:focus + & {
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
`;

const DobContainer = styled.div`
  display: flex;
  gap: 8px;
`;

const DobInput = styled(Input)`
  text-align: center;
  padding: 12px;
`;

const DobSelect = styled(Select)`
  flex: 1;
`;

const SaveInfoCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin: 24px 0;
`;

const CheckboxInput = styled.input`
  opacity: 0;
  position: absolute;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: #4a5568;
  position: relative;
  padding-left: 28px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 18px;
    height: 18px;
    border: 2px solid #cbd5e0;
    border-radius: 4px;
    transition: all 0.2s;
  }

  ${CheckboxInput}:checked + &::before {
    background-color: #3182ce;
    border-color: #3182ce;
  }

  ${CheckboxInput}:checked + &::after {
    content: '✓';
    position: absolute;
    left: 4px;
    top: 0;
    color: white;
    font-size: 12px;
  }

  ${CheckboxInput}:focus + &::before {
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 8px;

  &:hover {
    background-color: #2c5282;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.5);
  }
`;

const FlightCard = styled.div`
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 16px;
`;

const FlightSegment = styled.div`
  padding: 16px;
`;

const FlightHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const AirlineLogo = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ebf8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 18px;
`;

const AirlineInfo = styled.div`
  font-size: 14px;
  color: #4a5568;

  div:first-child {
    font-weight: 600;
    color: #2d3748;
  }
`;

const FlightTiming = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TimingBlock = styled.div`
  text-align: ${props => props.alignRight ? 'right' : 'left'};
  flex: 1;
`;

const Time = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #2d3748;
`;

const Date = styled.div`
  font-size: 12px;
  color: #718096;
  margin: 4px 0;
`;

const Airport = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #2d3748;
`;

const FlightDuration = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 2;
  font-size: 12px;
  color: #718096;
`;

const FlightLine = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 8px 0;
  position: relative;
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #3182ce;
`;

const Line = styled.div`
  flex: 1;
  height: 2px;
  background-color: #cbd5e0;
`;

const Plane = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #3182ce;
  background-color: white;
  padding: 0 4px;
`;

export default BookingConfirmation;