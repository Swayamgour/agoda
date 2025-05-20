import React from 'react'
import styles from '../../style/TrainOrderModal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTimes,
  faTrain,
  faUser,
  faReceipt,
  faListUl,
  faCheckCircle,
  faPrint,
  faMobileAlt
} from '@fortawesome/free-solid-svg-icons'

const TrainOrderModal = ({ booking, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2>Train Ticket</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className={styles.modalContent}>
          <div className={styles.ticketHeader}>
            <div className={styles.trainInfo}>
              <h3>{booking.trainName}</h3>
              <p className={styles.trainNumber}>{booking.trainNumber}</p>
            </div>
            <div className={styles.ticketClass}>{booking.class}</div>
          </div>

          <div className={styles.journeyDetails}>
            <div className={styles.station}>
              <span className={styles.time}>{booking.departure.time}</span>
              <span className={styles.stationName}>
                {booking.departure.station}
              </span>
              <span className={styles.date}>
                {new Date(booking.journeyDate).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>

            <div className={styles.journeyLine}>
              {/* <div className={styles.duration}>{booking.duration}</div> */}
              <div className={styles.line}></div>
              <div className={styles.transportIcon}>
                <FontAwesomeIcon icon={faTrain} />
              </div>
            </div>

            <div className={styles.station2}>
              <span className={styles.time}>{booking.arrival.time}</span>
              <span className={styles.stationName}>
                {booking.arrival.station}
              </span>
              <span className={styles.date}>
                {new Date(booking.journeyDate).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>

          <div className={styles.ticketDetails}>
            <div className={styles.passengerInfo}>
              <h4 className={styles.sectionTitle}>
                <FontAwesomeIcon icon={faUser} /> Passenger Details
              </h4>
              <div className={styles.detailGrid}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Passenger(s)</span>
                  <span className={styles.detailValue}>
                    {booking.passengers} adult
                    {booking.passengers > 1 ? 's' : ''}
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Seat(s)</span>
                  <span className={styles.detailValue}>{booking.seats}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Booking Reference</span>
                  <span className={styles.detailValue}>{booking.id}</span>
                </div>
              </div>
            </div>

            <div className={styles.paymentInfo}>
              <h4 className={styles.sectionTitle}>
                <FontAwesomeIcon icon={faReceipt} /> Fare Details
              </h4>
              <div className={styles.paymentSummary}>
                <div className={styles.paymentRow}>
                  <span>
                    Base Fare ({booking.passengers} × €
                    {Math.round((booking.price * 0.8) / booking.passengers)})
                  </span>
                  <span>€{Math.round(booking.price * 0.8)}</span>
                </div>
                <div className={styles.paymentRow}>
                  <span>Reservation Fee</span>
                  <span>€10.00</span>
                </div>
                <div className={styles.paymentRow}>
                  <span>Taxes & Charges</span>
                  <span>€{Math.round(booking.price * 0.1)}</span>
                </div>
                <div className={styles.paymentTotal}>
                  <span>Total Paid</span>
                  <span>€{booking.price}</span>
                </div>
              </div>
            </div>

            <div className={styles.amenitiesInfo}>
              <h4 className={styles.sectionTitle}>
                <FontAwesomeIcon icon={faListUl} /> Onboard Amenities
              </h4>
              <div className={styles.amenitiesGrid}>
                {booking.amenities.map((amenity, index) => (
                  <div key={index} className={styles.amenityItem}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.ticketBarcode}>
            <div className={styles.barcodePlaceholder}></div>
            <p className={styles.barcodeText}>{booking.id.replace(/-/g, '')}</p>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <button
            className={`${styles.actionButton} ${styles.secondaryAction}`}
          >
            <FontAwesomeIcon icon={faPrint} /> Print Ticket
          </button>
          <button className={`${styles.actionButton} ${styles.primaryAction}`}>
            <FontAwesomeIcon icon={faMobileAlt} /> Save to Wallet
          </button>
        </div>
      </div>
    </div>
  )
}

export default TrainOrderModal
