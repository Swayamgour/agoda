import React, { useState } from 'react'
import styles from '../../style/CarBookingReview.module.css'
import EvStationIcon from '@mui/icons-material/EvStation'
import HistoryIcon from '@mui/icons-material/History'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import InclusionsExclusions from './InclusionsExclusions'
import TripDetails from './TripDetails'
import { useNavigate } from 'react-router-dom'

const CarBookingReview = () => {
  const [value, setValue] = useState('part')

  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.vehicleCard}>
        <div className={styles.routeInfo}>
          <h1 className={styles.title}>Review Booking</h1>
          <h2 className={styles.route}>Mumbai → Pune</h2>
          <p className={styles.tripDetails}>
            One Way | Pickup: Tue, 13 May '25, 10:00 AM
          </p>
        </div>
        <div className={styles.vehicleHeaderCard}>
          <div className='car-card-center-first'>
            <img src='/hatchback.png' />
          </div>
          <div>
            <div className={styles.vehicleHeader}>
              <h3 className={styles.vehicleName}>Drive, Etios or similar</h3>
              <span className={styles.rating}>4.1★ 378 ratings</span>
            </div>

            <div className={styles.specs}>
              <p>
                <strong>
                  <span style={{ color: '#008DFE' }}>
                    <EvStationIcon
                      sx={{ fontSize: '14px', marginRight: '5px' }}
                    />
                  </span>{' '}
                  Extra km fare
                </strong>{' '}
                16.0/km after 149 kms
              </p>
              <p>
                <strong>
                  <span style={{ color: '#008DFE' }}>
                    <HistoryIcon
                      sx={{ fontSize: '14px', marginRight: '5px' }}
                    />
                  </span>
                  Fuel Type
                </strong>{' '}
                CNG with refill breaks
              </p>
              <p>
                <strong>
                  <span style={{ color: '#008DFE' }}>
                    {' '}
                    <GpsFixedIcon
                      sx={{ fontSize: '14px', marginRight: '5px' }}
                    />
                  </span>
                  Cancellation
                </strong>{' '}
                Free till 1 hour of departure
              </p>
            </div>
          </div>
        </div>

        <div className={styles.driverInfo}>
          <h4>Driver & Cab details</h4>
          <p>
            Cab operator will be assigned on booking completion. Cab and driver
            details will be shared up to 30 mins prior to departure.
          </p>
        </div>

        <div className={styles.notes}>
          <h4>Some points to note for CNG vehicles before your travel:</h4>
          <ul>
            <li>
              On longer journeys refill breaks are required which typically last
              30+ minutes because of fewer stations and longer queues.
            </li>
            <li>Diesel cabs have stronger ACs as compared to CNG vehicles.</li>
          </ul>
        </div>

        <InclusionsExclusions />
        <TripDetails />
      </div>

      <div className={styles.paymentSection}>
        <div className={styles.cancellationPolicy}>
          <p>Free Cancellation before 13 May 2025, 09:00 AM IST</p>
        </div>
        <button
          // onClick={() => navigate('/PaymentDetail')}
          onClick={() =>
            navigate('/PaymentDetail', { state: { path: 'CarBooking' } })
          }
          className={styles.payNowButton}
        >
          PAY ₹ 628 NOW
        </button>

        <div className={styles.paymentOptions}>
          <div
            className={`${styles.paymentOption} ${
              value === 'part' ? styles.selectPrice : ''
            }`}
          >
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                checked={value === 'part' ? true : false}
                type='radio'
                onChange={() => setValue('part')}
              />
              <div>
                <h4>Make part payment now</h4>
                <p>Pay the rest to the driver</p>
              </div>
            </div>
            <h3 className={styles.price}>₹ 628</h3>
          </div>

          {/* <div className={styles.paymentOption}>
            <h4>Make full payment now</h4>
            <p className={styles.price}>₹ 2506</p>
          </div> */}

          <div
            className={`${styles.paymentOption} ${
              value === 'full' ? styles.selectPrice : ''
            }`}
          >
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type='radio'
                checked={value === 'full' ? true : false}
                onChange={() => setValue('full')}
              />
              <div>
                <h4>Make full payment now</h4>
                {/* <p>Pay the rest to the driver</p> */}
              </div>
            </div>
            <h3 className={styles.price}>₹ 2580</h3>
          </div>
        </div>

        <hr />

        <div className={styles.priceSummary}>
          <div className={styles.priceRow}>
            <span>Total Amount</span>
            <span>Inc. of tolls and taxes</span>
          </div>
          <div className={styles.priceRow_Price}>
            <span style={{ color: 'red' }}>18% off</span>
            <span className={styles.originalPrice}></span>
            <span className={styles.finalPrice}>
              {' '}
              <del
                style={{ fontWeight: '100', color: 'gray', fontSize: '12px' }}
              >
                ₹ 3,960
              </del>{' '}
              ₹ 2506
            </span>
            <span className={styles.fareBreakup}>Fare Breakup</span>
          </div>
          {/* <div className={styles.priceRow}>
            <span className={styles.finalPrice}>₹ 2506</span>
            <span className={styles.fareBreakup}>Fare Breakup</span>
          </div> */}
        </div>

        {/* <div className={styles.coupons}>
          <h4>Available Coupons</h4>
          <div className={styles.coupon}>Trip Assistant</div>
        </div> */}
      </div>
    </div>
  )
}

export default CarBookingReview
