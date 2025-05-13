import React, { useState } from 'react'
import styles from '../../style/TicketSummary.module.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'

const TicketSummary = () => {
  const [openOrderMenu, setOpenOrderMenu] = useState(false)

  //  useState
  return (
    <div className={styles.container}>
      <h2 className={styles.mainHeading}>Ticket Summary</h2>

      <div className={styles.trainInfo}>
        <div>GOLDEN TEMPLE M - 12904</div>
      </div>

      <div className='ds-f aic jcsb'>
        <div className='ds-f aic fs-12 gp-5'>
          <span>NZM</span>
          <span>
            <ArrowRightAltIcon />
          </span>
          <span>MMCT</span>
        </div>

        <p className={styles.trainAvailable}>AVAILABLE-0005</p>
      </div>

      <table className={styles.infoTable}>
        <tbody>
          <tr>
            <th>PASSENGERS</th>
            <th>CLASS</th>
            <th>QUOTA</th>
          </tr>
          <tr>
            <td>1</td>
            <td>3A</td>
            <td>6N</td>
          </tr>
        </tbody>
      </table>

      <div className='ds-f jcsb aic'>
        <div>
          <div>Total Grand</div>
          <div className={styles.gstNote}>Inclusive of GST</div>
        </div>

        <div className={styles.grandTotal}>₹ 2025</div>
      </div>

      <div
        onClick={() => setOpenOrderMenu(!openOrderMenu)}
        className='ds-f jcsb aic fs-14 mb-10'
      >
        <div>Fare Detail</div>
        {openOrderMenu ? <ExpandLess /> : <ExpandMore />}
      </div>

      {openOrderMenu && (
        <div className={styles.fareDetails}>
          <div className={styles.fareRow}>
            <span className={styles.fareLabel}>Ticket Fare</span>
            <span className={styles.fareValue}>₹ 1630</span>
          </div>
          <div className={styles.fareRow}>
            <span className={styles.fareLabel}>Travel Insurance Premium</span>
            <span className={styles.fareValue}> ₹ 0</span>
          </div>
          <div className={styles.fareRow}>
            <span className={styles.fareLabel}>
              Convenience Fee (incl. of GST)
            </span>
            <span className={styles.fareValue}> ₹ 35.4</span>
          </div>
          <div className={styles.fareRow}>
            <span className={styles.fareLabel}>Agent Service charges</span>
            <span className={styles.fareValue}> ₹ 39.99</span>
          </div>
          <div className={styles.fareRow}>
            <span className={styles.fareLabel}>Payment Gateway Charges</span>
            <span className={styles.fareValue}> ₹ 0</span>
          </div>
          <div className={styles.fareRow}>
            <span className={styles.fareLabel}>Zero Cancellation Charges</span>
            <span className={styles.fareValue}> ₹ 319</span>
          </div>
          <div className={styles.divider}></div>
        </div>
      )}

      <div className={styles.paymentSummary}>
        <h2 className={styles.mainHeading}>Ticket Fare</h2>
        <div className={styles.paymentRow}>
          <span className={styles.fareLabel}>Wallet Amount</span>
          <span className={styles.fareValue}> ₹ 0</span>
        </div>
        <div className={styles.paymentRow}>
          <span className={styles.fareLabel}>Total Payable</span>
          <span className={styles.fareValue}> ₹ 2025</span>
        </div>
        <div className={styles.paymentRow}>
          <span className={styles.fareLabel}>{''}</span>
          <span className={styles.totalPayable}> ₹ 2025</span>
        </div>
        {/* <div className={styles.totalPayable}> ₹ 2025</div> */}

        <button className={styles.continueButton}>CONTINUE</button>
      </div>
    </div>
  )
}

export default TicketSummary
