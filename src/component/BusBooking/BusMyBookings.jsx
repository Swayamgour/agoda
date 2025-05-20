import React, { useState } from 'react'
import styles from '../../style/BusMyBookings.module.css'
import MyOrderBookingCard from './MyOrderBookingCard'
import FilterTabs from './FilterTabs'
// import BookingCard from '../../components/BookingCard/BookingCard'
// import EmptyState from '../../components/EmptyState/EmptyState'
// import FilterTabs from '../../components/FilterTabs/FilterTabs'

const BusMyBookings = () => {
  const [activeTab, setActiveTab] = useState('upcoming')

  // Sample booking data
  const bookings = {
    upcoming: [
      {
        id: 'BUS123456',
        from: 'Mumbai',
        to: 'Pune',
        date: '2023-12-15',
        time: '08:00 AM',
        operator: 'Neeta Travels',
        busType: 'AC Sleeper',
        seats: ['A1', 'A2'],
        boardingPoint: 'Dadar East',
        droppingPoint: 'Wakad',
        fare: 1200,
        status: 'confirmed',
        bookingDate: '2023-11-20'
      },
      {
        id: 'BUS789012',
        from: 'Bangalore',
        to: 'Chennai',
        date: '2023-12-20',
        time: '10:30 PM',
        operator: 'SRS Travels',
        busType: 'Non-AC Seater',
        seats: ['B3'],
        boardingPoint: 'Majestic',
        droppingPoint: 'CMBT',
        fare: 800,
        status: 'confirmed',
        bookingDate: '2023-11-25'
      }
    ],
    completed: [
      {
        id: 'BUS345678',
        from: 'Delhi',
        to: 'Jaipur',
        date: '2023-11-10',
        time: '06:00 AM',
        operator: 'Zing Bus',
        busType: 'AC Seater',
        seats: ['C1', 'C2'],
        boardingPoint: 'ISBT Kashmere Gate',
        droppingPoint: 'Sindhi Camp',
        fare: 900,
        status: 'completed',
        bookingDate: '2023-10-28'
      }
    ],
    cancelled: []
  }

  return (
    <div className={styles.myBookingsContainer}>
      <div className={styles.header}>
        <h1>My Bookings</h1>
        <p>View and manage all your bus ticket bookings</p>
      </div>

      <FilterTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className={styles.bookingsList}>
        {bookings[activeTab].length > 0
          ? bookings[activeTab].map(booking => (
              <MyOrderBookingCard
                key={booking.id}
                booking={booking}
                type={activeTab}
              />
            ))
          : //   <EmptyState tab={activeTab} />
            ''}
      </div>
    </div>
  )
}

export default BusMyBookings
