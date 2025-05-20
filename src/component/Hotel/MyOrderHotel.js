import React, { useState } from 'react'
import styles from '../../style/MyOrderHotelBooking.module.css'
import MyOrderCard from './MyOrderCard'
import PublicImage from '../../utils/PublicImage'
import {
  FaCalendarCheck,
  FaHistory,
  FaStar,
  FaMapMarkerAlt,
  FaHotel
} from 'react-icons/fa'

const MyOrderHotel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('current')

  // Enhanced sample order data
  const orders = {
    current: [
      {
        id: 'ORD-12345',
        hotel: 'Grand Plaza Hotel',
        image: '/images/SAYLB-cards-exterior01.webp',
        checkIn: '2023-06-15',
        checkOut: '2023-06-20',
        guests: 2,
        rooms: 1,
        price: 450,
        status: 'confirmed',
        amenities: ['Free WiFi', 'Swimming Pool', 'Breakfast Included'],
        rating: 4.8,
        location: 'Downtown, New York'
      },
      {
        id: 'ORD-12345',
        hotel: 'Grand Plaza Hotel',
        image: '/images/SAYLB-cards-exterior01.webp',
        checkIn: '2023-06-15',
        checkOut: '2023-06-20',
        guests: 2,
        rooms: 1,
        price: 450,
        status: 'confirmed',
        amenities: ['Free WiFi', 'Swimming Pool', 'Breakfast Included'],
        rating: 4.8,
        location: 'Downtown, New York'
      },
      {
        id: 'ORD-12345',
        hotel: 'Grand Plaza Hotel',
        image: '/images/SAYLB-cards-exterior01.webp',
        checkIn: '2023-06-15',
        checkOut: '2023-06-20',
        guests: 2,
        rooms: 1,
        price: 450,
        status: 'confirmed',
        amenities: ['Free WiFi', 'Swimming Pool', 'Breakfast Included'],
        rating: 4.8,
        location: 'Downtown, New York'
      },
      {
        id: 'ORD-12345',
        hotel: 'Grand Plaza Hotel',
        image: '/images/SAYLB-cards-exterior01.webp',
        checkIn: '2023-06-15',
        checkOut: '2023-06-20',
        guests: 2,
        rooms: 1,
        price: 450,
        status: 'confirmed',
        amenities: ['Free WiFi', 'Swimming Pool', 'Breakfast Included'],
        rating: 4.8,
        location: 'Downtown, New York'
      }
    ],
    past: [
      {
        id: 'ORD-67890',
        hotel: 'Sunset Resort',
        image: '/img/destinations/1/2.webp',
        checkIn: '2023-03-10',
        checkOut: '2023-03-15',
        guests: 4,
        rooms: 2,
        price: 1200,
        status: 'completed',
        amenities: ['Private Beach', 'Spa', 'All Inclusive'],
        rating: 4.9,
        location: 'Malibu, California'
      },
      {
        id: 'ORD-67890',
        hotel: 'Sunset Resort',
        image: '/img/destinations/1/2.webp',
        checkIn: '2023-03-10',
        checkOut: '2023-03-15',
        guests: 4,
        rooms: 2,
        price: 1200,
        status: 'completed',
        amenities: ['Private Beach', 'Spa', 'All Inclusive'],
        rating: 4.9,
        location: 'Malibu, California'
      },
      {
        id: 'ORD-67890',
        hotel: 'Sunset Resort',
        image: '/img/destinations/1/2.webp',
        checkIn: '2023-03-10',
        checkOut: '2023-03-15',
        guests: 4,
        rooms: 2,
        price: 1200,
        status: 'completed',
        amenities: ['Private Beach', 'Spa', 'All Inclusive'],
        rating: 4.9,
        location: 'Malibu, California'
      },
      {
        id: 'ORD-67890',
        hotel: 'Sunset Resort',
        image: '/img/destinations/1/2.webp',
        checkIn: '2023-03-10',
        checkOut: '2023-03-15',
        guests: 4,
        rooms: 2,
        price: 1200,
        status: 'completed',
        amenities: ['Private Beach', 'Spa', 'All Inclusive'],
        rating: 4.9,
        location: 'Malibu, California'
      },
      {
        id: 'ORD-67890',
        hotel: 'Sunset Resort',
        image: '/img/destinations/1/2.webp',
        checkIn: '2023-03-10',
        checkOut: '2023-03-15',
        guests: 4,
        rooms: 2,
        price: 1200,
        status: 'completed',
        amenities: ['Private Beach', 'Spa', 'All Inclusive'],
        rating: 4.9,
        location: 'Malibu, California'
      }
    ]
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className={styles.orderPage}>
      <header className={styles.header}>
        <h1>My Bookings</h1>
        <p className={styles.subtitle}>Manage your upcoming and past stays</p>
      </header>

      <div className={styles.tabsContainer}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${
              activeTab === 'current' ? styles.active : ''
            }`}
            onClick={() => setActiveTab('current')}
          >
            <FaCalendarCheck className={styles.icon} />
            Current Stays
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === 'past' ? styles.active : ''
            }`}
            onClick={() => setActiveTab('past')}
          >
            <FaHistory className={styles.icon} />
            Past Stays
          </button>
        </div>
      </div>

      <div className={styles.ordersContainer}>
        {orders[activeTab].length > 0 ? (
          orders[activeTab].map(order => (
            <div key={order.id} className={styles.orderCard}>
              <div className={styles.cardHeader}>
                <div className={styles.hotelImage}>
                  <PublicImage src={order.image} alt={order.hotel} />
                  <div className={styles.hotelRating}>
                    <FaStar /> {order.rating}
                  </div>
                </div>
                <div className={styles.hotelQuickInfo}>
                  <h3>{order.hotel}</h3>
                  <p className={styles.hotelLocation}>
                    <FaMapMarkerAlt /> {order.location}
                  </p>
                </div>
              </div>

              <div className={styles.orderDetails}>
                <div className={styles.detailSection}>
                  <h4>Booking Summary</h4>
                  <div className={styles.detailGrid}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Order ID</span>
                      <span className={styles.detailValue}>{order.id}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Dates</span>
                      <span className={styles.detailValue}>
                        {new Date(order.checkIn).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}{' '}
                        -{' '}
                        {new Date(order.checkOut).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Guests/Rooms</span>
                      <span className={styles.detailValue}>
                        {order.guests} guest{order.guests > 1 ? 's' : ''} •{' '}
                        {order.rooms} room{order.rooms > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.amenities}>
                  <h4>Key Amenities</h4>
                  <div className={styles.amenitiesList}>
                    {order.amenities.map((amenity, index) => (
                      <span key={index} className={styles.amenityPill}>
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.orderFooter}>
                <div className={styles.priceContainer}>
                  <span className={styles.priceLabel}>Total Price</span>
                  <span className={styles.priceValue}>${order.price}</span>
                </div>
                <div className={styles.statusContainer}>
                  <span className={`${styles.status} ${styles[order.status]}`}>
                    {order.status}
                  </span>
                </div>
                <div className={styles.actionButtons}>
                  <button
                    className={`${styles.button} ${styles.primaryButton}`}
                    onClick={openModal}
                  >
                    View Details
                  </button>
                  {activeTab === 'current' && (
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
          <div className={styles.noOrders}>
            <div className={styles.noOrdersIllustration}>
              <FaHotel />
            </div>
            <h3>No {activeTab === 'current' ? 'upcoming' : 'past'} bookings</h3>
            <p>
              You don't have any{' '}
              {activeTab === 'current' ? 'upcoming stays' : 'past reservations'}{' '}
              to display
            </p>
            {activeTab === 'current' && (
              <button className={styles.ctaButton}>Browse Hotels</button>
            )}
          </div>
        )}
      </div>

      {isModalOpen && (
        <MyOrderCard order={orders[activeTab][0]} onClose={closeModal} />
      )}
    </div>
  )
}

export default MyOrderHotel
