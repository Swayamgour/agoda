import React, { useState, useEffect } from 'react'
import '../../style/HotelPhotos.css'
import { useNavigate } from 'react-router-dom'

const HotelPage = () => {
  const cleanList = [
    {
      title: 'Rated highly by Solo travelers',
      image: '/images/baggagePay.svg'
    },
    {
      title: 'Top Value',
      image: '/images/medal.svg'
    },
    {
      title: 'Sparkling clean',
      image: '/images/spray.svg'
    },
    {
      title: 'Excellent room comfort & quality',
      image: '/images/bedKing.svg'
    }
  ]


  const navigate = useNavigate()

  const images = {
    all: Array(32)
      .fill()
      .map((_, i) => ({
        id: i,
        url: `https://picsum.photos/800/600?random=${i}`
      }))
  }

  // <div>Rated highly by Solo travelers</div>
  // <div>Top Value</div>
  // <div>Sparkling clean</div>
  // <div>Excellent room comfort & quality</div>

  // console.log(images)

  return (
    <div style={{ marginTop: '70px' }} className='hotel-page'>
      {/* <header className="hotel-header">
        <h1>The Hosteller Bangalore, Marathahalli</h1>
      </header>

      <div className="date-selection">
        <div className="date-box">
          <h3>14 May 2025</h3>
          <p>Wednesday</p>
        </div>
        <div className="date-box">
          <h3>15 May 2025</h3>
          <p>Thursday</p>
        </div>
        <div className="guest-info">
          <h3>2 adults</h3>
          <p>1 room</p>
        </div>
      </div> */}

      <div className='breadcrumb'>
        <ul>
          <li>Home</li>
          <li>India Hotels (2,57,660)</li>
          <li>Bangalore Hotels (6,372)</li>
          <li>Bangalore Hotels (60)</li>
          <li className='active'>Book The Hosteller Bangalore,Marathahalli</li>
        </ul>
      </div>

      <div className='image-grid'>
        {images?.all.slice(0, 6).map((image, index) => (
          <div
            key={image.id}
            className='grid-item'
            // onClick={() => handleImageClick(index)}
          >
            <img src={image.url} alt={`Property ${image.id}`} />
            {/* {index === 5 && images[activeTab].length > 6 && (
              <div className='more-overlay'>
                <span>+{images[activeTab].length - 6} more</span>
              </div>
            )} */}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '10px' }} className='see-all-section'>
        <a href='#'>See all 5,372 properties in Bangalore</a>
        <a href='#'>See all photos</a>
      </div>

      <div className='overview-section'>
        <div className='overview-items'>
          <span>Overview</span>
          <span>Rooms</span>
          <span>Trip recommendations</span>
          <span>Facilities</span>
          <span>Reviews</span>
          <span>Location</span>
          <span>Policies</span>
        </div>

        <div style={{ display: 'flex', gap: '20px' }}>
          <div className='overview-price'>
            <span>From </span>
            <span>RS. </span>
            <span>427 </span>
          </div>
          <div className='view-deal' onClick={()=>navigate('/BookingReview')} >Book Now</div>
        </div>
      </div>

      <div className='hotel-details-page'>
        <div className='hotel-details-page-left'>
          <div className='hotel-header-box'>
            <header className='hotel-header'>
              <h1>The Hosteller Bangalore, Marathahalli</h1>
              <p className='address'>
                902, Munkolala, Outer ring road, Marathahalli Bangalore 560037,
                Marathahalli, Bangalore, India, 560037 - <a href='#'>SEE MAP</a>
              </p>
            </header>

            <div className='hotel-description'>
              <p>
                Discover The Hosteller Bangalore, Marathahalli, an ideal retreat
                for solo travelers. Nestled in the bustling Marathahalli area,
                known for shopping and vibrant dining, the hotel offers superb
                connectivity to tech parks. Guests can unwind in a cozy shared
                lounge with a TV area or savor meals at the on-site restaurant.
                Modern room comforts include complimentary WiFi and air
                conditioning, ensuring a serene stay. Explore nearby attractions
                like The Heritage Centre & Aerospace Museum, less than 2 km
                away, for an exciting glimpse into aviation history and art.
                Perfect for a solo travel adventure. [Some content may be
                Generative AI assisted. Inaccuracies may occur.]
              </p>
            </div>
          </div>

          <div className='hotel-header-box'>
            <h2 className='hotel-header'>Highlights</h2>
            <div style={{ alignItems: 'center' }} className='form-radio'>
              {cleanList?.map(e => (
                <div
                  style={{
                    width: '25%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <img src={e?.image} />
                  </div>
                  <div style={{ fontSize: '12px' }}>{e?.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className='hotel-header-box'>
            <h2 className='hotel-header'>Facilities</h2>
            <div className='facilities-grid'>
              <span> ✓ Free Wi-Fi</span>
              <span> ✓ Free parking</span>
              <span> ✓ Front desk (24 hour)</span>
              <span> ✓ Restaurant</span>
              <span> ✓ Rooftop area</span>
              <span> ✓ Balcony/terrace</span>
              <span> ✓ Tours</span>
              <span> ✓ Contactless check-in/out</span>
            </div>
          </div>

          <div className='demand-notice'>
            <p style={{ color: 'rgb(225,44,44)', fontSize: '16px' }}>
              This property is in high demand!
            </p>
            <p>10 travelers have booked today.</p>
          </div>
        </div>

        <div className='hotel-details-page-right'>
          <div className='hotel-header-box'>
            <div className='rating-location-container'>
              <div className='rating-section'>
                <div className='main-rating'>
                  <span className=''>9.0</span>
                  <span className='rating-label'>Exceptional</span>
                  <span className='rating-count'>93 reviews</span>
                </div>
                <a className='read-reviews'>Read all reviews</a>

                <div className='rating-details'>
                  <div className='rating-row'>
                    <span>Cleanliness</span>
                    <span className='score'>9.4</span>
                    <span>Service</span>
                    <span className='score'>9.3</span>
                  </div>
                  <div className='rating-row'>
                    <span>Value for money</span>
                    <span className='score'>9.2</span>
                    <span>Facilities</span>
                    <span className='score'>9.0</span>
                  </div>
                </div>
              </div>

              <div className='map-section'>
                <a className='map-link'>SEE MAP</a>

                <div className='location-rating'>
                  <span className=''>8.8</span>
                  <span className='rating-label'>Excellent</span>
                  <span className='rating-description'>
                    Location rating score
                  </span>
                </div>

                <div className='location-status'>
                  <span className='check-icon'>✓</span>
                  <span>Excellent location</span>
                </div>

                <div className='parking-info'>
                  <span className='pin-icon'>📍</span>
                  <span>Parking</span>
                  <span className='free-tag'>FREE</span>
                </div>

                {/* <div className='landmarks-section'>
                <h4>Closest landmarks</h4>
                <ul className='landmarks-list'>
                  <li>
                    <span>Derma Solutions</span>
                    <span>220 m</span>
                  </li>
                  <li>
                    <span>Miami Supermarket</span>
                    <span>500 m</span>
                  </li>
                  <li>
                    <span>Nokia India Pvt. Ltd.</span>
                    <span>1.0 km</span>
                  </li>
                  <li>
                    <span>Ezone sporting</span>
                    <span>1.4 km</span>
                  </li>
                  <li>
                    <span>Tennis Academy</span>
                    <span>1.5 km</span>
                  </li>
                </ul>
              </div> */}

                <button className='nearby-places-link'>
                  SEE NEARBY PLACES
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelPage
