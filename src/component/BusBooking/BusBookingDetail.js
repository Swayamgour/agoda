import React, { useEffect, useState } from 'react'
import styles from '../../style/BusBookingDetail.module.css'
import { useNavigate } from 'react-router-dom'
import ScrollFadeIn from '../scrollview/ScrollFadeIn'

const BusBookingDetail = () => {
  const navigate = useNavigate()
  const [passengers, setPassengers] = useState([
    { seat: '5UB', name: '', age: '', gender: '' }
  ])
  const [contactDetails, setContactDetails] = useState({
    email: '',
    phone: ''
  })
  const [savedPassengers, setSavedPassengers] = useState([])
  const [savedContact, setSavedContact] = useState(null)

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...passengers]
    updatedPassengers[index][field] = value
    setPassengers(updatedPassengers)
  }

  const handleContactChange = (field, value) => {
    setContactDetails(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const savePassenger = index => {
    const passenger = passengers[index]
    if (passenger.name && passenger.age && passenger.gender) {
      const updatedSaved = [...savedPassengers]
      updatedSaved[index] = passenger
      setSavedPassengers(updatedSaved)
    }
  }

  const addMorePassenger = () => {
    setPassengers([
      ...passengers,
      { seat: '6UB', name: '', age: '', gender: '' }
    ])
  }

  const saveContactDetails = () => {
    if (contactDetails.email && contactDetails.phone) {
      setSavedContact(contactDetails)
    }
  }

  return (
    <ScrollFadeIn>
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
                <span>Seat: {passengers.map(p => p.seat).join(', ')}</span>
              </div>
            </div>
            <a className={styles.viewPolicies}>View Policies</a>
          </div>

          {/* Journey details remain the same */}
          <div className={styles.journeyContainer}>
            {/* ... existing journey details code ... */}
          </div>

          <div className={styles.divider}></div>

          <div className={styles.travelerDetails}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>👤</span>
              Traveler Details
            </h2>

            {passengers.map((passenger, index) => (
              <div key={index} className={styles.detailsCard}>
                {/* Header Row - only show for first passenger */}
                {index === 0 && (
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
                )}

                {/* Data Row */}
                <div className={styles.detailsRow}>
                  <div className={styles.detailCell}>
                    <div className={styles.seatBadge}>{passenger.seat}</div>
                  </div>

                  <div className={styles.detailCell}>
                    {savedPassengers[index] ? (
                      <div className={styles.savedValue}>
                        {savedPassengers[index].name}
                      </div>
                    ) : (
                      <div className={styles.inputContainer}>
                        <input
                          type='text'
                          placeholder='Full Name'
                          className={styles.nameInput}
                          value={passenger.name}
                          onChange={e =>
                            handlePassengerChange(index, 'name', e.target.value)
                          }
                        />
                      </div>
                    )}
                  </div>

                  <div className={styles.detailCell}>
                    {savedPassengers[index] ? (
                      <div className={styles.savedValue}>
                        {savedPassengers[index].age}
                      </div>
                    ) : (
                      <div className={styles.inputContainer}>
                        <input
                          type='number'
                          placeholder='24'
                          min='1'
                          max='120'
                          className={styles.ageInput}
                          value={passenger.age}
                          onChange={e =>
                            handlePassengerChange(index, 'age', e.target.value)
                          }
                        />
                      </div>
                    )}
                  </div>

                  <div className={styles.detailCell}>
                    {savedPassengers[index] ? (
                      <div className={styles.savedValue}>
                        {savedPassengers[index].gender.charAt(0).toUpperCase() +
                          savedPassengers[index].gender.slice(1)}
                      </div>
                    ) : (
                      <div className={styles.selectContainer}>
                        <select
                          className={styles.genderSelect}
                          value={passenger.gender}
                          onChange={e =>
                            handlePassengerChange(
                              index,
                              'gender',
                              e.target.value
                            )
                          }
                        >
                          <option value='' disabled>
                            Select
                          </option>
                          <option value='male'>Male</option>
                          <option value='female'>Female</option>
                          <option value='other'>Other</option>
                          <option value='prefer-not-to-say'>
                            Prefer not to say
                          </option>
                        </select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                {!savedPassengers[index] && (
                  <div className={styles.passengerActions}>
                    <button
                      className={styles.saveButton}
                      onClick={() => savePassenger(index)}
                      disabled={
                        !passenger.name || !passenger.age || !passenger.gender
                      }
                    >
                      Save
                    </button>
                    {index === passengers.length - 1 && (
                      <button
                        className={styles.addMoreButton}
                        onClick={addMorePassenger}
                      >
                        Add More
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.divider}></div>

          <div className={styles.contactDetails}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📱</span>
              Contact Details
            </h2>
            <p className={styles.sectionSubtitle}>
              We'll send your ticket here
            </p>

            {savedContact ? (
              <div className={styles.savedContactInfo}>
                <div className={styles.savedContactItem}>
                  <span className={styles.contactLabel}>Email:</span>
                  <span>{savedContact.email}</span>
                </div>
                <div className={styles.savedContactItem}>
                  <span className={styles.contactLabel}>Phone:</span>
                  <span>{savedContact.phone}</span>
                </div>
              </div>
            ) : (
              <div className={styles.contactForm}>
                <div className={styles.inputGroup}>
                  <label>Email Id*</label>
                  <div className={styles.inputWithIcon}>
                    <span className={styles.inputIcon}>✉️</span>
                    <input
                      type='email'
                      placeholder='your@email.com'
                      value={contactDetails.email}
                      onChange={e =>
                        handleContactChange('email', e.target.value)
                      }
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label>Mobile Number*</label>
                  <div className={styles.inputWithIcon}>
                    <span className={styles.inputIcon}>📱</span>
                    <input
                      type='tel'
                      placeholder='9876543210'
                      value={contactDetails.phone}
                      onChange={e =>
                        handleContactChange('phone', e.target.value)
                      }
                    />
                  </div>
                </div>

                <button
                  className={styles.saveButton}
                  onClick={saveContactDetails}
                  disabled={!contactDetails.email || !contactDetails.phone}
                >
                  Save Contact Details
                </button>
              </div>
            )}
          </div>

          <div className={styles.checkboxOption}>
            <label className={styles.checkboxLabel}>
              <input
                type='checkbox'
                id='gst'
                className={styles.checkboxInput}
              />
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
                    Travel Pass - Buy No: Rs. 99 and get Instant Rs. 50 off and
                    a vouchers each worth Rs. 50 off on bus/Rs. 25 off on train
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

          <button
            className={styles.continueButton}
            onClick={() => {
              // navigate('/PaymentDetail'), { state: { path: 'BusBookingDetail' } }
              navigate('/PaymentDetail', {
                state: { path: 'BusBookingDetail' }
              })
            }}
          >
            {/* <span className={styles.buttonIcon}>🚌</span> */}
            CONTINUE TO PAYMENT
          </button>

          <p className={styles.terms}>
            By proceeding, I agree to MakeMyTrips User Agreement, Terms of
            Service and Privacy Policy
          </p>
        </div>
      </div>
    </ScrollFadeIn>
  )
}

export default BusBookingDetail
