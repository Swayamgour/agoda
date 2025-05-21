import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import {
  FiArrowRight,
  FiCalendar,
  FiUsers,
  FiChevronDown,
  FiCheck,
  FiSearch
} from 'react-icons/fi'
import { MdOutlineSwapHoriz } from 'react-icons/md'
import { styled, keyframes, width, fontSize } from '@mui/system'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { enUS } from 'date-fns/locale'
import PassengerDropdownForm from '../smallBox/PassengerDropdownForm'

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`

// Styled Components
const SearchContainer = styled('div')(({ theme }) => ({
  // maxWidth: '1000px',
  margin: '20px auto',
  padding: '20px 10px',
  background:
    'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.98) 100%)',
  borderRadius: '16px',
  boxShadow: '0 15px 40px rgba(0, 0, 0, 0.12)',
  fontFamily: "'Poppins', sans-serif",
  backdropFilter: 'blur(5px)',
  border: '1px solid rgba(255,255,255,0.2)',
  '@media (max-width: 768px)': {
    padding: '10px',
    margin: '10px auto'
  }
}))

const SearchForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
  '@media (max-width: 768px)': {
    gap: '5px'
  }
})

const TripTypeSelector = styled('div')({
  display: 'flex',
  background: 'rgba(241, 245, 249, 0.7)',
  borderRadius: '12px',
  padding: '6px',
  marginBottom: '5px',
  maxWidth: '600px'
})

const TripTypeButton = styled('button')(({ active }) => ({
  flex: 1,
  padding: '12px 16px',
  border: 'none',
  background: active ? 'white' : 'transparent',
  fontWeight: '600',
  color: active ? '#2563eb' : '#64748b',
  cursor: 'pointer',
  borderRadius: '8px',
  transition: 'all 0.3s ease',
  boxShadow: active ? '0 4px 12px rgba(37, 99, 235, 0.15)' : 'none',
  fontSize: '14px',
  '&:hover': {
    color: active ? '#2563eb' : '#475569'
  },
  '@media (max-width: 768px)': {
    padding: '6px 8px',
    fontSize: '12px'
  }
}))

const InputRow = styled('div')({
  display: 'flex',
  gap: '20px',
  alignItems: 'flex-end',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center'
  }
})

const InputGroup = styled('div')({
  flex: 1,
  position: 'relative',
  '@media (max-width: 768px)': {
    width: '100%'
  }
})

const InputLabel = styled('label')({
  display: 'block',
  marginBottom: '8px',
  fontWeight: '500',
  color: '#334155',
  fontSize: '14px',
  paddingLeft: '8px'
})

const LocationInput = styled('div')({
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '20px',
    height: '20px',
    background: '#94a3b8',
    mask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E\") no-repeat center"
  }
})

const InputField = styled('input')({
  width: '100%',
  padding: '16px 16px 16px 42px',
  border: '1px solid #e2e8f0',
  borderRadius: '10px',
  fontSize: '16px',
  transition: 'all 0.3s ease',
  background: 'rgba(248, 250, 252, 0.7)',
  '&:focus': {
    outline: 'none',
    borderColor: '#3b82f6',
    background: 'white',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)'
  },
  '&::placeholder': {
    color: '#94a3b8'
  }
})

const SwapButton = styled('button')({
  background: '#f1f5f9',
  border: 'none',
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  marginBottom: '8px',
  '&:hover': {
    background: '#e2e8f0',
    transform: 'rotate(180deg)'
  }
})

const SwapIcon = styled(MdOutlineSwapHoriz)({
  color: '#64748b',
  fontSize: '20px'
})

const DateInput = styled('div')({
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '20px',
    height: '20px',
    background: '#94a3b8',
    mask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='3' y='4' width='18' height='18' rx='2' ry='2'%3E%3C/rect%3E%3Cline x1='16' y1='2' x2='16' y2='6'%3E%3C/line%3E%3Cline x1='8' y1='2' x2='8' y2='6'%3E%3C/line%3E%3Cline x1='3' y1='10' x2='21' y2='10'%3E%3C/line%3E%3C/svg%3E\") no-repeat center"
  }
})

const DateDisplay = styled('div')({
  width: '100%',
  padding: '16px 16px 16px 42px',
  border: '1px solid #e2e8f0',
  borderRadius: '10px',
  fontSize: '16px',
  cursor: 'pointer',
  background: 'rgba(248, 250, 252, 0.7)',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: '#3b82f6'
  }
})

const DateRangeWrapper = styled('div')({
  position: 'absolute',
  top: '100%',
  left: '0',
  zIndex: '1000',
  marginTop: '8px',
  animation: `${fadeIn} 0.3s ease-out`,
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
  borderRadius: '12px',
  overflow: 'hidden',
  border: '1px solid #e2e8f0'
})

const PassengerSelector = styled('div')({
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    left: '14px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '20px',
    height: '20px',
    background: '#94a3b8',
    mask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'%3E%3C/path%3E%3Ccircle cx='9' cy='7' r='4'%3E%3C/circle%3E%3Cpath d='M23 21v-2a4 4 0 0 0-3-3.87'%3E%3C/path%3E%3Cpath d='M16 3.13a4 4 0 0 1 0 7.75'%3E%3C/path%3E%3C/svg%3E\") no-repeat center"
  }
})

const PassengerDisplay = styled('div')({
  width: '100%',
  padding: '16px 16px 16px 42px',
  border: '1px solid #e2e8f0',
  borderRadius: '10px',
  fontSize: '16px',
  cursor: 'pointer',
  background: 'rgba(248, 250, 252, 0.7)',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: '#3b82f6'
  }
})

const InsideFrom = styled('div')({
  display: 'flex',
  // flexDirection:'column',
  // justifyContent: 'space-between',
  gap: '10px',
  marginBottom: '20px',
  '@media (max-width: 768px)': {
    flexDirection: 'column'
  }
})

const SearchButton = styled('button')({
  padding: '9px 12px',
  // background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  color: 'white',
  border: 'none',
  borderRadius: '12px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  position: 'absolute',
  bottom: '-25px',
  left: '50%',
  transform: 'translateX(-50%)', // ✅ Needed to center horizontally
  background: 'linear-gradient(135deg, #3498db, #2c3e50)'
  // transition: 'all 0.3s ease',
  // '&:hover': {
  //   // transform: 'translateY(-2px)',
  //   boxShadow: '0 5px 15px rgba(52, 152, 219, 0.4)'
  // }
})

const SearchIcon = styled(FiSearch)({
  fontSize: '18px'
})

const FlightBookingForm = () => {
  const [tripType, setTripType] = useState('round-trip')
  const [flyingFrom, setFlyingFrom] = useState('')
  const [flyingTo, setFlyingTo] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [openDatePicker, setOpenDatePicker] = useState(false)
  const [openPassengerPicker, setOpenPassengerPicker] = useState(false)
  const [passengers, setPassengers] = useState({
    adults: 1,
    children: 0,
    infants: 0
  })
  const [cabinClass, setCabinClass] = useState('Economy')
  const [includeHotel, setIncludeHotel] = useState(false)

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])

  const containerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    function handleClickOutside (event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpenDatePicker(false)
        setOpenPassengerPicker(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleDateSelect = ranges => {
    setDateRange([ranges.selection])
    setDepartureDate(format(ranges.selection.startDate, 'yyyy-MM-dd'))
    if (tripType === 'round-trip') {
      setReturnDate(format(ranges.selection.endDate, 'yyyy-MM-dd'))
    }
    setOpenDatePicker(false)
  }

  const updatePassengerCount = (type, operation) => {
    setPassengers(prev => {
      const newValue =
        operation === 'increase' ? prev[type] + 1 : Math.max(0, prev[type] - 1)
      return { ...prev, [type]: newValue }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log({
      tripType,
      flyingFrom,
      flyingTo,
      departureDate,
      returnDate,
      passengers,
      cabinClass,
      includeHotel
    })
    navigate('/FlightBooking')
  }

  const swapLocations = () => {
    const temp = flyingFrom
    setFlyingFrom(flyingTo)
    setFlyingTo(temp)
  }

  const totalPassengers =
    passengers.adults + passengers.children + passengers.infants

  return (
    <SearchContainer ref={containerRef}>
      <SearchForm onSubmit={handleSubmit}>
        <div className='ds-f flex-c gp-5'>
          <TripTypeSelector>
            <TripTypeButton
              type='button'
              active={tripType === 'round-trip'}
              onClick={() => setTripType('round-trip')}
            >
              Round Trip
            </TripTypeButton>
            <TripTypeButton
              type='button'
              active={tripType === 'one-way'}
              onClick={() => setTripType('one-way')}
            >
              One Way
            </TripTypeButton>
            <TripTypeButton
              type='button'
              active={tripType === 'multi-city'}
              onClick={() => setTripType('multi-city')}
            >
              Multi-City
            </TripTypeButton>
          </TripTypeSelector>

          <InsideFrom className={styled.InsideFrom}>
            <InputRow>
              <InputGroup>
                <InputLabel>From</InputLabel>
                <LocationInput>
                  <InputField
                    type='text'
                    placeholder='City or airport'
                    value={flyingFrom}
                    onChange={e => setFlyingFrom(e.target.value)}
                    // required
                  />
                </LocationInput>
              </InputGroup>

              <SwapButton type='button' onClick={swapLocations}>
                <SwapIcon />
              </SwapButton>

              <InputGroup>
                <InputLabel>To</InputLabel>
                <LocationInput>
                  <InputField
                    type='text'
                    placeholder='City or airport'
                    value={flyingTo}
                    onChange={e => setFlyingTo(e.target.value)}
                    // required
                  />
                </LocationInput>
              </InputGroup>
            </InputRow>

            <InputRow>
              <InputGroup>
                <InputLabel>Departure</InputLabel>
                <DateInput>
                  <DateDisplay
                    onClick={() => setOpenDatePicker(!openDatePicker)}
                  >
                    {departureDate
                      ? format(new Date(departureDate), 'EEE, MMM d')
                      : 'Select date'}
                  </DateDisplay>
                  {openDatePicker && (
                    <DateRangeWrapper>
                      <DateRange
                        editableDateInputs={true}
                        onChange={handleDateSelect}
                        moveRangeOnFirstSelection={false}
                        ranges={dateRange}
                        locale={enUS}
                        minDate={new Date()}
                        rangeColors={['#3b82f6']}
                      />
                    </DateRangeWrapper>
                  )}
                </DateInput>
              </InputGroup>

              {tripType === 'round-trip' && (
                <InputGroup>
                  <InputLabel>Return</InputLabel>
                  <DateInput>
                    <DateDisplay
                      onClick={() => setOpenDatePicker(!openDatePicker)}
                    >
                      {returnDate
                        ? format(new Date(returnDate), 'EEE, MMM d')
                        : 'Select date'}
                    </DateDisplay>
                  </DateInput>
                </InputGroup>
              )}
            </InputRow>

            <InputRow>
              <InputGroup>
                <InputLabel>Passengers & Class</InputLabel>
                <PassengerSelector>
                  <PassengerDisplay
                    onClick={() => setOpenPassengerPicker(!openPassengerPicker)}
                  >
                    {`${totalPassengers} ${
                      totalPassengers === 1 ? 'Passenger' : 'Passengers'
                    }, ${cabinClass}`}
                  </PassengerDisplay>
                  {openPassengerPicker && <PassengerDropdownForm />}
                </PassengerSelector>
              </InputGroup>
            </InputRow>
          </InsideFrom>

          <SearchButton type='submit'>
            <SearchIcon />
            Search Flights
          </SearchButton>
        </div>
      </SearchForm>
    </SearchContainer>
  )
}

export default FlightBookingForm
