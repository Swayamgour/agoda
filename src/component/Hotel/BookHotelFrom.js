import React, { useState, useRef, useEffect } from 'react'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { enUS } from 'date-fns/locale'
import { styled } from '@mui/material/styles'
import { keyframes } from '@emotion/react'
import { useNavigate } from 'react-router-dom'


// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`

// Styled Components
const SearchContainer = styled('div')({
  // maxWidth: '900px',
  margin: '20px auto',
  position: 'relative',
  padding: '30px',
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '12px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  fontFamily: "'Poppins', sans-serif",
  '@media (max-width: 768px)': {
    margin: '10px auto'
  }
})

const SearchForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
})

const InputGroup = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '15px',
  // marginBottom: '20px',
  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr'
  }
})

const FormGroup = styled('div')({
  position: 'relative',
  '& label': {
    display: 'block',
    marginBottom: '8px',
    fontWeight: '500',
    color: '#2c3e50',
    fontSize: '14px'
  }
})

const InputField = styled('input')({
  width: '100%',
  padding: '14px 15px',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  fontSize: '16px',
  transition: 'all 0.3s ease',
  '&:focus': {
    outline: 'none',
    borderColor: '#3498db',
    boxShadow: '0 0 0 3px rgba(52, 152, 219, 0.2)'
  }
})

const DateDisplay = styled('div')({
  width: '100%',
  padding: '14px 15px',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  fontSize: '16px',
  cursor: 'pointer',
  background: '#fff',
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: '#3498db'
  }
})

const DateRangeContainer = styled('div')({
  position: 'absolute',
  top: '100%',
  left: '0',
  zIndex: '100',
  marginTop: '5px',
  animation: `${fadeIn} 0.3s ease-out`,
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  borderRadius: '8px',
  overflow: 'hidden'
})

const GuestDropdown = styled('div')({
  position: 'absolute',
  top: '100%',
  left: '0',
  zIndex: '100',
  width: '280px',
  marginTop: '5px',
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  padding: '20px',
  animation: `${fadeIn} 0.3s ease-out`
})

const GuestRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
  '&:last-child': {
    marginBottom: '0'
  }
})

const GuestLabel = styled('div')({
  '& h4': {
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '5px',
    color: '#2c3e50'
  },
  '& p': {
    fontSize: '14px',
    color: '#7f8c8d'
  }
})

const GuestControls = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '15px'
})

const ControlButton = styled('button')({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: '1px solid #3498db',
  background: 'transparent',
  color: '#3498db',
  fontSize: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: '#3498db',
    color: '#fff'
  },
  '&:disabled': {
    opacity: '0.5',
    cursor: 'not-allowed',
    '&:hover': {
      background: 'transparent',
      color: '#3498db'
    }
  }
})

const GuestCount = styled('div')({
  minWidth: '20px',
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: '500'
})

const Divider = styled('div')({
  height: '1px',
  background: '#e0e0e0',
  margin: '15px 0'
})

const SubmitButton = styled('button')({
  padding: '9px 12px',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
  background: 'linear-gradient(135deg, #3498db, #2c3e50)',
  position: 'absolute',
  bottom: '-25px',
  left: '50%',
  transform: 'translateX(-50%)'
  // transition: 'all 0.3s ease',
  // '&:hover': {
  //   transform: 'translateY(-2px)',
  //   boxShadow: '0 5px 15px rgba(52, 152, 219, 0.4)'
  // }
})

const TrainSearchForm = () => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [openDatePicker, setOpenDatePicker] = useState(false)
  const [openGuestPicker, setOpenGuestPicker] = useState(false)
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    seniors: 0
  })

  const navigate = useNavigate()

  const containerRef = useRef(null)

  useEffect(() => {
    function handleClickOutside (event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpenDatePicker(false)
        setOpenGuestPicker(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleDateSelect = ranges => {
    setDateRange([ranges.selection])
  }

  const updateGuestCount = (type, operation) => {
    setGuests(prev => {
      const newValue =
        operation === 'increase' ? prev[type] + 1 : Math.max(0, prev[type] - 1)
      return { ...prev, [type]: newValue }
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log({
      from,
      to,
      dateRange,
      guests
    })
    // Handle form submission logic
    navigate('/AllHotel')
  }

  return (
    <SearchContainer ref={containerRef}>
      <SearchForm onSubmit={handleSubmit}>
        <InputGroup>
          <FormGroup>
            <label>Search Location</label>
            <InputField
              type='text'
              value={from}
              onChange={e => setFrom(e.target.value)}
              placeholder='Enter city property and location '
            />
          </FormGroup>

          {/* <FormGroup>
            <label>To Station</label>
            <InputField
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Enter arrival station"
            />
          </FormGroup> */}

          <FormGroup>
            <label>Travel Date</label>
            <DateDisplay onClick={() => setOpenDatePicker(!openDatePicker)}>
              {format(dateRange[0].startDate, 'EEE, MMM d')}
            </DateDisplay>
            {openDatePicker && (
              <DateRangeContainer>
                <DateRange
                  editableDateInputs={true}
                  onChange={handleDateSelect}
                  moveRangeOnFirstSelection={false}
                  ranges={dateRange}
                  locale={enUS}
                  minDate={new Date()}
                />
              </DateRangeContainer>
            )}
          </FormGroup>

          <FormGroup>
            <label>Passengers</label>
            <DateDisplay onClick={() => setOpenGuestPicker(!openGuestPicker)}>
              {`${guests.adults} Adult${guests.adults !== 1 ? 's' : ''}`}
              {guests.children > 0 &&
                `, ${guests.children} Child${
                  guests.children !== 1 ? 'ren' : ''
                }`}
              {guests.seniors > 0 &&
                `, ${guests.seniors} Senior${guests.seniors !== 1 ? 's' : ''}`}
            </DateDisplay>
            {openGuestPicker && (
              <GuestDropdown>
                <GuestRow>
                  <GuestLabel>
                    <h4>Adults</h4>
                    <p>Age 18+</p>
                  </GuestLabel>
                  <GuestControls>
                    <ControlButton
                      onClick={() => updateGuestCount('adults', 'decrease')}
                      disabled={guests.adults <= 1}
                    >
                      -
                    </ControlButton>
                    <GuestCount>{guests.adults}</GuestCount>
                    <ControlButton
                      onClick={() => updateGuestCount('adults', 'increase')}
                    >
                      +
                    </ControlButton>
                  </GuestControls>
                </GuestRow>

                <Divider />

                <GuestRow>
                  <GuestLabel>
                    <h4>Children</h4>
                    <p>Ages 0-17</p>
                  </GuestLabel>
                  <GuestControls>
                    <ControlButton
                      onClick={() => updateGuestCount('children', 'decrease')}
                      disabled={guests.children <= 0}
                    >
                      -
                    </ControlButton>
                    <GuestCount>{guests.children}</GuestCount>
                    <ControlButton
                      onClick={() => updateGuestCount('children', 'increase')}
                    >
                      +
                    </ControlButton>
                  </GuestControls>
                </GuestRow>

                <Divider />

                <GuestRow>
                  <GuestLabel>
                    <h4>Seniors</h4>
                    <p>Age 60+</p>
                  </GuestLabel>
                  <GuestControls>
                    <ControlButton
                      onClick={() => updateGuestCount('seniors', 'decrease')}
                      disabled={guests.seniors <= 0}
                    >
                      -
                    </ControlButton>
                    <GuestCount>{guests.seniors}</GuestCount>
                    <ControlButton
                      onClick={() => updateGuestCount('seniors', 'increase')}
                    >
                      +
                    </ControlButton>
                  </GuestControls>
                </GuestRow>
              </GuestDropdown>
            )}
          </FormGroup>
        </InputGroup>

        <SubmitButton type='submit'>Search Hotel</SubmitButton>
      </SearchForm>
    </SearchContainer>
  )
}

export default TrainSearchForm
