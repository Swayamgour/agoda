import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import BookHotel from './BookHotel'a
// import '../../style/AllHotel.css' // Import the CSS file
import HotelCard from './HotelsCard'
import BookHotelFrom from './BookHotelFrom'
import HotelSectionFrom from './HotelSectionFrom'
import FilterWithBottomDrawer from './FilterWithBottomDrawer'
import ScrollFadeIn from '../scrollview/ScrollFadeIn'
// import HotelCard from '../../HotelsCard'
import styles from '../../style/HotelBookingDashboard.module.css'


import {
  LocationOn,
  SwapHoriz,
  CalendarToday,
  Hotel as HotelIcon,
  People,
  Star,
  Search
} from '@mui/icons-material'
import HotelSearchDialogBox from './HotelSearchDialogBox'

function HotelBookingDashboard () {
  const location = useLocation()
  const backgroundImage = location?.state?.item?.img
  const country = location?.state?.item?.country

  const [activeFilter, setActiveFilter] = useState(null)
  const [timeRange, setTimeRange] = useState([0, 24])
  const [searchDialogOpen, setSearchDialogOpen] = useState(false)
  const [searchParams, setSearchParams] = useState(null)

  const [filters, setFilters] = useState({
    starRating: [],
    reviewScore: [],
    sortBy: 'bestReviewed'
  })

  // Sample hotel data
  const hotels = [
    {
      id: 1,
      name: 'The Hosteller',
      location: 'Marathahalli, Bangalore',
      ratingStars: '★★★',
      amenities: [
        'Free Wi-Fi',
        'Free parking',
        'Front desk [24-hour]',
        'Airport shuttle',
        'Restaurant',
        'Room service'
      ],
      ratingText: 'Excellent',
      reviewCount: 69,
      ratingScore: '8.7',
      price: 'Rs. 1,135',
      stars: 3,
      reviewScoreValue: 8.7,
      images: [
        location?.state?.item?.img,
        location?.state?.item?.img,
        location?.state?.item?.img
      ]
    },
    {
      id: 2,
      name: 'Taj West End',
      location: 'Race Course Road, Bangalore',
      ratingStars: '★★★★★',
      amenities: [
        'Swimming pool',
        'Spa',
        'Fitness center',
        'Business center',
        'Fine dining',
        'Concierge service'
      ],
      ratingText: 'Exceptional',
      reviewCount: 842,
      ratingScore: '9.2',
      price: 'Rs. 12,500',
      stars: 5,
      reviewScoreValue: 9.2,
      images: [location?.state?.item?.img, location?.state?.item?.img]
    },
    {
      id: 3,
      name: 'ITC Gardenia',
      location: 'Residency Road, Bangalore',
      ratingStars: '★★★★★',
      amenities: [
        'Rooftop pool',
        'Award-winning spa',
        '5 restaurants',
        '24-hour room service',
        'Meeting facilities',
        'Valet parking'
      ],
      ratingText: 'Exceptional',
      reviewCount: 723,
      ratingScore: '9.3',
      price: 'Rs. 11,800',
      stars: 5,
      reviewScoreValue: 9.3,
      images: [location?.state?.item?.img, location?.state?.item?.img]
    }
  ]

  const handleFilterClick = filterName => {
    setActiveFilter(activeFilter === filterName ? null : filterName)
  }

  const handleStarRatingChange = star => {
    setFilters(prev => ({
      ...prev,
      starRating: prev.starRating.includes(star)
        ? prev.starRating.filter(s => s !== star)
        : [...prev.starRating, star]
    }))
  }

  const handleReviewScoreChange = score => {
    setFilters(prev => ({
      ...prev,
      reviewScore: prev.reviewScore.includes(score)
        ? prev.reviewScore.filter(s => s !== score)
        : [...prev.reviewScore, score]
    }))
  }

  const handleSortChange = sortType => {
    setFilters(prev => ({ ...prev, sortBy: sortType }))
  }

  const filteredHotels = hotels.filter(hotel => {
    if (
      filters.starRating.length > 0 &&
      !filters.starRating.includes(hotel.stars)
    ) {
      return false
    }

    if (filters.reviewScore.length > 0) {
      const scoreRanges = {
        '9+': [9, 10],
        '8+': [8, 9],
        '7+': [7, 8],
        '6+': [6, 7]
      }

      const matches = filters.reviewScore.some(score => {
        const [min, max] = scoreRanges[score]
        return hotel.reviewScoreValue >= min && hotel.reviewScoreValue < max
      })

      if (!matches) return false
    }

    return true
  })

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    switch (filters.sortBy) {
      case 'lowestPrice':
        return (
          parseFloat(a.price.replace(/[^0-9.]/g, '')) -
          parseFloat(b.price.replace(/[^0-9.]/g, ''))
        )
      case 'nearest':
        return 0
      case 'bestReviewed':
      default:
        return b.reviewScoreValue - a.reviewScoreValue
    }
  })

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const handleSearch = params => {
    setSearchParams(params)
    console.log('Search params:', params)
  }

  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <h1 className={styles.heading}>{country} hotels and places to stay</h1>

        <div
          onClick={() => setSearchDialogOpen(true)}
          className={styles.searchHeader}
        >
          <div className={styles.locationContainer}>
            <div className={styles.locationInput}>
              <LocationOn className={styles.locationIcon} />
              <div className={styles.locationText}>
                <span className={styles.city}>New York</span>
                <span className={styles.area}>Manhattan</span>
              </div>
            </div>
          </div>

          <div className={styles.detailsContainer}>
            <div className={styles.detailItem}>
              <CalendarToday className={styles.detailIcon} />
              <span>15 Jun 2023 - 20 Jun 2023</span>
              <span className={styles.duration}>(5 nights)</span>
            </div>

            <div className={styles.detailItem}>
              <HotelIcon className={styles.detailIcon} />
              <span>2 Rooms</span>
            </div>

            <div className={styles.detailItem}>
              <People className={styles.detailIcon} />
              <span>2 Adults, 2 Children</span>
            </div>
          </div>
        </div>

        <HotelSearchDialogBox
          open={searchDialogOpen}
          onClose={() => setSearchDialogOpen(false)}
          onSearch={handleSearch}
        />

        <div className={styles.hotelListingContainer}>
          <div className={styles.filtersSidebar}>
            <h2>Filters</h2>

            <div className={styles.filterSection}>
              <h3>Star rating</h3>
              {[5, 4, 3, 2, 1].map(star => (
                <label key={star} className={styles.filterOption}>
                  <input
                    type='checkbox'
                    checked={filters.starRating.includes(star)}
                    onChange={() => handleStarRatingChange(star)}
                  />
                  {Array(star)
                    .fill()
                    .map((_, i) => (
                      <Star
                        key={i}
                        style={{ color: '#FFD700', fontSize: '1rem' }}
                      />
                    ))}
                  {star === 1 ? ' star' : ' stars'}
                </label>
              ))}
            </div>

            <div className={styles.filterSection}>
              <h3>Review score</h3>
              {['9+', '8+', '7+', '6+'].map(score => (
                <label key={score} className={styles.filterOption}>
                  <input
                    type='checkbox'
                    checked={filters.reviewScore.includes(score)}
                    onChange={() => handleReviewScoreChange(score)}
                  />
                  {score === '9+'
                    ? 'Exceptional'
                    : score === '8+'
                    ? 'Very Good'
                    : score === '7+'
                    ? 'Good'
                    : 'Pleasant'}{' '}
                  {score}
                </label>
              ))}
            </div>
          </div>

          <FilterWithBottomDrawer />

          <div className={styles.hotelsList}>
            <div className={styles.hotelListSortOptions}>
              <span>Sort by:</span>
              <button
                className={filters.sortBy === 'bestReviewed' ? 'active' : ''}
                onClick={() => handleSortChange('bestReviewed')}
              >
                Best reviewed
              </button>
              <button
                className={filters.sortBy === 'lowestPrice' ? 'active' : ''}
                onClick={() => handleSortChange('lowestPrice')}
              >
                Lowest price
              </button>
              <button
                className={filters.sortBy === 'nearest' ? 'active' : ''}
                onClick={() => handleSortChange('nearest')}
              >
                Nearest to me
              </button>
            </div>

            <div className={styles.filterInputBox}>
              <Search style={{ color: '#6c757d', marginRight: '8px' }} />
              <input placeholder='Search hotels by name or location...' />
            </div>

            <ScrollFadeIn>
              <div className={styles.hotelsContainer}>
                {sortedHotels.length > 0 ? (
                  sortedHotels.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                  ))
                ) : (
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '40px',
                      gridColumn: '1 / -1'
                    }}
                  >
                    <h3>No hotels match your filters</h3>
                    <p>Try adjusting your filters to see more results</p>
                  </div>
                )}
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelBookingDashboard;
