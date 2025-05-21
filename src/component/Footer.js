import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiDownload, FiGlobe, FiDollarSign } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaApple, FaGooglePlay } from 'react-icons/fa';
import styles from '../style/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.floatingCircle1}></div>
      <div className={styles.floatingCircle2}></div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={`${styles.section} ${styles.contactSection}`}>
            <div className={styles.sectionInner}>
              <h3 className={styles.sectionTitle}>Let's Connect</h3>
              <div className={styles.contactItems}>
                <div className={styles.contactItem}>
                  <FiPhone className={styles.contactIcon} />
                  <div>
                    <p className={styles.contactLabel}>24/7 Support</p>
                    <p className={styles.contactValue}>+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <FiMail className={styles.contactIcon} />
                  <div>
                    <p className={styles.contactLabel}>Email Us</p>
                    <p className={styles.contactValue}>hi@gotrip.com</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <FiMapPin className={styles.contactIcon} />
                  <div>
                    <p className={styles.contactLabel}>Our Office</p>
                    <p className={styles.contactValue}>123 Travel St, Adventure City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Explore</h3>
            <ul className={styles.linkList}>
              {['Destinations', 'Tour Packages', 'Adventure Tours', 'Luxury Getaways', 'Travel Guides'].map(item => (
                <li key={item}>
                  <button className={styles.link}><span className={styles.linkHover}></span>{item}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Company</h3>
            <ul className={styles.linkList}>
              {['About Us', 'Careers', 'Blog', 'Press', 'Partners'].map(item => (
                <li key={item}>
                  <button className={styles.link}><span className={styles.linkHover}></span>{item}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Stay Updated</h3>
            <div className={styles.newsletter}>
              <p className={styles.newsletterText}>Subscribe for exclusive deals and travel tips</p>
              <div className={styles.newsletterForm}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className={styles.newsletterInput}
                />
                <button className={styles.newsletterButton}>
                  <FiDownload className={styles.buttonIcon} />
                </button>
              </div>
            </div>

            <div className={styles.appDownload}>
              <p className={styles.downloadText}>Get our mobile app</p>
              <div className={styles.appButtons}>
                <button className={styles.appButton}>
                  <FaApple className={styles.appIcon} />
                  <div>
                    <span className={styles.downloadLabel}>Download on the</span>
                    <span className={styles.appStore}>App Store</span>
                  </div>
                </button>
                <button className={styles.appButton}>
                  <FaGooglePlay className={styles.appIcon} />
                  <div>
                    <span className={styles.downloadLabel}>Get it on</span>
                    <span className={styles.appStore}>Google Play</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © 2025 GoTrip LLC. All rights reserved.
          </div>

          <div className={styles.socialMedia}>
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <button key={index} className={styles.socialLink} aria-label={`Social ${index}`}>
                <Icon />
              </button>
            ))}
          </div>

          <div className={styles.utilityLinks}>
            {/* Language & currency selectors were commented out */}
            <button className={styles.legalLink}>Privacy Policy</button>
            <button className={styles.legalLink}>Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
