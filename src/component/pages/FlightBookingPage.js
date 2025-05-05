import React, { useState } from 'react'
// import './';
import '../../style/FlightBookingPage.css'
import FlightSearch from '../FlightSearch'
import { useNavigate } from 'react-router-dom'

const FlightBookingPage = () => {
  const [selectedAirlines, setSelectedAirlines] = useState([])
  const [selectedStops, setSelectedStops] = useState('any')
  const [departureTimeRange, setDepartureTimeRange] = useState([0, 24])
  const [arrivalTimeRange, setArrivalTimeRange] = useState([0, 24])
  const [sortBy, setSortBy] = useState('best')
  const navigate = useNavigate()

  const airlines = [
    { id: 'air-india', name: 'Air India' },
    { id: 'air-india-express', name: 'Air India Express' },
    { id: 'spicejet', name: 'SpiceJet' }
  ]

  const flights = [
    {
      id: 1,
      airline: 'Air India',
      flightNumber: 'AI 2664',
      aircraft: 'Airbus A359',
      departureTime: '15:10',
      arrivalTime: '17:50',
      duration: '2h 40m',
      price: 7405,
      stops: 0,
      departureAirport: 'DEL',
      arrivalAirport: 'BLR',
      departureAirportName: 'Indira Gandhi International Airport',
      arrivalAirportName: 'Kempegowda International Airport',
      cabinClass: 'Economy'
    },
    {
      id: 2,
      airline: 'SpiceJet',
      flightNumber: 'SG 456',
      aircraft: 'Boeing 737',
      departureTime: '08:30',
      arrivalTime: '11:15',
      duration: '2h 45m',
      price: 7205,
      stops: 0,
      departureAirport: 'DEL',
      arrivalAirport: 'BLR',
      departureAirportName: 'Indira Gandhi International Airport',
      arrivalAirportName: 'Kempegowda International Airport',
      cabinClass: 'Economy'
    }
  ]

  const toggleAirline = airlineId => {
    setSelectedAirlines(prev =>
      prev.includes(airlineId)
        ? prev.filter(id => id !== airlineId)
        : [...prev, airlineId]
    )
  }

  const handleDepartureTimeChange = (e, index) => {
    const newRange = [...departureTimeRange]
    newRange[index] = parseInt(e.target.value)
    setDepartureTimeRange(newRange)
  }

  const handleArrivalTimeChange = (e, index) => {
    const newRange = [...arrivalTimeRange]
    newRange[index] = parseInt(e.target.value)
    setArrivalTimeRange(newRange)
  }

  const filteredFlights = flights.filter(flight => {
    // Filter by airlines
    if (
      selectedAirlines.length > 0 &&
      !selectedAirlines.includes(flight.airline.toLowerCase().replace(' ', '-'))
    ) {
      return false
    }

    // Filter by stops
    if (selectedStops !== 'any') {
      if (selectedStops === 'direct' && flight.stops !== 0) return false
      if (selectedStops === '1-stop' && flight.stops !== 1) return false
      if (selectedStops === '2-plus-stops' && flight.stops < 2) return false
    }

    // Filter by departure time
    const departureHour = parseInt(flight.departureTime.split(':')[0])
    if (
      departureHour < departureTimeRange[0] ||
      departureHour > departureTimeRange[1]
    ) {
      return false
    }

    // Filter by arrival time
    const arrivalHour = parseInt(flight.arrivalTime.split(':')[0])
    if (
      arrivalHour < arrivalTimeRange[0] ||
      arrivalHour > arrivalTimeRange[1]
    ) {
      return false
    }

    return true
  })

  const sortedFlights = [...filteredFlights].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price
      case 'duration':
        return a.duration.localeCompare(b.duration)
      case 'departure':
        return a.departureTime.localeCompare(b.departureTime)
      case 'best':
      default:
        // Some algorithm to determine "best" (combination of price, duration, etc.)
        return (
          a.price * 0.6 + a.duration * 0.4 - (b.price * 0.6 + b.duration * 0.4)
        )
    }
  })

  return (
    <div style={{ marginTop: '50px' }} className='flight-booking-page'>
      <FlightSearch />
      <div className='booking-container'>
        <div className='filters-sidebar'>
          <div className='filter-section'>
            <h2>Airlines</h2>
            <button
              className='select-all-btn'
              onClick={() => setSelectedAirlines(airlines.map(a => a.id))}
            >
              Select all airlines
            </button>
            <div className='airline-options'>
              {airlines.map(airline => (
                <label key={airline.id} className='airline-option'>
                  <input
                    type='checkbox'
                    checked={selectedAirlines.includes(airline.id)}
                    onChange={() => toggleAirline(airline.id)}
                  />
                  <span className='checkmark'></span>
                  {airline.name}
                </label>
              ))}
            </div>
          </div>

          <div className='filter-section'>
            <h2>Stops</h2>
            <div className='stop-options'>
              <label className='stop-option'>
                <input
                  type='radio'
                  name='stops'
                  checked={selectedStops === 'direct'}
                  onChange={() => setSelectedStops('direct')}
                />
                <span className='radio-mark'></span>
                Direct
              </label>
              <label className='stop-option'>
                <input
                  type='radio'
                  name='stops'
                  checked={selectedStops === '1-stop'}
                  onChange={() => setSelectedStops('1-stop')}
                />
                <span className='radio-mark'></span>1 Stop
              </label>
              <label className='stop-option'>
                <input
                  type='radio'
                  name='stops'
                  checked={selectedStops === '2-plus-stops'}
                  onChange={() => setSelectedStops('2-plus-stops')}
                />
                <span className='radio-mark'></span>2 Stops+
              </label>
            </div>
          </div>

          <div className='filter-section'>
            <h2>Times</h2>
            <div className='time-filter'>
              <h3>Departure 00:00 - 24:00</h3>
              <div className='time-range'>
                <input
                  type='range'
                  min='0'
                  max='24'
                  value={departureTimeRange[0]}
                  onChange={e => handleDepartureTimeChange(e, 0)}
                />
                <input
                  type='range'
                  min='0'
                  max='24'
                  value={departureTimeRange[1]}
                  onChange={e => handleDepartureTimeChange(e, 1)}
                />
                <div className='time-labels'>
                  <span>00:00</span>
                  <span>24:00</span>
                </div>
              </div>
            </div>
            <div className='time-filter'>
              <h3>Arrival 00:00 - 24:00</h3>
              <div className='time-range'>
                <input
                  type='range'
                  min='0'
                  max='24'
                  value={arrivalTimeRange[0]}
                  onChange={e => handleArrivalTimeChange(e, 0)}
                />
                <input
                  type='range'
                  min='0'
                  max='24'
                  value={arrivalTimeRange[1]}
                  onChange={e => handleArrivalTimeChange(e, 1)}
                />
                <div className='time-labels'>
                  <span>00:00</span>
                  <span>24:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flights-results'>
          <div className='sort-options'>
            <div className='sort-tabs'>
              <button
                className={`sort-tab ${sortBy === 'cheapest' ? 'active' : ''}`}
                onClick={() => setSortBy('cheapest')}
              >
                Cheapest Rs. 7,205 • 2h 40m
              </button>
              <button
                className={`sort-tab ${sortBy === 'best' ? 'active' : ''}`}
                onClick={() => setSortBy('best')}
              >
                Best overall Rs. 7,205 • 2h 40m
              </button>
              <button
                className={`sort-tab ${sortBy === 'fastest' ? 'active' : ''}`}
                onClick={() => setSortBy('fastest')}
              >
                Fastest Rs. 7,205 • 2h 40m
              </button>
            </div>
            <div className='sort-dropdown'>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value='best'>Sort by</option>
                <option value='price'>Price (Low to High)</option>
                <option value='duration'>Duration (Shortest)</option>
                <option value='departure'>Departure Time (Earliest)</option>
              </select>
            </div>
          </div>

          {sortedFlights.length > 0 ? (
            sortedFlights.map(flight => (
              <div key={flight.id} onClick={()=>navigate('/BookingConfirmation')} className='flight-card'>
                <div className='flight-header'>
                  <div className='flight-airline'>
                    <h3>{flight.airline}</h3>
                    <span>{flight.cabinClass}</span>
                  </div>
                  <div className='flight-price'>
                    <span className='price'>
                      Rs. {flight.price.toLocaleString()}
                    </span>
                    <button className='select-btn'>Select</button>
                  </div>
                </div>

                <div className='flight-details'>
                  <div className='flight-times'>
                    <div className='departure'>
                      <span className='time'>{flight.departureTime}</span>
                      <span className='airport'>{flight.departureAirport}</span>
                    </div>
                    <div className='duration'>
                      <div className='timeline'>
                        <div className='line'></div>
                        <div className='dot'></div>
                      </div>
                      <span>{flight.duration}</span>
                    </div>
                    <div className='arrival'>
                      <span className='time'>{flight.arrivalTime}</span>
                      <span className='airport'>{flight.arrivalAirport}</span>
                    </div>
                  </div>

                  <div className='flight-info'>
                    <div className='flight-number'>
                      <span>{flight.flightNumber}</span>
                      <span>{flight.aircraft}</span>
                    </div>
                    <div className='flight-airports'>
                      <div className='departure-airport'>
                        <strong>New Delhi and NCR (DEL)</strong>
                        <span>{flight.departureAirportName}</span>
                      </div>
                      <div className='arrival-airport'>
                        <strong>Bangalore (BLR)</strong>
                        <span>{flight.arrivalAirportName}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='flight-actions'>
                  <button className='add-to-cart-btn'>Add to cart</button>
                </div>
              </div>
            ))
          ) : (
            <div className='no-flights'>
              No flights match your current filters. Try adjusting your search
              criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FlightBookingPage
