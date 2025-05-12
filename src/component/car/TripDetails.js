import React from 'react'
import styles from '../../style/CarBookingReview.module.css'

const TripDetails = () => {
  return (
    <div className={styles.Trip_main_container}>
      <div className={styles.Trip_container}>
        <h1 className={styles.Trip_title}>Trip details</h1>

        {/* Pick-up Address Section */}
        <div className={styles.section}>
          <label className={styles.label}>
            <strong>Pick-up Address</strong> (This will help our driver reach
            you on time)
          </label>
          <input
            type='text'
            placeholder='Enter exact pick-up address/nearby location / building name'
            className={styles.inputField}
            style={{ border: '1px solid #ddd' }}
          />
        </div>

        {/* Drop-off Address Section */}
        <div className={styles.section}>
          <label className={styles.label}>
            <strong>Drop-off Address</strong> (Optional - This will help you
            avoid any extra charges after the trip)
          </label>
          <input
            type='text'
            placeholder='Enter drop address to know the exact fare & avoid extra charges after the trip'
            className={styles.inputField}
            style={{ border: '1px solid #ddd' }}
          />
        </div>

        {/* Traveller Information Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Confirm Traveller information</h2>

          {/* Name Field */}
          <label className={styles.label}>
            <strong>Name</strong>
          </label>
          <input
            type='text'
            placeholder='Enter your full name'
            className={styles.inputField}
            style={{ border: '1px solid #ddd' }}
          />

          {/* Gender Selection */}
          <div className={styles.genderSection}>
            <label className={styles.label}>
              <strong>Gender</strong>
            </label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type='radio'
                  name='gender'
                  className={styles.radioInput}
                />
                <span className={styles.radioText}>Male</span>
              </label>
              <label className={styles.radioLabel}>
                <input
                  type='radio'
                  name='gender'
                  className={styles.radioInput}
                />
                <span className={styles.radioText}>Female</span>
              </label>
              <label className={styles.radioLabel}>
                <input
                  type='radio'
                  name='gender'
                  className={styles.radioInput}
                />
                <span className={styles.radioText}>Other</span>
              </label>
            </div>
          </div>

          {/* Email Field */}
          <label className={styles.label}>
            <strong>Email Id</strong> (Your booking confirmation will be sent
            here)
          </label>
          <input
            type='email'
            placeholder='Enter Email ID'
            className={styles.inputField}
            style={{ border: '1px solid #ddd' }}
          />

          {/* Contact Number Field */}
          <div className={styles.contactSection}>
            <label className={styles.label}>
              <strong>Contact Number</strong>
            </label>
            <div className={styles.phoneInput}>
              <div className={styles.countryCode}>+ 91</div>
              <input
                type='tel'
                placeholder='Enter 10 digit mobile number'
                className={styles.phoneField}
                maxLength='10'
                style={{ border: '1px solid #ddd' }}
              />
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className={styles.termsSection}>
          <p className={styles.termsText}>
            By proceeding to book, I Agree to MakeMyTrip's Privacy Policy, User
            Agreement and Terms of Service
          </p>

          <label className={styles.checkboxLabel}>
            <input
              type='checkbox'
              className={styles.checkboxInput}
              defaultChecked
            />
            <span className={styles.checkboxText}>
              Use pickup location as billing address
            </span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default TripDetails
