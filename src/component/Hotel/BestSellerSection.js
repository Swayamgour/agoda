import React from 'react'
import { useNavigate } from 'react-router-dom'
import ScrollFadeIn from '../scrollview/ScrollFadeIn'
import PublicImage from '../../utils/PublicImage'

const BestSellerSection = () => {
  const navigate = useNavigate()

  const tabs = [
    { id: 1, name: 'Hotel', active: true },
    { id: 2, name: 'Tour', active: false },
    { id: 3, name: 'Activity', active: false },
    { id: 4, name: 'Holiday Rentals', active: false },
    { id: 5, name: 'Car', active: false },
    { id: 6, name: 'Cruise', active: false },
    { id: 7, name: 'Flights', active: false }
  ]

  const hotels = [
    {
      id: 1,
      image: '/img/hotels/1.png',
      title: 'The Montcalm At Brewery London City',
      location: 'Westminster Borough, London',
      rating: 4.8,
      reviews: '3,014 reviews',
      price: 'US$72',
      badge: 'Breakfast included',
      badgeColor: 'bg-dark-1',
      animation: 'slide-left delay-4'
    },
    {
      id: 2,
      image: '/img/hotels/2.png',
      title: 'Staycity Aparthotels Deptford Bridge Station',
      location: 'Ciutat Vella, Barcelona',
      rating: 4.8,
      reviews: '3,014 reviews',
      price: 'US$72',
      slider: true,
      animation: 'slide-left delay-5'
    },
    {
      id: 3,
      image: '/img/hotels/3.png',
      title: 'The Westin New York at Times Square',
      location: 'Manhattan, New York',
      rating: 4.8,
      reviews: '3,014 reviews',
      price: 'US$72',
      badge: 'Best Seller',
      badgeColor: 'bg-blue-1',
      animation: 'slide-left delay-6'
    },
    {
      id: 4,
      image: '/img/hotels/4.png',
      title: 'DoubleTree by Hilton Hotel New York Times Square West',
      location: 'Vaticano Prati, Rome',
      rating: 4.8,
      reviews: '3,014 reviews',
      price: 'US$72',
      badge: 'Top Rated',
      badgeColor: 'bg-yellow-1 text-dark-1',
      animation: 'slide-left delay-7'
    }
  ]

  return (
    <ScrollFadeIn>
      <section className='layout-pt-md layout-pb-lg'>
        <div className='container'>
          <div className='tabs -pills-2 js-tabs'>
            <div className='row y-gap-20 justify-between items-end'>
              <div className='col-auto'>
                <div className='sectionTitle -md'>
                  <h2 className='sectionTitle__title'>Best Seller</h2>
                  <p className='sectionTitle__text mt-5 sm:mt-0'>
                    Interdum et malesuada fames ac ante ipsum
                  </p>
                </div>
              </div>

              {/* <div className='col-auto'>
                <div className='tabs__controls row x-gap-10 justify-center js-tabs-controls'>
                  {tabs.map(tab => (
                    <div key={tab.id} className='col-auto'>
                      <button
                        className={`tabs__button text-14 fw-500 px-20 py-10 rounded-4 bg-light-2 js-tabs-button ${
                          tab.active ? 'is-tab-el-active' : ''
                        }`}
                        data-tab-target={`.-tab-item-${tab.id}`}
                      >
                        {tab.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>

            <div className='tabs__content pt-40 js-tabs-content'>
              {tabs.map(tab => (
                <div
                  key={tab.id}
                  className={`tabs__pane -tab-item-${tab.id} ${
                    tab.active ? 'is-tab-el-active' : ''
                  }`}
                >
                  <div className='row y-gap-30'>
                    {hotels.map(hotel => (
                      <div
                        onClick={() => {
                          navigate('/AllHotel')
                        }}
                        key={hotel.id}
                        className='col-xl-3 col-lg-3 col-sm-6'
                      >
                        <div className='hotelsCard -type-1'>
                          <div className='hotelsCard__image'>
                            <div className='cardImage ratio ratio-1:1'>
                              <div className='cardImage__content'>
                                {hotel.slider ? (
                                  <div className='cardImage-slider rounded-4 overflow-hidden js-cardImage-slider'>
                                    <div className='swiper-wrapper'>
                                      <div className='swiper-slide'>
                                        <PublicImage
                                          className='col-12'
                                          src={hotel.image}
                                          alt='image'
                                        />
                                      </div>
                                      <div className='swiper-slide'>
                                        <PublicImage
                                          className='col-12'
                                          src='/img/hotels/1.png'
                                          alt='image'
                                        />
                                      </div>
                                      <div className='swiper-slide'>
                                        <PublicImage
                                          className='col-12'
                                          src='/img/hotels/3.png'
                                          alt='image'
                                        />
                                      </div>
                                    </div>
                                    <div className='cardImage-slider__pagination js-pagination'></div>
                                    <div className='cardImage-slider__nav -prev'>
                                      <button className='button -blue-1 bg-white size-30 rounded-full shadow-2 js-prev'>
                                        <i className='icon-chevron-left text-10'></i>
                                      </button>
                                    </div>
                                    <div className='cardImage-slider__nav -next'>
                                      <button className='button -blue-1 bg-white size-30 rounded-full shadow-2 js-next'>
                                        <i className='icon-chevron-right text-10'></i>
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <PublicImage
                                    className='rounded-4 col-12'
                                    src={hotel.image}
                                    alt='image'
                                  />
                                )}
                              </div>

                              <div className='cardImage__wishlist'>
                                <button className='button -blue-1 bg-white size-30 rounded-full shadow-2'>
                                  <i className='icon-heart text-12'></i>
                                </button>
                              </div>

                              {hotel.badge && (
                                <div className='cardImage__leftBadge'>
                                  <div
                                    className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${hotel.badgeColor}`}
                                  >
                                    {hotel.badge}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className='hotelsCard__content mt-10'>
                            <h4 className='hotelsCard__title text-dark-1 text-18 lh-16 fw-500'>
                              <span>{hotel.title}</span>
                            </h4>

                            <p className='text-light-1 lh-14 text-14 mt-5'>
                              {hotel.location}
                            </p>

                            <div className='d-flex items-center mt-20'>
                              <div className='flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white'>
                                {hotel.rating}
                              </div>
                              <div className='text-14 text-dark-1 fw-500 ml-10'>
                                Exceptional
                              </div>
                              <div className='text-14 text-light-1 ml-10'>
                                {hotel.reviews}
                              </div>
                            </div>

                            <div className='mt-5'>
                              <div className='fw-500'>
                                Starting from{' '}
                                <span className='text-blue-1'>
                                  {hotel.price}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  )
}

export default BestSellerSection
