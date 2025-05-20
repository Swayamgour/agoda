import React, { useState } from 'react'
import styles from '../../style/CarOrderPage.module.css'
import CarOrderModal from './CarOrderModal'
import PublicImage from '../../utils/PublicImage'
import {
  FaCalendarAlt,
  FaHistory,
  FaStar,
  FaCalendarDay,
  FaCar
} from 'react-icons/fa'

const CarOrderPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('upcoming')

  // Sample car booking data
  const bookings = {
    upcoming: [
      {
        id: 'CAR-78901',
        carModel: 'Tesla Model 3',
        image: '/images/car.webp',
        rentalPeriod: {
          start: '2023-07-15',
          end: '2023-07-20'
        },
        pickupLocation: 'Los Angeles International Airport',
        dropoffLocation: 'San Francisco Downtown',
        price: 420,
        status: 'confirmed',
        features: ['Autopilot', 'Premium Sound', 'Free Supercharging'],
        rating: 4.9
      }
    ],
    past: [
      {
        id: 'CAR-23456',
        carModel: 'BMW X5',
        image: '/images/car.webp',

        rentalPeriod: {
          start: '2023-05-10',
          end: '2023-05-15'
        },
        pickupLocation: 'New York JFK Airport',
        dropoffLocation: 'New York JFK Airport',
        price: 680,
        status: 'completed',
        features: ['GPS Navigation', 'Leather Seats', 'Sunroof'],
        rating: 4.7
      }
    ]
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className={styles.orderPage}>
      <header className={styles.header}>
        <h1>My Car Rentals</h1>
        <p className={styles.subtitle}>
          Manage your upcoming and past car bookings
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
            Upcoming Rentals
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === 'past' ? styles.active : ''
            }`}
            onClick={() => setActiveTab('past')}
          >
            <FaHistory className={styles.icon} />
            Rental History
          </button>
        </div>
      </div>

      <div className={styles.bookingsContainer}>
        {bookings[activeTab] && bookings[activeTab].length > 0 ? (
          bookings[activeTab].map(booking => (
            <div key={booking.id} className={styles.bookingCard}>
              <div className={styles.cardHeader}>
                <div className={styles.carImage}>
                  <PublicImage src={booking.image} alt={booking.carModel} />
                  <div className={styles.carRating}>
                    <FaStar /> {booking.rating}
                  </div>
                </div>
                <div className={styles.carQuickInfo}>
                  <h3>{booking.carModel}</h3>
                  <p className={styles.rentalPeriod}>
                    <FaCalendarDay />{' '}
                    {new Date(booking.rentalPeriod.start).toLocaleDateString()}{' '}
                    - {new Date(booking.rentalPeriod.end).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className={styles.bookingDetails}>
                <div className={styles.detailSection}>
                  <h4>Booking Summary</h4>
                  <div className={styles.detailGrid}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Reservation #</span>
                      <span className={styles.detailValue}>{booking.id}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>
                        Pickup Location
                      </span>
                      <span className={styles.detailValue}>
                        {booking.pickupLocation}
                      </span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>
                        Dropoff Location
                      </span>
                      <span className={styles.detailValue}>
                        {booking.dropoffLocation}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.features}>
                  <h4>Key Features</h4>
                  <div className={styles.featuresList}>
                    {booking.features.map((feature, index) => (
                      <span key={index} className={styles.featurePill}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.bookingFooter}>
                <div className={styles.priceContainer}>
                  <span className={styles.priceLabel}>Total Price</span>
                  <span className={styles.priceValue}>${booking.price}</span>
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
                    View Details
                  </button>
                  {activeTab === 'upcoming' && (
                    <button
                      className={`${styles.button} ${styles.secondaryButton}`}
                    >
                      Modify Booking
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.noBookings}>
            <div className={styles.noBookingsIllustration}>
              <FaCar />
            </div>
            <h3>No {activeTab === 'upcoming' ? 'upcoming' : 'past'} rentals</h3>
            <p>
              You don't have any{' '}
              {activeTab === 'upcoming'
                ? 'upcoming car rentals'
                : 'past rental history'}{' '}
              to display
            </p>
            {activeTab === 'upcoming' && (
              <button className={styles.ctaButton}>Browse Cars</button>
            )}
          </div>
        )}
      </div>

      {isModalOpen && bookings[activeTab] && bookings[activeTab].length > 0 && (
        <CarOrderModal booking={bookings[activeTab][0]} onClose={closeModal} />
      )}
    </div>
  )
}

export default CarOrderPage
