import React from 'react';
import PublicImage from '../utils/PublicImage';

const features = [
  {
    id: 1,
    title: 'Best Price Guarantee',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgSrc: '/img/featureIcons/2/1.svg',
    delay: 1,
  },
  {
    id: 2,
    title: 'Easy & Quick Booking',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgSrc: '/img/featureIcons/2/1.svg',
    delay: 2,
  },
  {
    id: 3,
    title: 'Customer Care 24/7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgSrc: '/img/featureIcons/2/1.svg',
    delay: 3,
  },
];

const FeatureIconsSection = () => {
  return (
    <section className="layout-pt-xl layout-pb-md">
      <div className="container" >
        <div className="row y-gap-40 sm:y-gap-10 justify-between">
          {features.map(({ id, title, description, imgSrc, delay }) => (
            <div
              key={id}
              className="col-lg-4 col-sm-6"
              // data-anim-child={`slide-up delay-${delay}`}
            >
              <div className="featureIcon -type-1 -hover-shadow px-50 py-50 lg:px-24 lg:py-15">
                <div className="d-flex justify-center">
                  <PublicImage
                    src={imgSrc}
                    alt="feature"
                    className="js-lazy"
                  />
                </div>
                <div className="text-center mt-30">
                  <h4 className="text-18 fw-500">{title}</h4>
                  <p className="text-15 mt-10">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureIconsSection;
