import React from 'react'
import styles from '../../style/SeatSelection.module.css'
import SeatTypeIndicator from './SeatTypeIndicator'
import ChairIcon from '@mui/icons-material/Chair'
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined'
import { useNavigate } from 'react-router-dom'

const SeatSelection = ({ seatLayout, selectedSeats, onSeatSelect }) => {

  const navigate = useNavigate()
  const pickupPoints = [
    {
      time: '22:15, 15 MAY',
      location: 'ISBT Kashmiri Gate',
      details:
        'IntrCity Boarding Zone, Ground Floor, Arrival Block, Platform No. 9,10,11,12, Inside ISBT Bus Stand (Delhi) 7593877288'
    },
    {
      time: '22:15, 15 MAY',
      location: 'ISBT Kashmiri Gate',
      details:
        'IntrCity Boarding Zone, Ground Floor, Arrival Block, Platform No. 9,10,11,12, Inside ISBT Bus Stand (Delhi) 7593877288'
    },
    {
      time: '22:15, 15 MAY',
      location: 'ISBT Kashmiri Gate',
      details:
        'IntrCity Boarding Zone, Ground Floor, Arrival Block, Platform No. 9,10,11,12, Inside ISBT Bus Stand (Delhi) 7593877288'
    }
    // ... more pickup points
  ]

  const renderSleeperLayout = () => {
    const lowerBerths = []
    const upperBerths = []

    seatLayout.seatMap.forEach(seat => {
      const [number, position, gender, seatType, available] = seat

      const seatElement = (
        <div
          key={number}
          className={`
          ${styles.seat}
          ${position === 'upper' ? styles.upper : styles.lower}
          ${seatType === 'sleeper' ? styles.sleeperSeat : styles.seaterSeat}
          ${!available ? styles.unavailable : ''}
          ${selectedSeats.includes(number) ? styles.selected : ''}
          ${gender === 'female' ? styles.female : ''}
        `}
          onClick={() => available && onSeatSelect(number)}
          title={`${number} - ${position} ${seatType} (${gender})`}
        >
          {number}
        </div>
      )

      if (position === 'lower') {
        lowerBerths.push(seatElement)
      } else {
        upperBerths.push(seatElement)
      }
    })

    return (
      <div className={styles.sleeperCoach}>
        <div className={styles.pickanDwop}>
          <div className={styles.selectedSeats_heading}>
            <span>Select Seat</span>
            <span>Know Your Seat</span>
          </div>
          <div className={styles.lowerDeck}>
            <h4>Lower Deck</h4>
            <div className={styles.berthRow}>
              <div className={styles.iconGrid_sleeper}>
                {Array.from({ length: 5 }).map((_, index) => (
                  // <ChairIcon key={index} />
                  <div></div>
                ))}
              </div>

              <div className={styles.iconGrid}>
                {Array.from({ length: 24 }).map((_, index) => (
                  <ChairOutlinedIcon key={index} />
                ))}
              </div>
            </div>
          </div>

          <div className={styles.upperDeck}>
            <h4>Upper Deck</h4>
            <div className={styles.berthRow}>
              <div className={styles.iconGrid_sleeper}>
                {Array.from({ length: 6 }).map((_, index) => (
                  // <ChairIcon key={index} />
                  <div></div>
                ))}
              </div>

              <div className={styles.iconGrid_sleeper}>
                {Array.from({ length: 6 }).map((_, index) => (
                  // <ChairIcon key={index} />
                  <div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.pickanDwop}>
          <div className={styles.selectedSeats_heading}>
            <span>Select pickup and drop point</span>
          </div>
          <div className={styles.lowerDeck}>
            {pickupPoints?.map((e, index) => (
              <div key={index}>
                <p className='fs-12'>{e?.time}</p>
                <p className='fs-12'>{e?.location}</p>
                <p className='fs-12'>{e?.details}</p>
                {index !== pickupPoints?.length - 1 && (
                  <div className={styles?.divider}></div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.upperDeck}>
            {pickupPoints?.map((e, index) => (
              <div key={index}>
                <p className='fs-12'>{e?.time}</p>
                <p className='fs-12'>{e?.location}</p>
                <p className='fs-12'>{e?.details}</p>
                {index !== pickupPoints?.length - 1 && (
                  <div className={styles?.divider}></div>
                )}
              </div>
            ))}
          </div>

          <div onClick={()=>navigate('/BusBookingDetail')} className={styles.continue_btn}>CONTINUE</div>
        </div>
      </div>
    )
  }

  const renderSeaterLayout = () => {
    const rows = []
    let currentRow = []

    seatLayout.seatMap.forEach((seat, index) => {
      const [number, type, gender, available] = seat

      currentRow.push(
        <div
          key={number}
          className={`
            ${styles.seat}
            ${selectedSeats.includes(number) ? styles.selected : ''}
            ${!available ? styles.unavailable : ''}
            ${gender === 'female' ? styles.female : ''}
          `}
          onClick={() => available && onSeatSelect(number)}
          title={`Seat ${number}`}
        >
          {number}
        </div>
      )

      if (
        (index + 1) % seatLayout.columns === 0 ||
        index === seatLayout.seatMap.length - 1
      ) {
        rows.push(
          <div key={`row-${rows.length}`} className={styles.seatRow}>
            {currentRow}
          </div>
        )
        currentRow = []
      }
    })

    return <div className={styles.seaterCoach}>{rows}</div>
  }

  return (
    <div className={styles.seatSelectionContainr}>
      {/* <SeatTypeIndicator /> */}

      <div className={styles.coachVisualizatio}>
        {seatLayout.type === 'sleeper'
          ? renderSleeperLayout()
          : renderSeaterLayout()}
      </div>

      <div className={styles.seatInfo}>
        <h4>Seat Information:</h4>
        <ul>
          <li>
            <strong>Lower Berth:</strong> Flat bed on lower level (easier
            access)
          </li>
          <li>
            <strong>Upper Berth:</strong> Flat bed on upper level (requires
            climbing)
          </li>
          {seatLayout.type === 'seater' && (
            <li>
              <strong>Standard Seat:</strong> Reclining chair with leg space
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default SeatSelection
