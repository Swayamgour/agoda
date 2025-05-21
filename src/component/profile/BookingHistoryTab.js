// BookingsTab.jsx
import React, { useState } from 'react'
import {
  FiSearch,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUser,
  FiDollarSign,
  FiDownload,
  FiPrinter,
  FiShare2,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi'
import {
  FaPlane,
  FaTrain,
  FaBus,
  FaCar,
  FaHotel,
  FaStar,
  FaRegStar
} from 'react-icons/fa'
import styles from './UserProfile.module.css'

const BookingHistoryTab = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedBooking, setExpandedBooking] = useState(null)

  // Sample bookings data
  const bookings = [
    {
      id: 'FL-789456',
      type: 'flight',
      status: 'upcoming',
      from: 'New York (JFK)',
      to: 'London (LHR)',
      departure: '2023-08-15T08:30:00',
      arrival: '2023-08-15T20:45:00',
      airline: 'Delta Airlines',
      flightNo: 'DL 123',
      price: '₹450',
      passengers: 2,
      bookingDate: '2023-06-10',
      details: {
        seat: '24A, 24B',
        class: 'Economy',
        baggage: '1 checked bag (23kg)',
        meal: 'Vegetarian'
      }
    },
    {
      id: 'TR-321654',
      type: 'train',
      status: 'completed',
      from: 'Paris (Gare du Nord)',
      to: 'Lyon (Part-Dieu)',
      departure: '2023-07-20T14:15:00',
      arrival: '2023-07-20T17:45:00',
      trainName: 'TGV Lyria',
      trainNo: 'TGV 8765',
      price: '₹85',
      passengers: 1,
      bookingDate: '2023-06-05',
      details: {
        seat: 'Car 5, Seat 42',
        class: 'Standard',
        coach: 'Non-smoking'
      }
    },
    {
      id: 'HT-987123',
      type: 'hotel',
      status: 'upcoming',
      name: 'Grand Marina Hotel',
      location: 'Miami Beach, FL',
      checkIn: '2023-09-10T15:00:00',
      checkOut: '2023-09-15T11:00:00',
      roomType: 'Deluxe King Room',
      price: '₹220/night',
      guests: 2,
      bookingDate: '2023-07-22',
      details: {
        amenities: 'Free WiFi, Pool, Gym',
        cancellation: 'Free cancellation until Sep 5'
      }
    },
    {
      id: 'CR-456789',
      type: 'car',
      status: 'cancelled',
      model: 'Premium Sedan',
      pickup: 'Los Angeles Airport (LAX)',
      dropoff: 'Same location',
      pickupDate: '2023-08-05T10:00:00',
      dropoffDate: '2023-08-10T10:00:00',
      rentalCompany: 'Avis',
      price: '₹75/day',
      bookingDate: '2023-07-15',
      details: {
        insurance: 'Full coverage included',
        mileage: '10Km/day limit'
      }
    }
  ]

  const filteredBookings = bookings.filter(booking => {
    // Filter by status
    if (activeFilter !== 'all' && booking.status !== activeFilter) return false

    // Filter by search query
    if (searchQuery) {
      const searchLower = searchQuery.toLowerCase()
      const bookingText = [
        booking.id,
        booking.type,
        booking.from || '',
        booking.to || '',
        booking.name || '',
        booking.location || '',
        booking.airline || '',
        booking.trainName || '',
        booking.model || ''
      ]
        .join(' ')
        .toLowerCase()

      return bookingText.includes(searchLower)
    }

    return true
  })

  const toggleBookingExpansion = id => {
    setExpandedBooking(expandedBooking === id ? null : id)
  }

  const formatDate = dateString => {
    const options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }
    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  const getStatusBadge = status => {
    switch (status) {
      case 'upcoming':
        return { text: 'Upcoming', class: styles.upcoming }
      case 'completed':
        return { text: 'Completed', class: styles.completed }
      case 'cancelled':
        return { text: 'Cancelled', class: styles.cancelled }
      default:
        return { text: 'Confirmed', class: styles.confirmed }
    }
  }

  return (
    <div className={styles.bookingsTab}>
      {/* Bookings Header */}
      <div className={styles.bookingsHeader}>
        <h2>My Bookings</h2>
        <div className={styles.bookingsControls}>
          <div className={styles.searchBox}>
            <FiSearch className={styles.searchIcon} />
            <input
              type='text'
              placeholder='Search bookings...'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={styles.filterButtons}>
            <button
              className={activeFilter === 'all' ? styles.active : ''}
              onClick={() => setActiveFilter('all')}
            >
              All
            </button>
            <button
              className={activeFilter === 'upcoming' ? styles.active : ''}
              onClick={() => setActiveFilter('upcoming')}
            >
              Upcoming
            </button>
            <button
              className={activeFilter === 'completed' ? styles.active : ''}
              onClick={() => setActiveFilter('completed')}
            >
              Completed
            </button>
            <button
              className={activeFilter === 'cancelled' ? styles.active : ''}
              onClick={() => setActiveFilter('cancelled')}
            >
              Cancelled
            </button>
          </div>
        </div>
      </div>

      {/* Bookings List */}
      {filteredBookings.length > 0 ? (
        <div className={styles.bookingsList}>
          {filteredBookings.map(booking => (
            <div
              key={booking.id}
              className={`${styles.bookingItem} ${
                expandedBooking === booking.id ? styles.expanded : ''
              }`}
            >
              <div
                className={styles.bookingHeader}
                onClick={() => toggleBookingExpansion(booking.id)}
              >
                <div className={styles.bookingType}>
                  {booking.type === 'flight' && (
                    <FaPlane className={styles.typeIcon} />
                  )}
                  {booking.type === 'train' && (
                    <FaTrain className={styles.typeIcon} />
                  )}
                  {booking.type === 'hotel' && (
                    <FaHotel className={styles.typeIcon} />
                  )}
                  {booking.type === 'car' && (
                    <FaCar className={styles.typeIcon} />
                  )}
                  <span className={styles.bookingId}>{booking.id}</span>
                </div>

                <div className={styles.bookingMainInfo}>
                  {booking.type !== 'hotel' ? (
                    <>
                      <span className={styles.route}>
                        {booking.from} → {booking.to}
                      </span>
                      <span className={styles.dateTime}>
                        <FiCalendar /> {formatDate(booking.departure)}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className={styles.hotelName}>{booking.name}</span>
                      <span className={styles.dateTime}>
                        <FiCalendar /> {formatDate(booking.checkIn)} -{' '}
                        {formatDate(booking.checkOut)}
                      </span>
                    </>
                  )}
                </div>

                <div className={styles.bookingStatus}>
                  <span
                    className={`${styles.statusBadge} ${
                      getStatusBadge(booking.status).class
                    }`}
                  >
                    {getStatusBadge(booking.status).text}
                  </span>
                </div>

                <div className={styles.bookingPrice}>{booking.price}</div>

                <div className={styles.expandIcon}>
                  {expandedBooking === booking.id ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>
              </div>

              {/* Expanded Booking Details */}
              {expandedBooking === booking.id && (
                <div className={styles.bookingDetails}>
                  <div className={styles.detailsGrid}>
                    <div className={styles.detailsColumn}>
                      <h4>Booking Information</h4>
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>
                          Booking Date:
                        </span>
                        <span>{formatDate(booking.bookingDate)}</span>
                      </div>
                      <div className={styles.detailRow}>
                        <span className={styles.detailLabel}>Passengers:</span>
                        <span>{booking.passengers}</span>
                      </div>

                      {booking.type === 'flight' && (
                        <>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Airline:</span>
                            <span>{booking.airline}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Flight Number:
                            </span>
                            <span>{booking.flightNo}</span>
                          </div>
                        </>
                      )}

                      {booking.type === 'train' && (
                        <>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Train Name:
                            </span>
                            <span>{booking.trainName}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Train Number:
                            </span>
                            <span>{booking.trainNo}</span>
                          </div>
                        </>
                      )}

                      {booking.type === 'car' && (
                        <>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Rental Company:
                            </span>
                            <span>{booking.rentalCompany}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Pickup Location:
                            </span>
                            <span>{booking.pickup}</span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className={styles.detailsColumn}>
                      <h4>Trip Details</h4>
                      {booking.type === 'flight' && (
                        <>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Departure:
                            </span>
                            <span>{formatDate(booking.departure)}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Arrival:</span>
                            <span>{formatDate(booking.arrival)}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Seat:</span>
                            <span>{booking.details.seat}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Class:</span>
                            <span>{booking.details.class}</span>
                          </div>
                        </>
                      )}

                      {booking.type === 'train' && (
                        <>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Departure:
                            </span>
                            <span>{formatDate(booking.departure)}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Arrival:</span>
                            <span>{formatDate(booking.arrival)}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Seat:</span>
                            <span>{booking.details.seat}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Coach:</span>
                            <span>{booking.details.coach}</span>
                          </div>
                        </>
                      )}

                      {booking.type === 'hotel' && (
                        <>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Check-in:
                            </span>
                            <span>{formatDate(booking.checkIn)}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Check-out:
                            </span>
                            <span>{formatDate(booking.checkOut)}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Room Type:
                            </span>
                            <span>{booking.roomType}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>Guests:</span>
                            <span>{booking.guests}</span>
                          </div>
                        </>
                      )}

                      {booking.type === 'car' && (
                        <>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Pickup Date:
                            </span>
                            <span>{formatDate(booking.pickupDate)}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Dropoff Date:
                            </span>
                            <span>{formatDate(booking.dropoffDate)}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Car Model:
                            </span>
                            <span>{booking.model}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Insurance:
                            </span>
                            <span>{booking.details.insurance}</span>
                          </div>
                        </>
                      )}
                    </div>

                    <div className={styles.detailsColumn}>
                      <h4>Additional Information</h4>
                      {booking.type === 'flight' && (
                        <>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Baggage Allowance:
                            </span>
                            <span>{booking.details.baggage}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Meal Preference:
                            </span>
                            <span>{booking.details.meal}</span>
                          </div>
                        </>
                      )}

                      {booking.type === 'hotel' && (
                        <>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Amenities:
                            </span>
                            <span>{booking.details.amenities}</span>
                          </div>
                          <div className={styles.detailRow}>
                            <span className={styles.detailLabel}>
                              Cancellation Policy:
                            </span>
                            <span>{booking.details.cancellation}</span>
                          </div>
                        </>
                      )}

                      {booking.type === 'car' && (
                        <div className={styles.detailRow}>
                          <span className={styles.detailLabel}>Mileage:</span>
                          <span>{booking.details.mileage}</span>
                        </div>
                      )}

                      <div className={styles.ratingSection}>
                        {booking.status === 'completed' && (
                          <>
                            <h4>Rate Your Experience</h4>
                            <div className={styles.starRating}>
                              {[1, 2, 3, 4, 5].map(star => (
                                <span key={star} className={styles.star}>
                                  {star <= 4 ? <FaStar /> : <FaRegStar />}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className={styles.bookingActions}>
                    <button className={styles.actionButton}>
                      <FiDownload /> Download Ticket
                    </button>
                    <button className={styles.actionButton}>
                      <FiPrinter /> Print
                    </button>
                    <button className={styles.actionButton}>
                      <FiShare2 /> Share
                    </button>
                    {booking.status === 'upcoming' && (
                      <button className={styles.cancelButton}>
                        Cancel Booking
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.emptyBookings}>
          <div className={styles.emptyContent}>
            <h3>No bookings found</h3>
            <p>
              {activeFilter === 'all'
                ? "You don't have any bookings yet. Start planning your next trip!"
                : `You don't have any ${activeFilter} bookings.`}
            </p>
            <button className={styles.exploreButton}>
              Explore Destinations
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default BookingHistoryTab
