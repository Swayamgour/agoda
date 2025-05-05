import './App.css'
// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './component/Header/Header'
import Footer from './component/Footer'
import Home from './component/Home/Home'
import AllHotel from './component/AllHotel'
import Layout from './Layout'
import HotelDetail from './component/HotelDetail'
import ContactPage from './component/ContactPage'
import AboutPage from './component/AboutPage'
import FlightBookingPage from './component/pages/FlightBookingPage'
import BookingConfirmation from './component/pages/BookingConfirmation'
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
        {/* <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} /> */}
      </Routes>
    </Layout>
    // </Router>
  )
}

export default App
