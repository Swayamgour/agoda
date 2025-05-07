import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import '../../App.css'
import CloseIcon from '@mui/icons-material/Close'

export default function Sidebar () {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
      <div style={{ padding: '20px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <div>Menu</div>
          <div>
            <CloseIcon />
          </div>
        </div>
        <div>
          <div className=''>About </div>
          <div className=''>Contact Us</div>
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
