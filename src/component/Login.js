import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Grid,
  Divider,
  IconButton,
  InputAdornment,
  InputBase
} from '@mui/material';
import {
  Close,
  Visibility,
  VisibilityOff,
  Email,
  Phone,
  Person,
  Lock,
  ConfirmationNumber
} from '@mui/icons-material';
import styles from '../style/Login.module.css';

const Login = ({ open, setOpen }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [useOtp, setUseOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailOrPhone: '',
    age: '',
    password: '',
    otp: ''
  });

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (isSignUp) {
      console.log('Sign Up Data:', formData);
    } else {
      console.log('Sign In Data:', {
        emailOrPhone: formData.emailOrPhone,
        loginMethod: useOtp ? 'otp' : 'password',
        value: useOtp ? formData.otp : formData.password
      });
    }
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth='sm'
      className={styles.dialogRoot}
      PaperProps={{
        style: {
          borderRadius: '12px',
          padding: '16px'
        }
      }}
    >
      <div className={styles.dialogHeader}>
        <DialogTitle className={styles.dialogTitle}>
          {isSignUp ? 'Create Your Account' : 'Welcome Back!'}
        </DialogTitle>
        <IconButton onClick={handleClose} className={styles.closeButton}>
          <Close />
        </IconButton>
      </div>

      <DialogContent className={styles.dialogContent}>
        <form className={styles.authForm}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Grid item xs={12} sm={6}>
                  <div className={styles.inputBoxContainer}>
                    <Person className={styles.inputIcon} />
                    <InputBase
                      fullWidth
                      name='firstName'
                      placeholder='First Name'
                      value={formData.firstName}
                      onChange={handleChange}
                      className={styles.inputBox}
                    />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <div className={styles.inputBoxContainer}>
                    <Person className={styles.inputIcon} />
                    <InputBase
                      fullWidth
                      name='lastName'
                      placeholder='Last Name'
                      value={formData.lastName}
                      onChange={handleChange}
                      className={styles.inputBox}
                    />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className={styles.inputBoxContainer}>
                    <InputBase
                      fullWidth
                      name='age'
                      placeholder='Age'
                      type='number'
                      value={formData.age}
                      onChange={handleChange}
                      className={styles.inputBox}
                    />
                  </div>
                </Grid>
              </>
            )}

            <Grid item xs={12}>
              <div className={styles.inputBoxContainer}>
                {formData.emailOrPhone.includes('@') ? (
                  <Email className={styles.inputIcon} />
                ) : (
                  <Phone className={styles.inputIcon} />
                )}
                <InputBase
                  fullWidth
                  name='emailOrPhone'
                  placeholder='Email or Phone Number'
                  value={formData.emailOrPhone}
                  onChange={handleChange}
                  className={styles.inputBox}
                />
              </div>
            </Grid>

            {isSignUp ? (
              <>
                <Grid item xs={12}>
                  <div className={styles.inputBoxContainer}>
                    <Lock className={styles.inputIcon} />
                    <InputBase
                      fullWidth
                      name='password'
                      placeholder='Password'
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleChange}
                      className={styles.inputBox}
                    />
                    <IconButton 
                      onClick={togglePasswordVisibility}
                      className={styles.passwordToggle}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className={styles.inputBoxContainer}>
                    <ConfirmationNumber className={styles.inputIcon} />
                    <InputBase
                      fullWidth
                      name='otp'
                      placeholder='OTP (Optional)'
                      value={formData.otp}
                      onChange={handleChange}
                      className={styles.inputBox}
                    />
                  </div>
                </Grid>
              </>
            ) : (
              <Grid item xs={12}>
                {useOtp ? (
                  <div className={styles.inputBoxContainer}>
                    <ConfirmationNumber className={styles.inputIcon} />
                    <InputBase
                      fullWidth
                      name='otp'
                      placeholder='OTP'
                      value={formData.otp}
                      onChange={handleChange}
                      className={styles.inputBox}
                    />
                  </div>
                ) : (
                  <div className={styles.inputBoxContainer}>
                    <Lock className={styles.inputIcon} />
                    <InputBase
                      fullWidth
                      name='password'
                      placeholder='Password'
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleChange}
                      className={styles.inputBox}
                    />
                    <IconButton 
                      onClick={togglePasswordVisibility}
                      className={styles.passwordToggle}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </div>
                )}
              </Grid>
            )}
          </Grid>
        </form>

        <Divider className={styles.divider}>or</Divider>

        <div className={styles.socialAuth}>
          <Button
            variant='outlined'
            fullWidth
            className={styles.socialButton}
            startIcon={
              <img
                src='/images/Google_Icons-09-512.webp'
                alt='Google'
                className={styles.socialIcon}
              />
            }
          >
            Continue with Google
          </Button>
        </div>
      </DialogContent>

      <DialogActions className={styles.dialogFooter}>
        <div className={styles.footerLinks}>
          {!isSignUp && (
            <Typography
              variant='body2'
              onClick={() => setUseOtp(prev => !prev)}
              className={styles.authToggle}
            >
              {useOtp ? 'Use Password Instead' : 'Login with OTP Instead'}
            </Typography>
          )}
          <Typography
            variant='body2'
            onClick={() => {
              setIsSignUp(prev => !prev);
              setUseOtp(false);
            }}
            className={styles.authToggle}
          >
            {isSignUp
              ? 'Already have an account? Sign In'
              : 'New user? Sign Up'}
          </Typography>
        </div>
        <Button
          variant='contained'
          onClick={handleSubmit}
          fullWidth
          className={styles.submitButton}
        >
          {isSignUp ? 'Create Account' : 'Login'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Login;