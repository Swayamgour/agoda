import React from 'react'
import ScrollFadeIn from './scrollview/ScrollFadeIn'

const Footer = () => {
  return (
    <ScrollFadeIn>
      <footer className='footer -type-1 text-white bg-dark-2'>
        <div className='container'>
          <div className='pt-60 pb-60'>
            <div className='row y-gap-40 justify-between xl:justify-start'>
              {/* Contact Us */}
              <div className='col-xl-2 col-lg-4 col-sm-6'>
                <h5 className='text-16 fw-500 mb-30'>Contact Us</h5>
                <div className='mt-30'>
                  <div className='text-14 mt-30'>Toll Free Customer Care</div>
                  <div className='text-18 fw-500 mt-5'>+(1) 123 456 7890</div>
                </div>
                <div className='mt-35'>
                  <div className='text-14 mt-30'>Need live support?</div>
                  <div className='text-18 fw-500 mt-5'>hi@gotrip.com</div>
                </div>
              </div>

              {/* Company */}
              <div className='col-xl-2 col-lg-4 col-sm-6'>
                <h5 className='text-16 fw-500 mb-30'>Company</h5>
                <div className='d-flex y-gap-10 flex-column'>
                  <a>About Us</a>
                  <a>Careers</a>
                  <a>Blog</a>
                  <a>Press</a>
                  <a>Gift Cards</a>
                  <a>Magazine</a>
                </div>
              </div>

              {/* Support */}
              <div className='col-xl-2 col-lg-4 col-sm-6'>
                <h5 className='text-16 fw-500 mb-30'>Support</h5>
                <div className='d-flex y-gap-10 flex-column'>
                  <a>Contact</a>
                  <a>Legal Notice</a>
                  {/* <a>Privacy Policy</a> */}
                  {/* <a>Terms and Conditions</a> */}
                  {/* <a>Sitemap</a> */}
                </div>
              </div>

              {/* Other Services */}
              <div className='col-xl-2 col-lg-4 col-sm-6'>
                <h5 className='text-16 fw-500 mb-30'>Other Services</h5>
                <div className='d-flex y-gap-10 flex-column'>
                  <a>Car hire</a>
                  <a>Activity Finder</a>
                  <a>Tour List</a>
                  <a>Flight finder</a>
                  <a>Cruise Ticket</a>
                  <a>Holiday Rental</a>
                  <a>Travel Agents</a>
                </div>
              </div>

              {/* Mobile */}
              <div className='col-xl-2 col-lg-4 col-sm-6'>
                <h5 className='text-16 fw-500 mb-30'>Mobile</h5>
                <div className='d-flex items-center px-20 py-10 rounded-4 border-white-15'>
                  <div className='icon-apple text-24'></div>
                  <div className='ml-20'>
                    <div className='text-14 text-white'>Download on the</div>
                    <div className='text-15 lh-1 fw-500'>Apple Store</div>
                  </div>
                </div>

                <div className='d-flex items-center px-20 py-10 rounded-4 border-white-15 mt-20'>
                  <div className='icon-play-market text-24'></div>
                  <div className='ml-20'>
                    <div className='text-14 text-white'>Get in on</div>
                    <div className='text-15 lh-1 fw-500'>Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className='py-20 border-top-white-15'>
            <div className='row justify-between items-center y-gap-10'>
              <div className='col-auto'>
                <div className='row x-gap-30 y-gap-10'>
                  <div className='col-auto'>
                    <div className='d-flex items-center'>
                      © 2025 GoTrip LLC All rights reserved.
                    </div>
                  </div>

                  <div className='col-auto'>
                    <div className='d-flex x-gap-15'>
                      <a>Privacy</a>
                      <a>Terms</a>
                      <a>Site Map</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Language and Social Icons */}
              <div className='col-auto'>
                <div className='row y-gap-10 items-center'>
                  <div className='col-auto'>
                    <div className='d-flex items-center'>
                      <button className='d-flex items-center text-14 fw-500 text-white mr-10'>
                        <i className='icon-globe text-16 mr-10'></i>
                        <span className='underline'>English (US)</span>
                      </button>
                      <button className='d-flex items-center text-14 fw-500 text-white'>
                        <i className='icon-usd text-16 mr-10'></i>
                        <span className='underline'>USD</span>
                      </button>
                    </div>
                  </div>

                  <div className='col-auto'>
                    <div className='d-flex x-gap-20 items-center'>
                      <a>
                        <i className='icon-facebook text-14'></i>
                      </a>
                      <a>
                        <i className='icon-twitter text-14'></i>
                      </a>
                      <a>
                        <i className='icon-instagram text-14'></i>
                      </a>
                      <a>
                        <i className='icon-linkedin text-14'></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ScrollFadeIn>
  )
}

export default Footer
