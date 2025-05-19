import './App.css'
// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header/Header'
import Footer from './component/Footer'
import Home from './component/Home/Home'
import AllHotel from './component/Hotel/AllHotel'
import Layout from './Layout'
import HotelDetail from './component/Hotel/HotelDetail'
import ContactPage from './component/pages/ContactPage'
import AboutPage from './component/pages/AboutPage'
import FlightBookingPage from './component/flight/FlightBookingPage'
// import BookingConfirmation from './component/pages/BookingConfirmation'
import CabBookingFilter from './component/car/CabBookingFilter'
import TrainDashboard from './component/Train/TrainDashboard'
import ProfilePage from './component/pages/ProfilePage'
import BookingConfirmation from './component/flight/BookingConfirmation'
import BookingReview from './component/Hotel/BookingReview'
import HotelBookingPaymentPage from './component/Hotel/HotelBookingPaymentPage'
import CarBookingReview from './component/car/CarBookingReview'
import BookingDetails from './component/car/BookingDetails'
import PassengerDetails from './component/Train/PassengerDetails'
import BusBooking from './component/BusBooking/BusBooking'
import BusBookingDetail from './component/BusBooking/BusBookingDetail'
import ScrollToTop from './component/ScrollToTop'
// import FlightBookingPage from './component/pages/FlightBookingPage'

function App () {
  return (
    //

    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path='/Agota' element={<Home />} />
          <Route path='/AllHotel' element={<AllHotel />} />
          <Route path='/HotelDetail' element={<HotelDetail />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/About' element={<AboutPage />} />
          <Route path='/FlightBooking' element={<FlightBookingPage />} />
          <Route
            path='/BookingConfirmation'
            element={<BookingConfirmation />}
          />
          <Route path='/CabBookingFilter' element={<CabBookingFilter />} />
          <Route path='/TrainDashboard' element={<TrainDashboard />} />
          <Route path='/Profile' element={<ProfilePage />} />
          <Route path='/BookingReview' element={<BookingReview />} />
          <Route path='/PaymentDetail' element={<HotelBookingPaymentPage />} />
          <Route path='/CarBooking' element={<CarBookingReview />} />
          <Route path='/CarBookingDetail' element={<BookingDetails />} />
          <Route path='/PassengerDetails' element={<PassengerDetails />} />
          <Route path='/BusBooking' element={<BusBooking />} />
          <Route path='/BusBookingDetail' element={<BusBookingDetail />} />
        </Routes>
      </Layout>
    </>
    // </Layout>
  )
}

export default App
