import React, { useState } from 'react'
import '../../style/FlightBookingForm.css'
import { useNavigate } from 'react-router-dom'

const FlightBookingForm = () => {
  const [tripType, setTripType] = useState('one-way')
  const [flyingFrom, setFlyingFrom] = useState('')
  const [flyingTo, setFlyingTo] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [passengerCount, setPassengerCount] = useState(1)
  const [cabinClass, setCabinClass] = useState('Economy')
  const [includeHotel, setIncludeHotel] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission
    console.log({
      tripType,
      flyingFrom,
      flyingTo,
      departureDate,
      returnDate,
      passengerCount,
      cabinClass,
      includeHotel
    })
  }

  return (
    <div className='flight-booking-container bg-white-tran'>
      <form className='flight-booking-form' onSubmit={handleSubmit}>
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
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <label>Flying from</label>
            <input
              type='text'
              className='inputSearch'
              placeholder='City or airport'
              value={flyingFrom}
              onChange={e => setFlyingFrom(e.target.value)}
              required
            />
          </div>

          <div className='form-group'>
            <label>Flying to</label>
            <input
              type='text'
              className='inputSearch'
              placeholder='City or airport'
              value={flyingTo}
              onChange={e => setFlyingTo(e.target.value)}
              required
            />
          </div>
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <label>Departure</label>
            <input
              type='date'
              className='inputSearch'
              value={departureDate}
              onChange={e => setDepartureDate(e.target.value)}
              required
            />
          </div>

          {tripType === 'round-trip' && (
            <div className='form-group'>
              <label>Return</label>
              <input
                type='date'
                className='inputSearch'
                value={returnDate}
                onChange={e => setReturnDate(e.target.value)}
                required
              />
            </div>
          )}
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <label>Passengers & Class</label>
            <div className='passenger-class-selector'>
              <span>
                {passengerCount} Passenger, {cabinClass}
              </span>
              <div className='dropdown-content'>
                <div className='passenger-selector'>
                  <label>Passengers:</label>
                  <select
                    value={passengerCount}
                    onChange={e => setPassengerCount(parseInt(e.target.value))}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='class-selector'>
                  <label>Class:</label>
                  <select
                    value={cabinClass}
                    onChange={e => setCabinClass(e.target.value)}
                  >
                    <option value='Economy'>Economy</option>
                    <option value='Premium Economy'>Premium Economy</option>
                    <option value='Business'>Business</option>
                    <option value='First Class'>First Class</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='hotel-bundle-option'>
          <label className='checkbox-container'>
            <input
              type='checkbox'
              className='inputSearch'
              checked={includeHotel}
              onChange={e => setIncludeHotel(e.target.checked)}
              style={{ width: 'unset' }}
            />
            <span className='checkmark'></span>
            <span className='label-text'> Add hotel to save up to 25%</span>
          </label>
          <div className='bundle-save-text'>Bundle and Save</div>
        </div>

        <button
          type='submit'
          className='mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1'
          onClick={() => navigate('/FlightBooking')}
        >
          SEARCH FLIGHTS
        </button>
      </form>
    </div>
  )
}

export default FlightBookingForm
