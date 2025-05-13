import React, { useState } from 'react'
import styles from '../../style/PassengerDetails.module.css'
import { useNavigate } from 'react-router-dom'

const PassengerDetails = () => {
  const [gender, setGender] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [nationality, setNationality] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()

  return (
    <div style={{ marginTop: '70px' }} className={styles.container}>
      <h1 className={styles.mainHeading}>Passenger Details</h1>

      <div className={styles.childDivSec}>
        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>IRCTC ID</h2>
          <div className={styles.infoWithEdit_ID}>
            <span>Swayamgaur</span>
            <button className={styles.editButton}>Edit</button>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>BOARDING POINT</h2>
          <div className={styles.infoWithEdit_ID}>
            <span>H NIZAMUDDIN ( NZM), 04:00</span>
            <button className={styles.editButton}>Edit</button>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>Passenger Details</h2>

          <div className={styles.genderSelection}>
            <label className={styles.radioLabel}>
              <input
                type='radio'
                className={styles.inputBoxOFfree}
                name='gender'
                checked={gender === 'male'}
                onChange={() => setGender('male')}
              />
              <span className={styles.radioCustom}></span>
              Male
            </label>

            <label className={styles.radioLabel}>
              <input
                type='radio'
                className={styles.inputBoxOFfree}
                name='gender'
                checked={gender === 'female'}
                onChange={() => setGender('female')}
              />
              <span className={styles.radioCustom}></span>
              Female
            </label>

            <label className={styles.radioLabel}>
              <input
                type='radio'
                className={styles.inputBoxOFfree}
                name='gender'
                checked={gender === 'transgender'}
                onChange={() => setGender('transgender')}
              />
              <span className={styles.radioCustom}></span>
              Transgender
            </label>
          </div>

          <div className={styles.formRow}>
            <div className={styles.checkboxLabel}>
              <input
                className={styles.inputBoxOFfree}
                type='checkbox'
                id='fullNameCheck'
              />
              <label htmlFor='fullNameCheck'>Full Name</label>
            </div>
            <div className={styles.checkboxLabel}>
              <input
                className={styles.inputBoxOFfree}
                type='checkbox'
                id='ageCheck'
              />
              <label htmlFor='ageCheck'>Age</label>
            </div>
          </div>

          <div className={styles.infoWithEdit}>
            <div
              style={{ marginBottom: '2px' }}
              className={`${styles.dsF} ${styles.flexC} ${styles.w50}`}
            >
              <label>Enter Name</label>
              <input
                type='text'
                placeholder='Enter Name'
                className={styles.textInput}
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div
              style={{ marginBottom: '2px' }}
              className={`${styles.dsF} ${styles.flexC} ${styles.w50}`}
            >
              <label>Enter Age</label>
              <input
                type='number'
                placeholder='Enter Age'
                className={styles.textInput}
                value={age}
                onChange={e => setAge(e.target.value)}
              />
            </div>
          </div>
          <p className={styles.note}>
            Note: - Name should be the same as on Government ID proof.
          </p>

          <h2 className={styles.sectionHeading}>Berth Preference</h2>
          <select
            className={styles.nationalitySelect}
            value={nationality}
            onChange={e => setNationality(e.target.value)}
            style={{ marginBottom: '10px' }}
          >
            <option value=''>No Berth Preference</option>
            <option value='Lower'>Lower Berth</option>
            <option value='Upper'>Upper Berth</option>
            <option value='SideLower'>Side Lower Berth</option>
            <option value='SideUpper'>Side Upper Berth</option>
          </select>

          <h2 className={styles.sectionHeading}>Nationality</h2>
          <select
            className={styles.nationalitySelect}
            value={nationality}
            onChange={e => setNationality(e.target.value)}
          >
            <option value=''>Nationality</option>
            <option value='indian'>Indian</option>
            <option value='foreigner'>Foreigner</option>
          </select>

          <div className={styles.saveButton}>
            <button>Save</button>
          </div>
        </div>

        <div className={styles.section}>
          <h2 style={{ marginBottom: '5px' }} className={styles.sectionHeading}>
            Contact Detail
          </h2>
          <p className={`${styles.detailSection} ${styles.mb10}`}>
            Your ticket will be sent to the below detail
          </p>
          <div className={styles.infoWithEdit}>
            <div
              style={{ marginBottom: '2px' }}
              className={`${styles.dsF} ${styles.flexC} ${styles.w50}`}
            >
              <label>Mobile Number</label>
              <input
                type='number'
                placeholder='Enter Mobile Number'
                className={styles.textInput}
                value={mobile}
                onChange={e => setMobile(e.target.value)}
              />
            </div>
            <div
              style={{ marginBottom: '2px' }}
              className={`${styles.dsF} ${styles.flexC} ${styles.w50}`}
            >
              <label>Email ID</label>
              <input
                type='email'
                placeholder='Enter Valid Email ID'
                className={styles.textInput}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>
            PREFERENCES <span style={{ color: 'gray' }}>( Optional )</span>{' '}
          </h2>

          <div className='ds-f gp-10  mb-10 aic'>
            <input className={styles.inputBoxOFfree} type='checkbox' />
            <p>Reservation Preference</p>
          </div>

          <div className='ds-f gp-10 mb-10 aic'>
            <input className={styles.inputBoxOFfree} type='checkbox' />
            <p>Enter Gst Detail</p>
          </div>

          <div style={{ marginBottom: '15px' }} className={styles.infoWithEdit}>
            <div
              style={{ marginBottom: '2px' }}
              className={`${styles.dsF} ${styles.flexC} ${styles.w50}`}
            >
              <label>GST Number</label>
              <input
                type='number'
                placeholder='Enter GST Number'
                className={styles.textInput}
                value={mobile}
                onChange={e => setMobile(e.target.value)}
              />
            </div>
            <div
              style={{ marginBottom: '2px' }}
              className={`${styles.dsF} ${styles.flexC} ${styles.w50}`}
            >
              <label>Address</label>
              <input
                type='email'
                placeholder='Enter Address'
                className={styles.textInput}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.infoWithEdit}>
            <div
              style={{ marginBottom: '2px' }}
              className={`${styles.dsF} ${styles.flexC} ${styles.w50}`}
            >
              <label>GST Name</label>
              <input
                type='number'
                placeholder='Enter GST Name'
                className={styles.textInput}
                value={mobile}
                onChange={e => setMobile(e.target.value)}
              />
            </div>
            <div
              style={{ marginBottom: '2px' }}
              className={`${styles.dsF} ${styles.flexC} ${styles.w50}`}
            >
              <label>PINCODE</label>
              <input
                type='email'
                placeholder='Enter PINCODE'
                className={styles.textInput}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionHeading}>
            FREE CANCELLATION <img src='/images/banner_fcf.png' width={150} />
          </h2>

          <div className='ds-f gp-10  mb-10 aic'>
            <input className={styles.inputBoxOFfree} type='radio' />
            <div>
              <p className={styles.freeCancellation_1}>
                Pay no charges when ticket is cancelled
              </p>
              <p className={styles.freeCancellation_2}>
                Only ₹ 450 per Passenger
              </p>
              <p className={styles.freeCancellation_3}>
                Approx refund : ₹ 2330
              </p>
            </div>
          </div>

          <div className='ds-f gp-10  mb-10 aic'>
            <input className={styles.inputBoxOFfree} type='radio' />
            <div>
              <p className={styles.freeCancellation_1}>
                No I don't want free cancelled
              </p>
              <p className={styles.freeCancellation_2}>
                *Ticket can only be cancelled before chart preparation
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 style={{ marginBottom: '5px' }} className={styles.sectionHeading}>
            ADDRESS
          </h2>

          <div className='ds-f gp-10  mb-10 aic'>
            <div>
              <p className={styles.freeCancellation_2}>
                Address is mandatory as per the latest government rules
              </p>
            </div>
          </div>

          <div className='ds-f gp-10  mb-10 aic'>
            <div>
              <p className={styles.freeCancellation_1}>
                {' Atraura , UTTAR PRADESH, UTTAR PRADESH, 272175'}
              </p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className='ds-f gp-10  mb-10 aic'>
            <input className={styles.inputBoxOFfree} type='checkbox' />
            <p className={styles.freeCancellation_1}>
              Do you want to take Travel Insurance (Rs 0.49/person)
            </p>
          </div>

          <div className='ds-f gp-10 mb-10 aic'>
            <input className={styles.inputBoxOFfree} type='checkbox' />
            <p className={styles.freeCancellation_1}>
              I agree to the{' '}
              <span style={{ color: 'green' }}>
                CANCELLATION & REFUND POLICY
              </span>
            </p>
          </div>
        </div>

        <button
          className={styles.Proceed_Btn}
          onClick={() => navigate('/PaymentDetail')}
        >
          {' '}
          PROCEED
        </button>
      </div>

      <div className={`${styles.journeyInfo} ${styles.childDivThird}`}>
        <h3 className={styles.trainName}>GOLDEN TEMPLE M</h3>
        <p className={styles.journeyDate}>Fri, 16 May 2025</p>
        <p className={styles.route}>NZM → MMCT</p>
        
      </div>
    </div>
  )
}

export default PassengerDetails
