import React from 'react';
// import styles from './FilterTabs.module.css';
// import styles from '../../style/BusMyBookings.module.css'
import styles from '../../style/MyOrderBusBookingCard.module.css'

const FilterTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'upcoming', label: 'Upcoming' },
    { id: 'completed', label: 'Completed' },
    { id: 'cancelled', label: 'Cancelled' }
  ];

  return (
    <div className={styles.tabsContainer}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default FilterTabs;