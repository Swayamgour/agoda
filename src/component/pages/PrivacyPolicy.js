import React, { useState, useEffect } from 'react'
import styles from '../../style/TermsAndConditions.module.css'
import {
  FiChevronDown,
  FiChevronUp,
  FiCheck,
  FiExternalLink
} from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'

const PrivacyPolicy = () => {
  const [activeSections, setActiveSections] = useState(['intro'])
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navigate = useNavigate()

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

  const privacySections = [
    {
      id: 'intro',
      title: 'Introduction',
      content:
        'We are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our services. By accessing our platform, you agree to the collection and use of information in accordance with this policy.'
    },
    {
      id: 'data-collection',
      title: 'Data We Collect',
      content: (
        <>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>
              <strong>Personal Identification:</strong> Name, email address,
              phone number
            </li>
            <li>
              <strong>Usage Data:</strong> Pages visited, time spent, features
              used
            </li>
            <li>
              <strong>Technical Data:</strong> IP address, browser type, device
              information
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to enhance your
              experience
            </li>
          </ul>
        </>
      )
    },
    {
      id: 'data-use',
      title: 'How We Use Your Data',
      content: (
        <>
          <p>Your information helps us:</p>
          <ul>
            <li>Provide and maintain our service</li>
            <li>Notify you about changes to our service</li>
            <li>Allow participation in interactive features</li>
            <li>Provide customer support</li>
            <li>Gather analysis to improve our service</li>
            <li>Monitor usage and detect technical issues</li>
          </ul>
        </>
      )
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing & Disclosure',
      content:
        'We may share your personal information with service providers to monitor and analyze service usage, or to contact you. We may also disclose information when required by law or to protect our rights. We never sell your personal data to third parties.'
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content:
        'We implement industry-standard security measures including encryption, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.'
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      content: (
        <>
          <p>Depending on your location, you may have rights including:</p>
          <ul>
            <li>Access to your personal data</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of your data</li>
            <li>Restriction of processing</li>
            <li>Data portability</li>
            <li>Objection to processing</li>
          </ul>
          <p>
            To exercise these rights, please contact our Data Protection
            Officer.
          </p>
        </>
      )
    },
    {
      id: 'cookies',
      title: 'Cookies Policy',
      content:
        'We use cookies and similar tracking technologies to track activity on our service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features may not function properly without cookies.'
    },
    {
      id: 'changes',
      title: 'Policy Changes',
      content:
        'We may update our Privacy Policy periodically. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. You are advised to review this policy periodically for any changes.'
    }
  ]

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
          <h1>Privacy Policy</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={styles.themeToggle}
            aria-label='Toggle dark mode'
          >
            {darkMode ? '☀️' : '🌙'}
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
          {/* <div className={styles.intro}>
            <h2>Your Privacy Matters</h2>
            <p className={styles.lastUpdated}>
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <p className={styles.summary}>
              This policy describes how we collect, use, and protect your
              personal information. Please read it carefully to understand our
              practices.
            </p>
          </div> */}

          <ContactHeader className='contact-header'>
            <h1>Your Privacy Matters</h1>
            <p>
              Last updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <p>
              This policy describes how we collect, use, and protect your
              personal information. Please read it carefully to understand our
              practices.
            </p>
          </ContactHeader>

          <div className={styles.privacySections}>
            {privacySections.map(section => (
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
                  {activeSections.includes(section.id) ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
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
                      {section.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className={styles.contact}>
            <h3>Contact Us</h3>
            <p>
              If you have questions about this privacy policy or your personal
              data:
            </p>
            <div className={styles.contactMethods}>
              <a
                href='mailto:privacy@example.com'
                className={styles.contactLink}
              >
                <FiExternalLink /> Email our Privacy Team
              </a>
              <a
                onClick={() => navigate('/contact')}
                className={styles.contactLink}
              >
                <FiExternalLink /> Contact Form
              </a>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a onClick={() => navigate('/TermsAndConditions')}>
            Terms of Service
          </a>
          <a href='/cookies'>Cookie Policy</a>
          <a href='/data-request'>Data Request</a>
        </div>
      </footer>
    </div>
  )
}

export default PrivacyPolicy
