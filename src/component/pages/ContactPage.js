import React, { useState } from 'react'
import '../../style/ContactPage.css'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Handle form submission (e.g., send to backend)
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div style={{ marginTop: '70px' }} className='contact-page'>
      <div className='contact-header'>
        <h1>Contact Us</h1>
        <p>Have questions or need assistance? We're here to help!</p>
      </div>

      <div className='contact-container'>
        <div className='contact-form-section'>
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit} className='contact-form'>
            <div className='form-group'>
              <label htmlFor='name'>Full Name*</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email*</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='phone'>Phone Number</label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='subject'>Subject*</label>
              <select
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value=''>Select a subject</option>
                <option value='booking'>Booking Inquiry</option>
                <option value='support'>Customer Support</option>
                <option value='feedback'>Feedback</option>
                <option value='partnership'>Partnership</option>
                <option value='other'>Other</option>
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='message'>Message*</label>
              <textarea
                id='message'
                name='message'
                rows='5'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type='submit' className='submit-btn'>
              Send Message
            </button>
          </form>
        </div>

        <div className='contact-info-section'>
          <div className='contact-info'>
            <h2>Contact Information</h2>

            <div className='info-item'>
              <div className='info-icon'>
                <i className='fas fa-map-marker-alt'></i>
              </div>
              <div className='info-content'>
                <h3>Address</h3>
                <p>123 Travel Street, Bangalore</p>
                <p>Karnataka 560001, India</p>
              </div>
            </div>

            <div className='info-item'>
              <div className='info-icon'>
                <i className='fas fa-phone-alt'></i>
              </div>
              <div className='info-content'>
                <h3>Phone</h3>
                <p>+91 80 1234 5678</p>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className='info-item'>
              <div className='info-icon'>
                <i className='fas fa-envelope'></i>
              </div>
              <div className='info-content'>
                <h3>Email</h3>
                <p>info@travelbooking.com</p>
                <p>support@travelbooking.com</p>
              </div>
            </div>

            <div className='info-item'>
              <div className='info-icon'>
                <i className='fas fa-clock'></i>
              </div>
              <div className='info-content'>
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          <div className='contact-map'>
            <iframe
              title='Office Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.013074448531!2d77.59461441482193!3d12.972190990856982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
              width='100%'
              height='300'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
