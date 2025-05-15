import React, { useState } from 'react'
import styles from '../../style/BusBooking.module.css'
import BusCard from './BusCard'
import PickupTimeFilter from './PickupTimeFilter'
import {
  FaBus,
  FaWifi,
  FaSnowflake,
  FaPlug,
  FaToilet,
  FaWater
} from 'react-icons/fa'
import { FaExchangeAlt } from 'react-icons/fa'
import { BiBlanket } from 'react-icons/bi'
import ScrollFadeIn from '../scrollview/ScrollFadeIn'

const BusBooking = () => {
  const [fromLocation, setFromLocation] = useState('Delhi, Delhi')
  const [toLocation, setToLocation] = useState('Kanpur, Uttar Pradesh')
  const [departDate, setDepartDate] = useState('Thu, 15 May 2025')
  const [activeFilter, setActiveFilter] = useState(null)
  const [selectedOperators, setSelectedOperators] = useState([])

  const busData = [
    {
      id: 1,
      operator: 'IntrCity SmartBus',
      type: 'Bharat Benz A/C Sleeper',
      rating: 4.2,
      reviews: 29,
      amenities: [
        'Toilet',
        'Charging Point',
        'Blanket',
        'WiFi',
        'AC',
        'Water Bottle'
      ],
      departureTime: '23:00 15 MAY',
      duration: '08h 00m',
      arrivalTime: '07:00 16 MAY + day',
      price: 489,
      discountPrice: 399,
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
      ],
      dropPoints: [
        {
          time: '07:00, 16 MAY',
          location: 'Faizalganj',
          details:
            'IntrCity Lounge, Kalpi Road, Near Legend Hotel (Kanpur) 7593877288'
        }
      ]
    },
    {
      id: 2,
      operator: 'Kanpur Kalpana Travels',
      type: 'Volvo A/C Seater',
      rating: 3.8,
      reviews: 15,
      amenities: ['Toilet', 'Charging Point', 'AC', 'Water Bottle'],
      departureTime: '18:30 15 MAY',
      duration: '09h 30m',
      arrivalTime: '04:00 16 MAY + day',
      price: 599,
      discountPrice: 499,
      seatLayout: {
        type: 'seater',
        seats: 36,
        rows: 9,
        columns: 4,
        seatMap: [
          ['S1', 'window', 'male', 'seater', true],
          ['S2', 'aisle', 'female', 'seater', true],
          ['S3', 'window', 'male', 'seater', false],
          ['S4', 'aisle', 'female', 'seater', true]
          // ... more seats
        ]
      },
      pickupPoints: [
        {
          time: '18:00, 15 MAY',
          location: 'Anand Vihar ISBT',
          details: 'Platform No. 5, Anand Vihar Bus Terminal'
        }
      ],
      dropPoints: [
        {
          time: '04:00, 16 MAY',
          location: 'Kanpur Central',
          details: 'Near Kanpur Central Railway Station'
        }
      ]
    }
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

  const toggleOperator = operator => {
    if (selectedOperators.includes(operator)) {
      setSelectedOperators(selectedOperators.filter(op => op !== operator))
    } else {
      setSelectedOperators([...selectedOperators, operator])
    }
  }

  const handleReverseLocations = () => {
    const temp = fromLocation
    setFromLocation(toLocation)
    setToLocation(temp)
  }

  return (
    <ScrollFadeIn>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>{toLocation}</h1>
            <div className={styles.depart}>
              <h2>DEPART</h2>
              <p>{departDate}</p>
            </div>
          </div>
        </div>

        <div className={styles.searchHeader}>
          <div className={styles.searchInputs}>
            <div className={styles.locationBox}>
              <label>FROM</label>
              <p>{fromLocation}</p>
            </div>
            <button
              className={styles.reverseButton}
              onClick={handleReverseLocations}
              aria-label='Reverse locations'
            >
              <FaExchangeAlt />
            </button>
            <div className={styles.locationBox}>
              <label>TO</label>
              <p>{toLocation}</p>
            </div>
            <div className={styles.dateBox}>
              <label>DEPART</label>
              <p>{departDate}</p>
            </div>
          </div>
          <button className={styles.searchButton}>SEARCH BUSES</button>
        </div>

        <div className={styles.mainContent}>
          <aside className={styles.filtersSection}>
            <div className={styles.filtersContainer}>
              <PickupTimeFilter
                times={pickupTimes}
                activeFilter={activeFilter}
                setActiveFilter={setActiveFilter}
              />

              <div className={styles.filterCard}>
                <div className={styles.filterHeader}>
                  <h3>
                    <FaBus /> Operators
                  </h3>
                  {selectedOperators.length > 0 && (
                    <button
                      className={styles.clearButton}
                      onClick={() => setSelectedOperators([])}
                    >
                      CLEAR
                    </button>
                  )}
                </div>
                <div className={styles.operatorList}>
                  {operators.map((operator, index) => (
                    <div key={index} className={styles.operatorItem}>
                      <input
                        type='checkbox'
                        id={`operator-${index}`}
                        checked={selectedOperators.includes(operator)}
                        onChange={() => toggleOperator(operator)}
                      />
                      <label htmlFor={`operator-${index}`}>{operator}</label>
                    </div>
                  ))}
                  <button className={styles.showAll}>Show all (40)</button>
                </div>
              </div>

              <div className={styles.filterCard}>
                <div className={styles.filterHeader}>
                  <h3>Amenities</h3>
                </div>
                <div className={styles.amenitiesGrid}>
                  <div className={styles.amenityItem}>
                    <FaSnowflake />
                    <span>AC</span>
                  </div>
                  <div className={styles.amenityItem}>
                    <FaWifi />
                    <span>WiFi</span>
                  </div>
                  <div className={styles.amenityItem}>
                    <FaToilet />
                    <span>Toilet</span>
                  </div>
                  <div className={styles.amenityItem}>
                    <FaPlug />
                    <span>Charging</span>
                  </div>
                  <div className={styles.amenityItem}>
                    <BiBlanket />

                    <span>Blanket</span>
                  </div>
                  <div className={styles.amenityItem}>
                    <FaWater />
                    <span>Water</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <main className={styles.resultsSection}>
            <div className={styles.resultsHeader}>
              <h2>Available Buses</h2>
              <div className={styles.sortOptions}>
                <span>Sort by:</span>
                <select>
                  <option>Departure Time</option>
                  <option>Price (Low to High)</option>
                  <option>Price (High to Low)</option>
                  <option>Rating</option>
                  <option>Duration</option>
                </select>
              </div>
            </div>

            <div className={styles.busList}>
              {busData.map((bus, index) => (
                <BusCard key={index} bus={bus} />
              ))}
            </div>

            <div className={styles.pagination}>
              <button className={styles.paginationButton}>Previous</button>
              <button className={`${styles.paginationButton} ${styles.active}`}>
                1
              </button>
              <button className={styles.paginationButton}>2</button>
              <button className={styles.paginationButton}>3</button>
              <button className={styles.paginationButton}>Next</button>
            </div>
          </main>
        </div>
      </div>
    </ScrollFadeIn>
  )
}

export default BusBooking
