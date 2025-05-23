import React, { useState } from 'react'
import { LocationOn, Star } from '@mui/icons-material'
// import styles from './HotelCard.module.css';
import { useNavigate } from 'react-router-dom'
import PropertyOverview from './PropertyOverview '
import PublicImage from '../../utils/PublicImage'
import styles from '../../style/HotelBookingDashboard.module.css'
import '../../style/AllHotel.css' // Import the CSS file


const HotelCard = ({ hotel }) => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleClickForDetail = () => {
    setOpen(true)
  }

  const handleImageChange = index => {
    setCurrentImageIndex(index)
  }

  return (
    <>
      <PropertyOverview open={open} setOpen={setOpen} hotel={hotel} />
      <div className={styles.card} onClick={handleClickForDetail}>
        <div className={styles.imageContainer}>
          {hotel.images && hotel.images.length > 0 ? (
            <>
              <PublicImage
                src={
                  hotel.images[currentImageIndex] ||
                  '/img/destinations/1/2.webp'
                }
                alt={hotel.name}
                className={styles.image}
              />
              {hotel.isDeal && <div className={styles.badge}>Special Deal</div>}
              {hotel.images.length > 1 && (
                <div className={styles.imageSlider}>
                  {hotel.images.map((_, index) => (
                    <div
                      key={index}
                      className={`${styles.sliderDot} ${
                        currentImageIndex === index ? styles.active : ''
                      }`}
                      onClick={e => {
                        e.stopPropagation()
                        handleImageChange(index)
                      }}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className={styles.imagePlaceholder}>No Image Available</div>
          )}
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.title}>{hotel.name}</h3>
            <div className={styles.rating}>
              <Star style={{ fontSize: '1rem' }} />
              <span>{hotel.ratingScore}</span>
            </div>
          </div>

          <div className={styles.location}>
            <LocationOn className={styles.locationIcon} />
            <span>{hotel.location}</span>
          </div>

          <div className={styles.amenities}>
            {hotel.amenities.slice(0, 4).map((amenity, index) => (
              <div key={index} className={styles.amenity}>
                {amenity}
              </div>
            ))}
            {hotel.amenities.length > 4 && (
              <div className={styles.amenity}>
                +{hotel.amenities.length - 4}
              </div>
            )}
          </div>

          <div className={styles.priceContainer}>
            <div className={styles.price}>
              <span className={styles.priceLabel}>Avg. per night</span>
              <span className={styles.priceAmount}>{hotel.price}</span>
            </div>
            <button
              className={styles.viewButton}
              onClick={e => {
                e.stopPropagation()
                handleClickForDetail()
              }}
            >
              View Deal
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HotelCard
