import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import {
  ShoppingCart as CartIcon,
  Language as LanguageIcon,
  AccountCircle as UserIcon,
  // ChevronRightIcon as ChevronDownIcon,
  Search as SearchIcon,
  Close as CloseIcon
} from '@mui/icons-material'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import {
  Badge,
  Box,
  Modal,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  IconButton
} from '@mui/material'
import SideBar from '../../component/SideBar/Sidebar'
import Login from '../Login'
import PublicImage from '../../utils/PublicImage'
import CurrencyDialog from '../CurrencyDialog'

// Styled Components
const HeaderContainer = styled('header')({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  background: 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'blur(10px)',
  padding: '15px 0',
  transition: 'all 0.3s ease',
  width: '100vw',
  height: '70px',
  '&:hover': {
    background: 'rgba(0, 0, 0, 0.9)'
  }
})

const HeaderContent = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  '@media (max-width: 768px)': {
    // display: 'none'
    padding: '0 10px'
  }
})

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  cursor: 'pointer',
  '& img': {
    height: '40px',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  }
})

const SearchContainer = styled('div')({
  position: 'relative',
  flexGrow: 1,
  maxWidth: '500px',
  margin: '0 30px',
  '@media (max-width: 768px)': {
    display: 'none'
  }
})

const SearchInput = styled('input')({
  width: '100%',
  padding: '12px 20px 12px 45px',
  borderRadius: '30px',
  border: 'none',
  background: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  fontSize: '16px',
  transition: 'all 0.3s ease',
  '&:focus': {
    outline: 'none',
    background: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 0 0 2px rgba(255, 193, 7, 0.3)'
  },
  '&::placeholder': {
    color: 'rgba(255, 255, 255, 0.7)'
  }
})

const SearchIconWrapper = styled('div')({
  position: 'absolute',
  left: '15px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'rgba(255, 255, 255, 0.7)'
})

const NavControls = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '20px'
})

const ControlButton = styled('button')({
  display: 'flex',
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 500,
  padding: '8px 12px',
  borderRadius: '20px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)'
  },
  '@media (max-width: 768px)': {
    // display: 'none'
  }
})

const UserMenu = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  padding: '5px 10px 5px 5px',
  borderRadius: '30px',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)'
  }
})

const UserName = styled('span')({
  fontSize: '14px',
  color: 'white',
  fontWeight: 500,
  '@media (max-width: 768px)': {
    display: 'none'
  }
})

const MenuModal = styled(Box)({
  position: 'absolute',
  backgroundColor: '#fff',
  color: '#333',
  borderRadius: '8px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  padding: '10px 0',
  minWidth: '180px',
  right: '20px',
  top: '70px',
  '& .MuiMenuItem-root': {
    padding: '10px 20px',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
    }
  }
})

const Header = () => {
  const navigate = useNavigate()
  const [openLogin, setOpenLogin] = useState(false)
  const [openUserMenu, setOpenUserMenu] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [openUsd, setOpenUsd] = useState(null)
  const [openUsdMenu, setOpenUsdMenu] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const [showDialog, setShowDialog] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState('Rs. Indian Rupee')

  const user = {
    name: 'John Doe',
    profileImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }

  const handleUserMenuOpen = event => {
    setAnchorEl(event.currentTarget)
    setOpenUserMenu(true)
  }

  const handleUserMenuClose = () => {
    setAnchorEl(null)
    setOpenUserMenu(false)
  }
  const handleUserUsdClose = () => {
    setOpenUsd(null)
    setOpenUsdMenu(false)
  }

  const handleSearch = e => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
    }
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <SideBar />
          <LogoContainer onClick={() => navigate('/Agota')}>
            <PublicImage src='/images/logo_of_tajde.png' alt='Logo' />
          </LogoContainer>
        </div>

        <SearchContainer>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <SearchInput
            type='search'
            placeholder='Search destinations, hotels, flights...'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyPress={handleSearch}
          />
        </SearchContainer>

        <NavControls>
          <ControlButton onClick={() => setShowDialog(true)}>
            <span>USD</span>
            <ChevronRightIcon sx={{ fontSize: 16, ml: 0.5 }} />
          </ControlButton>

          {showDialog && (
            <CurrencyDialog
              onClose={() => setShowDialog(false)}
              onCurrencySelect={currency => setSelectedCurrency(currency)}
            />
          )}

          <IconButton sx={{ color: 'white' }}>
            <Badge badgeContent={1} color='error'>
              <CartIcon />
            </Badge>
          </IconButton>

          {user ? (
            <UserMenu onClick={handleUserMenuOpen}>
              <Avatar
                src={user.profileImage}
                alt={user.name}
                sx={{ width: 32, height: 32 }}
              />
              <UserName>{user.name}</UserName>
            </UserMenu>
          ) : (
            <Button
              variant='outlined'
              sx={{
                color: 'white',
                borderColor: 'white',
                borderRadius: '20px',
                textTransform: 'none',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
              onClick={() => setOpenLogin(true)}
            >
              Sign In
            </Button>
          )}

          <Menu
            anchorEl={anchorEl}
            open={openUserMenu}
            onClose={handleUserMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
          >
            <MenuItem
              onClick={() => {
                navigate('/profile')
                handleUserMenuClose()
              }}
            >
              <UserIcon sx={{ mr: 2 }} /> My Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate('/bookings')
                handleUserMenuClose()
              }}
            >
              <CartIcon sx={{ mr: 2 }} /> My Bookings
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleUserMenuClose}>Logout</MenuItem>
          </Menu>
        </NavControls>
      </HeaderContent>

      <Login open={openLogin} setOpen={setOpenLogin} />
    </HeaderContainer>
  )
}

export default Header
