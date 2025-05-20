import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { FaHotel, FaCar, FaBusAlt } from 'react-icons/fa';
import { MdFlight, MdInfo, MdContactPage } from 'react-icons/md';
import { IoMdTrain } from "react-icons/io";
import { styled } from '@mui/material/styles';
import { keyframes } from '@emotion/react';
// import {Verson} from '../../../package.json'

// Animation for menu items
const fadeIn = keyframes`
  from { opacity: 0; transform: translateX(-10px); }
  to { opacity: 1; transform: translateX(0); }
`;

// Styled components
const MenuSection = styled('div')({
  fontSize: '22px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 10px',
  fontWeight: '600',
  color: '#2c3e50',
  borderBottom: '1px solid #f0f0f0',
  marginBottom: '10px'
});

const SidebarOption = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '12px 15px',
  margin: '8px 0',
  borderRadius: '8px',
  fontSize: '15px',
  fontWeight: '500',
  transition: 'all 0.3s ease',
  color: '#34495e',
  '&:hover': {
    backgroundColor: '#f8f9fa',
    transform: 'translateX(5px)',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  '& svg': {
    marginRight: '12px',
    color: '#3498db',
    fontSize: '18px'
  }
}));

const DropdownContainer = styled('div')({
  paddingLeft: '20px',
  animation: `${fadeIn} 0.3s ease-out forwards`
});

const IconButton = styled('button')({
  // background: 'linear-gradient(135deg, #3498db, #2c3e50)',
  border: 'none',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
  }
});

const CloseButton = styled(CloseIcon)({
  color: '#7f8c8d',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    color: '#e74c3c',
    transform: 'rotate(90deg)'
  }
});

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const [openOrderMenu, setOpenOrderMenu] = useState(false);
  const navigate = useNavigate();

  const handleToggleOrderMenu = () => {
    setOpenOrderMenu(!openOrderMenu);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };

  const DrawerList = (
    <Box sx={{ width: 280 }} role="presentation">
      <div style={{ padding: '10px', height: '100vh', background: 'linear-gradient(to bottom, #ffffff, #f8f9fa)' }}>
        <MenuSection onClick={toggleDrawer(false)}>
          <div>Travel Menu</div>
          <CloseButton fontSize="medium" />
        </MenuSection>
        
        <div>
          <SidebarOption onClick={handleToggleOrderMenu} className="jcsb">
            <span>My Orders</span>
            {openOrderMenu ? <ExpandLess sx={{ color: '#7f8c8d' }} /> : <ExpandMore sx={{ color: '#7f8c8d' }} />}
          </SidebarOption>

          {/* Dropdown items */}
          {openOrderMenu && (
            <DropdownContainer>
              <SidebarOption onClick={() => handleNavigation('/hotels')}>
                <FaHotel /> Hotel Bookings
              </SidebarOption>
              <SidebarOption onClick={() => handleNavigation('/flights')}>
                <MdFlight /> Flight Bookings
              </SidebarOption>
              <SidebarOption onClick={() => handleNavigation('/cars')}>
                <FaCar /> Car Rentals
              </SidebarOption>
              <SidebarOption onClick={() => handleNavigation('/trains')}>
                <IoMdTrain /> Train Tickets
              </SidebarOption>
              <SidebarOption onClick={() => handleNavigation('/buses')}>
                <FaBusAlt /> Bus Tickets
              </SidebarOption>
            </DropdownContainer>
          )}

          <SidebarOption onClick={() => handleNavigation('/about')}>
            <MdInfo /> About Us
          </SidebarOption>
          <SidebarOption onClick={() => handleNavigation('/contact')}>
            <MdContactPage /> Contact Us
          </SidebarOption>
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        aria-label="Open menu"
      >
        <span style={{ color: 'white', fontSize: '20px' }}>☰</span>
      </IconButton>
      <Drawer 
        open={open} 
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            boxShadow: '4px 0 15px rgba(0,0,0,0.1)'
          }
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}