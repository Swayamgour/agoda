import React from 'react'
import styles from '../../style/BusBookingDetail.module.css'

const BusBookingDetail = () => {
  return (
    <div className={styles.container}>
      <div className={styles.BusBookingDetail_left}>
        <div className={styles.header}>
          <div className={styles.headerTop}>
            <div>
              <h1 className={styles.busName}>IntrCity SmartBus</h1>
              <p className={styles.busType}>
                Bharat Benz A/C Seater /Sleeper (2+1)
              </p>
            </div>
            <div className={styles.seatInfo}>
              {/* <span className={styles.seatIcon}>💺</span> */}
              <span>Seat: 5UB</span>
            </div>
          </div>
          <a className={styles.viewPolicies}>View Policies</a>
        </div>

        <div className={styles.journeyContainer}>
          <div className={styles.journeyTimeline}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineLine}></div>
            <div className={styles.timelineDot}></div>
          </div>

          <div className={styles.journeyDetails}>
            <div className={styles.departure}>
              <div className={styles.time}>23:30</div>
              <div className={styles.date}>15 May' 25, Thu</div>
              <div className={styles.location}>
                <h3>Delhi</h3>
                <p>Noida metro station sector 143</p>
                <p>Noida Metro Station Sector 143 (Delhi)</p>
              </div>
            </div>

            <div className={styles.durationContainer}>
              <div className={styles.duration}>71h 30m</div>
              {/* <div className={styles.durationIcon}>⏱️</div> */}
            </div>

            <div className={styles.arrival}>
              <div className={styles.time}>07:00</div>
              <div className={styles.date}>16 May' 25, Fri</div>
              <div className={styles.location}>
                <h3>Kanpur (Uttar Pradesh)</h3>
                <p>Fazalganj chauraha - intrcity lounge</p>
                <p>IntrCity Lounge, Kalpi Road, Near Legend Hotel (Kanpur)</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.travelerDetails}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>👤</span>
            Traveler Details
          </h2>

          <div className={styles.detailsCard}>
            {/* Header Row */}
            <div className={styles.detailsHeader}>
              <div className={styles.headerItem}>
                <span className={styles.seatIcon}>🚌</span>
                <span>Seat</span>
              </div>
              <div className={styles.headerItem}>
                <span className={styles.userIcon}>👤</span>
                <span>Name</span>
              </div>
              <div className={styles.headerItem}>
                <span className={styles.ageIcon}>🎂</span>
                <span>Age*</span>
              </div>
              <div className={styles.headerItem}>
                <span className={styles.genderIcon}>⚧</span>
                <span>Gender</span>
              </div>
            </div>

            {/* Data Row */}
            <div className={styles.detailsRow}>
              <div className={styles.detailCell}>
                <div className={styles.seatBadge}>5UB</div>
              </div>

              <div className={styles.detailCell}>
                <div className={styles.inputContainer}>
                  <input
                    type='text'
                    placeholder='Full Name'
                    className={styles.nameInput}
                  />
                </div>
              </div>

              <div className={styles.detailCell}>
                <div className={styles.inputContainer}>
                  <input
                    type='number'
                    placeholder='24'
                    min='1'
                    max='120'
                    className={styles.ageInput}
                  />
                </div>
              </div>

              <div className={styles.detailCell}>
                <div className={styles.selectContainer}>
                  <select className={styles.genderSelect}>
                    <option value='' disabled selected>
                      Select
                    </option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='other'>Other</option>
                    <option value='prefer-not-to-say'>Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.contactDetails}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>📱</span>
            Contact Details
          </h2>
          <p className={styles.sectionSubtitle}>We'll send your ticket here</p>

          <div className={styles.contactForm}>
            <div className={styles.inputGroup}>
              <label>Email Id*</label>
              <div className={styles.inputWithIcon}>
                <span className={styles.inputIcon}>✉️</span>
                <input type='email' placeholder='your@email.com' />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Mobile Number*</label>
              <div className={styles.inputWithIcon}>
                <span className={styles.inputIcon}>📱</span>
                <input type='tel' placeholder='9876543210' />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.checkboxOption}>
          <label className={styles.checkboxLabel}>
            <input type='checkbox' id='gst' className={styles.checkboxInput} />
            <span className={styles.checkboxCustom}></span>
            Enter GST details (optional)
          </label>
        </div>
      </div>

      <div className={styles.BusBookingDetail_right}>
        <div className={styles.offerSection}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>🎁</span>
            Offers & Discounts
          </h2>
          <div className={styles.offerCard}>
            <label className={styles.offerOption}>
              <input
                type='checkbox'
                id='offer'
                className={styles.offerCheckbox}
              />
              <span className={styles.offerCheckmark}></span>
              <div className={styles.offerContent}>
                <strong className={styles.offerTitle}>BUSTRAINPASS</strong>
                <p className={styles.offerDescription}>
                  Travel Pass - Buy No: Rs. 99 and get Instant Rs. 50 off and a
                  vouchers each worth Rs. 50 off on bus/Rs. 25 off on train
                  bookings of Min. ATV Rs. 500.
                </p>
              </div>
            </label>
            <a href='#' className={styles.couponLink}>
              + Enter coupon code
            </a>
          </div>
        </div>

        <div className={styles.priceDetails}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>💰</span>
            Price Summary
          </h2>
          <table className={styles.priceTable}>
            <tbody>
              <tr>
                <td>Base Fare</td>
                <td>₹949.0</td>
              </tr>
              <tr>
                <td>Taxes & Fees</td>
                <td>₹0</td>
              </tr>
              <tr className={styles.totalRow}>
                <td>Total Amount</td>
                <td>₹949</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.note}>
            Final payable amount will be updated on the next page
          </p>
        </div>

        <button className={styles.continueButton}>
          {/* <span className={styles.buttonIcon}>🚌</span> */}
          CONTINUE TO PAYMENT
        </button>

        <p className={styles.terms}>
          By proceeding, I agree to MakeMyTrips User Agreement, Terms of Service
          and Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default BusBookingDetail
