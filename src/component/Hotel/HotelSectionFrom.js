import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { enUS } from 'date-fns/locale'

function HotelSectionFrom () {
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
  return (
    <div
      style={{ marginTop: '100px' }}
      className='mainSearch  z-2 bg-white-tran  py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1 '
    >
      <div className='hotelBookingFrom'>
        <div className='searchMenu-loc   lg:px-0 js-form-dd js-liverSearch'>
          <div data-x-dd-click='searchMenu-loc'>
            <h4 className='text-15 fw-500 ls-2 lh-16'>Location</h4>
            <div className='text-15 text-light-1 ls-2 lh-16'>
              <input
                autoComplete='off'
                type='search'
                placeholder='Where are you going?'
                className='js-search js-dd-focus'
              />
            </div>
          </div>

          <div className='searchMenu-loc__field shadow-2 js-popup-window'>
            <div className='bg-white  py-30 sm:px-0 sm:py-15 rounded-4'>
              <div className='y-gap-5 js-results'>
                <div>
                  <button className='-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option'>
                    <div className='d-flex'>
                      <div className='icon-location-2 text-light-1 text-20 pt-4'></div>
                      <div className='ml-10'>
                        <div className='text-15 lh-12 fw-500 js-search-option-target'>
                          London
                        </div>
                        <div className='text-14 lh-12 text-light-1 mt-5'>
                          Greater London, United Kingdom
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                <div>
                  <button className='-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option'>
                    <div className='d-flex'>
                      <div className='icon-location-2 text-light-1 text-20 pt-4'></div>
                      <div className='ml-10'>
                        <div className='text-15 lh-12 fw-500 js-search-option-target'>
                          New York
                        </div>
                        <div className='text-14 lh-12 text-light-1 mt-5'>
                          New York State, United States
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                <div>
                  <button className='-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option'>
                    <div className='d-flex'>
                      <div className='icon-location-2 text-light-1 text-20 pt-4'></div>
                      <div className='ml-10'>
                        <div className='text-15 lh-12 fw-500 js-search-option-target'>
                          Paris
                        </div>
                        <div className='text-14 lh-12 text-light-1 mt-5'>
                          France
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                <div>
                  <button className='-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option'>
                    <div className='d-flex'>
                      <div className='icon-location-2 text-light-1 text-20 pt-4'></div>
                      <div className='ml-10'>
                        <div className='text-15 lh-12 fw-500 js-search-option-target'>
                          Madrid
                        </div>
                        <div className='text-14 lh-12 text-light-1 mt-5'>
                          Spain
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                <div>
                  <button className='-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option'>
                    <div className='d-flex'>
                      <div className='icon-location-2 text-light-1 text-20 pt-4'></div>
                      <div className='ml-10'>
                        <div className='text-15 lh-12 fw-500 js-search-option-target'>
                          Santorini
                        </div>
                        <div className='text-14 lh-12 text-light-1 mt-5'>
                          Greece
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='searchMenu-date px-6 lg:py-5 lg:px-0 relative'>
          <div
            onClick={() => {
              // setIsOpen(!isOpen)
              setOpen(!open)
            }}
            style={{ cursor: 'pointer' }}
            // className='cursor-pointer'
          >
            <h4 className='text-15 fw-500 ls-2 lh-16'>Check in - Check out</h4>
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
        </div>

        <div className='searchMenu-guests  lg:px-0'>
          <div
            onClick={() => {
              setIsOpen(!isOpen)
              // setOpen(!open)/
            }}
            style={{ cursor: 'pointer' }}
          >
            <h4 className='text-15 fw-500 ls-2 lh-16'>Guest & Rooms</h4>
            <div className='text-15 text-light-1 ls-2 lh-16'>
              <span>{guests.adults}</span> adults -
              <span>{guests.children}</span> children -
              <span>{guests.rooms}</span> room
            </div>
          </div>

          {isOpen && (
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
          )}
        </div>
        <div className='button-item'>
          <button className='mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1'>
            <i className='icon-search text-20 mr-10'></i>
            Search
          </button>
        </div>
      </div>
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
export default HotelSectionFrom
