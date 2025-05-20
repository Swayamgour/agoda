import React from 'react';
import { FiPhone, FiMail, FiMapPin, FiDownload, FiGlobe, FiDollarSign } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaApple, FaGooglePlay } from 'react-icons/fa';
import styles from '../style/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Floating decorative elements */}
      <div className={styles.floatingCircle1}></div>
      <div className={styles.floatingCircle2}></div>
      
      <div className={styles.container}>
        {/* Main content grid */}
        <div className={styles.grid}>
          {/* Contact section with animated border */}
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

          {/* Quick links with hover effects */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Explore</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}><span className={styles.linkHover}></span>Destinations</a></li>
              <li><a href="#" className={styles.link}><span className={styles.linkHover}></span>Tour Packages</a></li>
              <li><a href="#" className={styles.link}><span className={styles.linkHover}></span>Adventure Tours</a></li>
              <li><a href="#" className={styles.link}><span className={styles.linkHover}></span>Luxury Getaways</a></li>
              <li><a href="#" className={styles.link}><span className={styles.linkHover}></span>Travel Guides</a></li>
            </ul>
          </div>

          {/* Company links */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Company</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}><span className={styles.linkHover}></span>About Us</a></li>
              <li><a href="#" className={styles.link}><span className={styles.linkHover}></span>Careers</a></li>
              <li><a href="#" className={styles.link}><span className={styles.linkHover}></span>Blog</a></li>
              <li><a href="#" className={styles.link}><span className={styles.linkHover}></span>Press</a></li>
              <li><a href="#" className={styles.link}><span className={styles.linkHover}></span>Partners</a></li>
            </ul>
          </div>

          {/* Newsletter and apps */}
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
                <a href="#" className={styles.appButton}>
                  <FaApple className={styles.appIcon} />
                  <div>
                    <span className={styles.downloadLabel}>Download on the</span>
                    <span className={styles.appStore}>App Store</span>
                  </div>
                </a>
                <a href="#" className={styles.appButton}>
                  <FaGooglePlay className={styles.appIcon} />
                  <div>
                    <span className={styles.downloadLabel}>Get it on</span>
                    <span className={styles.appStore}>Google Play</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section with social media */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © 2025 GoTrip LLC. All rights reserved.
          </div>
          
          <div className={styles.socialMedia}>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className={styles.socialLink} aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
          
          <div className={styles.utilityLinks}>
            {/* <div className={styles.languageSelector}>
              <FiGlobe className={styles.utilityIcon} />
              <select className={styles.utilitySelect}>
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
              </select>
            </div> */}
            {/* <div className={styles.currencySelector}>
              <FiDollarSign className={styles.utilityIcon} />
              <select className={styles.utilitySelect}>
                <option>USD</option>
                <option>EUR</option>
                <option>GBP</option>
              </select>
            </div> */}
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;