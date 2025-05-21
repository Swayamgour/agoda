// import React from 'react'
import React, { useState, useRef, useEffect } from 'react'
import { styled, keyframes, width, fontSize } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`

const PassengerDropdown = styled('div')({
  position: 'absolute',
  top: '100%',
  left: '0',
  zIndex: '9999',
  width: '300px',
  marginTop: '8px',
  background: 'white',
  borderRadius: '12px',
  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)',
  padding: '20px',
  animation: `${fadeIn} 0.3s ease-out`,
  border: '1px solid #e2e8f0',
  overflow: 'visible'
})

const PassengerRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
  '&:last-child': {
    marginBottom: '0'
  }
})

const PassengerLabel = styled('div')({
  '& h4': {
    fontSize: '15px',
    fontWeight: '500',
    marginBottom: '4px',
    color: '#1e293b'
  },
  '& p': {
    fontSize: '13px',
    color: '#64748b'
  }
})

const PassengerControls = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '15px'
})

const CountButton = styled('button')({
  width: '34px',
  height: '34px',
  borderRadius: '50%',
  border: '1px solid #3b82f6',
  background: 'transparent',
  color: '#3b82f6',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: '#3b82f6',
    color: 'white'
  },
  '&:disabled': {
    opacity: '0.5',
    cursor: 'not-allowed',
    borderColor: '#cbd5e1',
    color: '#cbd5e1',
    '&:hover': {
      background: 'transparent',
      color: '#cbd5e1'
    }
  }
})

const PassengerCount = styled('div')({
  minWidth: '24px',
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: '500',
  color: '#1e293b'
})

const Divider = styled('div')({
  height: '1px',
  background: '#e2e8f0',
  margin: '15px 0'
})

function PassengerDropdownForm () {
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
    <PassengerDropdown>
      <PassengerRow>
        <PassengerLabel>
          <h4>Adults</h4>
          <p>12+ years</p>
        </PassengerLabel>
        <PassengerControls>
          <CountButton
            onClick={() => updatePassengerCount('adults', 'decrease')}
            disabled={passengers.adults <= 1}
          >
            -
          </CountButton>
          <PassengerCount>{passengers.adults}</PassengerCount>
          <CountButton
            onClick={() => updatePassengerCount('adults', 'increase')}
          >
            +
          </CountButton>
        </PassengerControls>
      </PassengerRow>

      <Divider />

      <PassengerRow>
        <PassengerLabel>
          <h4>Children</h4>
          <p>2-11 years</p>
        </PassengerLabel>
        <PassengerControls>
          <CountButton
            onClick={() => updatePassengerCount('children', 'decrease')}
            disabled={passengers.children <= 0}
          >
            -
          </CountButton>
          <PassengerCount>{passengers.children}</PassengerCount>
          <CountButton
            onClick={() => updatePassengerCount('children', 'increase')}
          >
            +
          </CountButton>
        </PassengerControls>
      </PassengerRow>

      <Divider />

      <PassengerRow>
        <PassengerLabel>
          <h4>Infants</h4>
          <p>Under 2 years</p>
        </PassengerLabel>
        <PassengerControls>
          <CountButton
            onClick={() => updatePassengerCount('infants', 'decrease')}
            disabled={passengers.infants <= 0}
          >
            -
          </CountButton>
          <PassengerCount>{passengers.infants}</PassengerCount>
          <CountButton
            onClick={() => updatePassengerCount('infants', 'increase')}
            disabled={passengers.infants >= passengers.adults}
          >
            +
          </CountButton>
        </PassengerControls>
      </PassengerRow>

      <Divider />

      <PassengerRow>
        <PassengerLabel>
          <h4>Cabin Class</h4>
        </PassengerLabel>
        <PassengerControls>
          <select
            value={cabinClass}
            onChange={e => setCabinClass(e.target.value)}
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #e2e8f0',
              background: 'white',
              fontSize: '14px',
              color: '#1e293b'
            }}
          >
            <option value='Economy'>Economy</option>
            <option value='Premium Economy'>Premium Economy</option>
            <option value='Business'>Business</option>
            <option value='First Class'>First Class</option>
          </select>
        </PassengerControls>
      </PassengerRow>
    </PassengerDropdown>
  )
}

export default PassengerDropdownForm
