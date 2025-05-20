import React from 'react'
import styles from '../../style/MyOrderHotelCard.module.css'
import PublicImage from '../../utils/PublicImage'
import {
  FaTimes,
  FaStar,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaCreditCard,
  FaConciergeBell,
  FaCheckCircle,
  FaPrint,
  FaHeadset
} from 'react-icons/fa'

const MyOrderCard = ({ order, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Booking Details</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className={styles.modalContent}>
          <div className={styles.hotelHero}>
            <PublicImage
              src={'/images/SAYLB-cards-exterior01.webp'}
              alt={order.hotel}
            />
            <div className={styles.hotelOverlay}>
              <h3>{order.hotel}</h3>
              <div className={styles.hotelMeta}>
                <span className={styles.hotelRating}>
                  <FaStar /> {order.rating}
                </span>
                <span className={styles.hotelLocation}>
                  <FaMapMarkerAlt /> {order.location}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.bookingDetails}>
            <div className={styles.detailSection}>
              <h4 className={styles.sectionTitle}>
                <FaInfoCircle /> Booking Information
              </h4>
              <div className={styles.detailGrid}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Confirmation #</span>
                  <span className={styles.detailValue}>{order.id}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Room Type</span>
                  <span className={styles.detailValue}>Deluxe King Room</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Guests</span>
                  <span className={styles.detailValue}>
                    {order.guests} guest{order.guests > 1 ? 's' : ''}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Rooms</span>
                  <span className={styles.detailValue}>
                    {order.rooms} room{order.rooms > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.detailSection}>
              <h4 className={styles.sectionTitle}>
                <FaCreditCard /> Payment Summary
              </h4>
              <div className={styles.paymentSummary}>
                <div className={styles.paymentRow}>
                  <span>
                    Room Charges (
                    {Math.floor(
                      (new Date(order.checkOut) - new Date(order.checkIn)) /
                        (1000 * 60 * 60 * 24)
                    )}{' '}
                    nights)
                  </span>
                  <span>${order.price - 50}</span>
                </div>
                <div className={styles.paymentRow}>
                  <span>Taxes & Fees</span>
                  <span>$50.00</span>
                </div>
                <div className={styles.paymentTotal}>
                  <span>Total Paid</span>
                  <span>${order.price}</span>
                </div>
              </div>
            </div>

            <div className={styles.detailSection}>
              <h4 className={styles.sectionTitle}>
                <FaConciergeBell /> Amenities
              </h4>
              <div className={styles.amenitiesGrid}>
                {order.amenities.map((amenity, index) => (
                  <div key={index} className={styles.amenityItem}>
                    <FaCheckCircle />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <button className={`${styles.actionButton} ${styles.secondaryAction}`}>
            <FaPrint /> Print Receipt
          </button>
          <button className={`${styles.actionButton} ${styles.primaryAction}`}>
            <FaHeadset /> Contact Support
          </button>
        </div>
      </div>
    </div>
  )
}

export default MyOrderCard
