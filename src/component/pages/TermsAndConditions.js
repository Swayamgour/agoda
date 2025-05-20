// TermsAndConditions.jsx
import React, { useState, useEffect } from 'react'
import styles from '../../style/TermsAndConditions.module.css'
import { FiCheck, FiChevronRight, FiMoon, FiSun } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { styled } from '@mui/material/styles'


const TermsAndConditions = () => {
  const [activeSections, setActiveSections] = useState([])
  const [accepted, setAccepted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSection = id => {
    setActiveSections(prev =>
      prev.includes(id)
        ? prev.filter(sectionId => sectionId !== id)
        : [...prev, id]
    )
  }

  const sections = [
    {
      id: 'intro',
      title: 'Welcome to Our Platform',
      content:
        'By accessing or using our services, you agree to be bound by these terms. Our platform provides innovative solutions tailored to your needs, and these terms ensure a safe and fair environment for all users.'
    },
    {
      id: 'account',
      title: 'Account Responsibilities',
      content:
        'You are responsible for maintaining the confidentiality of your account credentials. Any activities under your account are your responsibility. Notify us immediately of any unauthorized use or security breaches.'
    },
    {
      id: 'content',
      title: 'User-Generated Content',
      content:
        'You retain ownership of content you create, but grant us a license to use it for service operation. Content must comply with community guidelines and not infringe on others rights. We may remove inappropriate content without notice.'
    },
    {
      id: 'privacy',
      title: 'Data Privacy',
      content:
        'We collect and process personal data as described in our Privacy Policy. By using our services, you consent to this data processing. We implement industry-standard security measures to protect your information.'
    },
    {
      id: 'termination',
      title: 'Service Termination',
      content:
        'We reserve the right to suspend or terminate accounts violating these terms. You may stop using our services at any time. Certain provisions survive termination, including intellectual property rights and liability limitations.'
    }
  ]

  const toggleAcceptance = () => {
    setAccepted(!accepted)
    if (!accepted) {
      // Scroll to acceptance section when accepting
      document
        .getElementById('acceptance-section')
        .scrollIntoView({ behavior: 'smooth' })
    }
  }

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
    },
    '@media (max-width: 768px)': {
      marginBottom: '10px',
      '& h1': {
        fontSize: '2rem',
        marginBottom: '5px'
      },
      '& p': {
        fontSize: '1rem'
      }
    }
  })

  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : ''}`}>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.headerContent}>
          <h1>Terms & Conditions</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={styles.themeToggle}
            aria-label='Toggle dark mode'
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <motion.div
          className={styles.glassCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.intro}></div>

          <ContactHeader className='contact-header'>
          
            <h1>Our Agreement With You</h1>
            <p>
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </ContactHeader>

          <div className={styles.termsSections}>
            {sections.map(section => (
              <div
                key={section.id}
                className={`${styles.section} ${
                  activeSections.includes(section.id) ? styles.active : ''
                }`}
              >
                <button
                  className={styles.sectionHeader}
                  onClick={() => toggleSection(section.id)}
                >
                  <span>{section.title}</span>
                  <motion.div
                    animate={{
                      rotate: activeSections.includes(section.id) ? 90 : 0
                    }}
                  >
                    <FiChevronRight />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeSections.includes(section.id) && (
                    <motion.div
                      className={styles.sectionContent}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{section.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div id='acceptance-section' className={styles.acceptance}>
            <motion.div
              className={styles.acceptanceToggle}
              onClick={toggleAcceptance}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`${styles.toggleCircle} ${
                  accepted ? styles.accepted : ''
                }`}
              >
                {accepted && <FiCheck />}
              </div>
              <span>I agree to the Terms and Conditions</span>
            </motion.div>

            <AnimatePresence>
              {accepted && (
                <motion.div
                  className={styles.successMessage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <p>Thank you for accepting our terms!</p>
                  <button className={styles.continueButton}>
                    Continue to Dashboard
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href='/privacy'>Privacy Policy</a>
          <a href='/contact'>Contact Us</a>
          <a href='/help'>Help Center</a>
        </div>
      </footer>
    </div>
  )
}

export default TermsAndConditions
