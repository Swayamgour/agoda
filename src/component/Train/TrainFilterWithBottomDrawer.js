//

import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'

export default function TrainFilterWithBottomDrawer () {
  const [activeFilter, setActiveFilter] = useState('')
  const [drawerOpen, setDrawerOpen] = useState(false)

  const handleFilterClick = filter => {
    setActiveFilter(filter)
    setDrawerOpen(true)
  }

  const closeDrawer = () => {
    setDrawerOpen(false)
  }

  const getDrawerContent = () => {
    switch (activeFilter) {
      case 'sort':
        return (
          <Box
            sx={{
              padding: 2
            }}
          >
            <h3>Car Type</h3>

            <div className='filter-options-category'>Sedan</div>
            <div className='filter-options-category'>Hatchback</div>
            <div className='filter-options-category'>Suv</div>
            <div className='filter-options-category'>Mini Bus</div>
          </Box>
        )
      case 'location':
        return (
          <Box sx={{ padding: 2 }}>
            <h3>Fuel Type</h3>

            <div className='filter-options-category'>CNG</div>
            <div className='filter-options-category'>PETROL</div>
            <div className='filter-options-category'>DIESEL</div>
            <div className='filter-options-category'>ELECTRIC</div>
          </Box>
        )
      case 'price':
        return (
          <Box sx={{ padding: 2 }}>
            <h3>Car Model</h3>

            <div className='filter-options-category'>TATA TIGER</div>
            <div className='filter-options-category'>ERTIGA</div>
            {/* <div className='filter-options-category'>₹5000 - ₹10,000</div>
            <div className='filter-options-category'>Above ₹10,000</div> */}
          </Box>
        )
      case 'popular':
        return (
          <Box sx={{ padding: 2 }}>
            <h3>Most Popular</h3>

            <div className='filter-options-category'>Top Rated</div>
            <div className='filter-options-category'>Most Booked</div>
            <div className='filter-options-category'>Trending</div>
          </Box>
        )
      default:
        return <Box sx={{ padding: 2 }}>Select an option</Box>
    }
  }

  return (
    <div className='filter-container'>
      <div className='filter-options'>
        <div
          className={`filter-button-phone-view ${
            activeFilter === 'sort' ? 'active' : ''
          }`}
          onClick={() => handleFilterClick('sort')}
        >
          <span>AIRLINES ↓</span>
        </div>
        <div
          className={`filter-button-phone-view ${
            activeFilter === 'location' ? 'active' : ''
          }`}
          onClick={() => handleFilterClick('location')}
        >
          <span>STOPS ↓</span>
        </div>
        <div
          className={`filter-button-phone-view ${
            activeFilter === 'price' ? 'active' : ''
          }`}
          onClick={() => handleFilterClick('price')}
        >
          <span>TIMES ↓</span>
        </div>
        <div
          className={`filter-button-phone-view ${
            activeFilter === 'popular' ? 'active' : ''
          }`}
          onClick={() => handleFilterClick('popular')}
        >
          <span>SORT BY ↓</span>
        </div>
      </div>

      <Drawer
        anchor='bottom'
        PaperProps={{
          sx: {
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px'
          }
        }}
        open={drawerOpen}
        onClose={closeDrawer}
      >
        {getDrawerContent()}
      </Drawer>
    </div>
  )
}
