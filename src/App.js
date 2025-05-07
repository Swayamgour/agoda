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
// import FlightBookingPage from './component/pages/FlightBookingPage'

function App () {
  return (
    // <Router>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AllHotel' element={<AllHotel />} />
        <Route path='/HotelDetail' element={<HotelDetail />} />
        <Route path='/ContactUS' element={<ContactPage />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/FlightBooking' element={<FlightBookingPage />} />
        <Route path='/BookingConfirmation' element={<BookingConfirmation />} />
        <Route path='/CabBookingFilter' element={<CabBookingFilter />} />
        <Route path='/TrainDashboard' element={<TrainDashboard />} />
        <Route path='/Profile' element={<ProfilePage />} />
        {/* <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </Layout>
    // </Router>
  )
}

export default App
