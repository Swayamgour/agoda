import React, { useState, useRef, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { enUS } from 'date-fns/locale';
import styles from '../../style/HotelSection.module.css';

const GuestRow = ({ label, subtext, value, onIncrease, onDecrease }) => (
  <div className={styles.guestRow}>
    <div>
      <div className={styles.guestLabel}>{label}</div>
      {subtext && <div className={styles.guestSubtext}>{subtext}</div>}
    </div>
    <div className={styles.counter}>
      <button className={styles.counterButton} onClick={onDecrease}>
        <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
        </svg>
      </button>
      <div className={styles.counterValue}>{value}</div>
      <button className={styles.counterButton} onClick={onIncrease}>
        <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </div>
  </div>
);

function HotelSection() {
  const [openDate, setOpenDate] = useState(false);
  const [openGuest, setOpenGuest] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [guests, setGuests] = useState({
    adults: 2,
    children: 1,
    rooms: 1
  });

  const [location, setLocation] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const dateRef = useRef();
  const guestRef = useRef();
  const locationRef = useRef();

  const locations = [
    { name: 'London', description: 'Greater London, United Kingdom' },
    { name: 'New York', description: 'New York State, United States' },
    { name: 'Paris', description: 'France' },
    { name: 'Madrid', description: 'Spain' },
    { name: 'Santorini', description: 'Greece' },
    { name: 'Tokyo', description: 'Japan' },
    { name: 'Sydney', description: 'Australia' },
    { name: 'Dubai', description: 'United Arab Emirates' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dateRef.current && !dateRef.current.contains(event.target)) {
        setOpenDate(false);
      }
      if (guestRef.current && !guestRef.current.contains(event.target)) {
        setOpenGuest(false);
      }
      if (locationRef.current && !locationRef.current.contains(event.target)) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (ranges) => {
    setState([ranges.selection]);
  };

  const updateCount = (type, direction) => {
    setGuests(prev => {
      const newValue = direction === 'up' ? prev[type] + 1 : Math.max(0, prev[type] - 1);
      return { ...prev, [type]: newValue };
    });
  };

  const selectLocation = (loc) => {
    setLocation(loc.name);
    setShowLocationDropdown(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formContent}>
          {/* <h2 className={styles.title}>Discover Your Perfect Escape</h2> */}
          
          <div className={styles.grid}>
            {/* Location Field */}
            <div className={styles.fieldContainer} ref={locationRef}>
              <div 
                className={`${styles.field} ${showLocationDropdown ? styles.fieldActive : ''} ${location ? 'fieldWithValue' : ''}`}
                onClick={() => setShowLocationDropdown(!showLocationDropdown)}
              >
                <label className={styles.label}>Destination</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Where to?"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    autoComplete="off"
                  />
                  <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {showLocationDropdown && (
                <div className={styles.dropdown} style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  {locations.filter(loc => 
                    loc.name.toLowerCase().includes(location.toLowerCase())
                  ).map((loc, index) => (
                    <div
                      key={index}
                      className={styles.locationItem}
                      onClick={() => selectLocation(loc)}
                    >
                      <div className={styles.locationName}>{loc.name}</div>
                      <div className={styles.locationDescription}>{loc.description}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Date Range Field */}
            <div className={styles.fieldContainer} ref={dateRef}>
              <div 
                className={`${styles.field} ${openDate ? styles.fieldActive : ''}`}
                onClick={() => {
                  setOpenDate(!openDate);
                  setOpenGuest(false);
                }}
              >
                <label className={styles.label}>Check in - Check out</label>
                <div className="flex items-center">
                  <span>{format(state[0].startDate, 'MMM d')}</span>
                  <span className="mx-1">—</span>
                  <span>{format(state[0].endDate, 'MMM d')}</span>
                </div>
              </div>
              
              {openDate && (
                <div className={styles.dropdown} style={{ width: 'auto', right: 0 }}>
                  <div className={styles.dateRangeWrapper}>
                    <DateRange
                      editableDateInputs={true}
                      onChange={handleSelect}
                      moveRangeOnFirstSelection={false}
                      ranges={state}
                      locale={enUS}
                      minDate={new Date()}
                      rangeColors={['#3B82F6']}
                      className="border-0"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Guests Field */}
            <div className={styles.fieldContainer} ref={guestRef}>
              <div 
                className={`${styles.field} ${openGuest ? styles.fieldActive : ''}`}
                onClick={() => {
                  setOpenGuest(!openGuest);
                  setOpenDate(false);
                }}
              >
                <label className={styles.label}>Guests & Rooms</label>
                <div>
                  {guests.adults} {guests.adults === 1 ? 'Adult' : 'Adults'}, {guests.children} {guests.children === 1 ? 'Child' : 'Children'}, {guests.rooms} {guests.rooms === 1 ? 'Room' : 'Rooms'}
                </div>
              </div>
              
              {openGuest && (
                <div className={styles.dropdown}>
                  <div style={{ padding: '1rem 1.5rem' }}>
                    <GuestRow
                      label="Adults"
                      value={guests.adults}
                      onDecrease={() => updateCount('adults', 'down')}
                      onIncrease={() => updateCount('adults', 'up')}
                    />

                    <div className={styles.divider}></div>

                    <GuestRow
                      label="Children"
                      subtext="Ages 0 - 17"
                      value={guests.children}
                      onDecrease={() => updateCount('children', 'down')}
                      onIncrease={() => updateCount('children', 'up')}
                    />

                    <div className={styles.divider}></div>

                    <GuestRow
                      label="Rooms"
                      value={guests.rooms}
                      onDecrease={() => updateCount('rooms', 'down')}
                      onIncrease={() => updateCount('rooms', 'up')}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Search Button */}
            <div className={styles.buttonContainer}>
              <button className={styles.searchButton}>
                <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Find Hotels
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelSection;