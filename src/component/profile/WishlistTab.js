// UserProfile.jsx (Wishlist Tab Section)
import React, { useState } from 'react'
import {
  FiHeart,
  FiTrash2,
  FiSearch,
  FiClock,
  FiMapPin,
  FiCalendar,
  FiDollarSign,
  FiUser,
  FiStar,
  FiFilter
} from 'react-icons/fi'
import {
  FaPlane,
  FaTrain,
  FaBus,
  FaCar,
  FaRegHeart,
  FaHeart
} from 'react-icons/fa'
import styles from './UserProfile.module.css';

const WishlistTab = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Sample wishlist data
  const wishlistItems = [
    {
      id: 1,
      type: 'flight',
      from: 'New York (JFK)',
      to: 'London (LHR)',
      date: '2023-08-15',
      price: '₹450',
      saved: 125,
      image:
        'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500',
      isFavorite: true
    },
    {
      id: 2,
      type: 'train',
      from: 'Paris (Gare du Nord)',
      to: 'Lyon (Part-Dieu)',
      date: '2023-09-20',
      price: '₹85',
      saved: 30,
      image:
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500',

      isFavorite: true
    },
    {
      id: 3,
      type: 'hotel',
      name: 'Grand Marina Hotel',
      location: 'Miami Beach, FL',
      date: '2023-07-10',
      price: '₹220/night',
      saved: 45,
      image:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500',
      isFavorite: false
    },
    {
      id: 4,
      type: 'car',
      model: 'Premium Sedan',
      name: 'Grand Marina Hotel',
      location: 'Los Angeles, CA',
      date: '2023-08-05',
      price: '₹75/day',
      saved: 15,
      image:
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=500',
      isFavorite: true
    }
  ]

  const filteredItems = wishlistItems.filter(item => {
    // Filter by type
    if (activeFilter !== 'all' && item.type !== activeFilter) return false

    // Filter by search query
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase()
      const itemText = [
        item.type,
        item.from || '',
        item.to || '',
        item.name || '',
        item.location || '',
        item.price
      ]
        .join(' ')
        .toLowerCase()

      return itemText.includes(searchLower)
    }

    return true
  })

  const toggleFavorite = id => {
    // In a real app, you would update state or make an API call here
    console.log(`Toggled favorite for item ${id}`)
  }

  return (
    <div className={styles.wishlistTab}>
      {/* Wishlist Header */}
      <div className={styles.wishlistHeader}>
        <h2>
          <FiHeart className={styles.headerIcon} />
          My Wishlist
        </h2>
        <div className={styles.wishlistControls}>
          <div className={styles.searchBox}>
            <FiSearch className={styles.searchIcon} />
            <input
              type='text'
              placeholder='Search wishlist...'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={styles.filterButtons}>
            <button
              className={activeFilter === 'all' ? styles.active : ''}
              onClick={() => setActiveFilter('all')}
            >
              <FiFilter /> All
            </button>
            <button
              className={activeFilter === 'flight' ? styles.active : ''}
              onClick={() => setActiveFilter('flight')}
            >
              <FaPlane /> Flights
            </button>
            <button
              className={activeFilter === 'train' ? styles.active : ''}
              onClick={() => setActiveFilter('train')}
            >
              <FaTrain /> Trains
            </button>
            <button
              className={activeFilter === 'hotel' ? styles.active : ''}
              onClick={() => setActiveFilter('hotel')}
            >
              <FiMapPin /> Hotels
            </button>
            <button
              className={activeFilter === 'car' ? styles.active : ''}
              onClick={() => setActiveFilter('car')}
            >
              <FaCar /> Cars
            </button>
          </div>
        </div>
      </div>

      {/* Wishlist Items */}
      {filteredItems.length > 0 ? (
        <div className={styles.wishlistGrid}>
          {filteredItems.map(item => (
            <div key={item.id} className={styles.wishlistCard}>
              <div className={styles.cardImage}>
                <img src={item.image} alt={item.type} />
                <button
                  className={styles.favoriteButton}
                  onClick={() => toggleFavorite(item.id)}
                >
                  {item.isFavorite ? (
                    <FaHeart className={styles.heartFilled} />
                  ) : (
                    <FaRegHeart className={styles.heartOutline} />
                  )}
                </button>
                <div className={styles.savedBadge}>
                  Saved ₹ {item.saved}
                </div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3>
                    {item.type === 'flight' && (
                      <FaPlane className={styles.typeIcon} />
                    )}
                    {item.type === 'train' && (
                      <FaTrain className={styles.typeIcon} />
                    )}
                    {item.type === 'hotel' && (
                      <FiMapPin className={styles.typeIcon} />
                    )}
                    {item.type === 'car' && (
                      <FaCar className={styles.typeIcon} />
                    )}
                    {item.type === 'hotel'
                      ? item.name
                      : `${item.from} ${item.to ? `→ ${item.to}` : ''}`}
                  </h3>
                  <div className={styles.cardPrice}>{item.price}</div>
                </div>

                <div className={styles.cardDetails}>
                  {item.type !== 'hotel' && (
                    <div className={styles.detailItem}>
                      <FiMapPin />
                      <span>
                        {item.location || `${item.from} to ${item.to}`}
                      </span>
                    </div>
                  )}

                  <div className={styles.detailItem}>
                    <FiCalendar />
                    <span>
                      {new Date(item.date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  {item.type === 'hotel' && (
                    <div className={styles.detailItem}>
                      <FiUser />
                      <span>2 guests · 1 room</span>
                    </div>
                  )}

                  <div className={styles.detailItem}>
                    <FiStar />
                    <span>4.8 (120 reviews)</span>
                  </div>
                </div>

                <div className={styles.cardActions}>
                  <button className={styles.secondaryButton}>
                    <FiClock /> Remind me
                  </button>
                  <button className={styles.primaryButton}>Book now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyWishlist}>
          <FiHeart className={styles.emptyIcon} />
          <h3>Your wishlist is empty</h3>
          <p>Save your favorite trips, hotels, and rentals to see them here</p>
          <button className={styles.exploreButton}>Explore deals</button>
        </div>
      )}
    </div>
  )
}

export default WishlistTab
