import React from 'react'
import '../../style/BookingReview.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import { Button } from '@mui/material'
import BookIcon from '@mui/icons-material/Book' // You can choose another icon if you prefer
import LockIcon from '@mui/icons-material/Lock'
import { useNavigate } from 'react-router-dom'

const BookingReview = () => {
  const navigate = useNavigate()
  return (
    <div style={{ marginTop: '70px' }} className='booking-review'>
      <h1>Review your Booking</h1>

      <div className='booking-review-container'>
        <div className='booking-review-container-left'>
          <div className='hotel-info'>
            <h2>Ginger Goa, Candolim</h2>

            <div style={{ display: 'flex', gap: '5px' }}>
              <Stack spacing={1}>
                <Rating
                  name='half-rating'
                  defaultValue={3}
                  precision={1}
                  sx={{ fontSize: '15px' }}
                />
              </Stack>
              <div className='couple-friendly'> Couple Friendly</div>
            </div>
            <p className='address'>
              195/23-A/B, Candolim Main Road, Near Lawande Super Market, Anna
              Waddo,Candolim, Saligao, North Goa, Goa, Candolim, Goa, India
            </p>

            <div
              style={{ justifyContent: 'space-around' }}
              className='date-section'
            >
              <div className='check-in'>
                <div>CHECK IN</div>
                <div>Thu 8 May 2025</div>
                <div>2 PM</div>
              </div>

              <div className='nights'>(2 NIGHTS)</div>

              <div className='check-out'>
                <div>CHECK OUT</div>
                <div>Sat 10 May 2025</div>
                <div>12 PM</div>
              </div>
              <div className='summary'>2 Nights | 2 Adults | 1 Room</div>
            </div>
          </div>

          <hr />

          <div className='package-section'>
            <h3>Super Package</h3>
            <h4>Luxe Queen Room</h4>
            <div className='guests'>2 Adults</div>

            <ul className='benefits'>
              <li>Room with Breakfast</li>
              <li>Complimentary Meal Upgrade</li>
              <li>20% off on Food & Beverage services</li>
              <li>10% Off on Laundry service</li>
            </ul>

            <div className='non-refundable'>
              <strong>Non-Refundable</strong>
              <div>Refund is not applicable for this booking</div>
            </div>

            <div className='cancellation-policy'>
              Cancellation policy details
            </div>
          </div>

          <hr />

          <div className='upgrade-section'>
            <h3>Upgrade Your Stay</h3>
            <div className='upgrade-option'>
              Add Lunch/Dinner for ₹ 111 for all guests
            </div>
          </div>

          <Button
            variant='contained'
            fullWidth
            color='primary'
            onClick={() =>
              navigate('/PaymentDetail', { state: { path: 'BookingReview' } })
            }
            startIcon={<LockIcon />}
          >
            Book Now
          </Button>
        </div>

        <div className='booking-review-container-right'>
          <div className='price-section-hotel'>
            <h3>Price Breakup</h3>
            <div className='price-row'>
              <span>1 Room x 2 Nights</span>
              <span className='price'>₹ 333</span>
            </div>
            <div className='subtext'>Base Price</div>

            <div className='price-row'>
              <span>Hotel Taxes</span>
              <span className='price'>₹ 40</span>
            </div>

            <div className='total-price'>
              <span>Total Amount to be paid</span>
              <span className='price'>₹ 373</span>
            </div>
          </div>

          {/* <hr /> */}

          <div className='coupon-section'>
            {/* <table>
              <thead>
                <tr>
                  <th>Coupon Codes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No coupon codes applicable for this property.</td>
                </tr>
                <tr>
                  <td>MMT Gift Cards can be applied at payment step</td>
                </tr>
              </tbody>
            </table> */}

            <div className='coupon-table'>
              <p>Coupon Codes</p>
              <div className='fs-10'>
                No coupon codes applicable for this property.
              </div>
            </div>

            {/* <div className='have-coupon'> →</div>/ */}

            <div className='filter-input-box'>
              <input placeholder='Have a Coupon Code' />
              <i className='text-20 mr-10'>
                <ArrowForwardIcon />
              </i>
            </div>
          </div>

          {/* <hr /> */}

          <div className='signup-benefits'>
            <h3>WHY SIGN UP OR LOGIN</h3>
            <ul>
              <li> Get access to Secret Deals</li>
              <li> Book Faster - well save & pre-enter your details</li>
              <li> Manage your bookings from one place</li>
            </ul>
          </div>

          <hr />
        </div>
      </div>
    </div>
  )
}

export default BookingReview
