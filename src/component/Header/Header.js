import React, { useState } from 'react'
import Login from '../Login'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  // const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate()

  const [menuActive, setMenuActive] = useState(false)
  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setMenuActive(prev => !prev)
  }

  return (
    <header
      data-add-bg='bg-dark-1'
      className='header js-header'
      data-x='header'
      data-x-toggle='is-menu-opened'
    >
      <Login setOpen={setOpen} open={open} />
      <div className='header__container container'>
        <div className='row justify-between items-center'>
          <div className='col-auto'>
            <div className='d-flex items-center'>
              <div className='mr-20'>
                <button
                  className='d-flex items-center icon-menu text-white text-20'
                  data-x-click='desktopMenu'
                  onClick={toggleMenu}
                >
                  {' '}
                </button>
              </div>

              <a
                // href='index.html'
                onClick={() => navigate('/')}
                className='header-logo mr-30'
                data-x='header-logo'
                data-x-toggle='is-logo-dark'
              >
                <img src='/img/general/logo-light-2.svg' alt='logo icon' />
                <img src='/img/general/logo-dark.svg' alt='logo icon' />
              </a>

              <div className='relative xl:d-none'>
                <div className='searchMenu-loc js-form-dd js-liverSearch'>
                  <div
                    className='d-flex items-center'
                    data-x-dd-click='searchMenu-loc'
                  >
                    <i className='text-20 icon-search text-white mr-15'></i>
                    <div className='text-15 text-white ls-2 lh-16'>
                      <input
                        autoComplete='off'
                        type='search'
                        placeholder='Destination, attraction, hotel, etc'
                        className='text-white js-search js-dd-focus'
                      />
                    </div>
                  </div>

                  <div
                    className='searchMenu-loc__field shadow-2 js-popup-window'
                    data-x-dd='searchMenu-loc'
                    data-x-dd-toggle='-is-active'
                  >
                    <div className='bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4'>
                      <div className='y-gap-5 js-results'>
                        {[
                          {
                            name: 'London',
                            desc: 'Greater London, United Kingdom'
                          },
                          {
                            name: 'New York',
                            desc: 'New York State, United States'
                          },
                          { name: 'Paris', desc: 'France' },
                          { name: 'Madrid', desc: 'Spain' },
                          { name: 'Santorini', desc: 'Greece' }
                        ].map((location, index) => (
                          <div key={index}>
                            <button className='-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option'>
                              <div className='d-flex'>
                                <div className='icon-location-2 text-light-1 text-20 pt-4'></div>
                                <div className='ml-10'>
                                  <div className='text-15 lh-12 fw-500 js-search-option-target'>
                                    {location.name}
                                  </div>
                                  <div className='text-14 lh-12 text-light-1 mt-5'>
                                    {location.desc}
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='desktopMenu js-desktopMenu'>
                <div
                  className={`desktopMenu ${
                    menuActive ? 'is-menu-active' : ''
                  }`}
                ></div>
                <div className='desktopMenu__content'>
                  <div className='mobile-bg js-mobile-bg'></div>

                  <div className='px-30 py-20 sm:px-20 sm:py-10 border-bottom-light'>
                    <div className='row justify-between items-center'>
                      <div className='col-auto'>
                        <div className='text-20 fw-500'>Main Menu</div>
                      </div>
                      <div className='col-auto'>
                        <button
                          className='icon-close text-15'
                          data-x-click='desktopMenu'
                        ></button>
                      </div>
                    </div>
                  </div>

                  <div className='h-full px-30 py-30 sm:px-0 sm:py-10'>
                    <div className='menu js-navList'>
                      <ul className='menu__nav -is-active'>
                        {/* Home Menu */}
                        <li className='menu-item-has-children'>
                          <a data-barba href='#'>
                            <span className='mr-10'>Home</span>
                            <i className='icon icon-chevron-sm-down'></i>
                          </a>
                          <ul className='subnav'>
                            <li className='subnav__backBtn js-nav-list-back'>
                              <a href='#'>
                                <i className='icon icon-chevron-sm-down'></i>{' '}
                                Home
                              </a>
                            </li>
                            {[...Array(10)].map((_, i) => (
                              <li key={i}>
                                <a href={`home-${i + 1}.html`}>Home {i + 1}</a>
                              </li>
                            ))}
                          </ul>
                        </li>

                        {/* Categories Mega Menu */}
                        <li className='menu-item-has-children -has-mega-menu'>
                          <a data-barba href='#'>
                            <span className='mr-10'>Categories</span>
                            <i className='icon icon-chevron-sm-down'></i>
                          </a>
                          <ul className='subnav mega-mobile'>
                            <li className='subnav__backBtn js-nav-list-back'>
                              <a href='#'>
                                <i className='icon icon-chevron-sm-down'></i>{' '}
                                Category
                              </a>
                            </li>

                            {[
                              {
                                name: 'Hotel',
                                items: [
                                  'Hotel List v1',
                                  'Hotel List v2',
                                  'Hotel Single v1',
                                  'Hotel Single v2',
                                  'Booking Page'
                                ]
                              },
                              {
                                name: 'Tour',
                                items: [
                                  'Tour List v1',
                                  'Tour List v2',
                                  'Tour Map',
                                  'Tour Single'
                                ]
                              },
                              {
                                name: 'Activity',
                                items: [
                                  'Activity List v1',
                                  'Activity List v2',
                                  'Activity Map',
                                  'Activity Single'
                                ]
                              },
                              {
                                name: 'Rental',
                                items: [
                                  'Rental List v1',
                                  'Rental List v2',
                                  'Rental Map',
                                  'Rental Single'
                                ]
                              },
                              {
                                name: 'Car',
                                items: [
                                  'Car List v1',
                                  'Car List v2',
                                  'Car Map',
                                  'Car Single'
                                ]
                              },
                              {
                                name: 'Cruise',
                                items: [
                                  'Cruise List v1',
                                  'Cruise List v2',
                                  'Cruise Map',
                                  'Cruise Single'
                                ]
                              },
                              { name: 'Flights', items: ['Flights List v1'] }
                            ].map((category, index) => (
                              <li
                                key={index}
                                className='menu-item-has-children'
                              >
                                <a data-barba href='#'>
                                  <span className='mr-10'>{category.name}</span>
                                  <i className='icon icon-chevron-sm-down'></i>
                                </a>
                                <ul className='subnav'>
                                  <li className='subnav__backBtn js-nav-list-back'>
                                    <a href='#'>
                                      <i className='icon icon-chevron-sm-down'></i>{' '}
                                      {category.name}
                                    </a>
                                  </li>
                                  {category.items.map((item, i) => (
                                    <li key={i}>
                                      <a
                                        href={`${category.name
                                          .toLowerCase()
                                          .replace(' ', '-')}-${item
                                          .toLowerCase()
                                          .replace(' ', '-')}.html`}
                                      >
                                        {item}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </li>

                        {/* Simple Menu Items */}
                        <li>
                          <a href='destinations.html'>Destinations</a>
                        </li>

                        {/* Blog Menu */}
                        <li className='menu-item-has-children'>
                          <a data-barba href='#'>
                            <span className='mr-10'>Blog</span>
                            <i className='icon icon-chevron-sm-down'></i>
                          </a>
                          <ul className='subnav'>
                            <li className='subnav__backBtn js-nav-list-back'>
                              <a href='#'>
                                <i className='icon icon-chevron-sm-down'></i>{' '}
                                Blog
                              </a>
                            </li>
                            <li>
                              <a href='blog-list-1.html'>Blog list v1</a>
                            </li>
                            <li>
                              <a href='blog-list-2.html'>Blog list v2</a>
                            </li>
                            <li>
                              <a href='blog-single.html'>Blog single</a>
                            </li>
                          </ul>
                        </li>

                        {/* Pages Menu */}
                        <li className='menu-item-has-children'>
                          <a data-barba href='#'>
                            <span className='mr-10'>Pages</span>
                            <i className='icon icon-chevron-sm-down'></i>
                          </a>
                          <ul className='subnav'>
                            <li className='subnav__backBtn js-nav-list-back'>
                              <a href='#'>
                                <i className='icon icon-chevron-sm-down'></i>{' '}
                                Pages
                              </a>
                            </li>
                            <li>
                              <a href='404.html'>404</a>
                            </li>
                            <li>
                              <a href='about.html'>About</a>
                            </li>
                            <li>
                              <a href='become-expert.html'>Become expert</a>
                            </li>
                            <li>
                              <a href='help-center.html'>Help center</a>
                            </li>
                            <li>
                              <a href='login.html'>Login</a>
                            </li>
                            <li>
                              <a href='signup.html'>Register</a>
                            </li>
                            <li>
                              <a href='terms.html'>Terms</a>
                            </li>
                            <li>
                              <a href='invoice.html'>Invoice</a>
                            </li>
                            <li>
                              <a href='ui-elements.html'>UI elements</a>
                            </li>
                          </ul>
                        </li>

                        {/* Dashboard Menu */}
                        <li className='menu-item-has-children'>
                          <a data-barba href='#'>
                            <span className='mr-10'>Dashboard</span>
                            <i className='icon icon-chevron-sm-down'></i>
                          </a>
                          <ul className='subnav'>
                            <li className='subnav__backBtn js-nav-list-back'>
                              <a href='#'>
                                <i className='icon icon-chevron-sm-down'></i>{' '}
                                Dashboard
                              </a>
                            </li>
                            <li>
                              <a href='db-dashboard.html'>Dashboard</a>
                            </li>
                            <li>
                              <a href='db-booking.html'>Booking</a>
                            </li>
                            <li>
                              <a href='db-settings.html'>Settings</a>
                            </li>
                            <li>
                              <a href='db-wishlist.html'>Wishlist</a>
                            </li>
                            <li>
                              <a href='db-vendor-dashboard.html'>
                                Vendor dashboard
                              </a>
                            </li>
                            <li>
                              <a href='db-vendor-add-hotel.html'>
                                Vendor add hotel
                              </a>
                            </li>
                            <li>
                              <a href='db-vendor-booking.html'>
                                Vendor booking
                              </a>
                            </li>
                            <li>
                              <a href='db-vendor-hotels.html'>Vendor hotels</a>
                            </li>
                            <li>
                              <a href='db-vendor-recovery.html'>
                                Vendor recovery
                              </a>
                            </li>
                          </ul>
                        </li>

                        {/* Contact */}
                        <li>
                          <a href='contact.html'>Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-auto'>
            <div className='d-flex items-center'>
              {/* <div className='row x-gap-20 items-center xxl:d-none'>
                <div className='col-auto'>
                  <button
                    className='d-flex items-center text-14 text-white'
                    data-x-click='currency'
                  >
                    <span className='js-currencyMenu-mainTitle'>USD</span>
                    <i className='icon-chevron-sm-down text-7 ml-10'></i>
                  </button>
                </div>

                <div className='col-auto'>
                  <div className='w-1 h-20 bg-white-20'></div>
                </div>

                <div className='col-auto'>
                  <button
                    className='d-flex items-center text-14 text-white'
                    data-x-click='lang'
                  >
                    <img
                      src='/img/general/lang.png'
                      alt='image'
                      className='rounded-full mr-10'
                    />
                    <span className='js-language-mainTitle'>
                      United Kingdom
                    </span>
                    <i className='icon-chevron-sm-down text-7 ml-15'></i>
                  </button>
                </div>
              </div> */}

              <div className='d-flex items-center ml-20 is-menu-opened-hide md:d-none'>
                <a
                  // href='signup.html'
                  onClick={() => setOpen(true)}
                  className='button px-30 fw-400 text-14 border-white -blue-1 h-50 text-white ml-20'
                >
                  Sign In / Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
