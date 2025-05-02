import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const destinations = [
  { country: 'United Kingdom', img: '/img/destinations/1/1.webp', travellers: '147,681' },
  { country: 'Italy', img: '/img/destinations/1/2.webp', travellers: '147,681' },
  { country: 'France', img: '/img/destinations/1/3.webp', travellers: '147,681' },
  { country: 'Turkey', img: '/img/destinations/1/4.webp', travellers: '147,681' },
  { country: 'Spain', img: '/img/destinations/1/5.webp', travellers: '147,681' },
  { country: 'United Kingdom', img: '/img/destinations/1/1.webp', travellers: '147,681' },
  { country: 'Italy', img: '/img/destinations/1/2.webp', travellers: '147,681' },
  { country: 'France', img: '/img/destinations/1/3.webp', travellers: '147,681' },
];

const TravellersSliderSection = () => {
  return (
    <section className="layout-pt-md layout-pb-md">
      <div className="container">
        <div className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Connect With Other Travellers</h2>
              <p className="sectionTitle__text mt-5 sm:mt-0">These popular destinations have a lot to offer</p>
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-left-hover js-places-prev">
                  <i className="icon icon-arrow-left"></i>
                </button>
              </div>
              <div className="col-auto">
                <div className="pagination -dots text-border js-places-pag"></div>
              </div>
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-places-next">
                  <i className="icon icon-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-40 overflow-hidden">
          <Swiper
            modules={[Pagination, Navigation]}
            pagination={{ el: '.js-places-pag', clickable: true }}
            navigation={{ nextEl: '.js-places-next', prevEl: '.js-places-prev' }}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 5 },
            }}
          >
            {destinations.map((item, index) => (
              <SwiperSlide key={index}>
                <a href="#" className="citiesCard -type-2">
                  <div className="citiesCard__image rounded-4 ratio ratio-3:4">
                    <img
                      className="img-ratio rounded-4 js-lazy"
                      src={item.img}
                      alt={item.country}
                    />
                  </div>
                  <div className="citiesCard__content mt-10">
                    <h4 className="text-18 lh-13 fw-500 text-dark-1">{item.country}</h4>
                    <div className="text-14 text-light-1">{item.travellers} travellers</div>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TravellersSliderSection;
