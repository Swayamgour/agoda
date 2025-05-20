import React from 'react'
import styles from '../../style/MyOrderBusBookingCard.module.css'

const MyOrderBookingCard = ({ booking, type }) => {
  const formatDate = dateString => {
    const options = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  return (
    <div className={`${styles.bookingCard} ${styles[type]}`}>
      <div className={styles.bookingHeader}>
        <div className={styles.bookingId}>
          <span>Booking ID:</span>
          <strong>{booking.id}</strong>
        </div>
        <div className={styles.bookingStatus}>
          <span className={`${styles.statusBadge} ${styles[booking.status]}`}>
            {booking.status}
          </span>
        </div>
      </div>

      <div className={styles.routeInfo}>
        <div className={styles.location}>
          <h3>{booking.from}</h3>
          <span className={styles.time}>{booking.time}</span>
        </div>

        <div className={styles.duration}>
          <div className={styles.durationLine}></div>
          <span className={styles.busType}>{booking.busType}</span>
        </div>

        <div className={styles.location}>
          <h3>{booking.to}</h3>
          <span className={styles.date}>{formatDate(booking.date)}</span>
        </div>
      </div>

      <div className={styles.detailsRow}>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Operator</span>
          <span>{booking.operator}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Seats</span>
          <span>{booking.seats.join(', ')}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailLabel}>Fare</span>
          <span>₹{booking.fare}</span>
        </div>
      </div>

      <div className={styles.pointsRow}>
        <div className={styles.point}>
          <span className={styles.pointLabel}>Boarding</span>
          <span>{booking.boardingPoint}</span>
        </div>
        <div className={styles.point}>
          <span className={styles.pointLabel}>Dropping</span>
          <span>{booking.droppingPoint}</span>
        </div>
      </div>

      <div className={styles.bookingFooter}>
        <span className={styles.bookingDate}>
          Booked on: {formatDate(booking.bookingDate)}
        </span>
        <div className={styles.actions}>
          {type === 'upcoming' && (
            <>
              <button className={styles.secondaryButton}>Cancel</button>
              <button className={styles.primaryButton}>Download Ticket</button>
            </>
          )}
          {type === 'completed' && (
            <button className={styles.primaryButton}>View Details</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MyOrderBookingCard
