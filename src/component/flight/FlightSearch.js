import React, { useEffect, useState } from 'react'
import '../../style/FlightBookingPage.module.css'
import FlightBookingForm from './FlightBookingForm'

const FlightSearch = () => {
  const [fromAirport, setFromAirport] = useState('Delhi (DEL)')
  const [toAirport, setToAirport] = useState('Mumbai (BOM)')
  const [departureDate, setDepartureDate] = useState('Tue, 6 May')
  const [returnDate, setReturnDate] = useState('')
  const [passengers, setPassengers] = useState(2)
  const [cabinClass, setCabinClass] = useState('Economy')
  const [isEditingFrom, setIsEditingFrom] = useState(false)
  const [isEditingTo, setIsEditingTo] = useState(false)

  const handleSearch = () => {
    console.log('Searching flights:', {
      from: fromAirport,
      to: toAirport,
      departure: departureDate,
      return: returnDate,
      passengers,
      cabinClass
    })
    // Add your search logic here
  }

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const handleResetAirport = field => {
    if (field === 'from') {
      setFromAirport('')
      setIsEditingFrom(true)
    } else {
      setToAirport('')
      setIsEditingTo(true)
    }
  }

  const handleAddReturn = () => {
    if (!returnDate) {
      setReturnDate('Thu, 8 May') // Default return date or implement a date picker
    } else {
      setReturnDate('')
    }
  }

  const handlePassengerChange = e => {
    setPassengers(parseInt(e.target.value))
  }

  const handleClassChange = e => {
    setCabinClass(e.target.value)
  }

  return (
    <div className='flight-search-container'>
      <div className='flight-search-form'>
        <div className='search-fields'>
          <div className='airport-field'>
            <label>Flying from</label>
            {isEditingFrom ? (
              <input
                type='text'
                value={fromAirport}
                onChange={e => setFromAirport(e.target.value)}
                onBlur={() => setIsEditingFrom(false)}
                autoFocus
              />
            ) : (
              <div
                className='airport-value'
                onClick={() => setIsEditingFrom(true)}
              >
                {fromAirport || 'Select airport'}
                <button
                  className='reset-btn'
                  onClick={e => {
                    e.stopPropagation()
                    handleResetAirport('from')
                  }}
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          <div className='airport-field'>
            <label>Flying to</label>
            {isEditingTo ? (
              <input
                type='text'
                value={toAirport}
                onChange={e => setToAirport(e.target.value)}
                onBlur={() => setIsEditingTo(false)}
                autoFocus
              />
            ) : (
              <div
                className='airport-value'
                onClick={() => setIsEditingTo(true)}
              >
                {toAirport || 'Select airport'}
                <button
                  className='reset-btn'
                  onClick={e => {
                    e.stopPropagation()
                    handleResetAirport('to')
                  }}
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          <div className='date-field'>
            <label>Departure</label>
            <div className='date-value'>{departureDate}</div>
            {/* {!returnDate && (
              <button className='add-return-btn' onClick={handleAddReturn}>
                Add return
              </button>
            )} */}
          </div>

          {returnDate && (
            <div className='date-field'>
              <label>Return</label>
              <div className='date-value'>{returnDate}</div>
              <button className='remove-return-btn' onClick={handleAddReturn}>
                ✕
              </button>
            </div>
          )}

          <div className='passenger-field'>
            <label>Passengers</label>
            <select value={passengers} onChange={handlePassengerChange}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className='class-field'>
            <label>Class</label>
            <select value={cabinClass} onChange={handleClassChange}>
              <option value='Economy'>Economy</option>
              <option value='Premium Economy'>Premium Economy</option>
              <option value='Business'>Business</option>
              <option value='First Class'>First Class</option>
            </select>
          </div>

          <button
            className='mainSearch__submit button -dark-1 py-15 px-35 h-60  rounded-4 bg-yellow-1 text-dark-1'
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default FlightSearch
