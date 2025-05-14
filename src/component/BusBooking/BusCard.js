import React, { useState } from 'react'
import styles from '../../style/BusCard.module.css'
import SeatSelection from './SeatSelection'

// import React, { useState } from 'react'
// import styles from './BusCard.module.css'
// import SeatSelection from './SeatSelection/SeatSelection'

const BusCard = ({ bus }) => {
  const [showSeatSelection, setShowSeatSelection] = useState(false)
  const [selectedSeats, setSelectedSeats] = useState([])

  const handleSeatSelect = seatNumber => {
    setSelectedSeats(prev =>
      prev.includes(seatNumber)
        ? prev.filter(num => num !== seatNumber)
        : [...prev, seatNumber]
    )
  }

  const toggleSeatSelection = () => {
    setShowSeatSelection(!showSeatSelection)
    if (showSeatSelection) {
      setSelectedSeats([])
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.operatorInfo}>
          <h3>{bus.operator}</h3>
          <p>{bus.type}</p>
          <div className={styles.amenities}>
            {bus.amenities.map((amenity, index) => (
              <span key={index}>{amenity}</span>
            ))}
          </div>
          <div className={styles.reviews}>{bus.reviews} Reviews</div>
        </div>

        <div className={styles.timingInfo}>
          <div className={styles.departure}>
            <strong>{bus.departureTime}</strong>
            <span>{bus.duration}</span>
          </div>
          <div className={styles.arrival}>
            <strong>{bus.arrivalTime}</strong>
            <span>
              {bus.seatLayout.seatMap.filter(s => s[3]).length} Seats Left
            </span>
          </div>
        </div>

        <div className={styles.priceSection}>
          <div className={styles.price}>₹{bus.price}</div>
          <button className={styles.selectButton} onClick={toggleSeatSelection}>
            {showSeatSelection ? 'HIDE SEATS' : 'SELECT SEATS'}
          </button>
        </div>
      </div>

      {showSeatSelection && (
        <div className={styles.seatSelectionWrapper}>
          <SeatSelection
            seatLayout={bus.seatLayout}
            selectedSeats={selectedSeats}
            onSeatSelect={handleSeatSelect}
          />

          {selectedSeats.length > 0 && (
            <div className={styles.selectionSummary}>
              <div className={styles.selectedSeats}>
                <span>Selected Seats:</span>
                <div className={styles.seatTags}>
                  {selectedSeats.map(seat => (
                    <span key={seat} className={styles.seatTag}>
                      {seat}
                    </span>
                  ))}
                </div>
              </div>
              <button className={styles.proceedButton}>
                PROCEED TO BOOK (₹{bus.price * selectedSeats.length})
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default BusCard
