import React, { useState } from 'react'
import '../../style/TrainDashboard.css'
import { useNavigate } from 'react-router-dom'
import TrainFilterWithBottomDrawer from './TrainFilterWithBottomDrawer'
import ScrollFadeIn from '../scrollview/ScrollFadeIn'
import TrainSearchForm from '../Hotel/BookHotelFrom'
import TrainFrom from './TrainFrom'

const TrainDashboard = () => {
  const [expandedTrain, setExpandedTrain] = useState(null)
  const [showAllDays, setShowAllDays] = useState(false)

  const navigate = useNavigate()

  const trains = [
    {
      id: 1,
      number: '12904',
      name: 'GOLDEN TEMPLE M',
      departure: '04:00 NZM',
      duration: '19h 35m',
      arrival: '23:35 MMCT',
      days: 'SMTWTFS',
      classes: [
        {
          type: '2A',
          price: '₹ 2335',
          availability: 'RLWL22/WL17',
          chance: '40% Chance'
        },
        {
          type: '3A',
          price: '₹ 1630',
          availability: 'REGRET',
          chance: 'No More Booking'
        },
        {
          type: 'SL',
          price: '₹ 620',
          availability: 'REGRET',
          chance: 'No More Booking'
        },
        {
          type: '1A',
          price: '₹ 3955',
          availability: 'RLWL3/WL3',
          chance: '4th Chance'
        }
      ],
      schedule: [
        { date: 'Thu, 08 May', status: 'Available' },
        { date: 'Fri, 09 May', status: 'Available' },
        { date: 'Sat, 10 May', status: 'Available' },
        { date: 'Sun, 11 May', status: 'Available' },
        { date: 'Mon, 12 May', status: 'Available' },
        { date: 'Tue, 13 May', status: 'Available' }
      ]
    },
    {
      id: 2,
      number: '12138',
      name: 'PUNJAB MAIL',
      departure: '05:10 NDLS',
      duration: '26h 25m',
      arrival: '07:35 CSMT',
      days: 'SMTWTFS',
      classes: [
        {
          type: '2A',
          price: '₹ 2490',
          availability: 'RLWL22/WL13',
          chance: '4% Chance'
        },
        {
          type: '3A',
          price: '₹ 1735',
          availability: 'RLWL22/WL34',
          chance: '37% Chance'
        },
        {
          type: 'SL',
          price: '₹ 665',
          availability: 'RLWL58/WL44',
          chance: '36% Chance'
        },
        {
          type: '1A',
          price: '₹ 4230',
          availability: 'RLWL5/WL5',
          chance: '42% Chance'
        }
      ],
      schedule: [
        { date: 'Thu, 08 May', status: 'Available' },
        { date: 'Fri, 09 May', status: 'Available' },
        { date: 'Sat, 10 May', status: 'Available' },
        { date: 'Sun, 11 May', status: 'Available' },
        { date: 'Mon, 12 May', status: 'Available' },
        { date: 'Tue, 13 May', status: 'Available' }
      ]
    }
  ]

  const filterQuota = [
    {
      name: 'AC',
      train: '22'
    },
    {
      name: 'Available',
      train: '120'
    },
    {
      name: 'Departure after 6 PM',
      train: '22'
    },
    {
      name: 'Arrival before 12 pm',
      train: '22'
    }
  ]
  const TrainType = [
    {
      name: 'Train Cancellation',
      train: '22'
    },
    {
      name: 'Trip Guarantee',
      train: '120'
    }
  ]
  const Quota = [
    {
      name: 'General Quota',
      train: '22'
    },
    {
      name: 'Tatkal',
      train: '120'
    }
  ]

  const toggleTrain = trainId => {
    if (expandedTrain === trainId) {
      setExpandedTrain(null)
      setShowAllDays(false)
    } else {
      setExpandedTrain(trainId)
    }
  }

  const [activeTab, setActiveTab] = useState('2A')

  const coachData = {
    '2A': {
      name: 'SECOND AC',
      availability: [
        {
          date: 'Tue, 13 May',
          status: 'TRAIN DEPARTED',
          note: 'No More Booking'
        },
        { date: 'Wed, 14 May', status: 'RLWL22/WL17', note: '40% Chance' },
        { date: 'Thu, 15 May', status: 'RLWL16/WL9', note: '54% Chance' },
        { date: 'Fri, 16 May', status: 'REGRET', note: 'No More Booking' },
        { date: 'Sat, 17 May', status: 'RLWL26/WL14', note: '49% Chance' },
        { date: 'Sun, 18 May', status: 'RLWL29/WL11', note: '56% Chance' }
      ],
      price: '₹ 2335'
    },
    '3A': {
      name: 'THIRD AC',
      availability: [
        {
          date: 'Tue, 13 May',
          status: 'TRAIN DEPARTED',
          note: 'No More Booking'
        },
        { date: 'Wed, 14 May', status: 'RLWL15/WL12', note: '45% Chance' },
        { date: 'Thu, 15 May', status: 'RLWL10/WL5', note: '60% Chance' },
        { date: 'Fri, 16 May', status: 'REGRET', note: 'No More Booking' },
        { date: 'Sat, 17 May', status: 'RLWL20/WL10', note: '55% Chance' },
        { date: 'Sun, 18 May', status: 'RLWL25/WL15', note: '50% Chance' }
      ],
      price: '₹ 1850'
    },
    SL: {
      name: 'SLEEPER',
      availability: [
        {
          date: 'Tue, 13 May',
          status: 'TRAIN DEPARTED',
          note: 'No More Booking'
        },
        { date: 'Wed, 14 May', status: 'RLWL30/WL20', note: '30% Chance' },
        { date: 'Thu, 15 May', status: 'RLWL25/WL15', note: '45% Chance' },
        { date: 'Fri, 16 May', status: 'AVAILABLE', note: 'Book Now' },
        { date: 'Sat, 17 May', status: 'RLWL35/WL25', note: '35% Chance' },
        { date: 'Sun, 18 May', status: 'RLWL40/WL30', note: '25% Chance' }
      ],
      price: '₹ 950'
    },
    '1A': {
      name: 'FIRST AC',
      availability: [
        {
          date: 'Tue, 13 May',
          status: 'TRAIN DEPARTED',
          note: 'No More Booking'
        },
        { date: 'Wed, 14 May', status: 'AVAILABLE', note: 'Book Now' },
        { date: 'Thu, 15 May', status: 'AVAILABLE', note: 'Book Now' },
        { date: 'Fri, 16 May', status: 'AVAILABLE', note: 'Book Now' },
        { date: 'Sat, 17 May', status: 'RLWL5/WL2', note: '75% Chance' },
        { date: 'Sun, 18 May', status: 'AVAILABLE', note: 'Book Now' }
      ],
      price: '₹ 3250'
    }
  }

  const currentCoach = coachData[activeTab]

  return (
    <div className='train-dashboard'>
      {/* <TrainSearchForm /> */}
      {/* <TrainFrom /> */}

      <div className='Train_header'>
        <div className='train_header_div'>
          <div>
            New Delhi (NDLS) <span style={{ color: 'rgb(69,180,12)' }}> →</span>{' '}
            Mumbai Central (MMCT)
          </div>
        </div>
      </div>

      <div className='train_card_box'>
        <div className='train_card_box_left'>
          <div className='train_filter_box'>
            <div>Filters</div>
            <div style={{ color: 'rgb(69,180,98)' }}>RESET ALL</div>
          </div>
          <div className='train_filter_box_Quota_outer'>
            <div>Quota Filter</div>

            {filterQuota?.map((e, index) => (
              <div key={index} className='train_filter_box_Quota'>
                <div className='train_filter_box_Quota_center'>
                  <input type='checkbox' />
                  <p>{e?.name}</p>
                </div>
                <p>{e?.train}</p>
              </div>
            ))}
          </div>

          <div className='train_filter_box_Quota_outer'>
            <div>Ticket Types</div>

            {TrainType?.map((e, index) => (
              <div key={index} className='train_filter_box_Quota'>
                <div className='train_filter_box_Quota_center'>
                  <input type='checkbox' />
                  <p>{e?.name}</p>
                </div>
                <p>{e?.train}</p>
              </div>
            ))}
          </div>

          <div className='train_filter_box_Quota_outer'>
            <div>Quota</div>

            {Quota?.map((e, index) => (
              <div key={index} className='train_filter_box_Quota'>
                <div className='train_filter_box_Quota_center'>
                  <input type='checkbox' />
                  <p>{e?.name}</p>
                </div>
                <p>{e?.train}</p>
              </div>
            ))}
          </div>
        </div>

        <TrainFilterWithBottomDrawer />

        <div className='train_card_box_right'>
          <div className='controls'>
            <span>Sort by:</span>
            <div className=''>
              <button>Departure ↑</button>
              <button>Duration</button>
              <button>Arrival</button>
            </div>
          </div>

          {/* <div className='quota-tabs'>
            <button className='active'>GENERAL</button>
            <button>TATKAL</button>
            <button>LADIES</button>
            <button>SENIOR CITIZEN/LOWER BERTH</button>
          </div> */}

          <ScrollFadeIn>
            {trains.map(train => (
              <div
                key={train.id}
                className={`train-card ${
                  expandedTrain === train.id ? 'expanded' : ''
                }`}
              >
                <div
                  className='train-summary'
                  onClick={() => toggleTrain(train.id)}
                >
                  <div className='train-info'>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div className='fs-14'>
                        {train.number} - {train.name}
                      </div>
                      <button className='view-schedule'>View Schedule</button>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div className='train-timing fs-12'>
                        {train.departure} — {train.duration} — {train.arrival}
                      </div>
                      <div className='train-days'>{train.days}</div>
                    </div>
                  </div>

                  {expandedTrain !== train.id && (
                    <div className='train-classes'>
                      {train.classes.map((cls, index) => (
                        <div key={index} className='class-info'>
                          {/* <div className='class-type'></div>
                      <div className='class-price'>{cls.price}</div> */}

                          <div className='train-classes-type'>
                            <div>{cls.type}</div>
                            <div>{cls.price}</div>
                          </div>
                          <div className='class-availability'>
                            {cls.availability}
                          </div>
                          <div className='class-chance'>{cls.chance}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {expandedTrain === train.id && (
                  <div className='train-booking-container'>
                    <div className='coach-tabs'>
                      {Object.keys(coachData).map(coachKey => (
                        <div
                          key={coachKey}
                          className={`coach-tab ${
                            activeTab === coachKey ? 'active' : ''
                          }`}
                          onClick={() => setActiveTab(coachKey)}
                        >
                          {coachKey === '2A'
                            ? `# ${coachKey}`
                            : `## ${coachKey}`}{' '}
                          - {coachData[coachKey].name}
                        </div>
                      ))}
                    </div>

                    <div className='availability-table'>
                      {currentCoach.availability.map((day, index) => (
                        <div key={index} className='availability-row'>
                          <div className='date-cell'>{day.date}</div>
                          <div className='status-cell'>
                            <div className='status' data-status={day.status}>
                              {day.status}
                            </div>
                            <div className='note'>{day.note}</div>
                          </div>
                          <div className='booking-options'>
                            {/* {currentCoach.availability.map((day, index) => ( */}
                            <button
                              key={index}
                              onClick={() => navigate('/PassengerDetails')}
                              className='book-button-Train'
                              disabled={
                                day.status === 'TRAIN DEPARTED' ||
                                day.status === 'REGRET'
                              }
                            >
                              {day.status === 'AVAILABLE' ? 'BOOK NOW' : 'BOOK'}{' '}
                              {day.price}
                              {/* {coachData[coachKey].name} */}
                            </button>
                            {/* ))} */}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div
                      onClick={() => {
                        setExpandedTrain(null)
                        setShowAllDays(false)
                      }}
                      className='hide-option'
                    >
                      Hide 6 days availability
                    </div>
                  </div>
                )}
              </div>
            ))}
          </ScrollFadeIn>
        </div>
      </div>
    </div>
  )
}

export default TrainDashboard
