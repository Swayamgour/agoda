import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { styled } from '@mui/material/styles'
import {
  Flight as FlightIcon,
  KingBed as HotelIcon,
  DirectionsCar as CarIcon,
  Train as TrainIcon,
  AirportShuttle as BusIcon
} from '@mui/icons-material'
import BookHotel from './Hotel/BookHotelFrom'
import FlightBookingForm from './flight/FlightBookingForm'
import CabBookingForm from './car/CabBookingForm'
import TrainFrom from './Train/TrainFrom'
import BusBookingForm from './BusBooking/BusBookingForm'
import ScrollFadeIn from './scrollview/ScrollFadeIn'

// Styled Components
const MastheadContainer = styled('section')({
  position: 'relative',
  overflow: 'hidden',
  // background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))',
  paddingBottom: '80px',
  '& img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1
  }
})

const TabsContainer = styled('div')({
  position: 'sticky',
  top: 0,
  zIndex: 100,
  background: 'rgba(0, 0, 0, 0.7)',
  backdropFilter: 'blur(10px)',
  padding: '10px 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
})

const TabsWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  overflowX: 'auto',
  padding: '0 10px',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  '@media (max-width: 768px)': {
    justifyContent: 'flex-start'
  }
})

const TabButton = styled('button')(({ active }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 24px',
  borderRadius: '30px',
  fontWeight: 600,
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  whiteSpace: 'nowrap',
  background: active ? 'rgba(255, 193, 7, 0.9)' : 'rgba(255, 255, 255, 0.1)',
  color: active ? '#000' : '#fff',
  '&:hover': {
    background: active ? 'rgba(255, 193, 7, 1)' : 'rgba(255, 255, 255, 0.2)'
  },
  '& svg': {
    marginRight: '8px',
    fontSize: '20px'
  }
}))

const ContentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column-reverse',
  alignItems: 'center',
  padding: '40px 20px',
  '@media (min-width: 992px)': {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    padding: '80px 20px'
  }
})

const TextContent = styled('div')({
  maxWidth: '600px',
  marginBottom: '40px',
  '@media (min-width: 992px)': {
    marginBottom: 0,
    paddingRight: '40px'
  }
})

const Title = styled('h1')({
  fontSize: '3.5rem',
  fontWeight: 700,
  color: '#fff',
  lineHeight: 1.2,
  marginBottom: '20px',
  '@media (max-width: 768px)': {
    fontSize: '2.5rem'
  }
})

const Highlight = styled('span')({
  color: '#FFC107',
  display: 'inline-block'
})

const Subtitle = styled('p')({
  fontSize: '1.2rem',
  color: 'rgba(255, 255, 255, 0.9)',
  lineHeight: 1.6
})

const FormContainer = styled('div')({
  width: '100%',
  // maxWidth: '600px',
  // background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '12px',
  padding: '10px 20px',
  // boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
  minHeight: '300px',
  '@media (max-width: 768px)': {
    padding: '20px'
  }
})

const Masthead = () => {
  const [selectTab, setSelectTab] = useState(7) // Default to Flights
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const navigate = useNavigate()

  const tabs = [
    { id: 7, label: 'Flights', icon: <FlightIcon /> },
    { id: 1, label: 'Hotels', icon: <HotelIcon /> },
    { id: 5, label: 'Car Rentals', icon: <CarIcon /> },
    { id: 8, label: 'Trains', icon: <TrainIcon /> },
    { id: 9, label: 'Buses', icon: <BusIcon /> }
  ]

  const handleSelectTab = tab => {
    if (tab.id === 2) {
      navigate('/ContactUS')
    } else if (tab.id === 3) {
      navigate('/About')
    } else {
      setSelectTab(tab.id)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFirstLoad(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const renderComponent = () => {
    switch (selectTab) {
      case 1:
        return <BookHotel />
      case 7:
        return <FlightBookingForm />
      case 5:
        return <CabBookingForm />
      case 8:
        return <TrainFrom />
      case 9:
        return <BusBookingForm />
      default:
        return null
    }
  }

  return (
    <MastheadContainer style={{ marginTop: '70px' }} className='masthead'>
      <img src='/images/download.webp' alt='Travel background' />

      <TabsContainer>
        <TabsWrapper>
          {tabs.map(tab => (
            <TabButton
              key={tab.id}
              active={selectTab === tab.id}
              onClick={() => handleSelectTab(tab)}
            >
              {tab.icon}
              {tab.label}
            </TabButton>
          ))}
        </TabsWrapper>
      </TabsContainer>

      <ContentContainer>
        {/* <TextContent>
          <Title>
            <Highlight>Where Would</Highlight>
            <br />
            You Like To Go?
          </Title>
          <Subtitle>
            Discover and book amazing travel experiences around the world with
            just a few clicks.
          </Subtitle>
        </TextContent> */}

        <FormContainer>
          <AnimatePresence mode='wait'>
            <motion.div
              key={selectTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {isFirstLoad ? (
                <ScrollFadeIn>{renderComponent()}</ScrollFadeIn>
              ) : (
                renderComponent()
              )}
            </motion.div>
          </AnimatePresence>
        </FormContainer>
      </ContentContainer>
    </MastheadContainer>
  )
}

export default Masthead
