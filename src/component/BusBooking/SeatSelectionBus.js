import React from 'react'
import styles from '../../style/SeatSelection.module.css'
import {
  FiChevronRight,
  FiClock,
  FiMapPin,
  FiUser,
  FiCheck,
  FiX
} from 'react-icons/fi'
import {
  FaChair,
  FaWheelchair,
  FaBus,
  FaSnowflake,
  FaWifi,
  FaPlug,
  FaTv,
  FaWater
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function SeatSelectionBus ({ bus, selectedSeats = [], onSeatSelect }) {
  const [selectedPickup, setSelectedPickup] = React.useState(null)
  const [showAmenities, setShowAmenities] = React.useState(false)

  const navigate = useNavigate()

  const pickupPoints = bus.pickupPoints || [
    {
      id: 1,
      time: '22:15, 15 MAY',
      location: 'ISBT Kashmiri Gate',
      details: 'IntrCity Boarding Zone, Ground Floor, Arrival Block',
      distance: '1.2 km from you'
    }
  ]

  const amenities = [
    { icon: <FaSnowflake />, name: 'AC' },
    { icon: <FaWifi />, name: 'WiFi' },
    { icon: <FaPlug />, name: 'Charging' },
    { icon: <FaTv />, name: 'TV' },
    { icon: <FaWater />, name: 'Water' }
  ]

  const renderSeat = seat => {
    const isSelected = selectedSeats.includes(seat.number)
    const isBooked = !seat.available
    const isFemale = seat.gender === 'female'

    return (
      <div
        key={seat.number}
        className={`
          ${styles.seat}
          ${isSelected ? styles.selected : ''}
          ${isBooked ? styles.booked : ''}
          ${isFemale ? styles.female : ''}
          ${seat.type === 'sleeper' ? styles.sleeper : styles.seater}
          ${seat.position === 'upper' ? styles.upper : styles.lower}
        `}
        onClick={() => !isBooked && onSeatSelect(seat.number)}
      >
        {isBooked ? (
          <FiX className={styles.bookedIcon} />
        ) : (
          <>
            <FaChair className={styles.seatIcon} />
            <span className={styles.seatNumber}>{seat.number}</span>
          </>
        )}
        {seat.type === 'wheelchair' && (
          <FaWheelchair className={styles.wheelchairIcon} />
        )}
        {isSelected && <FiCheck className={styles.selectedCheck} />}
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.busInfo}>
          <FaBus className={styles.busIcon} />
          <div>
            <h3>{bus.operator}</h3>
            <p>
              {bus.type} • {bus.rating} ★ ({bus.reviews} reviews)
            </p>
          </div>
        </div>
        <div className={styles.journeyTime}>
          <span>
            {bus.departureTime} - {bus.arrivalTime}
          </span>
          <span>{bus.duration}</span>
        </div>
      </div>

      {/* Seat Map */}
      <div className={styles.seatMapContainer}>
        <div className={styles.driverDisplay}>
          <div className={styles.driverIcon}>🚌</div>
          <span>Driver</span>
        </div>

        <div className={styles.seatMap}>
          {/* Lower Deck */}
          <div className={styles.deck}>
            <div className={styles.deckHeader}>
              <h4 className={styles.deckTitle}>Lower Deck</h4>
              <span className={styles.seatsCount}>
                {bus.seatLayout.lowerDeck.filter(s => s.available).length}{' '}
                available
              </span>
            </div>
            <div className={styles.seatGrid}>
              {bus?.seatLayout?.lowerDeck?.map(renderSeat)}
            </div>
          </div>

          {/* Aisle */}
          <div className={styles.aisle}>
            <div className={styles.aisleLine}></div>
            <span>AISLE</span>
            <div className={styles.aisleLine}></div>
          </div>

          {/* Upper Deck */}
          <div className={styles.deck}>
            <div className={styles.deckHeader}>
              <h4 className={styles.deckTitle}>Upper Deck</h4>
              <span className={styles.seatsCount}>
                {bus.seatLayout.upperDeck.filter(s => s.available).length}{' '}
                available
              </span>
            </div>
            <div className={styles.seatGrid}>
              {bus?.seatLayout?.upperDeck?.map(renderSeat)}
            </div>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className={styles.amenitiesSection}>
        <button
          className={styles.amenitiesToggle}
          onClick={() => setShowAmenities(!showAmenities)}
        >
          {showAmenities ? 'Hide Amenities' : 'Show Amenities'}
        </button>

        {showAmenities && (
          <div className={styles.amenitiesGrid}>
            {amenities.map((amenity, index) => (
              <div key={index} className={styles.amenityItem}>
                <div className={styles.amenityIcon}>{amenity.icon}</div>
                <span>{amenity.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Pickup Points */}
      <div className={styles.pickupSection}>
        <h3 className={styles.sectionTitle}>
          <FiMapPin className={styles.sectionIcon} />
          Select Pickup Point
        </h3>

        <div className={styles.pickupList}>
          {pickupPoints.map(point => (
            <div
              key={point.id}
              className={`${styles.pickupPoint} ${
                selectedPickup === point.id ? styles.selectedPickup : ''
              }`}
              onClick={() => setSelectedPickup(point.id)}
            >
              <div className={styles.pointHeader}>
                <div className={styles.pointTime}>
                  <FiClock className={styles.pointIcon} />
                  {point.time}
                </div>
                {selectedPickup === point.id && (
                  <div className={styles.selectedIndicator}>
                    <FiCheck />
                  </div>
                )}
              </div>
              <div className={styles.pointLocation}>
                <FiMapPin className={styles.pointIcon} />
                <div>
                  <strong>{point.location}</strong>
                  <span>{point.distance}</span>
                </div>
              </div>
              <div className={styles.pointDetails}>{point.details}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <div className={styles.selectionSummary}>
          {selectedSeats.length > 0 ? (
            <>
              <span>
                {selectedSeats.length} seat{selectedSeats.length > 1 ? 's' : ''}{' '}
                selected
              </span>
              <span className={styles.totalPrice}>
                ₹{bus.price * selectedSeats.length}
              </span>
            </>
          ) : (
            <span>No seats selected</span>
          )}
        </div>
        {/* {console.log(selectedSeats, selectedPickup)}   */}
        <button
          className={styles.continueButton}
          disabled={selectedSeats.length === 0}
          onClick={() => {
            navigate('/BusBookingDetail')
          }}
        >
          Continue to Payment
          <FiChevronRight className={styles.continueIcon} />
        </button>
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <div className={`${styles.legendSeat} ${styles.available}`}></div>
          <span>Available</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.legendSeat} ${styles.selected}`}></div>
          <span>Selected</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.legendSeat} ${styles.booked}`}></div>
          <span>Booked</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.legendSeat} ${styles.female}`}></div>
          <span>Ladies</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.legendSeat} ${styles.wheelchair}`}>
            <FaWheelchair />
          </div>
          <span>Wheelchair</span>
        </div>
      </div>
    </div>
  )
}

export default SeatSelectionBus
