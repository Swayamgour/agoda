import React, { useEffect, useState } from 'react'
import '../../style/BookingConfirmation.css'
import UpgradeSupport from './UpgradeSupport'
import { useNavigate } from 'react-router-dom'
import styles from '../../style/CarBookingReview.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import FlightPaymentPage from './FlightPaymentPage'

const BookingConfirmation = () => {
  const [contactInfo, setContactInfo] = useState({
    firstName: 'Swayam',
    lastName: 'Gaur',
    email: 'goura0775@gmail.com',
    country: 'India',
    phoneNumber: '',
    countryCode: '+91'
  })

  const [passengerInfo, setPassengerInfo] = useState({
    gender: '',
    firstName: '',
    lastName: '',
    day: '',
    month: '',
    year: '',
    nationality: ''
  })

  const handleContactChange = e => {
    const { name, value } = e.target
    setContactInfo(prev => ({ ...prev, [name]: value }))
  }

  const handlePassengerChange = e => {
    const { name, value } = e.target
    setPassengerInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Booking submitted:', { contactInfo, passengerInfo })
    // Proceed to next step
  }

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div style={{ marginTop: '70px' }} className='passenger-details'>
      <div className='passenger-details-container'>
        {/* Contact Information Section */}
        <section className='contact-section'>
          <h2>For all bookings</h2>
          <h3>Contact details</h3>
          <p className='description'>
            This is where your confirmation will be sent
          </p>
          <p className='required-note'>*Required field</p>

          <div className='form-grid'>
            <div className='form-group'>
              <label>First name *</label>
              <input
                type='text'
                name='firstName'
                value={contactInfo.firstName}
                onChange={handleContactChange}
                required
              />
            </div>

            <div className='form-group'>
              <label>Email *</label>
              <input
                type='email'
                name='email'
                value={contactInfo.email}
                onChange={handleContactChange}
                required
              />
            </div>

            <div className='form-group'>
              <label>Phone number *</label>
              <div className='phone-input'>
                <select
                  name='countryCode'
                  value={contactInfo.countryCode}
                  onChange={handleContactChange}
                  required
                >
                  <option value='+91'>India (+91)</option>
                  <option value='+1'>USA (+1)</option>
                  <option value='+44'>UK (+44)</option>
                </select>
                <input
                  type='tel'
                  name='phoneNumber'
                  value={contactInfo.phoneNumber}
                  onChange={handleContactChange}
                  required
                />
              </div>
            </div>

            <div className='form-group'>
              <label>Last name *</label>
              <input
                type='text'
                name='lastName'
                value={contactInfo.lastName}
                onChange={handleContactChange}
                required
              />
            </div>

            <div className='form-group'>
              <label>Country/region of residence *</label>
              <select
                name='country'
                value={contactInfo.country}
                onChange={handleContactChange}
                required
              >
                <option value='India'>India</option>
                <option value='USA'>United States</option>
                <option value='UK'>United Kingdom</option>
              </select>
            </div>
          </div>
        </section>

        <div className='divider'></div>

        {/* Flight Summary Section */}

        {/* <div className='divider'></div> */}

        {/* Baggage Section */}
        <section className='baggage-section'>
          <h3>Baggage Allowance & Policies</h3>
          {/* Baggage information would go here */}
        </section>

        {/* Passenger Information Section */}
        <section className='passenger-info-section'>
          <h1 className='fs-16'>Passenger 1: (Adult, 18 years or older)</h1>
          <p className='description'>
            Passenger details must match your passport or photo ID
          </p>
          <p className='required-note'>*Required field</p>

          <form onSubmit={handleSubmit}>
            <div className='gender-selection'>
              <h4>Gender *</h4>
              <div className='gender-options'>
                <label className='radio-option'>
                  <input
                    type='radio'
                    name='gender'
                    value='male'
                    checked={passengerInfo.gender === 'male'}
                    onChange={handlePassengerChange}
                    required
                  />
                  <span className='radio-mark'></span>
                  Male
                </label>
                <label className='radio-option'>
                  <input
                    type='radio'
                    name='gender'
                    value='female'
                    checked={passengerInfo.gender === 'female'}
                    onChange={handlePassengerChange}
                    required
                  />
                  <span className='radio-mark'></span>
                  Female
                </label>
              </div>
            </div>

            <div className='name-fields'>
              <div className='form-group'>
                <label>First and middle name *</label>
                <input
                  type='text'
                  name='firstName'
                  value={passengerInfo.firstName}
                  onChange={handlePassengerChange}
                  required
                />
              </div>
              <div className='form-group'>
                <label>Last name *</label>
                <input
                  type='text'
                  name='lastName'
                  value={passengerInfo.lastName}
                  onChange={handlePassengerChange}
                  required
                />
              </div>
            </div>

            <div className='dob-nationality'>
              <div className='form-group'>
                <label>Date of birth *</label>
                <div className='dob-fields'>
                  <div className='dob-field'>
                    <label>Day</label>
                    <input
                      type='number'
                      name='day'
                      placeholder='DD'
                      min='1'
                      max='31'
                      value={passengerInfo.day}
                      onChange={handlePassengerChange}
                      required
                    />
                  </div>
                  <div className='dob-field'>
                    <label>Month</label>
                    <select
                      name='month'
                      value={passengerInfo.month}
                      onChange={handlePassengerChange}
                      required
                    >
                      <option value=''>Select</option>
                      <option value='1'>January</option>
                      <option value='2'>February</option>
                      {/* Add all months */}
                    </select>
                  </div>
                  <div className='dob-field'>
                    <label>Year</label>
                    <input
                      type='number'
                      name='year'
                      placeholder='YYYY'
                      min='1900'
                      max={new Date().getFullYear()}
                      value={passengerInfo.year}
                      onChange={handlePassengerChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <label>Nationality *</label>
                <select
                  name='nationality'
                  value={passengerInfo.nationality}
                  onChange={handlePassengerChange}
                  required
                >
                  <option value=''>Select</option>
                  <option value='Indian'>Indian</option>
                  <option value='American'>American</option>
                  <option value='British'>British</option>
                </select>
              </div>
            </div>

            <div className='save-info'>
              <label className='checkbox-option'>
                <input type='checkbox' />
                <span className='checkmark'></span>
                Save/update passenger info for future bookings.{' '}
                <a href='#'>See Privacy Policy</a>.
              </label>
            </div>

            <div className='form-actions'>
              <button type='submit' className='continue-btn'>
                Continue to add-ons
              </button>
            </div>
          </form>
        </section>
        <UpgradeSupport />
      </div>

      {/* <div className='divider'></div> */}

      {/* Price Breakdown Section */}
      <div>
        <FlightPaymentPage />
        {/* <div className='divider'></div> */}
      </div>
    </div>
  )
}

export default BookingConfirmation
