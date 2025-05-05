import React from 'react'
import '../style/HotelCard.css'
import { useNavigate } from 'react-router-dom'

const HotelCard = ({ hotel }) => {
  const navigate = useNavigate()
  return (
    <div
      onClick={() => navigate('/HotelDetail', { state: hotel })}
      className='hotel-card'
    >
      <div className='hotel-image'>
        {hotel.images && hotel.images.length > 0 ? (
          <div className='image-carousel'>
            {hotel.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${hotel.name} - Image ${idx + 1}`}
                className={idx === 0 ? 'active' : ''}
              />
            ))}
          </div>
        ) : (
          <div className='image-placeholder'>Hotel Image</div>
        )}
      </div>
      <div className='hotel-details'>
        <h3 className='hotel-name'>{hotel.name}</h3>
        <p className='hotel-location'>
          {hotel.ratingStars} {hotel.location} - View on map
        </p>

        <div className='hotel-amenities'>
          {hotel.amenities.map((amenity, index) => (
            <span key={index}>{amenity}</span>
          ))}
        </div>

        <div className='hotel-rating'>
          <span className='rating-text'>{hotel.ratingText}</span>
          <span className='review-count'>{hotel.reviewCount} reviews</span>
          <span className='rating-score'>{hotel.ratingScore}</span>
        </div>

        <div className='hotel-price'>
          <p className='price-label'>Avg price per night</p>
          <p className='price-amount'>{hotel.price}</p>
          <button className='check-availability-btn'>Check availability</button>
        </div>
      </div>
    </div>
  )
}

export default HotelCard
