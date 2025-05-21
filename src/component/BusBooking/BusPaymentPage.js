// import React from "react";

// function BusPaymentPage() {
//   return <div>BusPaymentPage</div>;
// }

// export default BusPaymentPage;

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from '../../style/CarBookingReview.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
// import BusPaymentPage from './BusPaymentPage'
// import style from  '../../style/BookingConfirmation.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus'
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined'

function BusPaymentPage () {
  const navigate = useNavigate()

  const location = useLocation()

  //   console.log()

  const flightDetails = {
    route: 'New Delhi and NCR → Mumbai',
    date: '9 May',
    passengers: 1,
    cabinClass: 'Economy',
    airline: 'SpiceJet',
    departureTime: '06:10',
    arrivalTime: '08:25',
    duration: '2h 15m',
    airports: 'New Delhi and NCR (DEL) → Mumbai (BOM)'
  }

  const priceBreakdown = [
    { label: 'Adult', value: 'Rs. 5,377.65 x 1' },
    { label: 'Base fare', value: 'Rs. 4,400.00' },
    { label: 'Taxes and fees', value: 'Rs. 977.65' },
    { label: 'Discount', value: '-Rs. 145.20' },
    { label: 'Processing cost', value: 'FREE' },
    { label: 'Total', value: 'Rs. 5,377.65', isTotal: true },
    { label: '', value: 'Rs. 5,232.45', isFinal: true }
  ]

  return (
    <div>
      <section className='flight-summary'>
        <div className='detail-section-of-flight'>
          <h3 className='fs-18'>
            {' '}
            <DirectionsBusIcon sx={{ fontSize: '14px' }} /> InterCity SmartBus{' '}
          </h3>

          <p className='fs-14'>{` (Bharat Benz A/C Seater /Sleeper (2+1))`}</p>
        </div>

        <div className='flight-details'>
          {/* <p className='fs-14 airports'>
            <DirectionsBusIcon sx={{ fontSize: '14px' }} /> InterCity SmartBus{' '}
            <br />
            (Bharat Benz A/C Seater /Sleeper (2+1))
          </p> */}
          <div className='airports '>{flightDetails.airports}</div>

          {/* <div className='flight-info'>
            <span className='airline fs-12'>InterCity SmartBus</span>

            <button style={{ marginTop: '5px' }} className='details-btn fs-12 '>
              Details
            </button>
          </div> */}

          <span className='timing fs-12 aic'>
            {flightDetails.date} · {flightDetails.departureTime} -{' '}
            {flightDetails.arrivalTime}{' '}
            <AccessTimeIcon sx={{ fontSize: '15px' }} />{' '}
            {flightDetails.duration}
          </span>
        </div>
      </section>

      {location?.pathname === '/PaymentDetail' && (
        <section className='flight-summary'>
          <div className='passenger_Contact_Detail '>
            {/* <div className='passenger_Contact_Detail_first'>
              <div className='fs-16'>Contact Detail</div>
              <p className='fs-14'>
                {' '}
                <PermIdentityIcon
                  sx={{ fontSize: '16px' }}
                  className='timing'
                />
                Swayam Gaur
              </p>
              <p className='fs-12 timing'>gour9876@gmail.com</p>
              <p className='fs-12 timing'>6392601692</p>
            </div> */}

            <div style={{ marginTop: '10px' }} className='fs-16'>
              <div>Passenger Detail</div>
              <p className='fs-14 timing'>
                <PermIdentityIcon
                  sx={{ fontSize: '16px' }}
                  className='timing'
                />{' '}
                Swayam Gaur
              </p>
              <p className='fs-12 timing'>
                <ChairOutlinedIcon
                  sx={{ fontSize: '16px' }}
                  className='timing'
                />{' '}
                : 5LU
              </p>
            </div>
          </div>
        </section>
      )}

      <section className='price-section'>
        <h3 className='fs-16'>Price breakdown</h3>
        <table className='price-table'>
          <tbody>
            {priceBreakdown.map((item, index) => (
              <tr
                key={index}
                className={`
                ${item.isTotal ? 'total-row' : ''} 
                ${item.isFinal ? 'final-row' : ''}
              `}
              >
                <td className='fs-12'>{item.label}</td>
                <td className='fs-12'>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {location?.pathname !== '/PaymentDetail' && (
          <button
            // onClick={() => navigate('/PaymentDetail')}
            onClick={() =>
              navigate('/PaymentDetail', {
                state: { path: 'BookingConfirmation' }
              })
            }
            className={styles.payNowButton}
          >
            PAY ₹ 628 NOW
          </button>
        )}
      </section>
    </div>
  )
}

export default BusPaymentPage
