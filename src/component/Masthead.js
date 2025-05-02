import React from 'react'

const Masthead = () => {
  return (
    <section className='masthead -type-2 js-mouse-move-container'>
      <div className='masthead__bg bg-dark-3'>
        <img src='/img/masthead/2/bg.png' alt='image' />
      </div>

      <div className='container'>
        <div className='masthead__tabs'>
          <div className='row'>
            <div className='col-12'>
              <div className='tabs -bookmark-2 js-tabs'>
                <div className='tabs__controls d-flex items-center js-tabs-controls'>
                  <div>
                    <button
                      className='tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 text-white js-tabs-button is-tab-el-active'
                      data-tab-target='.-tab-item-1'
                    >
                      <i className='icon-bed text-20 mr-10 sm:mr-5'></i>
                      Hotel
                    </button>
                  </div>

                  <div>
                    <button
                      className='tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 text-white js-tabs-button'
                      data-tab-target='.-tab-item-2'
                    >
                      <i className='icon-destination text-20 mr-10 sm:mr-5'></i>
                      Tour
                    </button>
                  </div>

                  <div>
                    <button
                      className='tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 text-white js-tabs-button'
                      data-tab-target='.-tab-item-3'
                    >
                      <i className='icon-ski text-20 mr-10 sm:mr-5'></i>
                      Activity
                    </button>
                  </div>

                  <div>
                    <button
                      className='tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 text-white js-tabs-button'
                      data-tab-target='.-tab-item-4'
                    >
                      <i className='icon-home text-20 mr-10 sm:mr-5'></i>
                      Holiday Rentals
                    </button>
                  </div>

                  <div>
                    <button
                      className='tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 text-white js-tabs-button'
                      data-tab-target='.-tab-item-5'
                    >
                      <i className='icon-car text-20 mr-10 sm:mr-5'></i>
                      Car
                    </button>
                  </div>

                  <div>
                    <button
                      className='tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 text-white js-tabs-button'
                      data-tab-target='.-tab-item-6'
                    >
                      <i className='icon-yatch text-20 mr-10 sm:mr-5'></i>
                      Cruise
                    </button>
                  </div>

                  <div>
                    <button
                      className='tabs__button px-30 py-20 sm:px-20 sm:py-15 rounded-4 fw-600 text-white js-tabs-button'
                      data-tab-target='.-tab-item-7'
                    >
                      <i className='icon-tickets text-20 mr-10 sm:mr-5'></i>
                      Flights
                    </button>
                  </div>
                </div>

                <div className='tabs__content js-tabs-content'>
                  <div className='tabs__pane -tab-item-1 is-tab-el-active'></div>
                  <div className='tabs__pane -tab-item-2'></div>
                  <div className='tabs__pane -tab-item-3'></div>
                  <div className='tabs__pane -tab-item-4'></div>
                  <div className='tabs__pane -tab-item-5'></div>
                  <div className='tabs__pane -tab-item-6'></div>
                  <div className='tabs__pane -tab-item-7'></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='masthead__content'>
          <div className='row y-gap-40'>
            <div className='col-xl-5'>
              <h1 className='z-2 text-60 lg:text-40 md:text-30 text-white pt-80 xl:pt-0'>
                <span className='text-yellow-1'>Where Would</span>
                <br />
                You Like To Go?
              </h1>

              <p className='z-2 text-white mt-20'>
                Checkout Beautiful Places Arround the World.
              </p>

              <div className='mainSearch -w-900 z-2 bg-white pr-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1 mt-40'>
                <div className='button-grid items-center'>
                  <div className='searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch'>
                    <div data-x-dd-click='searchMenu-loc'>
                      <h4 className='text-15 fw-500 ls-2 lh-16'>Location</h4>
                      <div className='text-15 text-light-1 ls-2 lh-16'>
                        <input
                          autoComplete='off'
                          type='search'
                          placeholder='Where are you going?'
                          className='js-search js-dd-focus'
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
                          <div>
                            <button className='-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option'>
                              <div className='d-flex'>
                                <div className='icon-location-2 text-light-1 text-20 pt-4'></div>
                                <div className='ml-10'>
                                  <div className='text-15 lh-12 fw-500 js-search-option-target'>
                                    London
                                  </div>
                                  <div className='text-14 lh-12 text-light-1 mt-5'>
                                    Greater London, United Kingdom
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>

                          <div>
                            <button className='-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option'>
                              <div className='d-flex'>
                                <div className='icon-location-2 text-light-1 text-20 pt-4'></div>
                                <div className='ml-10'>
                                  <div className='text-15 lh-12 fw-500 js-search-option-target'>
                                    New York
                                  </div>
                                  <div className='text-14 lh-12 text-light-1 mt-5'>
                                    New York State, United States
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>

                          <div>
                            <button className='-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option'>
                              <div className='d-flex'>
                                <div className='icon-location-2 text-light-1 text-20 pt-4'></div>
                                <div className='ml-10'>
                                  <div className='text-15 lh-12 fw-500 js-search-option-target'>
                                    Paris
                                  </div>
                                  <div className='text-14 lh-12 text-light-1 mt-5'>
                                    France
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>

                          <div>
                            <button className='-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option'>
                              <div className='d-flex'>
                                <div className='icon-location-2 text-light-1 text-20 pt-4'></div>
                                <div className='ml-10'>
                                  <div className='text-15 lh-12 fw-500 js-search-option-target'>
                                    Madrid
                                  </div>
                                  <div className='text-14 lh-12 text-light-1 mt-5'>
                                    Spain
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>

                          <div>
                            <button className='-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option'>
                              <div className='d-flex'>
                                <div className='icon-location-2 text-light-1 text-20 pt-4'></div>
                                <div className='ml-10'>
                                  <div className='text-15 lh-12 fw-500 js-search-option-target'>
                                    Santorini
                                  </div>
                                  <div className='text-14 lh-12 text-light-1 mt-5'>
                                    Greece
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar js-calendar-el'>
                    <div data-x-dd-click='searchMenu-date'>
                      <h4 className='text-15 fw-500 ls-2 lh-16'>
                        Check in - Check out
                      </h4>
                      <div className='capitalize text-15 text-light-1 ls-2 lh-16'>
                        <span className='js-first-date'>Wed 2 Mar</span>-
                        <span className='js-last-date'>Fri 11 Apr</span>
                      </div>
                    </div>

                    <div
                      className='searchMenu-date__field shadow-2'
                      data-x-dd='searchMenu-date'
                      data-x-dd-toggle='-is-active'
                    >
                      <div className='bg-white px-30 py-30 rounded-4'>
                        <div className='elCalendar js-calendar-el-calendar'></div>
                      </div>
                    </div>
                  </div>

                  <div className='searchMenu-guests px-30 lg:py-20 lg:px-0 js-form-dd js-form-counters'>
                    <div data-x-dd-click='searchMenu-guests'>
                      <h4 className='text-15 fw-500 ls-2 lh-16'>Guest</h4>
                      <div className='text-15 text-light-1 ls-2 lh-16'>
                        <span className='js-count-adult'>2</span> adults -
                        <span className='js-count-child'>1</span> childeren -
                        <span className='js-count-room'>1</span> room
                      </div>
                    </div>

                    <div
                      className='searchMenu-guests__field shadow-2'
                      data-x-dd='searchMenu-guests'
                      data-x-dd-toggle='-is-active'
                    >
                      <div className='bg-white px-30 py-30 rounded-4'>
                        <div className='row y-gap-10 justify-between items-center'>
                          <div className='col-auto'>
                            <div className='text-15 fw-500'>Adults</div>
                          </div>
                          <div className='col-auto'>
                            <div
                              className='d-flex items-center js-counter'
                              data-value-change='.js-count-adult'
                            >
                              <button className='button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down'>
                                <i className='icon-minus text-12'></i>
                              </button>
                              <div className='flex-center size-20 ml-15 mr-15'>
                                <div className='text-15 js-count'>2</div>
                              </div>
                              <button className='button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up'>
                                <i className='icon-plus text-12'></i>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className='border-top-light mt-24 mb-24'></div>

                        <div className='row y-gap-10 justify-between items-center'>
                          <div className='col-auto'>
                            <div className='text-15 lh-12 fw-500'>Children</div>
                            <div className='text-14 lh-12 text-light-1 mt-5'>
                              Ages 0 - 17
                            </div>
                          </div>
                          <div className='col-auto'>
                            <div
                              className='d-flex items-center js-counter'
                              data-value-change='.js-count-child'
                            >
                              <button className='button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down'>
                                <i className='icon-minus text-12'></i>
                              </button>
                              <div className='flex-center size-20 ml-15 mr-15'>
                                <div className='text-15 js-count'>1</div>
                              </div>
                              <button className='button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up'>
                                <i className='icon-plus text-12'></i>
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className='border-top-light mt-24 mb-24'></div>

                        <div className='row y-gap-10 justify-between items-center'>
                          <div className='col-auto'>
                            <div className='text-15 fw-500'>Rooms</div>
                          </div>
                          <div className='col-auto'>
                            <div
                              className='d-flex items-center js-counter'
                              data-value-change='.js-count-room'
                            >
                              <button className='button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down'>
                                <i className='icon-minus text-12'></i>
                              </button>
                              <div className='flex-center size-20 ml-15 mr-15'>
                                <div className='text-15 js-count'>1</div>
                              </div>
                              <button className='button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up'>
                                <i className='icon-plus text-12'></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='button-item'>
                    <button className='mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1'>
                      <i className='icon-search text-20 mr-10'></i>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-xl-7'>
              <div className='masthead__images'>
                <div>
                  <img
                    src='/img/masthead/2/1.png'
                    alt='image'
                    className='js-mouse-move'
                    data-move='30'
                  />
                </div>
                <div>
                  <img
                    src='/img/masthead/2/2.png'
                    alt='image'
                    className='js-mouse-move'
                    data-move='40'
                  />
                </div>
                <div>
                  <img
                    src='/img/masthead/2/3.png'
                    alt='image'
                    className='js-mouse-move'
                    data-move='50'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Masthead
