import React from 'react'
import ScrollFadeIn from '../scrollview/ScrollFadeIn'

const JoinSection = () => {
  return (
    <ScrollFadeIn>
      <section className='pt-80 pb-80 bg-green-1'>
        <div className='container'>
          <div className='row y-gap-20 justify-between'>
            <div className='col-auto'>
              <div className='sectionTitle -md'>
                <h2 className='sectionTitle__title'>Not a Member Yet?</h2>
                <p className='text-dark-1 sectionTitle__text mt-5 sm:mt-0'>
                  Join us! Our members can access savings of up to 50% and earn
                  Trip Coins while booking.
                </p>
              </div>
            </div>

            <div className='col-auto'>
              <div className='row x-gap-20 y-gap-20'>
                <div className='col-auto'>
                  <button
                    style={{ padding: '20px 40px' }}
                    className='button px-40 h-60 -blue-1 text-blue-1 border-blue-1'
                  >
                    Sign In
                    <i className='icon-arrow-top-right ml-10'></i>
                  </button>
                </div>

                <div className='col-auto'>
                  <button
                    style={{ padding: '20px 40px' }}
                    className='button px-40 h-60 -blue-1 bg-yellow-1 text-dark-1'
                  >
                    Register
                    <i className='icon-arrow-top-right ml-10'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollFadeIn>
  )
}

export default JoinSection
