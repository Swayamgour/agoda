import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './component/Home/Home'
import Layout from './Layout'
import HotelDetail from './component/Hotel/HotelDetail'
import ContactPage from './component/pages/ContactPage'
import AboutPage from './component/pages/AboutPage'
import CabBookingFilter from './component/car/CabBookingFilter'
import TrainDashboard from './component/Train/TrainDashboard'
import BookingConfirmation from './component/flight/BookingConfirmation'
import BookingReview from './component/Hotel/BookingReview'
import HotelBookingPaymentPage from './component/Hotel/HotelBookingPaymentPage'
import CarBookingReview from './component/car/CarBookingReview'
import BookingDetails from './component/car/BookingDetails'
import PassengerDetails from './component/Train/PassengerDetails'
import BusBooking from './component/BusBooking/BusBooking'
import BusBookingDetail from './component/BusBooking/BusBookingDetail'
import ScrollToTop from './component/ScrollToTop'
import MyOrderHotel from './component/Hotel/MyOrderHotel'
import CarOrderPage from './component/car/CarOrderPage'
import TrainOrderPage from './component/Train/TrainOrderPage'
import BusMyBookings from './component/BusBooking/BusMyBookings'
import FlightMyBooking from './component/flight/FlightMyBooking'
import TermsAndConditions from './component/pages/TermsAndConditions'
import PrivacyPolicy from './component/pages/PrivacyPolicy'
import ProfilePage from './component/profile/ProfilePage'
import FlightBookingDashboard from './component/flight/FlightBookingDashboard'
import HotelBookingDashboard from './component/Hotel/HotelBookingDashboard'

function App () {
  return (
    //

    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path='/Agota' element={<Home />} />
          <Route path='/AllHotel' element={<HotelBookingDashboard />} />
          <Route path='/HotelDetail' element={<HotelDetail />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/About' element={<AboutPage />} />
          <Route path='/FlightBookingDashboard' element={<FlightBookingDashboard />} />
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
          <Route path='/MyOrderHotel' element={<MyOrderHotel />} />
          <Route path='/CarOrderPage' element={<CarOrderPage />} />
          <Route path='/TrainOrderPage' element={<TrainOrderPage />} />
          <Route path='/BusMyBookings' element={<BusMyBookings />} />
          <Route path='/FlightMyBooking' element={<FlightMyBooking />} />
          <Route path='/TermsAndConditions' element={<TermsAndConditions />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
        </Routes>
      </Layout>
    </>
    // </Layout>
  )
}

export default App
