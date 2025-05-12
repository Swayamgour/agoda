import React from 'react'
import styles from '../../style/CarBookingReview.module.css'

const InclusionsExclusions = () => {
  return (
    <>
      <div className={styles.InclusionsExclusions_container}>
        <div className={styles.InclusionsExclusions_container_left}>
          <h1 className={styles.mainTitle}>
            Inclusions (Included in the Price)
          </h1>

          <ul className={styles.inclusionsList}>
            <li className={styles.inclusionItem}>State Tax</li>
            <li className={styles.inclusionItem}>Toll Charges</li>
            <li className={styles.inclusionItem}>149 Kms</li>
            <li className={styles.inclusionItem}>Driver Allowance</li>
            <li className={styles.inclusionItem}>
              Only One Pickup and Drop (Only one included)
            </li>
          </ul>
        </div>

        <div className={styles.InclusionsExclusions_container_right}>
          <h2 className={styles.exclusionsTitle}>Exclusions (Extra Charges)</h2>

          <ul className={styles.exclusionsList}>
            <li className={styles.exclusionItem}>
              <span className={styles.exclusionName}>Waiting Charges</span>
              <div className={styles.exclusionDetails}>
                After 45 mins,
                <br />
                ₹100.0/30 mins
              </div>
            </li>
            <li className={styles.exclusionItem}>
              <span className={styles.exclusionName}>Fare beyond 149 Kms</span>
              <div className={styles.exclusionDetails}>₹16/Km</div>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.specialRequestsTitle_container}>
        <div className={styles.specialRequest}>
          <h3 className={styles.specialRequestsTitle}>Special Requests</h3>
          <label className={styles.requestLabel}>
            <input type='checkbox' className={styles.requestCheckbox} />
            <span className={styles.requestText}>
              <span className={styles.requestName}>Roof Carrier</span>
              <span className={styles.requestDescription}>
                Car with roof carrier for adjusting extra luggage
              </span>
            </span>
            <span className={styles.requestPrice}>₹158</span>
          </label>
        </div>
      </div>
    </>
  )
}

export default InclusionsExclusions
