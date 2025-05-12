import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import '../../App.css'
import CloseIcon from '@mui/icons-material/Close'
import '../../style/Sidebar.css'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'

export default function Sidebar () {
  const [open, setOpen] = React.useState(false)
  const [openOrderMenu, setOpenOrderMenu] = useState(false)
  const navigate = useNavigate()

  const handleToggleOrderMenu = () => {
    setOpenOrderMenu(!openOrderMenu)
  }

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }

  // React.useState

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation'>
      <div style={{ padding: '10px' }}>
        <div
          className='menu-section'
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
          onClick={toggleDrawer(false)}
        >
          <div>Menu</div>
          <CloseIcon />
        </div>
        <div>
          <div onClick={handleToggleOrderMenu} className='sidebar-option'>
            <span>My Order</span>
            {openOrderMenu ? <ExpandLess /> : <ExpandMore />}
          </div>

          {/* Dropdown items */}
          {openOrderMenu && (
            <div style={{ paddingLeft: '10px' }}>
              <div onClick={toggleDrawer(false)} className='sidebar-option'>
                Hotel Booking
              </div>
              <div onClick={toggleDrawer(false)} className='sidebar-option'>
                Flight Booking
              </div>
              <div onClick={toggleDrawer(false)} className='sidebar-option'>
                Car Booking
              </div>
            </div>
          )}

          <div
            className='sidebar-option'
            onClick={() => {
              navigate('/About')
              setOpen(false)
            }}
          >
            About
          </div>
          <div
            className='sidebar-option'
            onClick={() => {
              navigate('/ContactUS')
              setOpen(false)
            }}
          >
            Contact Us
          </div>
        </div>
      </div>
    </Box>
  )

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <button
        className='d-flex items-center icon-menu text-white text-20'
        // data-x-click='desktopMenu'
        onClick={toggleDrawer(true)}
      >
        {' '}
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  )
}
