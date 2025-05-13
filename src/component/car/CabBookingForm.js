import React, { useState } from 'react'
import '../../style/CabBookingForm.css'
import { useNavigate } from 'react-router-dom'

const CabBookingForm = () => {
  const [tripType, setTripType] = useState('one-way')
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropLocation, setDropLocation] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [pickupTime, setPickupTime] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [returnTime, setReturnTime] = useState('')
  const [passengers, setPassengers] = useState(1)

  const navigate = useNavigate()

  const handleSubmit = e => {
    navigate('/CabBookingFilter')
    // e.preventDefault()
    // Handle form submission
    console.log({
      tripType,
      pickupLocation,
      dropLocation,
      pickupDate,
      pickupTime,
      returnDate,
      returnTime,
      passengers
    })
  }

  return (
    <div className='cab-booking-container bg-white-tran'>
      <div className='cab-booking-form'>
        <div className='trip-type-selector'>
          <button
            type='button'
            className={`trip-type-btn ${
              tripType === 'one-way' ? 'active' : ''
            }`}
            onClick={() => setTripType('one-way')}
          >
            One-way
          </button>
          <button
            type='button'
            className={`trip-type-btn ${
              tripType === 'round-trip' ? 'active' : ''
            }`}
            onClick={() => setTripType('round-trip')}
          >
            Round-trip
          </button>
          <button
            type='button'
            className={`trip-type-btn ${tripType === 'hourly' ? 'active' : ''}`}
            onClick={() => setTripType('hourly')}
          >
            Hourly Rental
          </button>
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <label>Pickup Location</label>
            <input
              className='inputSearch'
              type='text'
              placeholder='Enter pickup location'
              value={pickupLocation}
              onChange={e => setPickupLocation(e.target.value)}
              required
            />
          </div>

          <div className='form-group'>
            <label>Drop Location</label>
            <input
              className='inputSearch'
              type='text'
              placeholder='Enter drop location'
              value={dropLocation}
              onChange={e => setDropLocation(e.target.value)}
              required={tripType !== 'hourly'}
            />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <label>Pickup Date</label>
            <input
              className='inputSearch'
              type='date'
              value={pickupDate}
              onChange={e => setPickupDate(e.target.value)}
              required
            />
          </div>

          <div className='form-group'>
            <label>Pickup Time</label>
            <input
              className='inputSearch'
              type='time'
              value={pickupTime}
              onChange={e => setPickupTime(e.target.value)}
              required
            />
          </div>
        </div>

        {tripType === 'round-trip' && (
          <div className='form-row'>
            <div className='form-group'>
              <label>Return Date</label>
              <input
                className='inputSearch'
                type='date'
                value={returnDate}
                onChange={e => setReturnDate(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <label>Return Time</label>
              <input
                className='inputSearch'
                type='time'
                value={returnTime}
                onChange={e => setReturnTime(e.target.value)}
                required
              />
            </div>
          </div>
        )}

        <div className='form-row'>
          <div className='form-group'>
            <label>Passengers</label>
            <select
              value={passengers}
              onChange={e => setPassengers(parseInt(e.target.value))}
              className='inputSearch'
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'passenger' : 'passengers'}
                </option>
              ))}
            </select>
          </div>

          <div className='form-group'>
            <label>Cab Type</label>
            <select className='inputSearch'>
              <option value='hatchback'>Hatchback</option>
              <option value='sedan'>Sedan</option>
              <option value='suv'>SUV</option>
              <option value='luxury'>Luxury</option>
            </select>
          </div>
        </div>

        {tripType === 'hourly' && (
          <div className='form-group'>
            <label>Rental Hours</label>
            <select>
              <option value='4'>4 hours</option>
              <option value='8'>8 hours</option>
              <option value='12'>12 hours</option>
              <option value='24'>24 hours</option>
            </select>
          </div>
        )}

        <div className='add-flight-option'>
          <button type='button' className='add-flight-btn'>
            + Add a flight
          </button>
        </div>

        <button
          onClick={handleSubmit}
          className='mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1'
        >
          SEARCH CAR
        </button>
      </div>
    </div>
  )
}

export default CabBookingForm
