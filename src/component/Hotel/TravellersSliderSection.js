import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'
// import ScrollFadeIn from '../../scrollview/ScrollFadeIn'
import PublicImage from '../../utils/PublicImage'
import ScrollFadeIn from '../scrollview/ScrollFadeIn'

const destinations = [
  {
    country: 'United Kingdom',
    img: '/img/destinations/1/1.webp',
    travellers: '147,681'
  },
  {
    country: 'Italy',
    img: '/img/destinations/1/2.webp',
    travellers: '147,681'
  },
  {
    country: 'France',
    img: '/img/destinations/1/3.webp',
    travellers: '147,681'
  },
  {
    country: 'Turkey',
    img: '/img/destinations/1/4.webp',
    travellers: '147,681'
  },
  {
    country: 'Spain',
    img: '/img/destinations/1/5.webp',
    travellers: '147,681'
  },
  {
    country: 'United Kingdom',
    img: '/img/destinations/1/1.webp',
    travellers: '147,681'
  },
  {
    country: 'Italy',
    img: '/img/destinations/1/2.webp',
    travellers: '147,681'
  },
  {
    country: 'France',
    img: '/img/destinations/1/3.webp',
    travellers: '147,681'
  }
]

const TravellersSliderSection = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const paginationRef = useRef(null)

  const navigate = useNavigate()

  return (
    <section className='layout-pt-md layout-pb-md'>
      <ScrollFadeIn>
        <div className='container'>
          <div className='row y-gap-20 justify-between items-end'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>
                  Connect With Other Travellers
                </h2>
                <p className='sectionTitle__text mt-5 sm:mt-0'>
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>

            <div className='col-auto'>
              <div className='d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20'>
                <div className='col-auto'>
                  <button
                    ref={prevRef}
                    className='d-flex items-center text-24 arrow-left-hover'
                  >
                    <i className='icon icon-arrow-left'></i>
                  </button>
                </div>
                <div className='col-auto'>
                  <div
                    ref={paginationRef}
                    className='pagination -dots text-border'
                  ></div>
                </div>
                <div className='col-auto'>
                  <button
                    ref={nextRef}
                    className='d-flex items-center text-24 arrow-right-hover'
                  >
                    <i className='icon icon-arrow-right'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-40 overflow-hidden'>
            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={30}
              onInit={swiper => {
                swiper.params.navigation.prevEl = prevRef.current
                swiper.params.navigation.nextEl = nextRef.current
                swiper.params.pagination.el = paginationRef.current
                swiper.navigation.init()
                swiper.navigation.update()
                swiper.pagination.init()
                swiper.pagination.render()
                swiper.pagination.update()
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 5 }
              }}
            >
              {destinations.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => {
                      navigate('/AllHotel', { state: { item } })
                    }}
                    className='citiesCard -type-2'
                  >
                    <div className='citiesCard__image rounded-4 ratio ratio-3:4'>
                      <PublicImage
                        className='img-ratio rounded-4 js-lazy'
                        src={item.img}
                        alt={item.country}
                      />
                    </div>
                    <div className='citiesCard__content mt-10'>
                      <h4 className='text-18 lh-13 fw-500 text-dark-1'>
                        {item.country}
                      </h4>
                      <div className='text-14 text-light-1'>
                        {item.travellers} travelers
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  )
}

export default TravellersSliderSection
