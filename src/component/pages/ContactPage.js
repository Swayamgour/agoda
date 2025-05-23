import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import { keyframes } from '@emotion/react'
// import '../../style/ContactPage.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

// Animation for form elements
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`

// Styled components
const ContactContainer = styled('div')({
  maxWidth: '1200px',
  margin: '70px auto 0',
  padding: '40px 20px',
  fontFamily: "'Poppins', sans-serif",
  animation: `${fadeIn} 0.5s ease-out`,
  '@media (max-width: 768px)': {
    padding: '5px'
  }
})

const ContactHeader = styled('div')({
  textAlign: 'center',
  marginBottom: '50px',
  '& h1': {
    fontSize: '2.8rem',
    color: '#2c3e50',
    marginBottom: '15px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #3498db, #2c3e50)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  '& p': {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6'
  }
})

const FormSection = styled('div')({
  flex: 1,
  background: '#fff',
  padding: '40px',
  borderRadius: '12px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)'
  },
  '& h2': {
    fontSize: '1.8rem',
    color: '#2c3e50',
    marginBottom: '25px',
    fontWeight: '600'
  }
})

const FormGroup = styled('div')({
  marginBottom: '25px',
  animation: `${fadeIn} 0.5s ease-out`,
  '& label': {
    display: 'block',
    marginBottom: '10px',
    fontWeight: '500',
    color: '#34495e',
    fontSize: '15px'
  },
  '& input, & select, & textarea': {
    width: '100%',
    padding: '14px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    fontSize: '16px',
    transition: 'all 0.3s ease',
    '&:focus': {
      borderColor: '#3498db',
      outline: 'none',
      boxShadow: '0 0 0 3px rgba(52, 152, 219, 0.2)'
    }
  },
  '& textarea': {
    resize: 'vertical',
    minHeight: '120px'
  }
})

const SubmitButton = styled('button')({
  background: 'linear-gradient(135deg, #3498db, #2c3e50)',
  color: 'white',
  border: 'none',
  padding: '14px 28px',
  fontSize: '16px',
  fontWeight: '600',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  width: '100%',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(52, 152, 219, 0.4)'
  }
})

const InfoSection = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '30px'
})

const InfoCard = styled('div')({
  background: '#fff',
  padding: '30px',
  borderRadius: '12px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)'
  },
  '& h2': {
    fontSize: '1.8rem',
    color: '#2c3e50',
    marginBottom: '25px',
    fontWeight: '600'
  }
})

const InfoItem = styled('div')({
  display: 'flex',
  gap: '20px',
  marginBottom: '25px',
  alignItems: 'flex-start',
  '& .info-icon': {
    color: '#3498db',
    fontSize: '1.5rem',
    background: 'rgba(52, 152, 219, 0.1)',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: '0'
  },
  '& h3': {
    fontSize: '1.2rem',
    color: '#2c3e50',
    marginBottom: '8px',
    fontWeight: '500'
  },
  '& p': {
    color: '#7f8c8d',
    margin: '5px 0',
    lineHeight: '1.6'
  }
})

const MapContainer = styled('div')({
  background: '#fff',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
  overflow: 'hidden',
  '& iframe': {
    border: 'none',
    borderRadius: '8px'
  }
})

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
    <ContactContainer className='contact-page'>
      <ContactHeader className='contact-header'>
        <h1>Get In Touch</h1>
        <p>
          Have questions or need assistance? Our team is ready to help you with
          any inquiries about our travel services.
        </p>
      </ContactHeader>

      <div
        className='contact-container'
        style={{ display: 'flex', gap: '40px' }}
      >
        <FormSection className='contact-form-section'>
          <h2>Send us a message</h2>
          <form onSubmit={handleSubmit} className='contact-form'>
            <FormGroup className='form-group'>
              <label htmlFor='name'>Full Name*</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                placeholder='Enter your full name'
              />
            </FormGroup>

            <FormGroup className='form-group'>
              <label htmlFor='email'>Email*</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                placeholder='Enter your email address'
              />
            </FormGroup>

            <FormGroup className='form-group'>
              <label htmlFor='phone'>Phone Number</label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='Enter your phone number'
              />
            </FormGroup>

            <FormGroup className='form-group'>
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
            </FormGroup>

            <FormGroup className='form-group'>
              <label htmlFor='message'>Message*</label>
              <textarea
                id='message'
                name='message'
                rows='5'
                value={formData.message}
                onChange={handleChange}
                required
                placeholder='Type your message here...'
              ></textarea>
            </FormGroup>

            <SubmitButton type='submit' className='submit-btn'>
              Send Message
            </SubmitButton>
          </form>
        </FormSection>

        <InfoSection className='contact-info-section'>
          <InfoCard className='contact-info'>
            <h2>Contact Information</h2>

            <InfoItem className='info-item'>
              <div className='info-icon'>
                <FaMapMarkerAlt />
              </div>
              <div className='info-content'>
                <h3>Address</h3>
                <p>123 Travel Street, Bangalore</p>
                <p>Karnataka 560001, India</p>
              </div>
            </InfoItem>

            <InfoItem className='info-item'>
              <div className='info-icon'>
                <FaPhoneAlt />
              </div>
              <div className='info-content'>
                <h3>Phone</h3>
                <p>+91 80 1234 5678</p>
                <p>+91 98765 43210</p>
              </div>
            </InfoItem>

            <InfoItem className='info-item'>
              <div className='info-icon'>
                <FaEnvelope />
              </div>
              <div className='info-content'>
                <h3>Email</h3>
                <p>info@travelbooking.com</p>
                <p>support@travelbooking.com</p>
              </div>
            </InfoItem>

            <InfoItem className='info-item'>
              <div className='info-icon'>
                <FaClock />
              </div>
              <div className='info-content'>
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </InfoItem>
          </InfoCard>

          <MapContainer className='contact-map'>
            <iframe
              title='Office Location'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.013074448531!2d77.59461441482193!3d12.972190990856982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin'
              width='100%'
              height='300'
              allowFullScreen=''
              loading='lazy'
            ></iframe>
          </MapContainer>
        </InfoSection>
      </div>
    </ContactContainer>
  )
}

export default ContactPage
