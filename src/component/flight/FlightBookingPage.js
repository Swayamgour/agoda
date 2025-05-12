import React, { useState } from 'react'
// import './';
import '../../style/FlightBookingPage.css'
import FlightSearch from './FlightSearch'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import InfoIcon from '@mui/icons-material/Info'

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

  const [value, setValue] = useState([0, 24])
  const [openOrderMenu, setOpenOrderMenu] = useState(false)
  const [ids, setIds] = useState('')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  function valuetext (value) {
    return `${value}°C`
  }

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

  const handleToggleOrderMenu = id => {
    setOpenOrderMenu(!openOrderMenu)
    setIds(id)
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
            <div className='airline-options'>
              <label className='airline-option'>
                <input
                  type='radio'
                  name='stops'
                  checked={selectedStops === 'direct'}
                  onChange={() => setSelectedStops('direct')}
                />
                <span className='checkmark'></span>
                Direct
              </label>
              <label className='airline-option'>
                <input
                  type='radio'
                  name='stops'
                  checked={selectedStops === '1-stop'}
                  onChange={() => setSelectedStops('1-stop')}
                />
                <span className='checkmark'></span>1 Stop
              </label>
              <label className='airline-option'>
                <input
                  type='radio'
                  name='stops'
                  checked={selectedStops === '2-plus-stops'}
                  onChange={() => setSelectedStops('2-plus-stops')}
                />
                <span className='checkmark'></span>2 Stops+
              </label>
            </div>
          </div>

          <div className='filter-section'>
            <h2>Times</h2>
            <div className='time-filter'>
              <h3>Departure 00:00 - 24:00</h3>
              <div className='time-range'>
                <Box>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay='auto'
                    getAriaValueText={valuetext}
                  />
                </Box>
                <div className='time-labels'>
                  <span>00:00</span>
                  <span>24:00</span>
                </div>
              </div>
            </div>
            <div className='time-filter'>
              <h3>Arrival 00:00 - 24:00</h3>
              <div className='time-range'>
                <Box>
                  <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay='auto'
                    getAriaValueText={valuetext}
                  />
                </Box>
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
              <div
                key={flight.id}
                //
                onClick={() => handleToggleOrderMenu(flight.id)}
                className='flight-card'
              >
                <div className='flight-header'>
                  <div className='flight-airline'>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <div>
                        <img src='/images/JL_v1.png' width={50} height={50} />
                      </div>
                      <div>
                        <h3>{flight.airline}</h3>
                        <span>{flight.cabinClass}</span>
                      </div>
                    </div>
                  </div>

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

                  <div className='flight-price'>
                    <span className='price'>
                      Rs. {flight.price.toLocaleString()}
                    </span>
                    {openOrderMenu ? <ExpandLess /> : <ExpandMore />}
                    {/* <button className='select-btn'>Select</button> */}
                  </div>
                  {/* <div></div> */}
                </div>

                {flight.id === ids && openOrderMenu && (
                  <>
                    <div className='flight-details'>
                      <div className='flight-info'>
                        <div className='flight-number'>
                          <span>{flight.flightNumber}</span>
                          <span>{flight.aircraft}</span>
                        </div>
                      </div>
                      <div className='flight-airports'>
                        <div
                          style={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center'
                          }}
                        >
                          <div className='fs-12'>2h 45m </div>
                          <div className='duration_of_flight'>
                            <div className='line_duration'></div>
                            <div className='dot_one'></div>
                            <div className='dot_two'></div>
                          </div>
                          <div className='flight-airports'>
                            <div className='departure-airport '>
                              <strong>New Delhi and NCR (DEL)</strong>
                              <span>{flight.departureAirportName}</span>
                            </div>
                            <div className='fs-10'>
                              Economy Class • SG 269 • Boeing 737-800
                            </div>
                            <div className='arrival-airport'>
                              <strong>Bangalore (BLR)</strong>
                              <span>{flight.arrivalAirportName}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flight-details'>
                      <div className='flight-info'>
                        <div className='flight-number'>
                          <span>{flight.flightNumber}</span>
                          <span>{flight.aircraft}</span>
                        </div>
                      </div>
                      <div className='flight-airports'>
                        <div
                          style={{
                            display: 'flex',
                            gap: '10px',
                            alignItems: 'center'
                          }}
                        >
                          <div className='fs-12'>2h 45m </div>
                          <div className='duration_of_flight'>
                            <div className='line_duration'></div>
                            <div className='dot_one'></div>
                            <div className='dot_two'></div>
                          </div>
                          <div className='flight-airports'>
                            <div className='departure-airport '>
                              <strong>New Delhi and NCR (DEL)</strong>
                              <span>{flight.departureAirportName}</span>
                            </div>
                            <div className='fs-10'>
                              Economy Class • SG 269 • Boeing 737-800
                            </div>
                            <div className='arrival-airport'>
                              <strong>Bangalore (BLR)</strong>
                              <span>{flight.arrivalAirportName}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='flight-booking-info'>
                      <InfoIcon sx={{ fontSize: '14px' }} />
                      <p>
                        This great fare combines two separate one-way flights,
                        each under separate terms and conditions.
                      </p>
                    </div>

                    <div className='flight-booking-select-btn'>
                      <button onClick={() => navigate('/BookingConfirmation')}>
                        Select
                      </button>
                    </div>
                  </>
                )}

                {/* <div className='flight-actions'>
                  <button className='add-to-cart-btn'>Add to cart</button>
                </div> */}
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
