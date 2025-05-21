// SettingsTab.jsx
import React, { useState } from 'react'
import {
  FiUser,
  FiMail,
  FiPhone,
  FiLock,
  FiGlobe,
  FiBell,
  FiMoon,
  FiSun,
  FiEye,
  FiEyeOff,
  FiCreditCard,
  FiCalendar,
  FiShield,
  FiHelpCircle
} from 'react-icons/fi'
import styles from './UserProfile.module.css'

const SettingsTab = () => {
  const [activeTab, setActiveTab] = useState('profile')
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // User data
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    language: 'en',
    notifications: {
      email: true,
      sms: false,
      push: true
    },
    theme: 'light',
    billingAddress: {
      line1: '123 Main St',
      line2: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States'
    }
  })

  // Form states
  const [profileForm, setProfileForm] = useState({ ...userData })
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })
  const [privacyForm, setPrivacyForm] = useState({
    shareData: false,
    personalizedAds: true
  })

  const handleProfileChange = e => {
    const { name, value, type, checked } = e.target
    if (name.includes('notifications.')) {
      const field = name.split('.')[1]
      setProfileForm(prev => ({
        ...prev,
        notifications: {
          ...prev.notifications,
          [field]: checked
        }
      }))
    } else if (name.includes('billingAddress.')) {
      const field = name.split('.')[1]
      setProfileForm(prev => ({
        ...prev,
        billingAddress: {
          ...prev.billingAddress,
          [field]: value
        }
      }))
    } else {
      setProfileForm(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }))
    }
  }

  const handlePasswordChange = e => {
    const { name, value } = e.target
    setPasswordForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handlePrivacyChange = e => {
    const { name, checked } = e.target
    setPrivacyForm(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  const saveProfile = e => {
    e.preventDefault()
    setUserData({ ...profileForm })
    alert('Profile updated successfully!')
  }

  const savePassword = e => {
    e.preventDefault()
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("Passwords don't match!")
      return
    }
    alert('Password changed successfully!')
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    })
  }

  const savePrivacy = e => {
    e.preventDefault()
    alert('Privacy settings updated!')
  }

  return (
    <div className={styles.settingsTab}>
      {/* Settings Sidebar */}
      <div className={styles.settingsSidebar}>
        <h2>Settings</h2>
        <nav>
          <button
            className={activeTab === 'profile' ? styles.active : ''}
            onClick={() => setActiveTab('profile')}
          >
            <FiUser /> Profile
          </button>
          <button
            className={activeTab === 'security' ? styles.active : ''}
            onClick={() => setActiveTab('security')}
          >
            <FiLock /> Security
          </button>
          <button
            className={activeTab === 'notifications' ? styles.active : ''}
            onClick={() => setActiveTab('notifications')}
          >
            <FiBell /> Notifications
          </button>
          <button
            className={activeTab === 'privacy' ? styles.active : ''}
            onClick={() => setActiveTab('privacy')}
          >
            <FiShield /> Privacy
          </button>
          <button
            className={activeTab === 'payment' ? styles.active : ''}
            onClick={() => setActiveTab('payment')}
          >
            <FiCreditCard /> Payment
          </button>
          <button
            className={activeTab === 'preferences' ? styles.active : ''}
            onClick={() => setActiveTab('preferences')}
          >
            <FiGlobe /> Preferences
          </button>
        </nav>
      </div>

      {/* Settings Content */}
      <div className={styles.settingsContent}>
        {/* Profile Settings */}
        {activeTab === 'profile' && (
          <div className={styles.settingsSection}>
            <h3>
              <FiUser /> Profile Information
            </h3>
            <form onSubmit={saveProfile}>
              <div className={styles.formGroup}>
                <label>
                  <FiUser className={styles.inputIcon} />
                  Full Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={profileForm.name}
                  onChange={handleProfileChange}
                  placeholder='Your full name'
                />
              </div>

              <div className={styles.formGroup}>
                <label>
                  <FiMail className={styles.inputIcon} />
                  Email Address
                </label>
                <input
                  type='email'
                  name='email'
                  value={profileForm.email}
                  onChange={handleProfileChange}
                  placeholder='Your email address'
                />
              </div>

              <div className={styles.formGroup}>
                <label>
                  <FiPhone className={styles.inputIcon} />
                  Phone Number
                </label>
                <input
                  type='tel'
                  name='phone'
                  value={profileForm.phone}
                  onChange={handleProfileChange}
                  placeholder='Your phone number'
                />
              </div>

              <div className={styles.formSection}>
                <h4>Billing Address</h4>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Address Line 1</label>
                    <input
                      type='text'
                      name='billingAddress.line1'
                      value={profileForm.billingAddress.line1}
                      onChange={handleProfileChange}
                      placeholder='Street address'
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Address Line 2 (Optional)</label>
                    <input
                      type='text'
                      name='billingAddress.line2'
                      value={profileForm.billingAddress.line2}
                      onChange={handleProfileChange}
                      placeholder='Apt, suite, etc.'
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>City</label>
                    <input
                      type='text'
                      name='billingAddress.city'
                      value={profileForm.billingAddress.city}
                      onChange={handleProfileChange}
                      placeholder='City'
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>State/Province</label>
                    <input
                      type='text'
                      name='billingAddress.state'
                      value={profileForm.billingAddress.state}
                      onChange={handleProfileChange}
                      placeholder='State'
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>ZIP/Postal Code</label>
                    <input
                      type='text'
                      name='billingAddress.zip'
                      value={profileForm.billingAddress.zip}
                      onChange={handleProfileChange}
                      placeholder='Postal code'
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Country</label>
                    <input
                      type='text'
                      name='billingAddress.country'
                      value={profileForm.billingAddress.country}
                      onChange={handleProfileChange}
                      placeholder='Country'
                    />
                  </div>
                </div>
              </div>

              <div className={styles.formActions}>
                <button type='submit' className={styles.primaryButton}>
                  Save Changes
                </button>
                <button type='button' className={styles.secondaryButton}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Security Settings */}
        {activeTab === 'security' && (
          <div className={styles.settingsSection}>
            <h3>
              <FiLock /> Security Settings
            </h3>
            <form onSubmit={savePassword}>
              <div className={styles.formGroup}>
                <label>
                  <FiLock className={styles.inputIcon} />
                  Current Password
                </label>
                <div className={styles.passwordInput}>
                  <input
                    type={showCurrentPassword ? 'text' : 'password'}
                    name='currentPassword'
                    value={passwordForm.currentPassword}
                    onChange={handlePasswordChange}
                    placeholder='Enter current password'
                  />
                  <button
                    type='button'
                    className={styles.passwordToggle}
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>
                  <FiLock className={styles.inputIcon} />
                  New Password
                </label>
                <div className={styles.passwordInput}>
                  <input
                    type={showNewPassword ? 'text' : 'password'}
                    name='newPassword'
                    value={passwordForm.newPassword}
                    onChange={handlePasswordChange}
                    placeholder='Enter new password'
                  />
                  <button
                    type='button'
                    className={styles.passwordToggle}
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>
                  <FiLock className={styles.inputIcon} />
                  Confirm New Password
                </label>
                <div className={styles.passwordInput}>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name='confirmPassword'
                    value={passwordForm.confirmPassword}
                    onChange={handlePasswordChange}
                    placeholder='Confirm new password'
                  />
                  <button
                    type='button'
                    className={styles.passwordToggle}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              <div className={styles.passwordStrength}>
                <div className={styles.strengthMeter}>
                  <div
                    className={styles.strengthBar}
                    style={{ width: '60%' }}
                  ></div>
                </div>
                <span>Password Strength: Medium</span>
              </div>

              <div className={styles.formActions}>
                <button type='submit' className={styles.primaryButton}>
                  Change Password
                </button>
              </div>
            </form>

            <div className={styles.securityFeatures}>
              <h4>Security Features</h4>
              <div className={styles.featureCard}>
                <div className={styles.featureInfo}>
                  <FiShield className={styles.featureIcon} />
                  <div>
                    <h5>Two-Factor Authentication</h5>
                    <p>Add an extra layer of security to your account</p>
                  </div>
                </div>
                <button className={styles.featureButton}>Enable</button>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureInfo}>
                  <FiHelpCircle className={styles.featureIcon} />
                  <div>
                    <h5>Recent Login Activity</h5>
                    <p>View your recent account activity</p>
                  </div>
                </div>
                <button className={styles.featureButton}>View Activity</button>
              </div>
            </div>
          </div>
        )}

        {/* Notification Settings */}
        {activeTab === 'notifications' && (
          <div className={styles.settingsSection}>
            <h3>
              <FiBell /> Notification Preferences
            </h3>
            <form onSubmit={saveProfile}>
              <div className={styles.notificationGroup}>
                <h4>Email Notifications</h4>
                <label className={styles.switch}>
                  <input
                    type='checkbox'
                    name='notifications.email'
                    checked={profileForm.notifications.email}
                    onChange={handleProfileChange}
                  />
                  <span className={styles.slider}></span>
                  <span className={styles.switchLabel}>
                    {profileForm.notifications.email ? 'Enabled' : 'Disabled'}
                  </span>
                </label>
                <p className={styles.notificationDescription}>
                  Receive booking confirmations, updates, and promotions via
                  email
                </p>
              </div>

              <div className={styles.notificationGroup}>
                <h4>SMS Notifications</h4>
                <label className={styles.switch}>
                  <input
                    type='checkbox'
                    name='notifications.sms'
                    checked={profileForm.notifications.sms}
                    onChange={handleProfileChange}
                  />
                  <span className={styles.slider}></span>
                  <span className={styles.switchLabel}>
                    {profileForm.notifications.sms ? 'Enabled' : 'Disabled'}
                  </span>
                </label>
                <p className={styles.notificationDescription}>
                  Receive important booking alerts via text message
                </p>
              </div>

              <div className={styles.notificationGroup}>
                <h4>Push Notifications</h4>
                <label className={styles.switch}>
                  <input
                    type='checkbox'
                    name='notifications.push'
                    checked={profileForm.notifications.push}
                    onChange={handleProfileChange}
                  />
                  <span className={styles.slider}></span>
                  <span className={styles.switchLabel}>
                    {profileForm.notifications.push ? 'Enabled' : 'Disabled'}
                  </span>
                </label>
                <p className={styles.notificationDescription}>
                  Get real-time updates on our mobile app
                </p>
              </div>

              <div className={styles.formActions}>
                <button type='submit' className={styles.primaryButton}>
                  Save Preferences
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Privacy Settings */}
        {activeTab === 'privacy' && (
          <div className={styles.settingsSection}>
            <h3>
              <FiShield /> Privacy Settings
            </h3>
            <form onSubmit={savePrivacy}>
              <div className={styles.privacyOption}>
                <label className={styles.checkboxLabel}>
                  <input
                    type='checkbox'
                    name='shareData'
                    checked={privacyForm.shareData}
                    onChange={handlePrivacyChange}
                  />
                  <span className={styles.checkboxCustom}></span>
                  Allow sharing of anonymous booking data for analytics
                </label>
                <p className={styles.privacyDescription}>
                  Helps us improve our services (does not include personal
                  information)
                </p>
              </div>

              <div className={styles.privacyOption}>
                <label className={styles.checkboxLabel}>
                  <input
                    type='checkbox'
                    name='personalizedAds'
                    checked={privacyForm.personalizedAds}
                    onChange={handlePrivacyChange}
                  />
                  <span className={styles.checkboxCustom}></span>
                  Personalized recommendations and offers
                </label>
                <p className={styles.privacyDescription}>
                  Get tailored suggestions based on your booking history
                </p>
              </div>

              <div className={styles.privacyInfo}>
                <h4>Data Privacy</h4>
                <p>
                  We take your privacy seriously. Review our{' '}
                  <a href='/privacy' className={styles.privacyLink}>
                    Privacy Policy
                  </a>{' '}
                  to understand how we collect, use, and protect your personal
                  information.
                </p>
              </div>

              <div className={styles.formActions}>
                <button type='submit' className={styles.primaryButton}>
                  Save Privacy Settings
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Payment Settings */}
        {activeTab === 'payment' && (
          <div className={styles.settingsSection}>
            <h3>
              <FiCreditCard /> Payment Settings
            </h3>
            <div className={styles.paymentOptions}>
              <div className={styles.paymentCard}>
                <div className={styles.paymentCardHeader}>
                  <FiCreditCard className={styles.paymentIcon} />
                  <h4>Default Payment Method</h4>
                </div>
                <div className={styles.paymentCardBody}>
                  <p>Visa ending in 4242</p>
                  <p>Expires 12/25</p>
                </div>
                <button className={styles.paymentAction}>
                  Change Payment Method
                </button>
              </div>

              <div className={styles.paymentCard}>
                <div className={styles.paymentCardHeader}>
                  <FiCalendar className={styles.paymentIcon} />
                  <h4>Billing History</h4>
                </div>
                <div className={styles.paymentCardBody}>
                  <p>View and download your past receipts and invoices</p>
                </div>
                <button className={styles.paymentAction}>View History</button>
              </div>
            </div>

            <div className={styles.paymentPreferences}>
              <h4>Payment Preferences</h4>
              <div className={styles.preferenceOption}>
                <label className={styles.switch}>
                  <input type='checkbox' defaultChecked />
                  <span className={styles.slider}></span>
                  <span className={styles.switchLabel}>
                    Auto-save payment methods for faster checkout
                  </span>
                </label>
              </div>
              <div className={styles.preferenceOption}>
                <label className={styles.switch}>
                  <input type='checkbox' />
                  <span className={styles.slider}></span>
                  <span className={styles.switchLabel}>
                    Receive email receipts for all transactions
                  </span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Preferences Settings */}
        {activeTab === 'preferences' && (
          <div className={styles.settingsSection}>
            <h3>
              <FiGlobe /> Preferences
            </h3>
            <form onSubmit={saveProfile}>
              {/* <div className={styles.formGroup}>
                <label>
                  <FiGlobe className={styles.inputIcon} />
                  Language
                </label>
                <select
                  name='language'
                  value={profileForm.language}
                  onChange={handleProfileChange}
                >
                  <option value='en'>English</option>
                  <option value='es'>Español</option>
                  <option value='fr'>Français</option>
                  <option value='de'>Deutsch</option>
                  <option value='zh'>中文</option>
                </select>
              </div> */}

              {/* <div className={styles.formGroup}>
                <label>
                  {profileForm.theme === 'light' ? (
                    <FiSun className={styles.inputIcon} />
                  ) : (
                    <FiMoon className={styles.inputIcon} />
                  )}
                  Theme
                </label>
                <div className={styles.themeOptions}>
                  <label className={styles.themeOption}>
                    <input
                      type='radio'
                      name='theme'
                      value='light'
                      checked={profileForm.theme === 'light'}
                      onChange={handleProfileChange}
                    />
                    <div className={styles.themePreviewLight}>
                      <span>Light</span>
                    </div>
                  </label>
                  <label className={styles.themeOption}>
                    <input
                      type='radio'
                      name='theme'
                      value='dark'
                      checked={profileForm.theme === 'dark'}
                      onChange={handleProfileChange}
                    />
                    <div className={styles.themePreviewDark}>
                      <span>Dark</span>
                    </div>
                  </label>
                </div>
              </div> */}

              <div className={styles.preferenceOptions}>
                <h4>Booking Preferences</h4>
                <div className={styles.preferenceOption}>
                  <label className={styles.checkboxLabel}>
                    {/* <input
                      type='checkbox'
                      name='prefWindowSeat'
                      checked={userData.preferences?.seat === 'window'}
                      onChange={handleProfileChange}
                    /> */}
                    <span className={styles.checkboxCustom}></span>
                    Prefer window seats for flights
                  </label>
                </div>
                <div className={styles.preferenceOption}>
                  <label className={styles.checkboxLabel}>
                    {/* <input
                      type='checkbox'
                      name='prefVegetarianMeal'
                      checked={userData.preferences?.meal === 'vegetarian'}
                      onChange={handleProfileChange}
                    /> */}
                    <span className={styles.checkboxCustom}></span>
                    Prefer vegetarian meals
                  </label>
                </div>
              </div>

              <div className={styles.formActions}>
                <button type='submit' className={styles.primaryButton}>
                  Save Preferences
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default SettingsTab
