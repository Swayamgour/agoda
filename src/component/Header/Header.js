import React, { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import {
  ShoppingCart as CartIcon,
  AccountCircle as UserIcon,
  Search as SearchIcon,
  FavoriteBorder as WishlistIcon,
  NotificationsNone as NotificationIcon,
  HelpOutline as HelpIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  Flight as FlightIcon,
  Hotel as HotelIcon,
  DirectionsCar as CarIcon,
  LocalActivity as ActivitiesIcon
} from '@mui/icons-material'
import {
  Badge,
  Box,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Slide,
  Grow,
  ClickAwayListener,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material'
import SideBar from '../../component/SideBar/Sidebar'
import Login from '../Login'
import PublicImage from '../../utils/PublicImage'
import CurrencyDialog from './CurrencyDialog'

// Styled Components
const HeaderContainer = styled('header')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  backdropFilter: 'blur(10px)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  padding: '10px 0',
  transition: 'all 0.3s ease',
  width: '100vw',
  height: '80px',
  borderBottom: `1px solid rgba(255, 255, 255, 0.1)`
}))

const HeaderContent = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '0 30px',
  [theme.breakpoints.down('md')]: {
    padding: '0 15px'
  }
}))

const LogoContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  cursor: 'pointer',
  '& img': {
    height: '45px',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  }
}))

const SearchContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  flexGrow: 1,
  maxWidth: '600px',
  margin: '0 30px',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    '& fieldset': {
      borderColor: 'transparent'
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.3)'
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.secondary.main,
      boxShadow: `0 0 0 2px ${theme.palette.secondary.light}`
    },
    '& input::placeholder': {
      color: 'rgba(255, 255, 255, 0.7)',
      opacity: 1
    }
  }
}))

const NavControls = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  [theme.breakpoints.down('sm')]: {
    gap: '10px'
  }
}))

const ControlButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  background: 'rgba(255, 255, 255, 0.1)',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 500,
  padding: '8px 15px',
  borderRadius: '20px',
  transition: 'all 0.3s ease',
  textTransform: 'none',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-2px)'
  },
  '& .MuiSvgIcon-root': {
    transition: 'transform 0.3s ease'
  },
  '&:hover .MuiSvgIcon-root': {
    transform: 'rotate(90deg)'
  }
}))

const UserMenu = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  padding: '5px 10px 5px 15px',
  borderRadius: '30px',
  background: 'rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
  }
}))

const UserName = styled('span')(({ theme }) => ({
  fontSize: '14px',
  color: 'white',
  fontWeight: 500,
  [theme.breakpoints.down('sm')]: {
    display: 'none'
  }
}))

const QuickLinksMenu = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: 'calc(100% + 10px)',
  right: 0,
  width: '320px',
  padding: '15px',
  borderRadius: '12px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  background: theme.palette.background.paper,
  zIndex: 1200,
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: '100%',
    right: '20px',
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: `10px solid ${theme.palette.background.paper}`
  }
}))

const QuickLinkItem = styled(ListItem)(({ theme }) => ({
  borderRadius: '8px',
  padding: '8px 12px',
  marginBottom: '5px',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    transform: 'translateX(5px)'
  },
  '& .MuiListItemIcon-root': {
    minWidth: '36px',
    color: theme.palette.primary.main
  }
}))

const Header = () => {
  const navigate = useNavigate()
  const [openLogin, setOpenLogin] = useState(false)
  const [openUserMenu, setOpenUserMenu] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  const [showDialog, setShowDialog] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showQuickLinks, setShowQuickLinks] = useState(false)
  const [selectedCurrency, setSelectedCurrency] = useState('Rs. Indian Rupee')
  const [scrolled, setScrolled] = useState(false)

  const pathname = useLocation()

  // console.log('Pathname:', pathname)
  const isHomePage = pathname.pathname === '/Agota'
  const [showHeader, setShowHeader] = useState(false) // show by default on non-home

  // console.log(isHomePage)

  const user = {
    name: 'John Doe',
    profileImage:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    notifications: 3,
    wishlist: 5
  }

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 10)
  //   }
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  const handleUserMenuOpen = event => {
    setAnchorEl(event.currentTarget)
    setOpenUserMenu(true)
  }

  const handleUserMenuClose = () => {
    setAnchorEl(null)
    setOpenUserMenu(false)
  }

  const handleSearch = e => {
    if (e.key === 'Enter' && searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
    }
  }

  useEffect(() => {
    if (!isHomePage) return

    const handleScroll = () => {
      if (window.scrollY > 1) {
        setShowHeader(true)
      } else {
        setShowHeader(false)
      }
    }

    handleScroll() // on load
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const triggerRef = useRef(null)
  const quickLinksRef = useRef(null)

  const quickLinks = [
    { icon: <FlightIcon />, text: 'Flights', path: '/flights' },
    { icon: <HotelIcon />, text: 'Hotels', path: '/hotels' },
    { icon: <CarIcon />, text: 'Car Rentals', path: '/car-rentals' },
    { icon: <ActivitiesIcon />, text: 'Activities', path: '/activities' }
  ]

  // console.log(showHeader)

  return (
    // <div
    //   style={{
    //     opacity: showHeader ? 1 : 0,
    //     transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
    //     transition: 'transform 0.4s ease, opacity 0.4s ease',
    //     pointerEvents: showHeader ? 'auto' : 'none',
    //     position: 'fixed',
    //     top: 0,
    //     left: 0,
    //     width: '100%',
    //     zIndex: 1000,
    //     background: '#fff',
    //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    //     padding: '1rem'
    //   }}
    // >
    <HeaderContainer
      sx={{
        height: scrolled ? '70px' : '80px',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.2)' : 'none'
      }}
    >
      <HeaderContent>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <SideBar />
          <LogoContainer onClick={() => navigate('/Agota')}>
            <PublicImage src='/images/logo_of_tajde.png' alt='Logo' />
          </LogoContainer>
        </div>

        <SearchContainer>
          <StyledTextField
            fullWidth
            variant='outlined'
            placeholder='Search destinations, hotels, flights...'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyPress={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                </InputAdornment>
              )
            }}
          />
        </SearchContainer>

        <NavControls>
          <Tooltip title='Quick Links' arrow>
            <div style={{ position: 'relative' }}>
              <ControlButton
                onClick={() => setShowQuickLinks(!showQuickLinks)}
                // sx={{ minWidth: 'auto', px: 2 }}
                sx={{
                  minWidth: 'auto',
                  px: 2,
                  '@media (max-width:480px)': {
                    display: 'none'
                  }
                }}
              >
                <SearchIcon />
              </ControlButton>

              {showQuickLinks && (
                <ClickAwayListener onClickAway={() => setShowQuickLinks(false)}>
                  <Grow in={showQuickLinks}>
                    <QuickLinksMenu ref={quickLinksRef}>
                      <Typography variant='subtitle1' fontWeight='600' mb={1}>
                        Quick Links
                      </Typography>
                      <List>
                        {quickLinks.map((link, index) => (
                          <QuickLinkItem
                            key={index}
                            onClick={() => {
                              navigate(link.path)
                              setShowQuickLinks(false)
                            }}
                          >
                            <ListItemIcon>{link.icon}</ListItemIcon>
                            <ListItemText primary={link.text} />
                          </QuickLinkItem>
                        ))}
                      </List>
                    </QuickLinksMenu>
                  </Grow>
                </ClickAwayListener>
              )}
            </div>
          </Tooltip>

          <Tooltip title='Currency' arrow>
            <ControlButton
              ref={triggerRef}
              onClick={() => setShowDialog(true)}
              sx={{
                minWidth: '90px',

                '@media (max-width:480px)': {
                  display: 'none'
                }
              }}
            >
              {selectedCurrency.split(' ')[0]}
            </ControlButton>
          </Tooltip>

          {showDialog && (
            <CurrencyDialog
              onClose={() => setShowDialog(false)}
              onCurrencySelect={currency => {
                setSelectedCurrency(currency)
                setShowDialog(false)
              }}
              triggerRef={triggerRef}
            />
          )}

          <Tooltip title='Wishlist' arrow>
            <IconButton sx={{ color: 'white' }}>
              <Badge badgeContent={user.wishlist} color='secondary'>
                <WishlistIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          <Tooltip title='Notifications' arrow>
            <IconButton sx={{ color: 'white' }}>
              <Badge badgeContent={user.notifications} color='error'>
                <NotificationIcon />
              </Badge>
            </IconButton>
          </Tooltip>

          {user ? (
            <UserMenu onClick={handleUserMenuOpen}>
              <Avatar
                src={user.profileImage}
                alt={user.name}
                sx={{ width: 36, height: 36 }}
              />
              <UserName>{user.name}</UserName>
            </UserMenu>
          ) : (
            <Button
              variant='contained'
              color='secondary'
              sx={{
                borderRadius: '20px',
                textTransform: 'none',
                fontWeight: '500',
                px: 3,
                py: 1,
                boxShadow: '0 4px 15px rgba(255, 193, 7, 0.3)',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(255, 193, 7, 0.4)'
                },
                transition: 'all 0.3s ease'
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
              horizontal: 'right'
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            PaperProps={{
              elevation: 5,
              sx: {
                mt: 1.5,
                borderRadius: '12px',
                minWidth: '220px',
                overflow: 'visible',
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0
                }
              }
            }}
          >
            <MenuItem
              onClick={() => {
                navigate('/profile')
                handleUserMenuClose()
              }}
              sx={{ py: 1.5 }}
            >
              <UserIcon sx={{ mr: 2, color: 'primary.main' }} />
              <span>My Profile</span>
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate('/bookings')
                handleUserMenuClose()
              }}
              sx={{ py: 1.5 }}
            >
              <CartIcon sx={{ mr: 2, color: 'primary.main' }} />
              <span>My Bookings</span>
            </MenuItem>

            <MenuItem
              onClick={() => {
                navigate('/settings')
                handleUserMenuClose()
              }}
              sx={{ py: 1.5 }}
            >
              <SettingsIcon sx={{ mr: 2, color: 'primary.main' }} />
              <span>Settings</span>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleUserMenuClose} sx={{ py: 1.5 }}>
              <LogoutIcon sx={{ mr: 2, color: 'error.main' }} />
              <span>Logout</span>
            </MenuItem>
          </Menu>
        </NavControls>
      </HeaderContent>

      <Login open={openLogin} setOpen={setOpenLogin} />
    </HeaderContainer>
    // </div>
  )
}

export default Header
