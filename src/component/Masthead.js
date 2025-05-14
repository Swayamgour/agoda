import React, { useState, useEffect } from 'react'
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
// import { addYears } from 'date-fns'
import { enUS } from 'date-fns/locale'
import BookHotel from './Hotel/BookHotelFrom'
import FlightBookingForm from './flight/FlightBookingForm'
import CabBookingForm from './car/CabBookingForm'
import { useNavigate } from 'react-router-dom'
import TrainIcon from '@mui/icons-material/Train'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import FlightIcon from '@mui/icons-material/Flight'
import KingBedIcon from '@mui/icons-material/KingBed'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import { motion } from 'framer-motion'
import ScrollFadeIn from './scrollview/ScrollFadeIn'
import TrainFrom from './Train/TrainFrom'
import BusBookingForm from './BusBooking/BusBookingForm'

const Masthead = () => {
  const [selectTab, setSelectTab] = useState(1)
  const navigate = useNavigate()
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  const tabs = [
    { id: 7, label: 'Flights', icon: <FlightIcon /> },
    { id: 1, label: 'Hotel', icon: <KingBedIcon /> },
    { id: 5, label: 'Car rental', icon: <DirectionsCarIcon /> },
    { id: 8, label: 'Train', icon: <TrainIcon /> },
    { id: 9, label: 'Bus', icon: <AirportShuttleIcon /> }

    // { id: 2, label: 'Contact', icon: 'icon-contact' },
    // { id: 3, label: 'About', icon: 'icon-about' }
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

  useEffect(() => {
    // Once shown, set first load to false after mount
    const timer = setTimeout(() => {
      setIsFirstLoad(false)
    }, 500) // Let the animation play before disabling it

    return () => clearTimeout(timer)
  }, [])

  const animationProps = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const renderComponent = () => {
    if (selectTab === 1) return <BookHotel />
    if (selectTab === 7) return <FlightBookingForm />
    if (selectTab === 5) return <CabBookingForm />
    if (selectTab === 8) return <TrainFrom />
    if (selectTab === 9) return <BusBookingForm />
    return null
  }

  return (
    <section className='masthead -type-2 js-mouse-move-container'>
      <div className='masthead__bg bg-dark-3'>
        <img src='/images/download.webp' alt='image' />
      </div>
      <div
        // style={{ position: 'sticky', top: '0px', zIndex: '990000099' }}
        className='container'
      >
        <div className='masthead__tabs'>
          <div className='tabs__controls d-flex items-center'>
            {tabs.map(tab => (
              <div key={tab.id}>
                <button
                  onClick={() => handelSelectTab(tab)}
                  className={`tabs__button px-20 py-10 sm:px-20 sm:py-15 rounded-4 fw-600 text-white  ${
                    selectTab === tab.id ? 'isActive' : ''
                  }`}
                >
                  <i className={`${tab.icon} text-20 mr-10 sm:mr-5`}>
                    {' '}
                    {tab.icon}
                  </i>
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

              {/* {selectTab === 1 && <BookHotel />}
              {selectTab === 7 && <FlightBookingForm />}
              {selectTab === 5 && <CabBookingForm />} */}
            </div>

            <div className='col-xl-7'>
              {isFirstLoad ? (
                // <motion.div {...animationProps}></motion.div>
                <ScrollFadeIn>{renderComponent()} </ScrollFadeIn>
              ) : (
                renderComponent()
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Masthead
