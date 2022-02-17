
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../SplashPage/LoginFormModal/LoginPage';
import ProfileButton from './ProfileButton';
import logo from '../../images/logo.png';
import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        {/* <SignupFormModal /> */}
      </>
    );
  }

  return (
    <nav>
      <div className='nav-container'>
        {/* <div className='nav-bar'> */}
          <div className='left-bar'>
            <NavLink to='/' exact={true} activeClassName='active'>
              <img className='logo' src={logo} alt='logo' />
            </NavLink>
            {/* <NavLink to='/' exact={true} activeClassName='active'>
              <button>Home</button>
            </NavLink> */}
          </div>

          <div className='right-bar'>
            <NavLink to='/login' exact={true} activeClassName='active'>
              <button className='login'>Log in</button>
              {/* Login */}
            </NavLink>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              <button className='signup'>Sign Up</button>
            </NavLink>
            <LoginFormModal />
            {/* <div>{sessionLinks}</div> */}


            {/* <NavLink to='/users' exact={true} activeClassName='active'>
              Users
            </NavLink> */}
            <LogoutButton />
          </div>

          <div>
          </div>

        {/* </div> */}

      </div>
    </nav>
  );
}

export default NavBar;
