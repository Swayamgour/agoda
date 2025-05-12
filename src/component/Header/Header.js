import React, { useState } from 'react'
import Login from '../Login'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../component/SideBar/Sidebar'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const style = {
  position: 'absolute',
  backgroundColor: '#ffff',
  color: 'black',
  padding: '5px',
  borderRadius: '8px',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  width: '100px',
  justifyContent: 'center',
  alignItems: 'center',
  top: '10%',
  right: '5%'
  // width: '150px'
}

const Header = () => {
  // const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate()

  const [menuActive, setMenuActive] = useState(false)
  const [open, setOpen] = useState(false)
  const [openModel, setOpenModel] = React.useState(false)
  const handleOpen = () => setOpenModel(true)
  const handleClose = () => setOpenModel(false)

  const toggleMenu = () => {
    setMenuActive(prev => !prev)
  }

  const user = {
    name: 'John Doe',
    profileImage:
      'https://imgs.search.brave.com/On1jUTlYXU0nMnY-dqmpNg0PIqUoPv_J_lcSWebc9bY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/OTQyMDM0My9waG90/by9zbWlsaW5nLW1h/bi1vdXRkb29ycy1p/bi10aGUtY2l0eS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OGwtZ09ib0dFRlN5/Q0ZYcjA5RWd1RG1W/MEUwYkZUNXVzQW1z/MXd5RkJoOD0'
  }

  const [show, setShow] = useState(false)

  return (
    <header
      data-add-bg='bg-dark-1'
      className='header js-header'
      data-x='header'
      data-x-toggle='is-menu-opened'
    >
      <Login setOpen={setOpen} open={open} />
      <div className='header__container container'>
        <div className='row justify-between items-center'>
          <div className='col-auto'>
            <div className='d-flex items-center'>
              <div className='mr-20'>
                <SideBar />
              </div>

              <div
                // href='index.html'
                onClick={() => navigate('/')}
                className='header-logo mr-30 pointer'
                // data-x='header-logo'
                // data-x-toggle='is-logo-dark'
              >
                <img src='/img/general/logo-light-2.svg' alt='logo icon' />
                <img src='/img/general/logo-dark.svg' alt='logo icon' />
              </div>

              <div className='relative xl:d-none'>
                <div className='searchMenu-loc js-form-dd js-liverSearch'>
                  <div
                    className='d-flex items-center'
                    data-x-dd-click='searchMenu-loc'
                  >
                    <i className='text-20 icon-search text-white mr-15'></i>
                    <div className='text-15 text-white ls-2 lh-16'>
                      <input
                        autoComplete='off'
                        type='search'
                        placeholder='Destination, attraction'
                        className='text-white js-search js-dd-focus'
                      />
                    </div>
                  </div>

                  <div
                    className='searchMenu-loc__field shadow-2 js-popup-window'
                    data-x-dd='searchMenu-loc'
                    data-x-dd-toggle='-is-active'
                  >
                    <div className='bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4'>
                      <div className='y-gap-5 js-results'>
                        {[
                          {
                            name: 'London',
                            desc: 'Greater London, United Kingdom'
                          },
                          {
                            name: 'New York',
                            desc: 'New York State, United States'
                          },
                          { name: 'Paris', desc: 'France' },
                          { name: 'Madrid', desc: 'Spain' },
                          { name: 'Santorini', desc: 'Greece' }
                        ].map((location, index) => (
                          <div key={index}>
                            <button className='-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option'>
                              <div className='d-flex'>
                                <div className='icon-location-2 text-light-1 text-20 pt-4'></div>
                                <div className='ml-10'>
                                  <div className='text-15 lh-12 fw-500 js-search-option-target'>
                                    {location.name}
                                  </div>
                                  <div className='text-14 lh-12 text-light-1 mt-5'>
                                    {location.desc}
                                  </div>
                                </div>
                              </div>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='desktopMenu js-desktopMenu'>
                <div
                  className={`desktopMenu ${
                    menuActive ? 'is-menu-active' : ''
                  }`}
                ></div>
                <div className='desktopMenu__content'>
                  <div className='mobile-bg js-mobile-bg'></div>

                  <div className='px-30 py-20 sm:px-20 sm:py-10 border-bottom-light'>
                    <div className='row justify-between items-center'>
                      <div className='col-auto'>
                        <div className='text-20 fw-500'>Main Menu</div>
                      </div>
                      <div className='col-auto'>
                        <button
                          className='icon-close text-15'
                          data-x-click='desktopMenu'
                        ></button>
                      </div>
                    </div>
                  </div>

                  <div className='h-full px-30 py-30 sm:px-0 sm:py-10'>
                    <div className='menu js-navList'>
                      <ul className='menu__nav -is-active'>
                        {/* Home Menu */}
                        <li className='menu-item-has-children'>
                          <a data-barba href='#'>
                            <span className='mr-10'>Home</span>
                            <i className='icon icon-chevron-sm-down'></i>
                          </a>
                          <ul className='subnav'>
                            <li className='subnav__backBtn js-nav-list-back'>
                              <a href='#'>
                                <i className='icon icon-chevron-sm-down'></i>{' '}
                                Home
                              </a>
                            </li>
                            {[...Array(10)].map((_, i) => (
                              <li key={i}>
                                <a href={`home-${i + 1}.html`}>Home {i + 1}</a>
                              </li>
                            ))}
                          </ul>
                        </li>

                        {/* Categories Mega Menu */}

                        {/* Simple Menu Items */}
                        <li>
                          <a href='destinations.html'>Destinations</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-auto'>
            <div className='d-flex items-center'>
              <div className='row x-gap-20 items-center xxl:d-none'>
                <div className='col-auto'>
                  <button
                    className='d-flex items-center text-14 text-white'
                    // data-x-click='currency'
                  >
                    <span className='js-currencyMenu-mainTitle'>USD</span>
                    <i className='icon-chevron-sm-down text-7 ml-10'></i>
                  </button>
                </div>

                <div className='col-auto'>
                  <div className='w-1 h-20 bg-white-20'></div>
                </div>

                <div className='col-auto'>
                  <button
                    className='d-flex items-center text-14 text-white'
                    data-x-click='lang'
                  >
                    <img
                      src='/img/general/lang.png'
                      alt='image'
                      className='rounded-full mr-10'
                    />
                    <span className='js-language-mainTitle'>
                      United Kingdom
                    </span>
                    <i className='icon-chevron-sm-down text-7 ml-15'></i>
                  </button>
                </div>

                <div className='col-auto'>
                  {/* <button
                    className='d-flex items-center text-14 text-white'
                    data-x-click='lang'
                  >
                    <span className='js-language-mainTitle'>
                      <ShoppingCartIcon />
                    </span>
                   
                  </button> */}

                  <Badge
                    badgeContent={1}
                    color='error' // this makes the badge red
                    sx={{
                      '& .MuiBadge-badge': {
                        color: 'white', // badge text color
                        backgroundColor: 'red' // badge background color (explicit red)
                      }
                    }}
                    className='pointer'
                  >
                    <ShoppingCartIcon style={{ color: 'white' }} />
                  </Badge>
                </div>
              </div>

              <div className='d-flex items-center ml-20 is-menu-opened-hide'>
                {user ? (
                  <div
                    // onClick={() => setShow(!show)}
                    onClick={handleOpen}
                    className='d-flex items-center '
                  >
                    <img
                      src={user.profileImage || '/default-avatar.png'}
                      alt='Profile'
                      className='rounded-circle'
                      style={{
                        width: 40,
                        height: 40,
                        objectFit: 'cover',
                        borderRadius: '50%'
                      }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span className='text-white ml-10'>Profile</span>
                      <span className='text-white ml-10'>{user.name}</span>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => setOpen(true)}
                    className='button px-20 fw-400 text-14 border-white -blue-1 h-40 text-white ml-20'
                  >
                    Sign In
                  </div>
                )}

                <div>
                  <Modal
                    keepMounted
                    open={openModel}
                    onClose={handleClose}
                    aria-labelledby='keep-mounted-modal-title'
                    aria-describedby='keep-mounted-modal-description'
                  >
                    <Box sx={style}>
                      <button
                        onClick={() => {
                          navigate('/Profile')
                        }}
                        onClose={handleClose}
                        className='block w-full text-left  py-2 hover:bg-gray-700'
                        style={{ borderBottom: '1px solid rgb(225, 223, 223)' }}
                      >
                        Profile
                      </button>
                      <button
                        // onClick={handleLogout}
                        onClose={handleClose}
                        className='block w-full text-left  py-2 hover:bg-gray-700'
                      >
                        Logout
                      </button>
                    </Box>
                  </Modal>
                </div>
              </div>

              {/* <div className='col-auto'>
                <button
                  className='d-flex items-center text-14 text-white'
                  data-x-click='lang'
                >
                  <span className='js-language-mainTitle'>
                    <ShoppingCartIcon />
                  </span>
                </button>

              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
