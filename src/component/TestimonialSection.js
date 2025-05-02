import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "./TestimonialSection.css"; // your custom CSS

const testimonials = [
  {
    name: "Courtney Henry",
    role: "Web Designer",
    image: "/img/avatars/1.png",
    text: "Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.",
    title: "Hotel Equatorial Melaka",
  },
  // Add more testimonials here if needed
];

const clients = [
  "/img/clients/1.svg",
  "/img/clients/2.svg",
  "/img/clients/3.svg",
  "/img/clients/4.svg",
  "/img/clients/5.svg",
  "/img/clients/6.svg",
];

const TestimonialSection = () => {
  return (
    <section className="layout-pt-lg layout-pb-lg bg-dark-3">
      <div className="container">
        <div className="row y-gap-60">
          <div className="col-xl-5 col-lg-6 text-white">
            <h2 className="text-30">What our customers are<br />saying us?</h2>
            <p className="mt-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
            </p>

            <div className="row y-gap-30 pt-60 lg:pt-40">
              <div className="col-sm-5 col-6">
                <div className="text-30 lh-15 fw-600">13m+</div>
                <div className="lh-15">Happy People</div>
              </div>
              <div className="col-sm-5 col-6">
                <div className="text-30 lh-15 fw-600">4.88</div>
                <div className="lh-15">Overall rating</div>
                <div className="d-flex x-gap-5 items-center pt-10">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <i key={idx} className="icon-star text-white text-10" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1 col-md-10">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{ nextEl: ".js-next", prevEl: ".js-prev" }}
              pagination={{ el: ".js-pagination", clickable: true }}
              loop
              className="testimonials-slider-2"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40 shadow-2">
                    <h4 className="text-16 fw-500 text-blue-1 mb-20">{testimonial.title}</h4>
                    <p className="testimonials__text lh-18 fw-500 text-dark-1">"{testimonial.text}"</p>
                    <div className="pt-20 mt-28 border-top-light">
                      <div className="row x-gap-20 y-gap-20 items-center">
                        <div className="col-auto">
                          <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div className="col-auto">
                          <div className="text-15 fw-500 lh-14">{testimonial.name}</div>
                          <div className="text-14 lh-14 text-light-1 mt-5">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="d-flex x-gap-15 items-center justify-center pt-30">
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-left-hover text-white js-prev">
                  <i className="icon icon-arrow-left" />
                </button>
              </div>
              <div className="col-auto">
                <div className="pagination -dots text-white-50 js-pagination" />
              </div>
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover text-white js-next">
                  <i className="icon icon-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-center text-center pt-60">
          <div className="col-auto">
            <div className="text-15 lh-1 text-white">Trusted by the world’s best</div>
          </div>
        </div>

        <div className="px-40 md:px-0">
          <div className="row y-gap-30 justify-between items-center pt-60 lg:pt-40">
            {clients.map((client, idx) => (
              <div key={idx} className="col-md-auto col-sm-6">
                <div className="d-flex justify-center">
                  <img src={client} alt="client logo" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
