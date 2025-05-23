import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import InfoIcon from '@mui/icons-material/Info'
import FlightSearch from './FlightSearch'
import styles from '../../style/FlightBookingPage.module.css'
import FlightFilterWithBottomDrawer from './FlightFilterWithBottomDrawer'
import ScrollFadeIn from '../scrollview/ScrollFadeIn'
import PublicImage from '../../utils/PublicImage'
import FlightBookingForm from './FlightBookingForm'
import FlightSearchDialog from './FlightSearchDialog'
import { PiAirplaneInFlightDuotone } from 'react-icons/pi'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import FlightLandIcon from '@mui/icons-material/FlightLand'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PeopleIcon from '@mui/icons-material/People'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'

const FlightBookingDashboard = () => {
  const [selectedAirlines, setSelectedAirlines] = useState([])
  const [selectedStops, setSelectedStops] = useState('any')
  const [departureTimeRange, setDepartureTimeRange] = useState([0, 24])
  const [arrivalTimeRange, setArrivalTimeRange] = useState([0, 24])
  const [sortBy, setSortBy] = useState('best')
  const [openOrderMenu, setOpenOrderMenu] = useState(false)
  const [expandedFlightId, setExpandedFlightId] = useState(null)
  const navigate = useNavigate()

  const airlines = [
    { id: 'air-india', name: 'Air India' },
    { id: 'air-india-express', name: 'Air India Express' },
    { id: 'spicejet', name: 'SpiceJet' }
  ]

  const [timeRange, setTimeRange] = useState([0, 24])
  const [searchDialogOpen, setSearchDialogOpen] = useState(false)
  const [searchParams, setSearchParams] = useState(null)

  const handleTimeRangeChange = (event, newValue) => {
    setTimeRange(newValue)
  }

  const handleSearch = params => {
    setSearchParams(params)
    // You can add your search logic here
    console.log('Search params:', params)
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
      cabinClass: 'Economy',
      logo: '/images/air-india.png'
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
      cabinClass: 'Economy',
      logo: '/images/spicejet.png'
    }
  ]

  const toggleAirline = airlineId => {
    setSelectedAirlines(prev =>
      prev.includes(airlineId)
        ? prev.filter(id => id !== airlineId)
        : [...prev, airlineId]
    )
  }

  const handleToggleFlightDetails = flightId => {
    setExpandedFlightId(expandedFlightId === flightId ? null : flightId)
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
        return (
          a.price * 0.6 + a.duration * 0.4 - (b.price * 0.6 + b.duration * 0.4)
        )
    }
  })

  const handleSwapLocations = () => {
    // Your logic to swap locations here
    console.log('Swap locations functionality')
  }

  return (
    <div className={styles.container}>
      <div
        onClick={() => setSearchDialogOpen(true)}
        className={styles.searchHeader}
      >
        <div className={styles.routeContainer}>
          <div className={styles.location}>
            <FlightTakeoffIcon className={styles.flightIcon} />
            <div>
              <span className={styles.city}>Kanpur</span>
              <span className={styles.airport}>(KNU)</span>
            </div>
          </div>

          <div className={styles.middleSection}>
            <button
              className={styles.swapButton}
              onClick={handleSwapLocations}
              aria-label='Swap locations'
            >
              <SwapHorizIcon className={styles.swapIcon} />
            </button>
            
          </div>

          <div className={styles.location}>
            <FlightLandIcon className={styles.flightIcon} />
            <div>
              <span className={styles.city}>Delhi</span>
              <span className={styles.airport}>(DEL)</span>
            </div>
          </div>
        </div>

        <div className={styles.detailsContainer}>
          <div className={styles.detailItem}>
            <CalendarTodayIcon className={styles.detailIcon} />
            <span>15 Jun 2023 - 20 Jun 2023</span>
          </div>
          <div className={styles.detailItem}>
            <PeopleIcon className={styles.detailIcon} />
            <span>2 Adults, 2 Children</span>
          </div>
        </div>
      </div>

      <FlightSearchDialog
        open={searchDialogOpen}
        onClose={() => setSearchDialogOpen(false)}
        onSearch={handleSearch}
      />

      <div className={styles.bookingContainer}>
        <aside className={styles.filtersSidebar}>
          <div className={styles.filterSection}>
            <h2 className={styles.filterTitle}>
              <span>Airlines</span>
            </h2>
            <button
              className={styles.selectAllBtn}
              onClick={() => setSelectedAirlines(airlines.map(a => a.id))}
            >
              Select all airlines
            </button>
            <div className={styles.optionsList}>
              {airlines.map(airline => (
                <label key={airline.id} className={styles.optionItem}>
                  <input
                    type='checkbox'
                    checked={selectedAirlines.includes(airline.id)}
                    onChange={() => toggleAirline(airline.id)}
                  />
                  <span
                    className={`${styles.checkmark} ${styles.checkbox}`}
                  ></span>
                  {airline.name}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <h2 className={styles.filterTitle}>
              <span>Stops</span>
            </h2>
            <div className={styles.optionsList}>
              <label className={styles.optionItem}>
                <input
                  type='radio'
                  name='stops'
                  checked={selectedStops === 'direct'}
                  onChange={() => setSelectedStops('direct')}
                />
                <span className={`${styles.checkmark} ${styles.radio}`}></span>
                Direct
              </label>
              <label className={styles.optionItem}>
                <input
                  type='radio'
                  name='stops'
                  checked={selectedStops === '1-stop'}
                  onChange={() => setSelectedStops('1-stop')}
                />
                <span className={`${styles.checkmark} ${styles.radio}`}></span>1
                Stop
              </label>
              <label className={styles.optionItem}>
                <input
                  type='radio'
                  name='stops'
                  checked={selectedStops === '2-plus-stops'}
                  onChange={() => setSelectedStops('2-plus-stops')}
                />
                <span className={`${styles.checkmark} ${styles.radio}`}></span>
                2+ Stops
              </label>
            </div>
          </div>

          <div className={styles.filterSection}>
            <h2 className={styles.filterTitle}>
              <span>Times</span>
            </h2>
            <div className={styles.timeFilter}>
              <h3 className={styles.timeFilterTitle}>
                Departure 00:00 - 24:00
              </h3>
              <div className={styles.timeRange}>
                <Box>
                  <Slider
                    getAriaLabel={() => 'Departure time range'}
                    value={timeRange}
                    onChange={handleTimeRangeChange}
                    valueLabelDisplay='auto'
                  />
                </Box>
                <div className={styles.timeLabels}>
                  <span>00:00</span>
                  <span>24:00</span>
                </div>
              </div>
            </div>
            <div className={styles.timeFilter}>
              <h3 className={styles.timeFilterTitle}>Arrival 00:00 - 24:00</h3>
              <div className={styles.timeRange}>
                <Box>
                  <Slider
                    getAriaLabel={() => 'Arrival time range'}
                    value={timeRange}
                    onChange={handleTimeRangeChange}
                    valueLabelDisplay='auto'
                  />
                </Box>
                <div className={styles.timeLabels}>
                  <span>00:00</span>
                  <span>24:00</span>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <ScrollFadeIn>
          <main className={styles.flightsResults}>
            <div className={styles.sortOptions}>
              <div className={styles.sortTabs}>
                <button
                  className={`${styles.sortTab} ${
                    sortBy === 'price' ? styles.active : ''
                  }`}
                  onClick={() => setSortBy('price')}
                >
                  Cheapest Rs. 7,205 • 2h 40m
                </button>
                <button
                  className={`${styles.sortTab} ${
                    sortBy === 'best' ? styles.active : ''
                  }`}
                  onClick={() => setSortBy('best')}
                >
                  Best overall Rs. 7,205 • 2h 40m
                </button>
                <button
                  className={`${styles.sortTab} ${
                    sortBy === 'duration' ? styles.active : ''
                  }`}
                  onClick={() => setSortBy('duration')}
                >
                  Fastest Rs. 7,205 • 2h 40m
                </button>
              </div>
              <div className={styles.sortDropdown}>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                >
                  <option value='best'>Sort by</option>
                  <option value='price'>Price (Low to High)</option>
                  <option value='duration'>Duration (Shortest)</option>
                  <option value='departure'>Departure Time (Earliest)</option>
                </select>
              </div>
            </div>

            <FlightFilterWithBottomDrawer />

            {sortedFlights.length > 0 ? (
              sortedFlights.map(flight => (
                <div key={flight.id} className={styles.flightCard}>
                  <div
                    className={styles.flightHeader}
                    onClick={() => handleToggleFlightDetails(flight.id)}
                  >
                    <div className={styles.flightAirline}>
                      <PublicImage
                        src='/images/JL_v1.png'
                        alt={flight.airline}
                        className={styles.airlineLogo}
                      />
                      {/* <img  width={50} height={50} /> */}
                      <div>
                        <h3 className={styles.airlineName}>{flight.airline}</h3>
                        <span className={styles.cabinClass}>
                          {flight.cabinClass}
                        </span>
                      </div>
                    </div>

                    <div className={styles.flightTimes}>
                      <div className={styles.timeContainer}>
                        <span className={styles.time}>
                          {flight.departureTime}
                        </span>
                        <span className={styles.airportCode}>
                          {flight.departureAirport}
                        </span>
                      </div>
                      <div className={styles.duration}>
                        <div className={styles.timeline}>
                          <div className={styles.timelineLine}></div>
                          <div className={styles.timelineDot}></div>
                        </div>
                        <span>{flight.duration}</span>
                      </div>
                      <div className={styles.timeContainer}>
                        <span className={styles.time}>
                          {flight.arrivalTime}
                        </span>
                        <span className={styles.airportCode}>
                          {flight.arrivalAirport}
                        </span>
                      </div>
                    </div>

                    <div className={styles.flightPrice}>
                      <span className={styles.price}>
                        Rs. {flight.price.toLocaleString()}
                      </span>
                      {expandedFlightId === flight.id ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </div>
                  </div>

                  {expandedFlightId === flight.id && (
                    <>
                      <div className={styles.flightDetails}>
                        <div className={styles.flightInfo}>
                          <div className={styles.flightNumber}>
                            <span>Flight: {flight.flightNumber}</span>
                            <span>Aircraft: {flight.aircraft}</span>
                          </div>
                        </div>
                        <div className={styles.durationVisual}>
                          <div className={styles.durationText}>
                            {flight.duration}
                          </div>
                          <div className={styles.durationLine}>
                            <div className={styles.line}></div>
                            <div
                              className={`${styles.dot} ${styles.dotTop}`}
                            ></div>
                            <div
                              className={`${styles.dot} ${styles.dotBottom}`}
                            ></div>
                          </div>
                          <div className={styles.airportInfo}>
                            <div className={styles.airportName}>
                              {flight.departureAirportName} (
                              {flight.departureAirport})
                            </div>
                            <div className={styles.flightMeta}>
                              {flight.cabinClass} • {flight.flightNumber} •{' '}
                              {flight.aircraft}
                            </div>
                            <div className={styles.airportName}>
                              {flight.arrivalAirportName} (
                              {flight.arrivalAirport})
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={styles.infoBanner}>
                        <InfoIcon sx={{ fontSize: '14px' }} />
                        <p>
                          This great fare combines two separate one-way flights,
                          each under separate terms and conditions.
                        </p>
                      </div>

                      <div className={styles.selectBtnContainer}>
                        <button
                          className={styles.selectBtn}
                          onClick={() => navigate('/BookingConfirmation')}
                        >
                          Select
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ))
            ) : (
              <div className={styles.noFlights}>
                No flights match your current filters. Try adjusting your search
                criteria.
              </div>
            )}
          </main>
        </ScrollFadeIn>
      </div>
    </div>
  )
}

export default FlightBookingDashboard
