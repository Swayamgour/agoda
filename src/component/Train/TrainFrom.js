// import React from "react";

// function TrainFrom() {
//   return <div>TrainFrom</div>;
// }

// export default TrainFrom;

import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { enUS } from 'date-fns/locale'
import { Calendar } from 'react-date-range'
import { useNavigate } from 'react-router-dom'

function TrainFrom () {
  const navigate = useNavigate()
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

  const handelClick = () => {
    navigate('/TrainDashboard')
  }

  return (
    <div className='mainSearch -w-900 z-2 bg-white  py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1 '>
      <div className='button-grid items-center'>
        <div className='searchMenu-loc  lg:py-20 lg:px-0 js-form-dd js-liverSearch'>
          <div data-x-dd-click='searchMenu-loc'>
            <h4 className='text-15 fw-500 ls-2 lh-16'>From</h4>
            <div className='text-15 text-light-1 ls-2 lh-16'>
              <input
                autoComplete='off'
                type='search'
                placeholder='From'
                className='js-search js-dd-focus'
              />
            </div>
          </div>
        </div>

        <div className='searchMenu-loc  lg:py-20 lg:px-0 js-form-dd js-liverSearch'>
          <div data-x-dd-click='searchMenu-loc'>
            <h4 className='text-15 fw-500 ls-2 lh-16'>To</h4>
            <div className='text-15 text-light-1 ls-2 lh-16'>
              <input
                autoComplete='off'
                type='search'
                placeholder='To'
                className='js-search js-dd-focus'
              />
            </div>
          </div>
        </div>

        <div className='searchMenu-date  lg:py-20 px-6 lg:py-5 lg:px-0 relative'>
          <div
            onClick={() => {
              // setIsOpen(!isOpen)
              setOpen(!open)
            }}
            style={{ cursor: 'pointer' }}
            // className='cursor-pointer'
          >
            <h4 className='text-15 fw-500 ls-2 lh-16'>Date</h4>
            <div className='capitalize text-15 text-light-1 ls-2 lh-16'>
              <span className='js-first-date'>
                {format(state[0].startDate, 'EEE d MMM')}
              </span>
            </div>
          </div>

          {open && (
            <div className='absolute z-50 bg-white shadow-lg mt-4 rounded-lg'>
              <Calendar
                date={state[0].startDate}
                onChange={date => {
                  setState([{ ...state[0], startDate: date, endDate: date }])
                  setOpen(false) // Close after selection
                }}
                locale={enUS}
              />
            </div>
          )}
        </div>

        <div className='button-item'>
          <button
            onClick={() => handelClick()}
            className='mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1'
          >
            <i className='icon-search text-20 mr-10'></i>
            Search Train
          </button>
        </div>
      </div>
    </div>
  )
}

export default TrainFrom
