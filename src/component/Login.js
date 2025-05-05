import React, { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Grid
} from '@mui/material'

const Login = ({ open, setOpen }) => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [useOtp, setUseOtp] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailOrPhone: '',
    age: '',
    password: '',
    otp: ''
  })

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    if (isSignUp) {
      console.log('Sign Up Data:', formData)
    } else {
      console.log('Sign In Data:', {
        emailOrPhone: formData.emailOrPhone,
        loginMethod: useOtp ? 'otp' : 'password',
        value: useOtp ? formData.otp : formData.password
      })
    }
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>{isSignUp ? 'Sign Up' : 'Sign In'}</DialogTitle>
      <DialogContent>
        <form>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name='firstName'
                    label='First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name='lastName'
                    label='Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name='age'
                    label='Age'
                    type='number'
                    value={formData.age}
                    onChange={handleChange}
                  />
                </Grid>
              </>
            )}

            <Grid item xs={12}>
              <TextField
                fullWidth
                name='emailOrPhone'
                label='Email or Phone'
                value={formData.emailOrPhone}
                onChange={handleChange}
              />
            </Grid>

            {isSignUp ? (
              <>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name='otp'
                    label='OTP'
                    value={formData.otp}
                    onChange={handleChange}
                  />
                </Grid>
              </>
            ) : (
              <Grid item xs={12}>
                {useOtp ? (
                  <TextField
                    fullWidth
                    name='otp'
                    label='OTP'
                    value={formData.otp}
                    onChange={handleChange}
                  />
                ) : (
                  <TextField
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    value={formData.password}
                    onChange={handleChange}
                  />
                )}
              </Grid>
            )}
          </Grid>
        </form>
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'space-between', padding: '16px' }}>
        {!isSignUp && (
          <Typography
            variant='body2'
            sx={{ cursor: 'pointer' }}
            onClick={() => setUseOtp(prev => !prev)}
          >
            {useOtp ? 'Use Password Instead' : 'Login with OTP Instead'}
          </Typography>
        )}
        <Typography
          variant='body2'
          onClick={() => {
            setIsSignUp(prev => !prev)
            setUseOtp(false) // reset toggle on switch
          }}
          sx={{ cursor: 'pointer' }}
        >
          {isSignUp ? 'Already have an account? Sign In' : 'New user? Sign Up'}
        </Typography>
        <Button variant='contained' onClick={handleSubmit}>
          {isSignUp ? 'Register' : 'Login'}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Login
