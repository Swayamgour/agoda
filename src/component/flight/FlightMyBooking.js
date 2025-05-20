// FlightMyBooking.jsx
import React, { useState } from 'react';
import styles from '../../style/FlightMyBooking.module.css';

const FlightMyBooking = () => {
  // Sample booking data with multiple flights
  const bookings = [
    {
      bookingId: 'BK12345678',
      date: 'May 25, 2023',
      status: 'Confirmed',
      flight: {
        number: 'AI202',
        airline: 'Air India',
        departure: {
          city: 'New Delhi',
          airport: 'DEL',
          time: '08:30',
          date: 'May 25, 2023',
          timestamp: new Date('2023-05-25T08:30:00').getTime()
        },
        arrival: {
          city: 'Mumbai',
          airport: 'BOM',
          time: '11:00',
          date: 'May 25, 2023',
          timestamp: new Date('2023-05-25T11:00:00').getTime()
        },
        duration: '2h 30m',
        class: 'Economy',
        price: '₹7,850'
      },
      passengers: [
        { name: 'Rahul Sharma', seat: '12A' },
        { name: 'Priya Sharma', seat: '12B' }
      ],
      payment: {
        method: 'Credit Card',
        lastDigits: '•••• 4567',
        amount: '₹15,700',
        date: 'May 20, 2023'
      }
    },
    {
      bookingId: 'BK87654321',
      date: 'June 15, 2023',
      status: 'Confirmed',
      flight: {
        number: 'SG456',
        airline: 'SpiceJet',
        departure: {
          city: 'Mumbai',
          airport: 'BOM',
          time: '14:15',
          date: 'June 15, 2023',
          timestamp: new Date('2023-06-15T14:15:00').getTime()
        },
        arrival: {
          city: 'Bangalore',
          airport: 'BLR',
          time: '16:30',
          date: 'June 15, 2023',
          timestamp: new Date('2023-06-15T16:30:00').getTime()
        },
        duration: '2h 15m',
        class: 'Business',
        price: '₹12,500'
      },
      passengers: [
        { name: 'Rahul Sharma', seat: '4C' }
      ],
      payment: {
        method: 'UPI',
        lastDigits: '•••• 7890',
        amount: '₹12,500',
        date: 'June 10, 2023'
      }
    },
    {
      bookingId: 'BK11223344',
      date: 'April 10, 2023',
      status: 'Completed',
      flight: {
        number: 'UK789',
        airline: 'Vistara',
        departure: {
          city: 'Delhi',
          airport: 'DEL',
          time: '10:45',
          date: 'April 10, 2023',
          timestamp: new Date('2023-04-10T10:45:00').getTime()
        },
        arrival: {
          city: 'Goa',
          airport: 'GOI',
          time: '13:30',
          date: 'April 10, 2023',
          timestamp: new Date('2023-04-10T13:30:00').getTime()
        },
        duration: '2h 45m',
        class: 'Premium Economy',
        price: '₹9,200'
      },
      passengers: [
        { name: 'Rahul Sharma', seat: '8D' },
        { name: 'Priya Sharma', seat: '8E' }
      ],
      payment: {
        method: 'Debit Card',
        lastDigits: '•••• 1234',
        amount: '₹18,400',
        date: 'April 5, 2023'
      }
    }
  ];

  const [filter, setFilter] = useState('all'); // 'all', 'upcoming', 'past'
  const now = new Date().getTime();

  const filteredBookings = bookings.filter(booking => {
    if (filter === 'upcoming') {
      return booking.flight.departure.timestamp > now;
    } else if (filter === 'past') {
      return booking.flight.departure.timestamp <= now;
    }
    return true;
  });

  const FlightCard = ({ booking }) => {
    const isPast = booking.flight.departure.timestamp <= now;
    
    return (
      <div className={`${styles.flightCard} ${isPast ? styles.pastFlight : ''}`}>
        <div className={styles.airlineHeader}>
          <div className={styles.airlineLogo}>
            <img src={`https://logo.clearbit.com/${booking.flight.airline.toLowerCase().replace(/\s+/g, '')}.com`} 
                 alt={booking.flight.airline} 
                 onError={(e) => { e.target.src = 'https://via.placeholder.com/50'; }} />
          </div>
          <div className={styles.airlineInfo}>
            <h3>{booking.flight.airline}</h3>
            <p>Flight {booking.flight.number} • {booking.flight.class}</p>
            <div className={styles.bookingMeta}>
              <span>Booking ID: {booking.bookingId}</span>
              <span>Status: {booking.status}</span>
            </div>
          </div>
        </div>

        <div className={styles.flightDetails}>
          <div className={styles.departure}>
            <div className={styles.time}>{booking.flight.departure.time}</div>
            <div className={styles.date}>{booking.flight.departure.date}</div>
            <div className={styles.airportCode}>{booking.flight.departure.airport}</div>
            <div className={styles.city}>{booking.flight.departure.city}</div>
          </div>

          <div className={styles.duration}>
            <div className={styles.durationLine}>
              <span className={styles.line}></span>
              <span className={styles.flightIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </span>
              <span className={styles.line}></span>
            </div>
            <div className={styles.durationText}>{booking.flight.duration}</div>
          </div>

          <div className={styles.arrival}>
            <div className={styles.time}>{booking.flight.arrival.time}</div>
            <div className={styles.date}>{booking.flight.arrival.date}</div>
            <div className={styles.airportCode}>{booking.flight.arrival.airport}</div>
            <div className={styles.city}>{booking.flight.arrival.city}</div>
          </div>
        </div>

        <div className={styles.detailsGrid}>
          <div className={styles.detailsCard}>
            <h3>Passenger Details</h3>
            <ul className={styles.passengerList}>
              {booking.passengers.map((passenger, index) => (
                <li key={index} className={styles.passengerItem}>
                  <span className={styles.passengerName}>{passenger.name}</span>
                  <span className={styles.passengerSeat}>Seat {passenger.seat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.detailsCard}>
            <h3>Payment Information</h3>
            <div className={styles.paymentDetails}>
              <div className={styles.paymentRow}>
                <span>Payment Method</span>
                <span>{booking.payment.method} ({booking.payment.lastDigits})</span>
              </div>
              <div className={styles.paymentRow}>
                <span>Total Amount</span>
                <span className={styles.paymentAmount}>{booking.payment.amount}</span>
              </div>
              <div className={styles.paymentRow}>
                <span>Payment Date</span>
                <span>{booking.payment.date}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.primaryButton}>
            {isPast ? 'View Receipt' : 'Download Ticket'}
          </button>
          <button className={styles.secondaryButton}>
            {isPast ? 'Book Again' : 'Email Itinerary'}
          </button>
          {isPast && (
            <button className={styles.reviewButton}>
              Leave Review
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Your Flight Bookings</h1>
        <p className={styles.subtitle}>View and manage your upcoming and past flights</p>
      </header>

      <div className={styles.filterControls}>
        <button 
          className={`${styles.filterButton} ${filter === 'all' ? styles.active : ''}`}
          onClick={() => setFilter('all')}
        >
          All Flights
        </button>
        <button 
          className={`${styles.filterButton} ${filter === 'upcoming' ? styles.active : ''}`}
          onClick={() => setFilter('upcoming')}
        >
          Upcoming
        </button>
        <button 
          className={`${styles.filterButton} ${filter === 'past' ? styles.active : ''}`}
          onClick={() => setFilter('past')}
        >
          Past Flights
        </button>
      </div>

      {filteredBookings.length === 0 ? (
        <div className={styles.noResults}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z" clipRule="evenodd" />
          </svg>
          <h3>No {filter === 'all' ? '' : filter} flights found</h3>
          <p>{filter === 'upcoming' ? 'You have no upcoming flights booked' : 
             filter === 'past' ? 'You have no past flights in your history' : 
             'You have no flight bookings yet'}</p>
          {filter !== 'all' && (
            <button 
              className={styles.primaryButton}
              onClick={() => setFilter('all')}
            >
              View All Flights
            </button>
          )}
        </div>
      ) : (
        <div className={styles.bookingsList}>
          {filteredBookings.map((booking, index) => (
            <FlightCard key={index} booking={booking} />
          ))}
        </div>
      )}

      <div className={styles.helpSection}>
        <h3>Need Help?</h3>
        <p>Contact our customer support at +91-1234567890 or email support@flightbookings.com</p>
      </div>
    </div>
  );
};

export default FlightMyBooking;