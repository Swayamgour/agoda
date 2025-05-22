import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { styled } from '@mui/material/styles'
import {
  Flight as FlightIcon,
  KingBed as HotelIcon,
  DirectionsCar as CarIcon,
  Train as TrainIcon,
  AirportShuttle as BusIcon,
  LocalOffer as OfferIcon
} from '@mui/icons-material'
import BookHotel from '../Hotel/BookHotelFrom'
import FlightBookingForm from '../flight/FlightBookingForm'
import CabBookingForm from '../car/CabBookingForm'
import TrainFrom from '../Train/TrainFrom'
import BusBookingForm from '../BusBooking/BusBookingForm'
import ScrollFadeIn from '../scrollview/ScrollFadeIn'
import PublicImage from '../../utils/PublicImage'

// Styled Components

const MastheadContainer = styled('section')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  // minHeight: '600px',
  minHeight: '500px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
  '& img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0,
    opacity: 0.7,
    mixBlendMode: 'overlay'
  }
  // [theme.breakpoints.up('md')]: {
  //   minHeight: '700px'
  // }
}))

const TabsContainer = styled('div')(({ theme }) => ({
  // position: 'sticky',
  // top: 0,
  // zIndex: 100,
  background: 'rgba(15, 23, 42, 0.98)',
  backdropFilter: 'blur(10px)',
  padding: '15px 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.25)'
}))

const TabButton = styled('button')(({ theme, active }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 24px',
  borderRadius: '30px',
  fontWeight: 600,
  fontSize: '16px',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  whiteSpace: 'nowrap',
  background: active
    ? theme.palette.secondary.main
    : 'rgba(255, 255, 255, 0.08)',
  color: active ? '#111827' : '#E5E7EB',
  boxShadow: active ? '0 4px 20px rgba(251, 191, 36, 0.3)' : 'none',
  // '&:hover': {
  //   background: active ? '#F59E0B' : 'rgba(255, 255, 255, 0.15)',
  //   transform: 'translateY(-1px)'
  // },
  '& svg': {
    marginRight: '10px',
    // fontSize: '20px',
    color: active ? '#111827' : '#FBBF24'
  }
}))

const HeroText = styled('div')(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '40px',
  maxWidth: '800px',
  padding: '0 20px',
  zIndex: 2
}))

const Title = styled(motion.h1)(({ theme }) => ({
  fontSize: '3.5rem',
  fontWeight: 800,
  color: '#F3F4F6',
  lineHeight: 1.2,
  marginBottom: '20px',
  textShadow: '0 2px 15px rgba(0, 0, 0, 0.5)',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem'
  }
}))

const Highlight = styled('span')(({ theme }) => ({
  color: theme.palette.secondary.main,
  background: 'linear-gradient(120deg, #FBBF24 0%, #F59E0B 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 900
}))

const Subtitle = styled(motion.p)(({ theme }) => ({
  fontSize: '1.25rem',
  color: '#D1D5DB',
  lineHeight: 1.6,
  marginBottom: '30px',
  maxWidth: '600px',
  marginLeft: 'auto',
  marginRight: 'auto'
}))

const SpecialOffer = styled(motion.div)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  background: 'rgba(251, 191, 36, 0.15)',
  backdropFilter: 'blur(5px)',
  padding: '10px 20px',
  borderRadius: '30px',
  color: '#FBBF24',
  fontWeight: 600,
  marginBottom: '25px',
  border: '1px solid rgba(251, 191, 36, 0.3)',
  '& svg': {
    marginRight: '10px',
    fontSize: '1.2rem'
  }
}))

const FormContainer = styled('div')(({ theme }) => ({
  width: '60%',
  maxWidth: '900px',
  // background: 'rgba(17, 24, 39, 0.85)',
  borderRadius: '16px',
  padding: '10px',
  minHeight: '600px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  // border: '1px solid rgba(255, 255, 255, 0.1)',
  // backdropFilter: 'blur(12px)',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '10px 0'
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    // background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    borderRadius: '16px 16px 0 0'
  }
}))

// const MastheadContainer = styled('section')(({ theme }) => ({
//   position: 'relative',
//   overflow: 'hidden',
//   minHeight: '600px',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   '& img': {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     zIndex: -1,
//     filter: 'brightness(0.7)'
//   },
//   [theme.breakpoints.up('md')]: {
//     minHeight: '700px'
//   }
// }))

const GradientOverlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background:
    'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)',
  zIndex: -1
})

// const TabsContainer = styled('div')(({ theme }) => ({
//   position: 'sticky',
//   top: 0,
//   zIndex: 100,
//   background: 'rgba(15, 23, 42, 0.9)',
//   backdropFilter: 'blur(10px)',
//   padding: '15px 0',
//   borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//   boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
// }))

const TabsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  overflowX: 'auto',
  padding: '0 20px',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  [theme.breakpoints.down('md')]: {
    justifyContent: 'flex-start',
    padding: '0 15px'
  }
}))

// const TabButton = styled('button')(({ theme, active }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: '12px 24px',
//   borderRadius: '30px',
//   fontWeight: 600,
//   fontSize: '16px',
//   border: 'none',
//   cursor: 'pointer',
//   transition: 'all 0.3s ease',
//   whiteSpace: 'nowrap',
//   background: active
//     ? theme.palette.secondary.main
//     : 'rgba(255, 255, 255, 0.1)',
//   color: active ? '#000' : '#fff',
//   boxShadow: active ? '0 4px 15px rgba(255, 193, 7, 0.3)' : 'none',
//   '&:hover': {
//     background: active
//       ? theme.palette.secondary.dark
//       : 'rgba(255, 255, 255, 0.2)',
//     transform: active ? 'translateY(-2px)' : 'none'
//   },
//   '& svg': {
//     marginRight: '10px',
//     fontSize: '20px'
//   },
//   [theme.breakpoints.down('sm')]: {
//     padding: '10px 18px',
//     fontSize: '14px',
//     '& svg': {
//       marginRight: '6px',
//       fontSize: '18px'
//     }
//   }
// }))

const ContentContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '0px 20px',
  position: 'relative',
  zIndex: 2,

  // 👇 Default for small screens (below 768px)
  flexDirection: 'column',

  // 👇 For large screens (768px and above, or whatever 'lg' is defined as)
  [theme.breakpoints.up('lg')]: {
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
    flexDirection: 'row' // or whatever layout you want on larger screens
  }
}))

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
    <MastheadContainer style={{ marginTop: '75px' }} className='masthead'>
      <PublicImage src='/images/download.webp' alt='Travel background' />
      <GradientOverlay />

      <TabsContainer>
        <TabsWrapper>
          {tabs.map(tab => (
            <motion.div
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TabButton
                active={selectTab === tab.id}
                onClick={() => handleSelectTab(tab)}
              >
                {tab.icon}
                {tab.label}
              </TabButton>
            </motion.div>
          ))}
        </TabsWrapper>
      </TabsContainer>

      <ContentContainer>
        <HeroText>
          <SpecialOffer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <OfferIcon />
            Limited Time: 20% Off First Booking
          </SpecialOffer>

          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Highlight>Discover Your</Highlight> Next Adventure
          </Title>

          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Book seamless travel experiences with our premium service and
            exclusive deals
          </Subtitle>
        </HeroText>

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
