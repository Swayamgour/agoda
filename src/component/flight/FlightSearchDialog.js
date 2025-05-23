import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import FlightIcon from '@mui/icons-material/Flight'
import DateRangeIcon from '@mui/icons-material/DateRange'
import PersonIcon from '@mui/icons-material/Person'
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'
import SwapHorizIcon from '@mui/icons-material/SwapHoriz'
import CloseIcon from '@mui/icons-material/Close'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { addDays } from 'date-fns'
import { enUS } from 'date-fns/locale'
import styles from '../../style/FlightBookingSearch.module.css'

const FlightSearchDialog = ({ open, onClose, onSearch }) => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    tripType: 'round-trip',
    passengers: {
      adults: 1,
      children: 0,
      infants: 0
    }
  })

  const [showPassengerPicker, setShowPassengerPicker] = useState(false)
  const [openDatePicker, setOpenDatePicker] = useState(false)
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])

  const tripTypes = [
    { value: 'one-way', label: 'One Way' },
    { value: 'round-trip', label: 'Round Trip', icon: '🔄' },
    { value: 'multi-city', label: 'Multi City', icon: '🌍' }
  ]

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePassengerChange = (type, value) => {
    setFormData(prev => ({
      ...prev,
      passengers: {
        ...prev.passengers,
        [type]: Math.max(0, value)
      }
    }))
  }

  const handleSwapLocations = () => {
    setFormData(prev => ({
      ...prev,
      from: prev.to,
      to: prev.from
    }))
  }

  const handleSubmit = e => {
    // e.preventDefault()
    // const searchData = {
    //   ...formData,
    //   departureDate: dateRange[0].startDate,
    //   returnDate:
    //     formData.tripType === 'round-trip' ? dateRange[0].endDate : null,
    //   totalPassengers:
    //     formData.passengers.adults +
    //     formData.passengers.children +
    //     formData.passengers.infants
    // }
    // onSearch(searchData)
    onClose()
  }

  const totalPassengers =
    formData.passengers.adults +
    formData.passengers.children +
    formData.passengers.infants

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth='md'
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: '20px',
          boxShadow: '0px 15px 40px rgba(0, 0, 0, 0.15)',
          overflow: 'hidden',
          background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9ff 100%)'
        }
      }}
    >
      <DialogTitle className={styles.dialogTitle}>
        <div className={styles.titleContainer}>
          <div className={styles.titleIcon}>
            <FlightIcon color='primary' sx={{ fontSize: '36px' }} />
          </div>
          <div>
            <h2>Where would you like to fly?</h2>
            <p className={styles.subtitle}>
              Find the best flights for your journey
            </p>
          </div>
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: {
                xs: 0, // 0 for extra small screens (<=600px)
                sm: 16 // 16px for small screens and up
              },
              right: {
                xs: 0,
                sm: 16
              },
              color: '#888'
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>

      <DialogContent>
        <form onSubmit={handleSubmit} className={styles.dialogForm}>
          <div className={styles.tripTypeContainer}>
            <div className={styles.tripTypeButtons}>
              {tripTypes.map(option => (
                <button
                  key={option.value}
                  type='button'
                  className={`${styles.tripTypeButton} ${
                    formData.tripType === option.value ? styles.active : ''
                  }`}
                  onClick={() =>
                    setFormData(prev => ({ ...prev, tripType: option.value }))
                  }
                >
                  <span className={styles.tripTypeIcon}>{option.icon}</span>
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Location Inputs */}
          <div className={styles.locationRow}>
            <div className={styles.locationInput}>
              <TextField
                label='From'
                name='from'
                value={formData.from}
                onChange={handleChange}
                fullWidth
                variant='outlined'
                margin='normal'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <FlightIcon
                        color='action'
                        style={{ transform: 'rotate(45deg)' }}
                      />
                    </InputAdornment>
                  ),
                  classes: {
                    root: styles.inputRoot
                  }
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '14px',
                    backgroundColor: '#f5f7fa',
                    '& fieldset': {
                      borderColor: '#e0e3ff'
                    },
                    '&:hover fieldset': {
                      borderColor: '#b7bdf8'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#4361ee',
                      boxShadow: '0 0 0 3px rgba(67, 97, 238, 0.15)'
                    }
                  }
                }}
                required
              />
            </div>

            <button
              type='button'
              className={styles.swapButton}
              onClick={handleSwapLocations}
              aria-label='Swap locations'
            >
              <SwapHorizIcon sx={{ color: '#4361ee', fontSize: '24px' }} />
            </button>

            <div className={styles.locationInput}>
              <TextField
                label='To'
                name='to'
                value={formData.to}
                onChange={handleChange}
                fullWidth
                variant='outlined'
                margin='normal'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <FlightIcon
                        color='action'
                        style={{ transform: 'rotate(-45deg)' }}
                      />
                    </InputAdornment>
                  ),
                  classes: {
                    root: styles.inputRoot
                  }
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '14px',
                    backgroundColor: '#f5f7fa',
                    '& fieldset': {
                      borderColor: '#e0e3ff'
                    },
                    '&:hover fieldset': {
                      borderColor: '#b7bdf8'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#4361ee',
                      boxShadow: '0 0 0 3px rgba(67, 97, 238, 0.15)'
                    }
                  }
                }}
                required
              />
            </div>
          </div>

          {/* Date Range Picker */}
          <div className={styles.dateRangeContainer}>
            <div
              onClick={() => setOpenDatePicker(!openDatePicker)}
              className={styles.sectionHeader}
            >
              <DateRangeIcon color='primary' />
              <h3>Travel Dates</h3>
            </div>
            {openDatePicker && (
              <div className={styles.datePickerWrapper}>
                <DateRangePicker
                  editableDateInputs={true}
                  onChange={item => {
                    setDateRange([item.selection])
                    setOpenDatePicker(false)
                  }}
                  moveRangeOnFirstSelection={false}
                  ranges={dateRange}
                  locale={enUS}
                  minDate={new Date()}
                  rangeColors={['#3b82f6']}
                />
              </div>
            )}
            {!openDatePicker && (
              <TextField
                label='Selected Dates'
                value={`${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate.toLocaleDateString()}`}
                name='to'
                //   value={formData.to}
                onChange={handleChange}
                fullWidth
                variant='outlined'
                margin='normal'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      {/* <FlightIcon
                      color='action'
                      style={{ transform: 'rotate(-45deg)' }}
                    /> */}
                      <DateRangeIcon color='action' />
                    </InputAdornment>
                  ),
                  classes: {
                    root: styles.inputRoot
                  }
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '14px',
                    backgroundColor: '#f5f7fa',
                    '& fieldset': {
                      borderColor: '#e0e3ff'
                    },
                    '&:hover fieldset': {
                      borderColor: '#b7bdf8'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#4361ee',
                      boxShadow: '0 0 0 3px rgba(67, 97, 238, 0.15)'
                    }
                  }
                }}
                required
              />
            )}
          </div>

          {/* Passenger Selector */}
          <div className={styles.passengerContainer}>
            <div className={styles.sectionHeader}>
              <PersonIcon color='primary' />
              <h3>Passengers</h3>
            </div>
            <div className={styles.passengerInputWrapper}>
              <button
                type='button'
                className={styles.passengerTrigger}
                onClick={() => setShowPassengerPicker(!showPassengerPicker)}
              >
                <span>
                  {totalPassengers}{' '}
                  {totalPassengers === 1 ? 'Passenger' : 'Passengers'}
                </span>
                <span className={styles.passengerBreakdown}>
                  {formData.passengers.adults > 0 &&
                    `${formData.passengers.adults} Adult${
                      formData.passengers.adults > 1 ? 's' : ''
                    }`}
                  {formData.passengers.children > 0 &&
                    `, ${formData.passengers.children} Child${
                      formData.passengers.children > 1 ? 'ren' : ''
                    }`}
                  {formData.passengers.infants > 0 &&
                    `, ${formData.passengers.infants} Infant${
                      formData.passengers.infants > 1 ? 's' : ''
                    }`}
                </span>
                <span className={styles.dropdownArrow}>
                  {showPassengerPicker ? '▲' : '▼'}
                </span>
              </button>

              {showPassengerPicker && (
                <div className={styles.passengerPicker}>
                  <div className={styles.passengerType}>
                    <div className={styles.passengerLabel}>
                      <PersonIcon fontSize='small' />
                      <span>Adults (12+ yrs)</span>
                    </div>
                    <div className={styles.passengerControls}>
                      <button
                        type='button'
                        className={styles.passengerButton}
                        onClick={() =>
                          handlePassengerChange(
                            'adults',
                            formData.passengers.adults - 1
                          )
                        }
                        disabled={formData.passengers.adults <= 1}
                      >
                        -
                      </button>
                      <span>{formData.passengers.adults}</span>
                      <button
                        type='button'
                        className={styles.passengerButton}
                        onClick={() =>
                          handlePassengerChange(
                            'adults',
                            formData.passengers.adults + 1
                          )
                        }
                        disabled={formData.passengers.adults >= 9}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className={styles.passengerType}>
                    <div className={styles.passengerLabel}>
                      <ChildFriendlyIcon fontSize='small' />
                      <span>Children (2-11 yrs)</span>
                    </div>
                    <div className={styles.passengerControls}>
                      <button
                        type='button'
                        className={styles.passengerButton}
                        onClick={() =>
                          handlePassengerChange(
                            'children',
                            formData.passengers.children - 1
                          )
                        }
                        disabled={formData.passengers.children <= 0}
                      >
                        -
                      </button>
                      <span>{formData.passengers.children}</span>
                      <button
                        type='button'
                        className={styles.passengerButton}
                        onClick={() =>
                          handlePassengerChange(
                            'children',
                            formData.passengers.children + 1
                          )
                        }
                        disabled={formData.passengers.children >= 8}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className={styles.passengerType}>
                    <div className={styles.passengerLabel}>
                      <ChildFriendlyIcon fontSize='small' />
                      <span>Infants (under 2 yrs)</span>
                    </div>
                    <div className={styles.passengerControls}>
                      <button
                        type='button'
                        className={styles.passengerButton}
                        onClick={() =>
                          handlePassengerChange(
                            'infants',
                            formData.passengers.infants - 1
                          )
                        }
                        disabled={formData.passengers.infants <= 0}
                      >
                        -
                      </button>
                      <span>{formData.passengers.infants}</span>
                      <button
                        type='button'
                        className={styles.passengerButton}
                        onClick={() =>
                          handlePassengerChange(
                            'infants',
                            formData.passengers.infants + 1
                          )
                        }
                        disabled={
                          formData.passengers.infants >=
                            formData.passengers.adults ||
                          formData.passengers.infants >= 4
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      </DialogContent>

      <DialogActions className={styles.dialogActions}>
        <Button
          onClick={onClose}
          variant='text'
          sx={{
            borderRadius: '14px',
            padding: '12px 24px',
            color: '#666',
            fontWeight: '600',
            '&:hover': {
              backgroundColor: '#f0f2ff'
            }
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant='contained'
          disabled={!formData.from || !formData.to}
          sx={{
            borderRadius: '14px',
            padding: '12px 32px',
            backgroundColor: '#4361ee',
            fontWeight: '600',
            fontSize: '1rem',
            textTransform: 'none',
            boxShadow: '0 4px 12px rgba(67, 97, 238, 0.25)',
            '&:hover': {
              backgroundColor: '#3a56d5',
              boxShadow: '0 6px 16px rgba(67, 97, 238, 0.3)'
            },
            '&:disabled': {
              backgroundColor: '#e0e0e0',
              color: '#9e9e9e',
              boxShadow: 'none'
            }
          }}
        >
          Search Flights
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default FlightSearchDialog
