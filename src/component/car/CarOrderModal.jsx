import React from 'react'
import styles from '../../style/CarOrderModal.module.css'
import PublicImage from '../../utils/PublicImage'
import {
  FaTimes,
  FaStar,
  FaInfoCircle,
  FaCreditCard,
  FaCar,
  FaCheckCircle,
  FaPrint,
  FaHeadset
} from 'react-icons/fa'

const CarOrderModal = ({ booking, onClose }) => {
  const rentalDays = Math.floor(
    (new Date(booking.rentalPeriod.end) -
      new Date(booking.rentalPeriod.start)) /
      (1000 * 60 * 60 * 24)
  )
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Rental Details</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        <div className={styles.modalContent}>
          <div className={styles.carHero}>
            <PublicImage
              src={booking.image}
              alt={booking.carModel}
              className={styles.carImage}
            />
            <div className={styles.carOverlay}>
              <h3>{booking.carModel}</h3>
              <div className={styles.carMeta}>
                <span className={styles.carRating}>
                  <FaStar /> {booking.rating}
                </span>
              </div>
            </div>
          </div>

          <div className={styles.rentalTimeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>
                <span className={styles.timelineDay}>
                  {new Date(booking.rentalPeriod.start).toLocaleDateString(
                    'en-US',
                    {
                      day: 'numeric'
                    }
                  )}
                </span>
                <span className={styles.timelineMonth}>
                  {new Date(booking.rentalPeriod.start).toLocaleDateString(
                    'en-US',
                    {
                      month: 'short'
                    }
                  )}
                </span>
              </div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineTitle}>Pickup</span>
                <span className={styles.timelineSubtitle}>
                  10:00 AM • {booking.pickupLocation}
                </span>
              </div>
            </div>

            <div className={styles.timelineDivider}>
              <div className={styles.timelineLine}></div>
              <div className={styles.timelineDays}>{rentalDays} days</div>
              <div className={styles.timelineLine}></div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>
                <span className={styles.timelineDay}>
                  {new Date(booking.rentalPeriod.end).toLocaleDateString(
                    'en-US',
                    {
                      day: 'numeric'
                    }
                  )}
                </span>
                <span className={styles.timelineMonth}>
                  {new Date(booking.rentalPeriod.end).toLocaleDateString(
                    'en-US',
                    {
                      month: 'short'
                    }
                  )}
                </span>
              </div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineTitle}>Dropoff</span>
                <span className={styles.timelineSubtitle}>
                  10:00 AM • {booking.dropoffLocation}
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
                  <span className={styles.detailValue}>{booking.id}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Car Class</span>
                  <span className={styles.detailValue}>Premium Sedan</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Rental Days</span>
                  <span className={styles.detailValue}>{rentalDays}</span>
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
                    Daily Rate ${Math.round(booking.price / rentalDays)} ×{' '}
                    {rentalDays} days
                  </span>
                  <span>${Math.round(booking.price * 0.8)}</span>
                </div>
                <div className={styles.paymentRow}>
                  <span>Insurance</span>
                  <span>$75.00</span>
                </div>
                <div className={styles.paymentRow}>
                  <span>Taxes & Fees</span>
                  <span>${Math.round(booking.price * 0.05)}</span>
                </div>
                <div className={styles.paymentTotal}>
                  <span>Total Paid</span>
                  <span>${booking.price}</span>
                </div>
              </div>
            </div>

            <div className={styles.detailSection}>
              <h4 className={styles.sectionTitle}>
                <FaCar /> Features & Amenities
              </h4>
              <div className={styles.featuresGrid}>
                {booking.features.map((feature, index) => (
                  <div key={index} className={styles.featureItem}>
                    <FaCheckCircle />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <button
            className={`${styles.actionButton} ${styles.secondaryAction}`}
          >
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

export default CarOrderModal
