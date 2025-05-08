import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'

export default function FilterWithBottomDrawer () {
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
            <h3>Sort Options</h3>

            <div className='filter-options-category'>Price: Low to High</div>
            <div className='filter-options-category'>Price: High to Low</div>
            <div className='filter-options-category'>Rating</div>
            <div className='filter-options-category'>Newest First</div>
          </Box>
        )
      case 'location':
        return (
          <Box sx={{ padding: 2 }}>
            <h3>Choose Location</h3>

            <div className='filter-options-category'>Kanpur</div>
            <div className='filter-options-category'>Delhi</div>
            <div className='filter-options-category'>Mumbai</div>
          </Box>
        )
      case 'price':
        return (
          <Box sx={{ padding: 2 }}>
            <h3>Select Price Range</h3>

            <div className='filter-options-category'>Below ₹1000</div>
            <div className='filter-options-category'>₹1000 - ₹5000</div>
            <div className='filter-options-category'>₹5000 - ₹10,000</div>
            <div className='filter-options-category'>Above ₹10,000</div>
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
          <span>Sort By ↓</span>
        </div>
        <div
          className={`filter-button-phone-view ${
            activeFilter === 'location' ? 'active' : ''
          }`}
          onClick={() => handleFilterClick('location')}
        >
          <span>Location ↓</span>
        </div>
        <div
          className={`filter-button-phone-view ${
            activeFilter === 'price' ? 'active' : ''
          }`}
          onClick={() => handleFilterClick('price')}
        >
          <span>Price ↓</span>
        </div>
        <div
          className={`filter-button-phone-view ${
            activeFilter === 'popular' ? 'active' : ''
          }`}
          onClick={() => handleFilterClick('popular')}
        >
          <span>Popular ↓</span>
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
