import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => console.log('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="site-wrap">

    <div className="site-mobile-menu">
      <div className="site-mobile-menu-header">
       <div className="site-mobile-menu-close mt-3">
        <span className="icon-close2 js-menu-toggle"></span>
       </div>
      </div>
     <div className="site-mobile-menu-body"></div>
    </div>
<header className="site-navbar container py-0 " role="banner">
      


<div id="hom" className="row align-items-center">
<div className="col-6 col-xl-2">
<h1 className="mb-0 site-logo">
   <a href="home.js" className="text-white mb-0">
       <img src="images/img_1.jpg" style={{width:150}}/>
   </a></h1>
</div>

<div className="col-12 col-md-10 d-none d-xl-block">
<nav className="site-navigation position-relative text-right" role="navigation">

 <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
   
   <li><a href="about.js">About</a></li>
   <li className="mr-5"><a href="contact.js">Contact</a></li>

   <li className="ml-xl-3 login"><a href="login.js"><span className="border-left pl-xl-4"></span>Log In</a></li>

   <li><a href="register.js" className="cta"><span className="bg-primary text-white rounded">Register</span></a></li>
 </ul>
</nav>
</div>


<div className="d-inline-block d-xl-none ml-auto py-3 col-6 text-right" style={{position: "relative", top: 3}}>
<a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a>
</div>

</div>


</header>

<div className="overlay" style={{backgroundImage: "url(./images/listingp.jpeg)"}} dat-aos="fade" >

<div className="container">
 <div className="row align-items-center justify-content-center text-center">

   <div className="col-md-10" data-aos="fade-up" data-aos-delay="400">
     
     
     <h1 style={{color: "white", fontWeight: "bolder"}}>Login/Register</h1>
     
    

     
   </div>
 </div>
</div>
</div> 


    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={6}>
       
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin
            clientId="17128527024-8hg3f3s9m5lh69ejdsb9d4m9dc2jt4b8.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
    <br/><br/><br/>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
                <h2 className="footer-heading mb-4">About</h2>
                <p>Hi, We're Grand Business Online Business Directoy,We help people discover your business.</p>
              </div>
              
              <div className="col-md-3">
                <h2 className="footer-heading mb-4">Navigations</h2>
                <ul className="list-unstyled">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Business Listing</a></li>
                  
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <h2 className="footer-heading mb-4">Follow Us</h2>
                <a href="#" className="pl-0 pr-3"><span className="icon-facebook"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-twitter"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-instagram"></span></a>
                <a href="#" className="pl-3 pr-3"><span className="icon-linkedin"></span></a>
              </div>
            </div>
          </div>
          
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
            <p>
              All rights reserved |&copy; 2015 GRAND BUSINESS ONLINE BUSINESS DIRECTORY.   
            </p>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  </div>
  );
};

export default SignUp;
