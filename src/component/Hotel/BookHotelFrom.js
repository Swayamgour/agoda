import React, { useEffect, useRef, useState } from 'react'
import '../../style/TrainSearchForm.css'

import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { enUS } from 'date-fns/locale'

const HotelSearchForm = () => {
  const [location, setLocation] = useState('')
  const [dates, setDates] = useState('Thu 8 May - Thu 8 May')
  // const [guests, setGuests] = useState('2 adults - 1 children - 1 room')

  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [date, setDate] = useState('Thu 8 May')
  const [returnDate, setReturnDate] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission logic here
    console.log({ location, dates, guests })
  }

  const [open, setOpen] = useState(false)
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])

  const [isOpen, setIsOpen] = useState(false) // dropdown visibility

  const [guests, setGuests] = useState({
    adults: 2,
    children: 1,
    rooms: 1
  })

  const containerRef = useRef(null)

  // useEffect

  useEffect(() => {
    function handleClickOutside (event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSelect = ranges => {
    setState([ranges.selection])
    console.log('Start:', ranges.selection.startDate)
    console.log('End:', ranges.selection.endDate)
  }

  const updateCount = (type, direction) => {
    setGuests(prev => {
      const newValue =
        direction === 'up' ? prev[type] + 1 : Math.max(0, prev[type] - 1) // prevent negative values
      return { ...prev, [type]: newValue }
    })
  }

  return (
    <div className='flight-booking-container bg-white-tran'>
      <form onSubmit={handleSubmit} className='flight-booking-form'>
        <div className='input-group'>
          <div className='form-group'>
            <label>Location</label>
            <input
              type='text'
              value={from}
              onChange={e => setFrom(e.target.value)}
              placeholder='Enter Your Location'
              className='inputSearch'
            />
          </div>

          <div
            className='form-group'
            onClick={() => {
              // setIsOpen(!isOpen)
              setOpen(!open)
            }}
          >
            <label>Check in - Check out</label>
            <div className='capitalize text-15 text-light-1 ls-2 lh-16'>
              <span className='js-first-date'>
                {format(state[0].startDate, 'EEE d MMM')}
              </span>
              {' - '}
              <span className='js-last-date'>
                {format(state[0].endDate, 'EEE d MMM')}
              </span>
            </div>
          </div>

          {open && (
            <div className='absolute z-50 bg-white shadow-lg mt-4 rounded-lg'>
              <DateRange
                editableDateInputs={true}
                onChange={handleSelect}
                moveRangeOnFirstSelection={false}
                ranges={state}
                locale={enUS}
              />
            </div>
          )}

          <div
            className='form-group '
            onClick={() => {
              setIsOpen(!isOpen)
              // setOpen(!open)/
            }}
          >
            <label>Guest & Rooms</label>
            <div className='text-15 text-light-1 ls-2 lh-16'>
              <span>{guests.adults}</span> adults -
              <span>{guests.children}</span> children -
              <span>{guests.rooms}</span> room
            </div>
          </div>

          {isOpen && (
            <div className='absolute z-50 '>
              <div className='searchMenu-guests__field shadow-2'>
                <div className='bg-white  py-10 px-20 rounded-4'>
                  <GuestRow
                    label='Adults'
                    value={guests.adults}
                    onDecrease={() => updateCount('adults', 'down')}
                    onIncrease={() => updateCount('adults', 'up')}
                  />

                  <div className='border-top-light mt-24 mb-24'></div>

                  <GuestRow
                    label='Children'
                    subtext='Ages 0 - 17'
                    value={guests.children}
                    onDecrease={() => updateCount('children', 'down')}
                    onIncrease={() => updateCount('children', 'up')}
                  />

                  <div className='border-top-light mt-24 mb-24'></div>

                  <GuestRow
                    label='Rooms'
                    value={guests.rooms}
                    onDecrease={() => updateCount('rooms', 'down')}
                    onIncrease={() => updateCount('rooms', 'up')}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          type='submit'
          className='mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1'
        >
          Search
        </button>
      </form>
    </div>
  )
}

const GuestRow = ({ label, subtext, value, onIncrease, onDecrease }) => (
  <div className='row y-gap-10 justify-between items-center'>
    <div className='col-auto'>
      <div className='text-15 fw-500'>{label}</div>
      {subtext && <div className='text-14 text-light-1 mt-5'>{subtext}</div>}
    </div>
    <div className='col-auto'>
      <div className='d-flex items-center'>
        <button
          className='button -outline-blue-1 text-blue-1 size-38 rounded-4'
          onClick={onDecrease}
        >
          <i className='icon-minus text-12'></i>
        </button>
        <div className='flex-center size-20 ml-15 mr-15'>
          <div className='text-15'>{value}</div>
        </div>
        <button
          className='button -outline-blue-1 text-blue-1 size-38 rounded-4'
          onClick={onIncrease}
        >
          <i className='icon-plus text-12'></i>
        </button>
      </div>
    </div>
  </div>
)

export default HotelSearchForm
