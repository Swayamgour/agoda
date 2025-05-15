import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
// import BookHotel from './BookHotel'a
import '../../style/AllHotel.css' // Import the CSS file
import HotelCard from './HotelsCard'
import BookHotelFrom from './BookHotelFrom'
import HotelSectionFrom from './HotelSectionFrom'
import FilterWithBottomDrawer from './FilterWithBottomDrawer'
import ScrollFadeIn from '../scrollview/ScrollFadeIn'
// import HotelCard from '../../HotelsCard'

function AllHotel () {
  const location = useLocation()
  const backgroundImage = location?.state?.item?.img
  const country = location?.state?.item?.country

  const [activeFilter, setActiveFilter] = useState(null)

  const handleFilterClick = filterName => {
    setActiveFilter(activeFilter === filterName ? null : filterName)
  }

  const [filters, setFilters] = useState({
    starRating: [],
    reviewScore: [],
    sortBy: 'bestReviewed'
  })

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
    // Filter by star rating
    if (
      filters.starRating.length > 0 &&
      !filters.starRating.includes(hotel.stars)
    ) {
      return false
    }

    // Filter by review score
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
        // Implement nearest logic if you have location data
        return 0
      case 'bestReviewed':
      default:
        return b.reviewScoreValue - a.reviewScoreValue
    }
  })

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <HotelSectionFrom />

      <div className='AllHotel-card-container'>
        <h2 className='allhotel-heading-second'>
          {country} hotels and places to stay
        </h2>

        <div className='hotel-listing-container'>
          <div className='filters-sidebar'>
            <h2>Filters</h2>

            <div className='filter-section'>
              <h3>Star rating</h3>
              {[5, 4, 3, 2, 1].map(star => (
                <label key={star} className='filter-option'>
                  <input
                    type='checkbox'
                    checked={filters.starRating.includes(star)}
                    onChange={() => handleStarRatingChange(star)}
                    style={{ width: 'unset' }}
                  />
                  {star} {star === 1 ? 'star' : 'stars'}
                </label>
              ))}
            </div>

            <div className='filter-section'>
              <h3>Review score</h3>
              <label className='filter-option'>
                <input
                  type='checkbox'
                  checked={filters.reviewScore.includes('9+')}
                  onChange={() => handleReviewScoreChange('9+')}
                  style={{ width: 'unset' }}
                />
                Exceptional 9+
              </label>
              <label className='filter-option'>
                <input
                  type='checkbox'
                  checked={filters.reviewScore.includes('8+')}
                  onChange={() => handleReviewScoreChange('8+')}
                  style={{ width: 'unset' }}
                />
                Very good 8+
              </label>
              <label className='filter-option'>
                <input
                  type='checkbox'
                  checked={filters.reviewScore.includes('7+')}
                  onChange={() => handleReviewScoreChange('7+')}
                  style={{ width: 'unset' }}
                />
                Good 7+
              </label>
              <label className='filter-option'>
                <input
                  type='checkbox'
                  checked={filters.reviewScore.includes('6+')}
                  onChange={() => handleReviewScoreChange('6+')}
                  style={{ width: 'unset' }}
                />
                Pleasant 6+
              </label>
            </div>
          </div>

          <FilterWithBottomDrawer />

          <div className='hotels-list'>
            <div className='hotel-list-sort-options'>
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
                Lowest price first
              </button>
              <button
                className={filters.sortBy === 'nearest' ? 'active' : ''}
                onClick={() => handleSortChange('nearest')}
                style={{ width: 'unset' }}
              >
                Nearest to me
              </button>
            </div>

            <div className='filter-input-box'>
              <i className='icon-search text-20 mr-10'></i>
              <input placeholder='Search Hotel' />
            </div>

            <ScrollFadeIn>
              <div className='hotels-container'>
                {sortedHotels.length > 0 ? (
                  sortedHotels.map(hotel => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                  ))
                ) : (
                  <p>No hotels match your filters.</p>
                )}
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </div>
    </>
  )
}

export default AllHotel
