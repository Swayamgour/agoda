import React, { useState } from 'react'
import styles from '../../style/UserProfile.module.css'
import {
  FaBell,
  FaChevronDown,
  FaCoins,
  FaHome,
  FaTicketAlt,
  FaHeart,
  FaCreditCard,
  FaCog,
  FaCalendarCheck,
  FaHistory,
  FaShieldAlt,
  FaClock,
  FaPlane,
  FaTrain,
  FaBus,
  FaCar,
  FaArrowUp,
  FaSlidersH,
  FaChair,
  FaUtensils
  // FaBell
} from 'react-icons/fa'
// import {} from 'react-icons/fa'
import WishlistTab from './WishlistTab'
import BookingHistoryTab from './BookingHistoryTab'
import PaymentMethodsTab from './PaymentMethodsTab'

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [notificationsOpen, setNotificationsOpen] = useState(false)

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 890',
    membership: 'Gold Member',
    points: 1250,
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    upcomingBookings: 3,
    pastBookings: 12,
    savedCards: 2,
    preferences: {
      seat: 'Window',
      meal: 'Vegetarian',
      notification: true
    }
  }

  const recentBookings = [
    {
      id: 1,
      type: 'flight',
      from: 'NYC',
      to: 'LON',
      date: '2023-06-15',
      status: 'confirmed',
      price: '₹450'
    },
    {
      id: 2,
      type: 'train',
      from: 'Paris',
      to: 'Lyon',
      date: '2023-05-20',
      status: 'completed',
      price: '₹85'
    },
    {
      id: 3,
      type: 'bus',
      from: 'Chicago',
      to: 'Detroit',
      date: '2023-05-10',
      status: 'completed',
      price: '₹35'
    },
    {
      id: 4,
      type: 'car',
      location: 'Miami',
      date: '2023-04-28',
      status: 'cancelled',
      price: '₹120/day'
    }
  ]

  const notifications = [
    {
      id: 1,
      text: 'Your flight to London is confirmed',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      text: 'Special offer: 20% off on train bookings',
      time: '1 day ago',
      read: true
    },
    {
      id: 3,
      text: 'Your bus ticket has been emailed',
      time: '3 days ago',
      read: true
    }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'bookings':
        // return <BookingsTab bookings={recentBookings} />
        return <BookingHistoryTab bookings={recentBookings} />

      case 'wishlist':
        return <WishlistTab />
      case 'payments':
        return <PaymentMethodsTab />
      // Add other tabs as needed
      default:
        return (
          <>
            <QuickStats user={user} />
            <RecentBookings bookings={recentBookings} />
            <TravelPreferences preferences={user.preferences} />
          </>
        )
    }
  }

  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <h1>My Dashboard</h1>
          <div className={styles.breadcrumb}>Home / Dashboard</div>
        </div>
        <div className={styles.headerRight}>
          <div
            className={`${styles.notification} ${
              notificationsOpen ? styles.active : ''
            }`}
            onClick={() => setNotificationsOpen(!notificationsOpen)}
          >
            <FaBell />
            <span className={styles.badge}>3</span>
            {notificationsOpen && (
              <div className={styles.notificationDropdown}>
                <div className={styles.notificationHeader}>
                  <h3>Notifications</h3>
                  <span>Mark all as read</span>
                </div>
                {notifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`${styles.notificationItem} ${
                      !notification.read ? styles.unread : ''
                    }`}
                  >
                    <div className={styles.notificationDot}></div>
                    <div className={styles.notificationContent}>
                      <p>{notification.text}</p>
                      <span>{notification.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.userMenu}>
            <img src={user.avatar} alt={user.name} />
            <span>{user.name}</span>
            <FaChevronDown />
          </div>
        </div>
      </header>

      <div className={styles.container}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.profileCard}>
            <div className={styles.avatar}>
              <img src={user.avatar} alt={user.name} />
              <div className={styles.onlineStatus}></div>
            </div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <div className={styles.membership}>
              <span>{user.membership}</span>
              <div className={styles.points}>
                <FaCoins /> {user.points} pts
              </div>
            </div>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${Math.min(100, (user.points / 2000) * 100)}%`
                }}
              ></div>
              <span>Next tier at 2000 pts</span>
            </div>
          </div>

          <nav className={styles.nav}>
            <ul>
              <li
                className={activeTab === 'dashboard' ? styles.active : ''}
                onClick={() => setActiveTab('dashboard')}
              >
                <FaHome /> Dashboard
              </li>
              <li
                className={activeTab === 'bookings' ? styles.active : ''}
                onClick={() => setActiveTab('bookings')}
              >
                <FaTicketAlt /> My Bookings
                <span className={styles.navBadge}>{user.upcomingBookings}</span>
              </li>
              <li
                className={activeTab === 'wishlist' ? styles.active : ''}
                onClick={() => setActiveTab('wishlist')}
              >
                <FaHeart /> Wishlist
              </li>
              <li
                className={activeTab === 'payments' ? styles.active : ''}
                onClick={() => setActiveTab('payments')}
              >
                <FaCreditCard /> Payment Methods
              </li>
              <li
                className={activeTab === 'settings' ? styles.active : ''}
                onClick={() => setActiveTab('settings')}
              >
                <FaCog /> Settings
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className={styles.mainContent}>{renderTabContent()}</main>
      </div>
    </div>
  )
}

const QuickStats = ({ user }) => (
  <div className={styles.quickStats}>
    <div className={styles.statCard}>
      <div
        className={styles.statIcon}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        <FaCalendarCheck />
      </div>
      <div className={styles.statInfo}>
        <h3>Upcoming</h3>
        <p>{user.upcomingBookings} Bookings</p>
        <span className={styles.statTrend}>
          <FaArrowUp /> 2 this week
        </span>
      </div>
    </div>

    <div className={styles.statCard}>
      <div
        className={styles.statIcon}
        style={{
          background: 'linear-gradient(135deg, #2af598 0%, #009efd 100%)'
        }}
      >
        <FaHistory />
      </div>
      <div className={styles.statInfo}>
        <h3>Past</h3>
        <p>{user.pastBookings} Bookings</p>
        <span className={styles.statTrend}>
          <FaArrowUp /> 5 this month
        </span>
      </div>
    </div>

    <div className={styles.statCard}>
      <div
        className={styles.statIcon}
        style={{
          background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)'
        }}
      >
        <FaCreditCard />
      </div>
      <div className={styles.statInfo}>
        <h3>Payment</h3>
        <p>{user.savedCards} Cards</p>
        <span className={styles.statTrend}>
          <FaShieldAlt /> Secure
        </span>
      </div>
    </div>
  </div>
)

const RecentBookings = ({ bookings }) => (
  <div className={styles.section}>
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>
        <FaClock /> Recent Bookings
      </h2>
      <div className={styles.viewOptions}>
        <span className={styles.active}>All</span>
        <span>Flights</span>
        <span>Trains</span>
        <span>Buses</span>
        <span>Cars</span>
      </div>
    </div>
    <div className={styles.bookingsGrid}>
      {bookings.map(booking => (
        <div key={booking.id} className={styles.bookingCard}>
          <div className={styles.bookingHeader}>
            <div className={styles.bookingIcon}>
              {booking.type === 'flight' && <FaPlane />}
              {booking.type === 'train' && <FaTrain />}
              {booking.type === 'bus' && <FaBus />}
              {booking.type === 'car' && <FaCar />}
            </div>
            <div className={styles.bookingTitle}>
              <h3>
                {booking.type.toUpperCase()} #{booking.id}
              </h3>
              <div
                className={`${styles.bookingStatus} ${styles[booking.status]}`}
              >
                {booking.status}
              </div>
            </div>
            <div className={styles.bookingPrice}>{booking.price}</div>
          </div>
          {/* Add booking details here if needed */}
        </div>
      ))}
    </div>
  </div>
)

const TravelPreferences = ({ preferences }) => (
  <div className={styles.section}>
    <h2 className={styles.sectionTitle}>
      <FaSlidersH /> Travel Preferences
    </h2>

    <div style={{ marginTop: '10px' }} className={styles.preferences}>
      <div className={styles.preferenceCard}>
        <div
          className={styles.preferenceIcon}
          style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
          }}
        >
          <FaChair />
        </div>
        <div className={styles.preferenceInfo}>
          <h3>Seat Preference</h3>
          <p>{preferences.seat}</p>
          <button className={styles.editButton}>Edit</button>
        </div>
      </div>

      <div className={styles.preferenceCard}>
        <div
          className={styles.preferenceIcon}
          style={{
            background: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)'
          }}
        >
          <FaUtensils />
        </div>
        <div className={styles.preferenceInfo}>
          <h3>Meal Preference</h3>
          <p>{preferences.meal}</p>
          <button className={styles.editButton}>Edit</button>
        </div>
      </div>

      <div className={styles.preferenceCard}>
        <div
          className={styles.preferenceIcon}
          style={{
            background: 'linear-gradient(135deg, #c3ec52 0%, #0ba29d 100%)'
          }}
        >
          <FaBell />
        </div>
        <div className={styles.preferenceInfo}>
          <h3>Notifications</h3>
          <p>{preferences.notification ? 'Enabled' : 'Disabled'}</p>
          <button className={styles.editButton}>Edit</button>
        </div>
      </div>
    </div>
  </div>
)

export default UserProfile
