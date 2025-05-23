import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { Dialog } from '@mui/material'
import WifiIcon from '@mui/icons-material/Wifi'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import FilterBAndWIcon from '@mui/icons-material/FilterBAndW'
import { useNavigate } from 'react-router-dom'
import PublicImage from '../../utils/PublicImage'
import '../../style/HotelCard.css'

const PropertyOverview = ({ open, setOpen }) => {
  const [activeTab, setActiveTab] = useState('all')
  const [showFullImage, setShowFullImage] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  const navigate = useNavigate()

  const tabs = [
    { id: 'all', label: 'All (32)' },
    { id: 'rooms', label: 'Rooms (10)' },
    { id: 'property', label: 'Property views (7)' },
    { id: 'facilities', label: 'Facilities (10)' },
    { id: 'dining', label: 'Dining (2)' },
    { id: 'nearby', label: 'Nearby attraction (2)' },
    { id: 'other', label: 'Other (1)' }
  ]

  // Sample images data - in a real app, this would come from an API
  const images = {
    all: Array(32)
      .fill()
      .map((_, i) => ({
        id: i,
        url: `https://picsum.photos/800/600?random=${i}`
      })),
    rooms: Array(10)
      .fill()
      .map((_, i) => ({
        id: i,
        url: `https://picsum.photos/800/600?random=${i + 100}`
      })),
    property: Array(7)
      .fill()
      .map((_, i) => ({
        id: i,
        url: `https://picsum.photos/800/600?random=${i + 200}`
      })),
    facilities: Array(10)
      .fill()
      .map((_, i) => ({
        id: i,
        url: `https://picsum.photos/800/600?random=${i + 300}`
      })),
    dining: Array(2)
      .fill()
      .map((_, i) => ({
        id: i,
        url: `https://picsum.photos/800/600?random=${i + 400}`
      })),
    nearby: Array(2)
      .fill()
      .map((_, i) => ({
        id: i,
        url: `https://picsum.photos/800/600?random=${i + 500}`
      })),
    other: Array(1)
      .fill()
      .map((_, i) => ({
        id: i,
        url: `https://picsum.photos/800/600?random=${i + 600}`
      }))
  }

  const amenities = [
    { title: 'Free Wi-Fi in all rooms', icon: <WifiIcon /> },
    { title: 'Air conditioning', icon: <AcUnitIcon /> },
    { title: 'Daily housekeeping', icon: <CleaningServicesIcon /> },
    { title: 'Blackout curtains', icon: <FilterBAndWIcon /> },
    ''
  ]

  const nearbyAttractions = [
    { name: 'Maintaina Gandhi (MG) Road', distance: '3.97 km' },
    {
      name: 'Verseverayan Industrial and Technologies Museum',
      distance: '5.55 km'
    },
    { name: 'UB City', distance: '5.81 km' },
    { name: 'Cudcoon Park', distance: '5.72 km' }
  ]

  const handleImageClick = index => {
    // console.log(index)
    setSelectedImage(index)
    setShowFullImage(true)
  }

  const closeFullImage = () => {
    setShowFullImage(false)
  }

  const onClose = () => {
    setOpen(false)
  }

  const handleClick = () => {
    navigate('/HotelDetail')
  }

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={true}
      maxWidth='lg'
      PaperProps={{
        style: {
          width: '90%',
          maxWidth: 'none',
          maxHeight: '90vh',
          overflow: 'hidden'
        }
      }}
    >
      <div className='property-overview'>
        {/* <div className='coupon-banner'>
          <h1>Congratulations! You get an extra 5% OFF today</h1>
          <p>Just activate your coupon now to unlock this offer.</p>
        </div> */}

        <div className='gallery-section'>
          <div className='gallery-tabs'>
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className='image-grid'>
            {images[activeTab].slice(0, 6).map((image, index) => (
              <div
                key={image.id}
                className='grid-item'
                onClick={() => handleImageClick(index)}
              >
                <PublicImage src={image.url} alt={`Property ${image.id}`} />
                {index === 5 && images[activeTab].length > 6 && (
                  <div className='more-overlay'>
                    <span>+{images[activeTab].length - 6} more</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className='show-more-btn'>Show & more</button>
        </div>

        <div className='property-details'>
          <div className='amenities-section'>
            <h2>Property overview</h2>
            <ul>
              {amenities.map((item, index) => (
                <div className='amenities_feature' key={index}>
                  <span className='amenities-section-icon'>{item?.icon}</span>
                  <span className='amenities-section-nme'>{item?.title}</span>
                </div>
              ))}
            </ul>
          </div>

          <div className='nearby-section'>
            <h2>Nearby Attraction</h2>
            <div className='attractions-list'>
              {nearbyAttractions.map((attraction, index) => (
                <div key={index} className='attraction-item'>
                  <span>{attraction.name}</span>
                  <span>{attraction.distance}</span>
                </div>
              ))}
            </div>
          </div>

          <div className='dining-section'>
            <h2>Dining, drinking and snacking</h2>
            <p>Kettle</p>
          </div>

          <button className='view-property-btn' onClick={() => handleClick()}>
            View property
          </button>
        </div>

        {/* Full Image Modal */}
        {showFullImage && (
          <div className='full-image-modal'>
            <div className='modal-content'>
              <button className='close-btn' onClick={closeFullImage}>
                ×
              </button>

              <Swiper
                spaceBetween={10}
                navigation={true}
                modules={[Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                initialSlide={selectedImage}
                className='main-swiper'
              >
                {images[activeTab]?.map(image => (
                  <SwiperSlide key={image.id}>
                    <PublicImage src={image.url} alt={`Property ${image.id}`} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={6}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className='thumbs-swiper'
              >
                {images[activeTab].map(image => (
                  <SwiperSlide key={image.id}>
                    <PublicImage
                      src={image.url}
                      alt={`Thumbnail ${image.id}`}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        )}
      </div>
    </Dialog>
  )
}

export default PropertyOverview
