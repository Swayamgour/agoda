import React from 'react'
import styles from '../../style/SeatSelection.module.css'



const SeatTypeIndicator = () => {
  return (
    <div className={styles.legendContainer}>
      <h4 className={styles.legendTitle}>Seat Legend</h4>
      <div className={styles.legendGrid}>
        <div className={styles.legendItem}>
          <div className={`${styles.seatSample} ${styles.availableLower}`}></div>
          <span>Available Lower</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.seatSample} ${styles.availableUpper}`}></div>
          <span>Available Upper</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.seatSample} ${styles.selectedSeat}`}></div>
          <span>Selected</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.seatSample} ${styles.femaleSeat}`}></div>
          <span>Ladies Only</span>
        </div>
        <div className={styles.legendItem}>
          <div className={`${styles.seatSample} ${styles.unavailable}`}></div>
          <span>Booked</span>
        </div>
      </div>
    </div>
  );
};

export default SeatTypeIndicator;
