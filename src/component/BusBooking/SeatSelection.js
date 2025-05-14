import React from 'react'
import styles from '../../style/SeatSelection.module.css'
import SeatTypeIndicator from './SeatTypeIndicator'

const SeatSelection = ({ seatLayout, selectedSeats, onSeatSelect }) => {
  const renderSleeperLayout = () => {
    const lowerBerths = []
    const upperBerths = []

    seatLayout.seatMap.forEach(seat => {
      const [number, position, gender, seatType, available] = seat

      const seatElement = (
        <div
          key={number}
          className={`
          ${styles.seat}
          ${position === 'upper' ? styles.upper : styles.lower}
          ${seatType === 'sleeper' ? styles.sleeperSeat : styles.seaterSeat}
          ${!available ? styles.unavailable : ''}
          ${selectedSeats.includes(number) ? styles.selected : ''}
          ${gender === 'female' ? styles.female : ''}
        `}
          onClick={() => available && onSeatSelect(number)}
          title={`${number} - ${position} ${seatType} (${gender})`}
        >
          {number}
        </div>
      )

      if (position === 'lower') {
        lowerBerths.push(seatElement)
      } else {
        upperBerths.push(seatElement)
      }
    })

    return (
      <div className={styles.sleeperCoach}>
        <div className={styles.lowerDeck}>
          <h4>Lower Deck</h4>
          <div className={styles.berthRow}>{lowerBerths}</div>
        </div>

        <div className={styles.upperDeck}>
          <h4>Upper Deck</h4>
          <div className={styles.berthRow}>{upperBerths}</div>
        </div>
      </div>
    )
  }

  const renderSeaterLayout = () => {
    const rows = []
    let currentRow = []

    seatLayout.seatMap.forEach((seat, index) => {
      const [number, type, gender, available] = seat

      currentRow.push(
        <div
          key={number}
          className={`
            ${styles.seat}
            ${selectedSeats.includes(number) ? styles.selected : ''}
            ${!available ? styles.unavailable : ''}
            ${gender === 'female' ? styles.female : ''}
          `}
          onClick={() => available && onSeatSelect(number)}
          title={`Seat ${number}`}
        >
          {number}
        </div>
      )

      if (
        (index + 1) % seatLayout.columns === 0 ||
        index === seatLayout.seatMap.length - 1
      ) {
        rows.push(
          <div key={`row-${rows.length}`} className={styles.seatRow}>
            {currentRow}
          </div>
        )
        currentRow = []
      }
    })

    return <div className={styles.seaterCoach}>{rows}</div>
  }

  return (
    <div className={styles.seatSelectionContainer}>
      <SeatTypeIndicator />

      <div className={styles.coachVisualization}>
        {seatLayout.type === 'sleeper'
          ? renderSleeperLayout()
          : renderSeaterLayout()}
      </div>

      <div className={styles.seatInfo}>
        <h4>Seat Information:</h4>
        <ul>
          <li>
            <strong>Lower Berth:</strong> Flat bed on lower level (easier
            access)
          </li>
          <li>
            <strong>Upper Berth:</strong> Flat bed on upper level (requires
            climbing)
          </li>
          {seatLayout.type === 'seater' && (
            <li>
              <strong>Standard Seat:</strong> Reclining chair with leg space
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default SeatSelection
