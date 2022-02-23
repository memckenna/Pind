
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../SplashPage/LoginFormModal/LoginPage';
import SignUpFormModal from '../SplashPage/SignupFormModal/SignUpPage';
import ProfileButton from './ProfileButton';
import HomeButton from './HomeButton';
import logo from '../../images/logo.png';
import './NavBar.css'

import LoggedInLogo from './LoggedInLogo';

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignUpFormModal />
      </>
    );
  }
  let homeLink;
  if(sessionUser) {
    homeLink = (
      <div>
          <HomeButton />
      </div>
    )
  }

  return (
    <nav>
      <div className='nav-container'>
        <div className='left-bar'>
          <LoggedInLogo />
          {/* <NavLink to='/' exact={true} activeClassName='active'>
            <img className='logo' src={logo} alt='logo' />
          </NavLink> */}
          {homeLink}
        </div>
        <div className='right-bar'>
          <div>{sessionLinks}</div>
          {/* <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
