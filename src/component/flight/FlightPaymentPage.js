import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from '../../style/CarBookingReview.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import '../../style/BookingConfirmation.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import FlightIcon from '@mui/icons-material/Flight'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import PublicImage from '../../utils/PublicImage'

function FlightPaymentPage () {
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
            <FlightTakeoffIcon /> {flightDetails.route}
          </h3>
          <p className='fs-14'>
            {flightDetails.date} · {flightDetails.passengers} Passenger ·{' '}
            {flightDetails.cabinClass}
          </p>
        </div>

        <div className='flight-details'>
          <div className='airports '>{flightDetails.airports}</div>

          <div className='flight-info'>
            <span className='airline fs-12'>
              {/* <div> */}
              <PublicImage src='/images/JL_v1.png' width={20} height={20} />
              {/* </div>  */}
              {flightDetails.airline}
            </span>

            <button style={{ marginTop: '5px' }} className='details-btn fs-12 '>
              Details
            </button>
          </div>

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
            <div className='passenger_Contact_Detail_first'>
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
            </div>

            <div style={{ marginTop: '10px' }} className='fs-16'>
              <div>Passenger Detail</div>
              <p className='fs-14'>
                <PermIdentityIcon
                  sx={{ fontSize: '16px' }}
                  className='timing'
                />
                Swayam Gaur
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

export default FlightPaymentPage
