// BookingDetails.jsx
import React from 'react'
import styles from '../../style/BookingDetails.module.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood'

const BookingDetails = () => {
  return (
    <div className={styles.container}>
      <div>
        <header className={styles.header}>
          <h1 className='fs-14'>Gumti No.5, Darsha..</h1>
          {/* <button className={styles.hideDetailsButton}>
            <strong>HIDE DETAILS</strong>
          </button> */}
        </header>

        <div className={styles.vehicleSection}>
          <h2 className={styles.vehicleType}>Hatchback</h2>
          <p className={styles.pickupTime}>
            Pickup on: 13 May 25, Tue 10:00 AM
          </p>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.locationContainer}>
          <div className={styles.verticalLine}>
            <div className={styles.locationIcon}>
              <FmdGoodIcon />
            </div>
            <div className={styles.locationIconInBottom}>
              <FmdGoodIcon />
            </div>
          </div>

          <div className={styles.locationBlock}>
            {/* Pickup */}
            <div className={styles.locationItem}>
              <div>
                <h3 className={styles.title}>
                  Pickup from: 13 May 2025, 10:00 AM
                </h3>
                <p className={styles.address}>
                  Gumti No.5, Darshan Purwa, Kanpur, Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Vertical Line */}

            {/* Drop Off */}
            <div className={styles.locationItem}>
              <div>
                <h3 className={styles.title}>
                  Drop off at: 13 May 2025, 10:00 AM
                </h3>
                <p className={styles.address}>
                  Gumti No.5, Darshan Purwa, Kanpur, Uttar Pradesh, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <section className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>
            Booking details will be sent to:
          </h3>
          <p className={styles.contactInfo}>aman aman (Primary)</p>
          <p className={styles.contactInfo}>
            gourd0775@gmail.com +91-6392601692
          </p>
        </section>

        <div className={styles.divider}></div>

        <section className={styles.discountSection}>
          <p className={styles.discountText}>
            Get exclusive discounts and use previously saved payment methods on
            logging in.
          </p>
        </section>

        {/* <div className={styles.divider}></div> */}

        {/* <section className={styles.paymentSection}>
          <h3 className={styles.sectionTitle}>Payment Options</h3>
        </section> */}
      </div>

      <div>
        {/* <section className={styles.totalSection}>
          <h2 className={styles.totalTitle}>Total Due</h2>
          <h1 className={styles.totalAmount}>405</h1>

          <table className={styles.fareTable}>
            <tbody>
              <tr>
                <td>Fare</td>
                <td>405</td>
              </tr>
            </tbody>
          </table>

          <div className={styles.scanToPay}>
            <p>Scan to Pay</p>
          </div>

          <p className={styles.refundText}>
            Instant Refund & High Success Rate | VIEW OR |
          </p>
        </section> */}
      </div>
    </div>
  )
}

export default BookingDetails
