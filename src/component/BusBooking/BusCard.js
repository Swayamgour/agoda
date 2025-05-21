import React, { useState } from 'react'
import styles from '../../style/BusCard.module.css'
import {
  FiClock,
  FiMapPin,
  FiStar,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi'
import {
  FaWifi,
  FaSnowflake,
  FaPlug,
  FaTv,
  FaWater,
  FaWheelchair
} from 'react-icons/fa'
import SeatSelectionBus from './SeatSelectionBus'

const BusCard = ({ bus }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [showSeatSelection, setShowSeatSelection] = useState(false)

  const toggleDetails = () => setShowDetails(!showDetails)
  const toggleSeatSelection = () => setShowSeatSelection(!showSeatSelection)

  const [selectedSeats, setSelectedSeats] = useState([])

  const handleSeatSelect = seatNumber => {
    setSelectedSeats(prev =>
      prev.includes(seatNumber)
        ? prev.filter(num => num !== seatNumber)
        : [...prev, seatNumber]
    )
  }

  const renderAmenityIcon = amenity => {
    switch (amenity.toLowerCase()) {
      case 'ac':
        return <FaSnowflake className={styles.amenityIcon} />
      case 'wifi':
        return <FaWifi className={styles.amenityIcon} />
      case 'charging':
        return <FaPlug className={styles.amenityIcon} />
      case 'tv':
        return <FaTv className={styles.amenityIcon} />
      case 'water':
        return <FaWater className={styles.amenityIcon} />
      case 'wheelchair':
        return <FaWheelchair className={styles.amenityIcon} />
      default:
        return <span className={styles.amenityText}>{amenity}</span>
    }
  }

  return (
    <div className={styles.card}>
      {/* Header Section */}
      <div className={styles.cardHeader}>
        <div className={styles.operator}>
          <div className={styles.operatorLogo}>{bus.operator.charAt(0)}</div>
          <div className={styles.operatorInfo}>
            <h3>{bus.operator}</h3>
            <div className={styles.rating}>
              <FiStar className={styles.starIcon} />
              <span>{bus.rating}</span>
              <span className={styles.reviews}>({bus.reviews} reviews)</span>
            </div>
          </div>
        </div>

        <div className={styles.busType}>
          <span
            className={`${styles.typeBadge} ${
              bus.type === 'AC' ? styles.acBadge : styles.nonAcBadge
            }`}
          >
            {bus.type}
          </span>
          <span className={styles.seatsLeft}>
            {bus.availableSeats} seats left
          </span>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className={styles.timeline}>
        <div className={styles.timeGroup}>
          <span className={styles.time}>{bus.departureTime}</span>
          <span className={styles.location}>{bus.origin}</span>
        </div>

        <div className={styles.duration}>
          <div className={styles.durationLine}></div>
          <span>{bus.duration}</span>
          <div className={styles.durationLine}></div>
        </div>

        <div className={styles.timeGroup}>
          <span className={styles.time}>{bus.arrivalTime}</span>
          <span className={styles.location}>{bus.destination}</span>
        </div>
      </div>

      {/* Amenities & Price */}
      <div className={styles.footer}>
        <div className={styles.amenities}>
          {bus.amenities.slice(0, 4).map((amenity, index) => (
            <div key={index} className={styles.amenity}>
              {renderAmenityIcon(amenity)}
            </div>
          ))}
        </div>

        <div className={styles.priceSection}>
          <div className={styles.price}>₹{bus.price}</div>
          <button className={styles.selectButton} onClick={toggleSeatSelection}>
            {showSeatSelection ? 'Hide Seats' : 'Select Seats'}
          </button>
        </div>
      </div>

      {/* Expandable Details */}
      <div className={styles.detailsToggle} onClick={toggleDetails}>
        {showDetails ? (
          <>
            <span>Hide details</span>
            <FiChevronUp />
          </>
        ) : (
          <>
            <span>View details</span>
            <FiChevronDown />
          </>
        )}
      </div>

      {showDetails && (
        <div className={styles.details}>
          <div className={styles.detailRow}>
            <div className={styles.detailItem}>
              <FiClock className={styles.detailIcon} />
              <span>Boarding Time: {bus.boardingTime}</span>
            </div>
            <div className={styles.detailItem}>
              <FiMapPin className={styles.detailIcon} />
              <span>Boarding Point: {bus.boardingPoint}</span>
            </div>
          </div>
          <div className={styles.detailRow}>
            <div className={styles.detailItem}>
              <FiClock className={styles.detailIcon} />
              <span>Dropping Time: {bus.droppingTime}</span>
            </div>
            <div className={styles.detailItem}>
              <FiMapPin className={styles.detailIcon} />
              <span>Dropping Point: {bus.droppingPoint}</span>
            </div>
          </div>
        </div>
      )}

      {/* Seat Selection (would be rendered conditionally) */}
      {showSeatSelection && (
        <div className={styles.seatSelection}>
          {/* Seat selection component would go here */}

          {/* <SeatSelectionBus bus={bus} /> */}
          <SeatSelectionBus
            bus={bus}
            selectedSeats={selectedSeats}
            onSeatSelect={handleSeatSelect}
          />
        </div>
      )}
    </div>
  )
}

export default BusCard
