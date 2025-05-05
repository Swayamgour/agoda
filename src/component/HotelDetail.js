// import React from "react";

// function HotelDetail() {
//   return <div>HotelDetail</div>;
// }

// export default HotelDetail;

import React, { useState, useEffect } from 'react'
import '../style/HotelPhotos.css'

const HotelDetail = () => {
  const hotelName = 'The Hosteller Bangalore'
  const images = [
    'https://imgs.search.brave.com/YJrxd_ISoaBvuFi492R7zmQI9clAQbOdc_lHRA9H6uM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/NjA5MDU3L3Bob3Rv/L2x1eHVyeS1ob3Rl/bC1yb29tLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1OTjFP/VGRkdlV4R3gtQ05T/SFllMlNRdnNWN2Rp/TWc4QUJ5SWxuSE0z/OVh3PQ',
    'https://imgs.search.brave.com/47qtucf9Xw_MjHup7Hx_uQxZVYUteQP8w-Osdqi01rc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/NDExNzMzNC9waG90/by9kaWdpdGFsLXJl/bmRlci1vZi1sYXJn/ZS1ob3RlbC1zdWl0/ZS1iZWRyb29tLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1r/emtOaDRBR2RSaUxu/YnNKTEhEY3psMU9S/T2hYdmhRRDNmNE4z/ajZQdHN3PQ',
    'https://imgs.search.brave.com/4PLb2IDNuHSnOGKOyUAiH1tuAbq2VLeEi2oxzgzze7Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI0/OTg3ODA5NS9waG90/by9ob3RlbC1iZWRy/b29tLWFuZC1iYWxj/b255LXdpdGgtc2Vh/LXZpZXcuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUdZY2hr/ZlZXVDFtQ01MYVR1/X0ctOGhDU3l4YmF4/VHozZnVDcW5nYm1B/VVE9',
    'https://imgs.search.brave.com/8Dx7B9bBj_9E34RkyiY0mIfGU4MpWDceDT16KSQUrAo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/aG90ZWxzLWZsYXRz/LmpwZz93aWR0aD0x/MDAwJmZvcm1hdD1w/anBnJmV4aWY9MCZp/cHRjPTA'
    // 'https://source.unsplash.com/random/800x600/?hotel-restaurant,1',
    // 'https://source.unsplash.com/random/800x600/?hotel-gym,1'
  ]

  const [showAllPhotos, setShowAllPhotos] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!images || images.length === 0) return null

  const toggleShowAllPhotos = () => {
    setShowAllPhotos(!showAllPhotos)
  }

  const nextImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  //   useEffect(() => {
  //     window.scroll(0, 0)
  //   }, [])

//   useEffect(() => {
//     window.scroll(0, 0)
//   }, [])

  return (
    <div className='hotel-photos-section'>
      <h2>Photos</h2>

      {/* Main photo display */}
      <div className='main-photo-container'>
        <img
          src={images[currentImageIndex]}
          alt={`${hotelName} - Photo ${currentImageIndex + 1}`}
          className='main-photo'
        />
        {images.length > 1 && (
          <>
            <button className='nav-button prev-button' onClick={prevImage}>
              &lt;
            </button>
            <button className='nav-button next-button' onClick={nextImage}>
              &gt;
            </button>
          </>
        )}
      </div>

      {/* Thumbnail gallery */}
      <div className='thumbnail-gallery'>
        {images.slice(0, 5).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${hotelName} thumbnail ${index + 1}`}
            className={`thumbnail ${
              index === currentImageIndex ? 'active' : ''
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
        {images.length > 5 && (
          <div className='see-all-button' onClick={toggleShowAllPhotos}>
            +{images.length - 5} more
          </div>
        )}
      </div>

      {/* "See all photos" button */}
      <button className='see-all-photos-btn' onClick={toggleShowAllPhotos}>
        {showAllPhotos ? 'Hide photos' : 'See all photos'}
      </button>

      {/* Full photo gallery modal */}
      {showAllPhotos && (
        <div className='photo-gallery-modal'>
          <div className='modal-header'>
            <h3>{hotelName} - All Photos</h3>
            <button className='close-button' onClick={toggleShowAllPhotos}>
              &times;
            </button>
          </div>
          <div className='gallery-grid'>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${hotelName} photo ${index + 1}`}
                className='gallery-photo'
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default HotelDetail
