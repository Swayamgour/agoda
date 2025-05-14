import React, { useState } from 'react'
import styles from '../../style/BusBooking.module.css'
import BusCard from './BusCard'
import PickupTimeFilter from './PickupTimeFilter'

const BusBooking = () => {
  const [fromLocation, setFromLocation] = useState('Delhi, Delhi')
  const [toLocation, setToLocation] = useState('Kanpur, Uttar Pradesh')
  const [departDate, setDepartDate] = useState('Thu, 15 May 2025')
  const [activeFilter, setActiveFilter] = useState(null)

  const busData = [
    {
      id: 1,
      operator: 'IntrCity SmartBus',
      type: 'Bharat Benz A/C Sleeper',
      reviews: 29,
      amenities: ['Toilet', 'Charging Point', 'Blanket'],
      departureTime: '23:00 15 MAY',
      duration: '08h 00m',
      arrivalTime: '07:00 16 MAY + day',
      price: 489,
      seatLayout: {
        type: 'sleeper',
        lowerBerths: 13,
        upperBerths: 13,
        rows: 13,
        columns: 2,
        seatMap: [
          ['L1', 'lower', 'male', 'sleeper', true],
          ['U1', 'upper', 'male', 'sleeper', true],
          ['L2', 'lower', 'female', 'sleeper', true],
          ['U2', 'upper', 'female', 'sleeper', true],
          ['L3', 'lower', 'male', 'sleeper', false], // Occupied
          ['U3', 'upper', 'male', 'sleeper', true],
          ['L4', 'lower', 'male', 'sleeper', true],
          ['U4', 'upper', 'male', 'sleeper', true],
          ['L5', 'lower', 'female', 'sleeper', true],
          ['U5', 'upper', 'female', 'sleeper', true],
          ['L6', 'lower', 'male', 'sleeper', true],
          ['U6', 'upper', 'male', 'sleeper', true],
          ['L7', 'lower', 'male', 'sleeper', true],

          // Adding some seater type seats
          ['S1', 'window', 'male', 'seater', true],
          ['S2', 'aisle', 'female', 'seater', true],
          ['S3', 'window', 'male', 'seater', false], // Occupied
          ['S4', 'middle', 'female', 'seater', true],
          ['S5', 'aisle', 'male', 'seater', true],
          ['S6', 'window', 'female', 'seater', true],
          ['S7', 'aisle', 'male', 'seater', true]
        ],

        singleSeats: 0
      },
      pickupPoints: [
        {
          time: '22:15, 15 MAY',
          location: 'ISBT Kashmiri Gate',
          details:
            'IntrCity Boarding Zone, Ground Floor, Arrival Block, Platform No. 9,10,11,12, Inside ISBT Bus Stand (Delhi) 7593877288'
        }
        // ... more pickup points
      ],
      dropPoints: [
        {
          time: '07:00, 16 MAY',
          location: 'Faizalganj',
          details:
            'IntrCity Lounge, Kalpi Road, Near Legend Hotel (Kanpur) 7593877288'
        }
      ]
    }
    // ... more buses
  ]

  const pickupTimes = [
    '12 AM - 6 AM',
    '6 AM - 12 PM',
    '12 PM - 6 PM',
    '6 PM - 12 AM'
  ]

  const operators = [
    'IntrCity SmartBus',
    'Kanpur Kalpana Travels Private LL.',
    'New Yadav Vishwakarma Tour an...',
    'Tejas Travels'
  ]

  return (
    <div style={{ marginTop: '70px' }} className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Kanpur, Uttar Pradesh</h1>
        <div className={styles.depart}>
          <h2>DEPART</h2>
          <p>{departDate}</p>
        </div>
      </div>

      <div className={styles.searchHeader}>
        <div className={styles.searchInputs}>
          <div className={styles.firstBox}>
            <label>FROM</label>
            <p>{fromLocation}</p>
            <span className={styles.reverseIcon}>🔁</span>
          </div>
          <div>
            <label>TO</label>
            <p>{toLocation}</p>
          </div>
          <div>
            <label>DEPART</label>
            <p>{departDate}</p>
          </div>
        </div>
        <button className={styles.searchButton}>SEARCH</button>
      </div>

      <div className={styles.BusBooking_main}>
        <div className={styles.searchSection}>
          <div className={styles.filters}>
            <PickupTimeFilter
              times={pickupTimes}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
            />

            <div className={styles.filterSection}>
              <div className={styles.filterHeader}>
                <h3>Operators</h3>
                <button className={styles.clearButton}>CLEAR</button>
              </div>
              <div className={styles.operatorList}>
                {operators.map((operator, index) => (
                  <div key={index} className={styles.operatorItem}>
                    <input type='checkbox' id={`operator-${index}`} />
                    <label htmlFor={`operator-${index}`}>{operator}</label>
                  </div>
                ))}
                <button className={styles.showAll}>Show all (40)</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.busList}>
          {/* {busData.map(bus => (
            <BusCard key={bus.id} bus={bus} />
          ))} */}

          {Array.from({ length: 5 }).map((_, i) => (
            <BusCard key={i} bus={busData[0]} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BusBooking
