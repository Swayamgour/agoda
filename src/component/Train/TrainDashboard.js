import React, { useState } from 'react'
import '../../style/TrainDashboard.css'

const TrainDashboard = () => {
  const [expandedTrain, setExpandedTrain] = useState(null)
  const [showAllDays, setShowAllDays] = useState(false)

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

  const toggleTrain = trainId => {
    if (expandedTrain === trainId) {
      setExpandedTrain(null)
      setShowAllDays(false)
    } else {
      setExpandedTrain(trainId)
    }
  }

  return (
    <div style={{ marginTop: '100px' }} className='train-dashboard'>
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
          <div className='train_filter_box'>
            <div>Quota</div>

            <div></div>
          </div>
        </div>

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
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div className='fs-14'>
                      {train.number} - {train.name}
                    </div>
                    <button className='view-schedule'>View Schedule</button>
                  </div>

                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div className='train-timing fs-12'>
                      {train.departure} — {train.duration} — {train.arrival}
                    </div>
                    <div className='train-days'>{train.days}</div>
                  </div>
                </div>

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
              </div>

              {/* {expandedTrain === train.id && <div>hello</div>} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrainDashboard
