import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
// import { addYears } from 'date-fns'
import { enUS } from 'date-fns/locale'
import BookHotel from './BookHotel'
import FlightBookingForm from './FlightBookingForm'
import CabBookingForm from './CabBookingForm'
import { useNavigate } from 'react-router-dom'

const Masthead = () => {
  const [selectTab, setSelectTab] = useState(1)
  const navigate = useNavigate()

  const tabs = [
    { id: 1, label: 'Hotel', icon: 'icon-bed' },
    { id: 7, label: 'Flights', icon: 'icon-tickets' },
    { id: 5, label: 'Car', icon: 'icon-car' },
    { id: 2, label: 'Contact', icon: 'icon-contact' },
    { id: 3, label: 'About', icon: 'icon-about' }
  ]

  const handelSelectTab = tab => {
    if (tab.id === 2) {
      navigate('/ContactUS')
      setSelectTab(tab.id)
    } else if (tab.id === 3) {
      navigate('/About')
      setSelectTab(tab.id)
    } else {
      setSelectTab(tab.id)
    }
  }

  return (
    <section className='masthead -type-2 js-mouse-move-container'>
      <div className='masthead__bg bg-dark-3'>
        <img src='/img/masthead/2/bg.png' alt='image' />
      </div>
      <div className='container'>
        <div className='masthead__tabs'>
          <div className='tabs__controls d-flex items-center'>
            {tabs.map(tab => (
              <div key={tab.id}>
                <button
                  onClick={() => handelSelectTab(tab)}
                  className={`tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 text-white  ${
                    selectTab === tab.id ? 'isActive' : ''
                  }`}
                >
                  <i className={`${tab.icon} text-20 mr-10 sm:mr-5`}></i>
                  {tab.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='masthead__content'>
          <div className='row y-gap-40'>
            <div className='col-xl-5'>
              <h1 className='z-2 text-60 lg:text-40 md:text-30 text-white pt-80 xl:pt-0'>
                <span className='text-yellow-1'>Where Would</span>
                <br />
                You Like To Go?
              </h1>

              <p className='z-2 text-white mt-20'>
                Checkout Beautiful Places Arround the World.
              </p>

              {selectTab === 1 && <BookHotel />}
              {selectTab === 7 && <FlightBookingForm />}
              {selectTab === 5 && <CabBookingForm />}
            </div>

            <div className='col-xl-7'>
              <div className='masthead__images'>
                <div>
                  <img
                    src='/img/masthead/2/1.png'
                    alt='image'
                    className='js-mouse-move'
                    data-move='30'
                  />
                </div>
                <div>
                  <img
                    src='/img/masthead/2/2.png'
                    alt='image'
                    className='js-mouse-move'
                    data-move='40'
                  />
                </div>
                <div>
                  <img
                    src='/img/masthead/2/3.png'
                    alt='image'
                    className='js-mouse-move'
                    data-move='50'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Masthead
