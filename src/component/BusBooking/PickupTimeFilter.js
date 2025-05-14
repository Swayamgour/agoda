import React from 'react';
import styles from '../../style/PickupTimeFilter.module.css';

const PickupTimeFilter = ({ times, activeFilter, setActiveFilter }) => {
  return (
    <div className={styles.filterSection}>
      <div className={styles.filterHeader}>
        <h3>Pick up time - Delhi, Delhi</h3>
        <button className={styles.clearButton}>CLEAR</button>
      </div>
      <div className={styles.timeGrid}>
        {times.map((time, index) => (
          <button
            key={index}
            className={`${styles.timeButton} ${activeFilter === index ? styles.active : ''}`}
            onClick={() => setActiveFilter(activeFilter === index ? null : index)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PickupTimeFilter;