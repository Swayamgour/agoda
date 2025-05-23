import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import {
  FiMapPin,
  FiCalendar,
  FiClock,
  FiUsers,
  // FaCar,
  FiSearch,
  FiChevronDown,
  FiCheck
} from 'react-icons/fi'
import { FaCar } from 'react-icons/fa'
import { MdOutlineSwapHoriz } from 'react-icons/md'
// import { styled, keyframes, width, fontSize } from '@mui/system'
import { styled, keyframes } from '@mui/system'
import Box from '@mui/material/Box'
import { enUS } from 'date-fns/locale'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

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
  maxWidth: '1200px',
  margin: '30px auto',
  padding: '10px',
  background: 'white',
  borderRadius: '12px',
  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
  backdropFilter: 'blur(8px)',
  border: '1px solid rgba(255, 255, 255, 0.3)',
  fontFamily: "'Inter', sans-serif",
  '@media (max-width: 768px)': {
    padding: '20px',
    margin: '20px auto'
  }
}))

const SearchForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '25px'
})

const TripTypeSelector = styled('div')({
  display: 'flex',
  background: 'rgba(241, 245, 249, 0.7)',
  borderRadius: '16px',
  padding: '8px',
  marginBottom: '10px',
  maxWidth: '600px',
  boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)'
})

const TripTypeButton = styled('button')(({ active }) => ({
  flex: 1,
  padding: '7px 10px',
  border: 'none',
  background: active ? 'white' : 'transparent',
  fontWeight: '600',
  color: active ? '#2563eb' : '#64748b',
  cursor: 'pointer',
  borderRadius: '12px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: active ? '0 4px 20px rgba(37, 99, 235, 0.15)' : 'none',
  fontSize: '15px',
  '&:hover': {
    color: active ? '#2563eb' : '#475569',
    transform: active ? 'translateY(-2px)' : 'none'
  }
}))

const InputRow = styled('div')({
  display: 'flex',
  gap: '20px',
  alignItems: 'flex-end',
  '@media (max-width: 768px)': {
    // flexDirection: 'column',
    gap: '15px'
  }
})

const InputGroup = styled('div')({
  flex: 1,
  position: 'relative',
  // minWidth: '200px'
})

const InputLabel = styled('label')({
  display: 'block',
  marginBottom: '10px',
  fontWeight: '600',
  color: '#334155',
  fontSize: '14px',
  paddingLeft: '12px'
})

const LocationInput = styled('div')({
  position: 'relative',
  backgroundColor: 'rgba(248, 250, 252, 0.7)',
  border: '1px solid #e2e8f0',
  borderRadius: '5px',
  '&:before': {
    content: '""',
    position: 'absolute',
    left: '18px',
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
  padding: '10px 9px 10px 50px',
  border: '1px solid #e2e8f0',
  borderRadius: '5px',
  fontSize: '16px',
  transition: 'all 0.3s ease',
  background: 'rgba(248, 250, 252, 0.7)',
  fontWeight: '500',
  '&:focus': {
    outline: 'none',
    borderColor: '#3b82f6',
    background: 'white',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.2)'
  },
  '&::placeholder': {
    color: '#94a3b8',
    fontWeight: 'normal'
  }
})

const SwapButton = styled('button')({
  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  color: 'white',
  border: 'none',
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  marginBottom: '8px',
  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
  '&:hover': {
    transform: 'rotate(180deg) scale(1.1)',
    boxShadow: '0 6px 20px rgba(59, 130, 246, 0.4)'
  }
})

const SwapIcon = styled(MdOutlineSwapHoriz)({
  color: 'white',
  fontSize: '22px'
})

const DateInput = styled('div')({
  position: 'relative',
  '&:before': {
    content: '""',
    position: 'absolute',
    left: '18px',
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
  padding: '9px 9px 9px 50px',
  border: '1px solid #e2e8f0',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  background: 'rgba(248, 250, 252, 0.7)',
  transition: 'all 0.3s ease',
  fontWeight: '500',
  '&:hover': {
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
  }
})

const DateRangeWrapper = styled('div')({
  position: 'absolute',
  top: 'calc(100% + 10px)',
  left: '0',
  zIndex: '1000',
  animation: `${fadeIn} 0.3s ease-out`,
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
  borderRadius: '16px',
  overflow: 'hidden',
  border: '1px solid #e2e8f0'
})

const SearchButton = styled('button')({
  padding: '10px 32px',
  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
  color: 'white',
  border: 'none',
  borderRadius: '14px',
  fontSize: '18px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '12px',
  marginTop: '10px',
  boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 15px 30px rgba(59, 130, 246, 0.4)',
    animation: `${pulse} 1s infinite`
  }
})

// TimeInput
const TimeInput = styled(Box)(({ theme }) => ({
  position: 'relative'
}))

// TimeDisplay
const TimeDisplay = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '10px 9px 10px 42px',
  border: '1px solid #e2e8f0',
  borderRadius: '10px',
  fontSize: '16px',
  cursor: 'pointer',
  background: 'rgba(248, 250, 252, 0.7)',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  '&:hover': {
    borderColor: '#3b82f6'
  }
}))

// SelectInput
const SelectInput = styled(Box)(({ theme }) => ({
  position: 'relative'
}))

// SelectDisplay
const SelectDisplay = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '10px 9px 10px 42px',
  border: '1px solid #e2e8f0',
  borderRadius: '10px',
  fontSize: '16px',
  cursor: 'pointer',
  background: 'rgba(248, 250, 252, 0.7)',
  transition: 'all 0.3s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:hover': {
    borderColor: '#3b82f6'
  }
}))

// Dropdown (add animation definition externally or via keyframes)
const Dropdown = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  zIndex: 1000,
  width: '100%',
  marginTop: '8px',
  background: 'white',
  borderRadius: '12px',
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
  padding: '10px 0',
  border: '1px solid #e2e8f0',
  animation: 'fadeIn 0.3s ease-out'
}))

// DropdownItem
const DropdownItem = styled(Box)(({ theme }) => ({
  padding: '12px 16px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '&:hover': {
    background: '#f8fafc'
  },
  '&.selected': {
    background: '#eff6ff',
    color: '#2563eb'
  }
}))

const BusBookingForm = () => {
  const [tripType, setTripType] = useState('one-way')
  const [pickupLocation, setPickupLocation] = useState('')
  const [dropLocation, setDropLocation] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [pickupTime, setPickupTime] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [returnTime, setReturnTime] = useState('')
  const [passengers, setPassengers] = useState(1)
  const [cabType, setCabType] = useState('sedan')
  const [rentalHours, setRentalHours] = useState('4')

  const [openDatePicker, setOpenDatePicker] = useState(false)
  const [openPassengerPicker, setOpenPassengerPicker] = useState(false)
  const [openCabTypePicker, setOpenCabTypePicker] = useState(false)
  const [openRentalHoursPicker, setOpenRentalHoursPicker] = useState(false)

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
        setOpenCabTypePicker(false)
        setOpenRentalHoursPicker(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleDateSelect = ranges => {
    setDateRange([ranges.selection])
    setPickupDate(format(ranges.selection.startDate, 'yyyy-MM-dd'))
    if (tripType === 'round-trip') {
      setReturnDate(format(ranges.selection.endDate, 'yyyy-MM-dd'))
    }
    setOpenDatePicker(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    navigate('/BusBooking')
    console.log({
      tripType,
      pickupLocation,
      dropLocation,
      pickupDate,
      pickupTime,
      returnDate,
      returnTime,
      passengers,
      cabType,
      rentalHours
    })
  }

  const swapLocations = () => {
    const temp = pickupLocation
    setPickupLocation(dropLocation)
    setDropLocation(temp)
  }

  const cabTypes = [
    { value: 'hatchback', label: 'Hatchback', icon: <FaCar /> },
    { value: 'sedan', label: 'Sedan', icon: <FaCar /> },
    { value: 'suv', label: 'SUV', icon: <FaCar /> },
    { value: 'luxury', label: 'Luxury', icon: <FaCar /> }
  ]

  const hourOptions = [
    { value: '4', label: 'Sleeper' },
    { value: '8', label: 'AC' },
    { value: '12', label: '3AC' },
    { value: '24', label: '2AC' }
  ]

  const passengerOptions = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <SearchContainer ref={containerRef}>
      <SearchForm onSubmit={handleSubmit}>
        <InputRow>
          <InputGroup>
            <InputLabel>From City</InputLabel>
            <LocationInput>
              <InputField
                type='text'
                placeholder='Enter pickup location'
                value={pickupLocation}
                onChange={e => setPickupLocation(e.target.value)}
                // required
              />
            </LocationInput>
          </InputGroup>

          {/* {tripType !== 'hourly' && ( */}
          <SwapButton type='button' onClick={swapLocations}>
            <SwapIcon />
          </SwapButton>
          {/* )} */}

          <InputGroup>
            <InputLabel>To City </InputLabel>
            <LocationInput>
              <InputField
                type='text'
                placeholder='City or airport'
                value={dropLocation}
                onChange={e => setDropLocation(e.target.value)}
              />
            </LocationInput>
          </InputGroup>
          {/* )} */}
        </InputRow>

        <InputRow>
          <InputGroup>
            <InputLabel>
              <FiCalendar size={16} /> Travel Date
            </InputLabel>
            <DateInput>
              <DateDisplay onClick={() => setOpenDatePicker(!openDatePicker)}>
                {pickupDate
                  ? format(new Date(pickupDate), 'MMM dd, yyyy')
                  : 'Select date'}
              </DateDisplay>
              {openDatePicker && (
                <DateRangeWrapper >
                  <DateRange
                    editableDateInputs={true}
                    onChange={handleDateSelect}
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                    minDate={new Date()}
                    rangeColors={['#3b82f6']}
                    locale={enUS}
                  />
                </DateRangeWrapper>
              )}
            </DateInput>
          </InputGroup>

          <InputGroup>
            <InputLabel>
              <FiClock size={16} /> Select Type
            </InputLabel>
            <SelectInput>
              <SelectDisplay
                onClick={() => setOpenRentalHoursPicker(!openRentalHoursPicker)}
              >
                <span>
                  {hourOptions.find(opt => opt.value === rentalHours)?.label}
                </span>
                <FiChevronDown />
              </SelectDisplay>
              {openRentalHoursPicker && (
                <Dropdown>
                  {hourOptions.map(opt => (
                    <DropdownItem
                      key={opt.value}
                      className={rentalHours === opt.value ? 'selected' : ''}
                      onClick={() => {
                        setRentalHours(opt.value)
                        setOpenRentalHoursPicker(false)
                      }}
                    >
                      <span>{opt.label}</span>
                      {rentalHours === opt.value && <FiCheck />}
                    </DropdownItem>
                  ))}
                </Dropdown>
              )}
            </SelectInput>
          </InputGroup>
        </InputRow>

        <SearchButton type='submit'>
          <FiSearch /> SEARCH BUS
        </SearchButton>
        {/* </div> */}
      </SearchForm>
    </SearchContainer>
  )
}

export default BusBookingForm
