import React, { useState } from 'react'
import '../../style/PaymentPage.css'

const HotelBookingPaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: 'Swayam Gaur'
  })

  const handleInputChange = e => {
    const { name, value } = e.target
    setCardDetails(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Handle payment submission
    console.log('Payment submitted:', cardDetails)
  }

  return (
    <div style={{ marginTop: '100px' }} className='payment-container'>
      <h1>Secure payment</h1>
      <p className='secure-text'>
        All card information is fully encrypted, secure and protected.
      </p>

      <p className='payment-methods-text'>
        Appda accepts 12 different payment methods for this booking.
      </p>

      <hr className='divider' />

      <div className='payment-methods'>
        <div
          className={`method-tab ${paymentMethod === 'credit' ? 'active' : ''}`}
          onClick={() => setPaymentMethod('credit')}
        >
          <h3>CREDIT/DEBIT CARD</h3>
        </div>
        <div
          className={`method-tab ${
            paymentMethod === 'digital' ? 'active' : ''
          }`}
          onClick={() => setPaymentMethod('digital')}
        >
          <h3>DIGITAL PAYMENT</h3>
        </div>
      </div>

      {paymentMethod === 'credit' && (
        <form onSubmit={handleSubmit} className='card-form'>
          <div className='card-types'>
            <p>
              <strong>VISA</strong>
            </p>
            <p>
              <strong>RuPay</strong>
            </p>
          </div>

          <div className='form-group'>
            <label>Select payment method *</label>
            <select className='form-control'>
              <option>Visa / Mastercard / Arnex / JCB</option>
            </select>
          </div>

          <p className='last-step'>Last step! You're almost done.</p>

          <div className='form-group'>
            <label>Card holder name *</label>
            <input
              type='text'
              className='form-control'
              value={cardDetails.cardHolderName}
              onChange={handleInputChange}
              name='cardHolderName'
              required
            />
          </div>

          <div className='form-group'>
            <label>Credit/debit card number *</label>
            <input
              type='text'
              className='form-control'
              placeholder='Card Number:'
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
              name='cardNumber'
              required
            />
          </div>

          <div className='card-details-row'>
            <div className='form-group'>
              <label>Expiry date *</label>
              <input
                type='text'
                className='form-control'
                placeholder='MM/YY'
                value={cardDetails.expiryDate}
                onChange={handleInputChange}
                name='expiryDate'
                required
              />
            </div>

            <div className='form-group'>
              <label>CVC/CVV *</label>
              <input
                type='text'
                className='form-control'
                placeholder='123'
                value={cardDetails.cvv}
                onChange={handleInputChange}
                name='cvv'
                required
              />
            </div>
          </div>

          <button type='submit' className='pay-button'>
            Pay Now
          </button>
        </form>
      )}

      {paymentMethod === 'digital' && (
        <div className='digital-payment'>
          <h3>ONLINE BANKING</h3>
          {/* Additional digital payment options would go here */}
          <p>Digital payment options will be displayed here</p>
        </div>
      )}

      <div className='booking-summary'>
        <h3>Super Hotel O Kalyanpur Near IIT Kanpur</h3>
        <p>Thu, May 8 - Thu, May 15 - 7 nights + 1 x classic</p>

        <table className='date-table'>
          <tbody>
            <tr>
              <td>Thu, May 8</td>
              <td>Thu, May 15</td>
              <td>7 nights</td>
            </tr>
            <tr>
              <td>12:00 PM</td>
              <td>11:00 AM</td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <ul className='coupon-list'>
          <li>Auto-applied coupon</li>
          <li>
            <strong>AGODASPONSORED</strong> Coupon applied
          </li>
          <li>Rs. 1,971.12 off</li>
        </ul>

        <p className='price-match'>
          We price match. Find it for less, and we'll match it! 😊
        </p>
        <p className='savings'>You saved Rs. 1,971.12 on this booking!</p>

        <hr className='divider' />

        <div className='price-breakdown'>
          <p>Original price (1 room x 7 nights)</p>
          <p>Our price</p>
          <p>AGODASPONSORED Coupon applied</p>
          <p>Room price (1 room x 7 nights)</p>
          <p>Taxes and fees</p>
          <p>Booking fees</p>
        </div>

        <hr className='divider' />

        <div className='total-price'>
          <h3>Price 😊</h3>
          <h2>Rs. 7,999.11</h2>
        </div>
      </div>
    </div>
  )
}

export default HotelBookingPaymentPage
