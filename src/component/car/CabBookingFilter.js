import React, { useState } from 'react'
import '../../style/CabBookingFilter.css'
import EvStationIcon from '@mui/icons-material/EvStation'
import HistoryIcon from '@mui/icons-material/History'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import FlightSearch from '../flight/FlightSearch'
import { useNavigate } from 'react-router-dom'
import CarFilterWithBottomDrawer from './CarFilterWithBottomDrawer'
import ScrollFadeIn from '../scrollview/ScrollFadeIn'
import PublicImage from '../../utils/PublicImage'

const CabBookingFilter = () => {
  const navigate = useNavigate()
  const [selectedCabType, setSelectedCabType] = useState('')
  const [selectedFuelType, setSelectedFuelType] = useState('')
  const [selectedCabModel, setSelectedCabModel] = useState('')

  const cabTypes = ['HATCHBACK', 'SEDAN', 'SUV', 'TEMPOTRAVELLER', 'MINIBUS']
  const fuelTypes = ['CNG', 'ELECTRIC', 'DIESEL', 'PETROL']
  const cabModels = ['Tata Tiger', 'Cltroen EC3']

  const cabs = [
    {
      name: 'Dzire, Etios or similar',
      rating: '4.5 (2722 ratings)',
      type: 'Sedan',
      features: 'AC • 4 Seats • 308 kms included',
      description: 'Spacious Car',
      extraKmFare: '113.0/km after 308 kms',
      fuelType: 'CNG with refill breaks',
      cancellation: 'Free till 1 hour of departure',
      originalPrice: '3,439',
      discount: '18% off',
      discountedPrice: '2,722',
      taxes: '+ ₹689 (Taxes & Charges)',
      specialOffer: 'MEGA-SALE ₹211 off',
      roofCarrier: 'Roof carrier available with this car starting @ ₹209',
      icon: <GpsFixedIcon sx={{ fontSize: '14px', marginRight: '5px' }} />,
      icon2: <HistoryIcon sx={{ fontSize: '14px', marginRight: '5px' }} />,
      icon3: <EvStationIcon sx={{ fontSize: '14px', marginRight: '5px' }} />
    },
    {
      name: 'Tata Tiger',
      rating: 'No ratings',
      type: 'Sedan',
      features: 'AC • 4 Seats • 308 kms included',
      description: 'Electric & Sustainable',
      extraKmFare: '125.0/km after 308 kms',
      fuelType: 'Electric Car with recharging break',
      cancellation: 'Free till 6 hours of departure',
      price: '4,036',
      taxes: '+ ₹297 (Taxes & Charges)',
      icon: <GpsFixedIcon sx={{ fontSize: '14px', marginRight: '5px' }} />,
      icon2: <HistoryIcon sx={{ fontSize: '14px', marginRight: '5px' }} />,
      icon3: <EvStationIcon sx={{ fontSize: '14px', marginRight: '5px' }} />
    },
    {
      name: 'Cltroen EC3',
      rating: 'No ratings',
      type: 'Hatchback',
      features: 'AC • 4 Seats • 308 kms included',
      price: '4,036',
      taxes: '+ ₹297 (Taxes & Charges)',
      icon: <GpsFixedIcon sx={{ fontSize: '14px', marginRight: '5px' }} />,
      icon2: <HistoryIcon sx={{ fontSize: '14px', marginRight: '5px' }} />,
      icon3: <EvStationIcon sx={{ fontSize: '14px', marginRight: '5px' }} />
    }
  ]

  return (
    <>
      <div style={{ marginTop: '60px' }} className='cab-filter-container_sec'>
        {' '}
        {/* <FlightSearch /> */}
      </div>
      <div className='cab-filter-container'>
        <div className='filter-section'>
          <h2>Select Filters</h2>

          <div className='filter-group'>
            <h3>Cab Type</h3>
            <div className='filter-options'>
              {cabTypes.map(type => (
                <button
                  key={type}
                  className={`filter-button ${
                    selectedCabType === type ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCabType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className='filter-group'>
            <h3>Fuel Type</h3>
            <div className='filter-options'>
              {fuelTypes.map(type => (
                <button
                  key={type}
                  className={`filter-button ${
                    selectedFuelType === type ? 'active' : ''
                  }`}
                  onClick={() => setSelectedFuelType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div className='filter-group'>
            <h3>Cab Model</h3>
            <div className='filter-options'>
              {cabModels.map(model => (
                <button
                  key={model}
                  className={`filter-button ${
                    selectedCabModel === model ? 'active' : ''
                  }`}
                  onClick={() => setSelectedCabModel(model)}
                >
                  {model}
                </button>
              ))}
            </div>
          </div>
        </div>

        <CarFilterWithBottomDrawer />

        <div className='cab-listings'>
          <ScrollFadeIn>
            {cabs.map((cab, index) => (
              <div key={index} className='cab-card'>
                <div className='car-card-center'>
                  <div className='car-card-center-first'>
                    <PublicImage src='/hatchback.png' />
                  </div>
                  <div className='car-card-center-second'>
                    <div className='cab-header'>
                      <h3>{cab.name}</h3>
                      <span className='rating'>{cab.rating}</span>
                    </div>

                    <div className='cab-details'>
                      <p className='type-features'>
                        {cab.type} • {cab.features}
                      </p>

                      {cab.description && (
                        <p className='description'>{cab.description}</p>
                      )}

                      <div className='specs'>
                        <p>
                          <strong>
                            <span
                              style={{ fontSize: '12px', color: '#008DFE' }}
                            >
                              {cab?.icon}
                            </span>{' '}
                            Extra km fare
                          </strong>{' '}
                          {cab.extraKmFare}
                        </p>
                        <p>
                          <strong>
                            <span
                              style={{ fontSize: '12px', color: '#008DFE' }}
                            >
                              {cab?.icon2}
                            </span>
                            Fuel Type
                          </strong>{' '}
                          {cab.fuelType}
                        </p>
                        <p>
                          <strong>
                            <span
                              style={{ fontSize: '12px', color: '#008DFE' }}
                            >
                              {' '}
                              {cab?.icon3}
                            </span>
                            Cancellation
                          </strong>{' '}
                          {cab.cancellation}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='car-card-center-third'>
                    {cab.specialOffer && (
                      <div className='special-offer'>
                        <span className='offer-tag'>{cab.specialOffer}</span>
                        {cab.discount && (
                          <span className='discount'>{cab.discount}</span>
                        )}
                      </div>
                    )}

                    <div className='CabPrice-section'>
                      {cab.discountedPrice ? (
                        <>
                          <span className='original-price'>
                            ₹ {cab.originalPrice}
                          </span>
                          <span className='discounted-price'>
                            ₹ {cab.discountedPrice}
                          </span>
                        </>
                      ) : (
                        <span className='price'>₹ {cab.price}</span>
                      )}
                      <span className='taxes'>{cab.taxes}</span>
                    </div>

                    <button
                      className='book-now'
                      onClick={() => navigate('/CarBooking')}
                    >
                      BOOK NOW
                    </button>

                    {cab.roofCarrier && (
                      <p className='roof-carrier'>{cab.roofCarrier}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </ScrollFadeIn>
        </div>
      </div>
    </>
  )
}

export default CabBookingFilter
