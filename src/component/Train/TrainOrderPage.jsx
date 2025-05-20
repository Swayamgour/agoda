import React, { useState } from 'react'
import styles from '../../style/TrainOrderPage.module.css'
import TrainOrderModal from './TrainOrderModal'
import PublicImage from '../../utils/PublicImage'
import { FaCalendarAlt, FaHistory, FaTrain } from 'react-icons/fa'

const TrainOrderPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('upcoming')

  // Sample train booking data
  const bookings = {
    upcoming: [
      {
        id: 'TRAIN-45678',
        trainNumber: 'TGV 6214',
        trainName: 'Paris to Lyon High-Speed',
        image: '/images/trainticket.jpg',
        journeyDate: '2023-08-20',
        departure: {
          station: 'Paris Gare de Lyon',
          time: '08:45'
        },
        arrival: {
          station: 'Lyon Part-Dieu',
          time: '10:30'
        },
        class: 'First Class',
        passengers: 2,
        seats: '14A, 14B',
        price: 189,
        status: 'confirmed',
        amenities: ['WiFi', 'Power Outlets', 'Food Service'],
        duration: '1h 45m'
      }
    ],
    past: [
      {
        id: 'TRAIN-78901',
        trainNumber: 'ICE 972',
        trainName: 'Berlin to Munich Express',
        image: '/images/trainticket.jpg',
        journeyDate: '2023-06-15',
        departure: {
          station: 'Berlin Hbf',
          time: '09:15'
        },
        arrival: {
          station: 'Munich Hbf',
          time: '13:45'
        },
        class: 'Business Class',
        passengers: 1,
        seats: '22C',
        price: 129,
        status: 'completed',
        amenities: ['WiFi', 'Quiet Zone', 'Bistro Car'],
        duration: '4h 30m'
      }
    ]
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className={styles.orderPage}>
      <header className={styles.header}>
        <h1>My Train Tickets</h1>
        <p className={styles.subtitle}>
          Manage your upcoming and past rail journeys
        </p>
      </header>

      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${
              activeTab === 'upcoming' ? styles.active : ''
            }`}
            onClick={() => setActiveTab('upcoming')}
          >
            <FaCalendarAlt className={styles.icon} />
            Upcoming Journeys
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === 'past' ? styles.active : ''
            }`}
            onClick={() => setActiveTab('past')}
          >
            <FaHistory className={styles.icon} />
            Journey History
          </button>
        </div>
      </div>

      <div className={styles.bookingsContainer}>
        {bookings[activeTab].length > 0 ? (
          bookings[activeTab].map(booking => (
            <div key={booking.id} className={styles.bookingCard}>
              <div className={styles.cardHeader}>
                {/* <div className={styles.trainImage}>
                  <PublicImage src={booking.image} alt={booking.trainName} />
                  <div className={styles.trainBadge}>{booking.class}</div>
                </div> */}
                <div className={styles.trainQuickInfo}>
                  <h3>{booking.trainName}</h3>
                  <p className={styles.trainNumber}>{booking.trainNumber}</p>
                </div>
              </div>

              <div className={styles.bookingDetails}>
                <div className={styles.journeySummary}>
                  <div className={styles.station}>
                    <span className={styles.time}>
                      {booking.departure.time}
                    </span>
                    <span className={styles.stationName}>
                      {booking.departure.station}
                    </span>
                  </div>
                  <div className={styles.journeyLine}>
                    <div className={styles.duration}>{booking.duration}</div>
                    <div className={styles.line}></div>
                  </div>
                  <div className={styles.station}>
                    <span className={styles.time}>{booking.arrival.time}</span>
                    <span className={styles.stationName}>
                      {booking.arrival.station}
                    </span>
                  </div>
                </div>

                <div className={styles.detailSection}>
                  <div className={styles.detailGrid}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Booking ID</span>
                      <span className={styles.detailValue}>{booking.id}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Travel Date</span>
                      <span className={styles.detailValue}>
                        {new Date(booking.journeyDate).toLocaleDateString(
                          'en-US',
                          {
                            weekday: 'short',
                            month: 'short',
                            day: 'numeric'
                          }
                        )}
                      </span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Passengers</span>
                      <span className={styles.detailValue}>
                        {booking.passengers}
                      </span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Seats</span>
                      <span className={styles.detailValue}>
                        {booking.seats}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.amenities}>
                  <h4>Onboard Features</h4>
                  <div className={styles.amenitiesList}>
                    {booking.amenities.map((amenity, index) => (
                      <span key={index} className={styles.amenityPill}>
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.bookingFooter}>
                <div className={styles.priceContainer}>
                  <span className={styles.priceLabel}>Total</span>
                  <span className={styles.priceValue}>€{booking.price}</span>
                </div>
                <div className={styles.statusContainer}>
                  <span
                    className={`${styles.status} ${styles[booking.status]}`}
                  >
                    {booking.status}
                  </span>
                </div>
                <div className={styles.actionButtons}>
                  <button
                    className={`${styles.button} ${styles.primaryButton}`}
                    onClick={openModal}
                  >
                    View Ticket
                  </button>
                  {activeTab === 'upcoming' && (
                    <button
                      className={`${styles.button} ${styles.secondaryButton}`}
                    >
                      Change Booking
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noBookings}>
            <div className={styles.noBookingsIllustration}>
              <FaTrain />
            </div>
            <h3>
              No {activeTab === 'upcoming' ? 'upcoming' : 'past'} journeys
            </h3>
            <p>
              You don't have any{' '}
              {activeTab === 'upcoming'
                ? 'upcoming train trips'
                : 'past train travel history'}{' '}
              to display
            </p>
            {activeTab === 'upcoming' && (
              <button className={styles.ctaButton}>Book Trains</button>
            )}
          </div>
        )}
      </div>

      {isModalOpen && (
        <TrainOrderModal
          booking={bookings[activeTab][0]}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default TrainOrderPage
