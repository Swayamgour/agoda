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
import { styled, keyframes } from 'styled-components'

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
const SearchContainer = styled.div`
  margin: 20px auto;
  padding: 30px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.98) 0%,
    rgba(248, 250, 252, 0.98) 100%
  );
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  font-family: 'Poppins', sans-serif;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    padding: 10px;
    margin: 10px auto;
  }
`

const SearchForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 768px) : {
    gap: '5px';
  }
`

const TripTypeSelector = styled.div`
  display: flex;
  background: rgba(241, 245, 249, 0.7);
  border-radius: 12px;
  padding: 6px;
  margin-bottom: 5px;
  max-width: 1000px;
`

const TripTypeButton = styled.button`
  flex: 1;
  padding: 12px 16px;
  border: none;
  background: ${props => (props.active ? 'white' : 'transparent')};
  font-weight: 600;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  box-shadow: ${props =>
    props.active ? '0 4px 12px rgba(37, 99, 235, 0.15)' : 'none'};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    color: ${props => (props.active ? '#2563eb' : '#475569')};
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    font-size: 12px;
  }
`

const InputRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`

const InputGroup = styled.div`
  flex: 1;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #334155;
  font-size: 14px;
  padding-left: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`

const LocationInput = styled.div`
  position: relative;
`

const InputField = styled.input`
  width: 100%;
  padding: 16px 16px 16px 42px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
  background: rgba(248, 250, 252, 0.7);

  &:focus {
    outline: none;
    border-color: #3b82f6;
    background: white;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }

  &::placeholder {
    color: #94a3b8;
  }
`

const SwapButton = styled.button`
  background: #f1f5f9;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 8px;

  &:hover {
    background: #e2e8f0;
    transform: rotate(180deg);
  }
`

const DateInput = styled.div`
  position: relative;
`

const DateDisplay = styled.div`
  width: 100%;
  padding: 16px 16px 16px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  background: rgba(248, 250, 252, 0.7);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    border-color: #3b82f6;
  }
`

const TimeInput = styled.div`
  position: relative;
`

const TimeDisplay = styled.div`
  width: 100%;
  padding: 16px 16px 16px 42px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  background: rgba(248, 250, 252, 0.7);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    border-color: #3b82f6;
  }
`

const DateRangeWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  margin-top: 8px;
  animation: ${fadeIn} 0.3s ease-out;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
`

const SelectInput = styled.div`
  position: relative;
`

const SelectDisplay = styled.div`
  width: 100%;
  padding: 16px 16px 16px 42px;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  background: rgba(248, 250, 252, 0.7);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border-color: #3b82f6;
  }
`

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  width: 100%;
  margin-top: 8px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  padding: 10px 0;
  animation: ${fadeIn} 0.3s ease-out;
  border: 1px solid #e2e8f0;
`

const DropdownItem = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    background: #f8fafc;
  }

  &.selected {
    background: #eff6ff;
    color: #2563eb;
  }
`

const SearchButton = styled.button`
  padding: 9px 12px;
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  position: absolute;
  bottom: -25px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #3498db, #2c3e50);
`

const InsideFrom = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

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
    { value: '4', label: '4 hours' },
    { value: '8', label: '8 hours' },
    { value: '12', label: '12 hours' },
    { value: '24', label: '24 hours' }
  ]

  const passengerOptions = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <SearchContainer ref={containerRef}>
      <SearchForm onSubmit={handleSubmit}>
        <div className='ds-f flex-c gp-5'>
          <InsideFrom>
            <InputRow>
              <InputGroup>
                <InputLabel>
                  <FiMapPin size={16} /> From
                </InputLabel>
                <LocationInput>
                  <InputField
                    type='text'
                    placeholder='Enter Station Name'
                    value={pickupLocation}
                    onChange={e => setPickupLocation(e.target.value)}
                    // required
                  />
                </LocationInput>
              </InputGroup>

              <SwapButton type='button' onClick={swapLocations}>
                <MdOutlineSwapHoriz size={20} />
              </SwapButton>

              {tripType !== 'hourly' && (
                <InputGroup>
                  <InputLabel>
                    <FiMapPin size={16} /> To
                  </InputLabel>
                  <LocationInput>
                    <InputField
                      type='text'
                      placeholder='Enter Station Name'
                      value={dropLocation}
                      onChange={e => setDropLocation(e.target.value)}
                      // required
                    />
                  </LocationInput>
                </InputGroup>
              )}
            </InputRow>

            <InputRow>
              <InputGroup>
                <InputLabel>
                  <FiCalendar size={16} /> Travel Date
                </InputLabel>
                <DateInput>
                  <DateDisplay
                    onClick={() => setOpenDatePicker(!openDatePicker)}
                  >
                    {pickupDate
                      ? format(new Date(pickupDate), 'MMM dd, yyyy')
                      : 'Select date'}
                  </DateDisplay>
                  {openDatePicker && (
                    <DateRangeWrapper>
                      {/* <DateRange
                        editableDateInputs={true}
                        onChange={handleDateSelect}
                        moveRangeOnFirstSelection={false}
                        ranges={dateRange}
                        minDate={new Date()}
                        rangeColors={['#3b82f6']}
                      /> */}
                    </DateRangeWrapper>
                  )}
                </DateInput>
              </InputGroup>

              {/* <InputGroup>
                <InputLabel>
                  <FiClock size={16} /> Class
                </InputLabel>
                <TimeInput>
                  <TimeDisplay>
                    <input
                      type='text'
                      placeholder='All'
                      value={pickupTime}
                      onChange={e => setPickupTime(e.target.value)}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        width: '100%',
                        outline: 'none'
                      }}
                      // required
                    />
                  </TimeDisplay>
                </TimeInput>
              </InputGroup> */}
            </InputRow>
          </InsideFrom>

          <SearchButton type='submit'>
            <FiSearch /> Search Bus
          </SearchButton>
        </div>
      </SearchForm>
    </SearchContainer>
  )
}

export default BusBookingForm
