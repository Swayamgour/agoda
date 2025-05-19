import React, { useEffect, useState } from 'react'
import '../../style/PaymentPage.css'
import SecurityIcon from '@mui/icons-material/Security'
import ScrollFadeIn from '../scrollview/ScrollFadeIn'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import BookingDetails from '../car/BookingDetails'
import TicketSummary from '../Train/TicketSummary'
import { useLocation } from 'react-router-dom'
import FlightPaymentPage from '../flight/FlightPaymentPage'
import BusPaymentPage from '../BusBooking/BusPaymentPage'
import PublicImage from '../../utils/PublicImage'

const HotelBookingPaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: 'Swayam Gaur'
  })
  const [selectPaymentType, setSelectPaymentType] = useState('credit')
  const [selectedBank, setSelectedBank] = useState('credit')
  const [selectedMethod, setSelectedMethod] = useState('credit')
  const [selectedCardMethod, setSelectedCardMethod] = useState('')

  const location = useLocation()

  // console.log()

  const [show, setShow] = useState(false)

  const initialTime = '00.10.00' // hh.mm.ss
  const parseTimeToSeconds = timeStr => {
    const [hh, mm, ss] = timeStr.split('.').map(Number)
    return hh * 3600 + mm * 60 + ss
  }
  const [secondsLeft, setSecondsLeft] = useState(() =>
    parseTimeToSeconds(initialTime)
  )
  // useEffect

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

  useEffect(() => {
    if (secondsLeft <= 0) return

    const interval = setInterval(() => {
      setSecondsLeft(prev => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [secondsLeft])

  const formatTime = totalSeconds => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0')
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      '0'
    )
    const seconds = String(totalSeconds % 60).padStart(2, '0')
    return `${hours}.${minutes}.${seconds}`
  }

  // useEffect

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <div style={{ marginTop: '70px' }} className='booking-review'>
      <p className='payment-process-timer'>
        We are holding your price....{' '}
        <span style={{ display: 'flex', gap: '5px', color: 'rgb(225,44,44)' }}>
          <AccessTimeIcon />
          {/* {formatTime(time)} */}
          {formatTime(secondsLeft)}
        </span>
      </p>
      <div className='booking-review-container'>
        <div className='booking-review-container-left '>
          <div className='PaymentPage_Secure'>
            <SecurityIcon /> Secure payment
          </div>
          <p className='secure-text'>
            All card information is fully encrypted, secure and protected.
          </p>

          <p className='payment-methods-text'>
            accepts 12 different payment methods for this booking.
          </p>

          {/* <hr className='divider' /> */}

          <div
            className={
              selectPaymentType === 'credit'
                ? 'PaymentPage_Type_OF_Payment'
                : 'PaymentPage_Type_OF_Payment_option'
            }
            onClick={() => setSelectPaymentType('credit')}
          >
            <div
              style={{
                display: 'flex',
                gap: '5px',
                alignItems: 'center',
                whiteSpace: 'nowrap'
                // width: '50%',
                // justifyContent:'flex-start'
              }}
            >
              <input
                type='radio'
                name='paymentType'
                value='credit'
                style={{ transform: 'scale(1.2)', marginRight: '8px' }}
                checked={selectPaymentType === 'credit'}
                onChange={() => setSelectPaymentType('credit')}
              />
              {/* ONLINE BANKING */}
              CREDIT/DEBIT CARD
            </div>

            <div style={{ display: 'flex', height: '25px', gap: '5px' }}>
              <PublicImage src='/images/ic_visa@2x_v3.png' alt='logo' />
              <PublicImage src='/images/ic_master_2.png' alt='logo' />
              <PublicImage src='/images/rupay_debit.png' alt='logo' />
              {/* <PublicImage src='/images/ic_americanexpress.png' alt='logo' /> */}
              {/* <PublicImage src='/images/ic_jcb.png' /> */}
              <PublicImage src='/images/ic_card_unionpay.png' alt='logo' />
            </div>
          </div>

          {paymentMethod === 'credit' && (
            <form onSubmit={handleSubmit} className='card-form'>
              {selectPaymentType === 'credit' && (
                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Select payment method *</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControl fullWidth>
                      <InputLabel id='card-method-label'>Card Type</InputLabel>
                      <Select
                        labelId='card-method-label'
                        id='card-method'
                        value={selectedCardMethod}
                        label='Card Type'
                        onChange={e => setSelectedCardMethod(e.target.value)}
                      >
                        <MenuItem value='visa_master_amex_jcb'>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              height: '25px'
                            }}
                          >
                            <PublicImage
                              src='/images/ic_visa@2x_v3.png'
                              alt='upi'
                              // height={20}
                              height={50}
                              width={50}
                            />
                            Visa / Mastercard / Amex / JCB
                          </div>
                        </MenuItem>
                        <MenuItem value='rupay'>
                          {/* RuPay */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              height: '25px'
                            }}
                          >
                            <PublicImage
                              src='/images/rupay_debit.png'
                              alt='upi'
                              // height={20}
                              height={50}
                              width={50}
                            />
                            RuPay
                          </div>
                        </MenuItem>
                        <MenuItem value='unionpay'>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                              height: '25px'
                            }}
                          >
                            <PublicImage
                              src='/images/ic_americanexpress.png'
                              alt='upi'
                              // height={20}
                              height={50}
                              width={50}
                            />{' '}
                            UnionPay - Credit Card UPI
                          </div>
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </AccordionDetails>
                </Accordion>
              )}

              <div>
                {selectPaymentType === 'credit' && (
                  <>
                    <ScrollFadeIn>
                      <p className='payment-methods-text'>
                        {/* accepts 12 different payment methods for this booking. */}
                        Last step! You're almost done.
                      </p>

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

                        {/* <div style={{ height: '20px' }}>
                    <PublicImage src='/images/cvv-icon@2x.png' />
                  </div> */}
                      </div>
                    </ScrollFadeIn>
                  </>
                )}

                <div
                  className={
                    selectPaymentType === 'digital'
                      ? 'PaymentPage_Type_OF_Payment'
                      : 'PaymentPage_Type_OF_Payment_option'
                  }
                  onClick={() => setSelectPaymentType('digital')}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '5px',
                      alignItems: 'center',
                      whiteSpace: 'nowrap'
                      // width: '50%',
                      // justifyContent:'flex-start'
                    }}
                  >
                    <input
                      type='radio'
                      name='paymentType'
                      value='digital'
                      style={{ transform: 'scale(1.2)', marginRight: '8px' }}
                      checked={selectPaymentType === 'digital'}
                      onChange={() => setSelectPaymentType('digital')}
                    />
                    DIGITAL PAYMENT
                  </div>

                  <div style={{ display: 'flex', height: '25px', gap: '5px' }}>
                    <PublicImage src='/images/ic_UPI_2.png' />
                    <PublicImage src='/images/ic_paypal_3.png' alt='logo' />
                  </div>
                </div>

                <div>
                  {selectPaymentType === 'digital' && (
                    <>
                      <ScrollFadeIn>
                        <Accordion defaultExpanded>
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>Select payment method *</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <FormControl fullWidth>
                              <InputLabel id='method-select-label'>
                                Method
                              </InputLabel>
                              <Select
                                labelId='method-select-label'
                                id='method-select'
                                value={selectedMethod}
                                label='Method'
                                onChange={e =>
                                  setSelectedMethod(e.target.value)
                                }
                              >
                                <MenuItem value='UPI'>
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '10px',
                                      height: '25px'
                                    }}
                                  >
                                    <PublicImage
                                      src='/images/ic_UPI_2.png'
                                      alt='upi'
                                      // height={20}
                                      height={50}
                                      width={50}
                                    />
                                    UPI
                                  </div>
                                </MenuItem>
                                <MenuItem value='PayPal'>
                                  <div
                                    style={{
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '10px',
                                      height: '25px'
                                    }}
                                  >
                                    <PublicImage
                                      src='/images/ic_paypal_3.png'
                                      alt='paypal'
                                      height={40}
                                      width={40}
                                    />
                                    PayPal
                                  </div>
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </AccordionDetails>
                        </Accordion>

                        <p className='payment-methods-text'>
                          {/* accepts 12 different payment methods for this booking. */}
                          Last step! You're almost done.
                        </p>
                        <div className='form-group'>
                          <label>Virtual Payment Address (VPA) *</label>
                          <input
                            type='text'
                            className='form-control'
                            style={{ lineHeight: '1.1' }}
                            // value={cardDetails.cardHolderName}
                            // onChange={handleInputChange}
                            name='cardHolderName'
                            required
                            placeholder='e.g.yourname@bankname'
                          />
                        </div>

                        <ul>
                          <li className='Payment-Disc'>
                            Clicking 'Book Now' will redirect you to the payment
                            instruction page
                          </li>
                          <li className='Payment-Disc'>
                            Your total amount will be charged is :{' '}
                            <strong> RS. 799</strong>
                          </li>
                        </ul>
                      </ScrollFadeIn>
                    </>
                  )}
                </div>
                <div
                  className={
                    selectPaymentType === 'online'
                      ? 'PaymentPage_Type_OF_Payment'
                      : 'PaymentPage_Type_OF_Payment_option'
                  }
                  onClick={() => setSelectPaymentType('online')}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '5px',
                      alignItems: 'center',
                      whiteSpace: 'nowrap'
                      // width: '50%',
                      // justifyContent:'flex-start'
                    }}
                  >
                    <input
                      type='radio'
                      name='paymentType'
                      value='online'
                      style={{ transform: 'scale(1.2)', marginRight: '8px' }}
                      checked={selectPaymentType === 'online'}
                      onChange={() => setSelectPaymentType('online')}
                    />
                    ONLINE BANKING
                  </div>
                  <div style={{ display: 'flex', height: '25px', gap: '5px' }}>
                    <PublicImage src='/images/ic_HDFC_2.png' alt='logo' />
                    <PublicImage src='/images/ic_icici_2.png' alt='logo' />
                    <PublicImage src='/images/ic_sbi_2.png' alt='logo' />
                  </div>
                </div>

                <div>
                  {selectPaymentType === 'online' && (
                    <>
                      <ScrollFadeIn>
                        {selectPaymentType === 'online' && (
                          <Accordion defaultExpanded>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                              <Typography>Select payment method *</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                              <FormControl fullWidth>
                                <InputLabel id='bank-select-label'>
                                  Bank
                                </InputLabel>
                                <Select
                                  labelId='bank-select-label'
                                  id='bank-select'
                                  value={selectedBank}
                                  label='Bank'
                                  onChange={e =>
                                    setSelectedBank(e.target.value)
                                  }
                                >
                                  <MenuItem value='HDFC'>
                                    <div
                                      style={{
                                        display: 'flex',
                                        height: '25px',
                                        gap: '10px'
                                      }}
                                    >
                                      <PublicImage
                                        src='/images/ic_HDFC_2.png'
                                        alt='logo'
                                      />
                                      HDFC
                                    </div>
                                  </MenuItem>
                                  <MenuItem value='ICICI'>
                                    <div
                                      style={{
                                        display: 'flex',
                                        height: '25px',
                                        gap: '10px'
                                      }}
                                    >
                                      <PublicImage
                                        src='/images/ic_icici_2.png'
                                        alt='logo'
                                      />
                                      ICICI
                                    </div>
                                  </MenuItem>
                                  <MenuItem value='SBI'>
                                    {' '}
                                    <div
                                      style={{
                                        display: 'flex',
                                        height: '25px',
                                        gap: '10px'
                                      }}
                                    >
                                      <PublicImage
                                        src='/images/ic_sbi_2.png'
                                        alt='logo'
                                      />
                                      SBI
                                    </div>
                                  </MenuItem>
                                </Select>
                              </FormControl>
                            </AccordionDetails>
                          </Accordion>
                        )}

                        <p className='payment-methods-text'>
                          {/* accepts 12 different payment methods for this booking. */}
                          Last step! You're almost done.
                        </p>

                        <ul>
                          <li className='Payment-Disc'>
                            You will be forwarded to the bank's website to
                            complete your payment
                          </li>
                          <li className='Payment-Disc'>
                            you will charged in the currency of the bank.
                            {/* <strong> RS. 799</strong> */}
                          </li>
                        </ul>
                      </ScrollFadeIn>
                    </>
                  )}
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
        </div>

        {/* Hotel Booking */}

        {location?.state?.path === 'BookingReview' && (
          <div className='booking-review-container-right'>
            <div className='price-section-hotel'>
              <h3>Super Hotel O Kalyanpur Near IIT Kanpur</h3>
              <p className='fs-12'>
                Thu, May 8 - Thu, May 15 - 7 nights + 1 x classic
              </p>

              <table className='date-table'>
                <tbody>
                  <tr className='fs-12'>
                    <td>Thu, May 8</td>
                    <td>Thu, May 15</td>
                    <td>7 nights</td>
                  </tr>
                  <tr className='fs-12'>
                    <td>12:00 PM</td>
                    <td>11:00 AM</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='price-section-hotel'>
              <ul className='coupon-list'>
                <li>Auto-applied coupon</li>
                <li>
                  <strong>AGODASPONSORED</strong> Coupon applied
                </li>
                <li>Rs. 1,971.12 off</li>
              </ul>
            </div>

            <div className='price-section-hotel'>
              <p className='price-match'>
                <strong> We price match. </strong> Find it for less, and we'll
                match it!
              </p>
              <p className='savings'>
                <strong>You saved Rs. </strong> 1,971.12 on this booking!
              </p>
            </div>

            {/* <hr className='divider' /> */}

            <div className='price-section-hotel'>
              <div className='price-breakdown'>
                <p>
                  Original price (1 room x 7 nights) <span>₹ 9,9000</span>
                </p>
                <p>
                  Our price <span>₹ 9,9000</span>
                </p>
                <p style={{ color: 'green' }}>
                  AGODASPONSORED Coupon applied <span>₹ - 57.61%</span>
                </p>
                <p>
                  Room price (1 room x 7 nights) <span>₹ 9,9000</span>
                </p>
                <p>
                  Taxes and fees <span>₹ 9,9000</span>
                </p>
                <p style={{ color: 'green' }}>
                  Booking fees <span>Free</span>
                </p>
              </div>

              <hr className='divider' />

              <div className='total-price'>
                <h3>Price </h3>
                <h3>Rs. 7,999.11</h3>
              </div>
              <p></p>
            </div>
          </div>
        )}
        {/* Car Booking */}
        {location?.state?.path === 'CarBooking' && (
          <div className='booking-review-container-right'>
            <BookingDetails />
          </div>
        )}
        {/* Train Booking */}
        {location?.state?.path === 'PassengerDetails' && (
          <div className='booking-review-container-right'>
            <TicketSummary />
          </div>
        )}
        {/* Flight Booking */}
        {location?.state?.path === 'BookingConfirmation' && (
          <div className='booking-review-container-right'>
            <FlightPaymentPage />
          </div>
        )}

        {location?.state?.path === 'BusBookingDetail' && (
          <div className='booking-review-container-right'>
            <BusPaymentPage />
          </div>
        )}
      </div>
    </div>
  )
}

export default HotelBookingPaymentPage
