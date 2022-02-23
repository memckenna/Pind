import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.png';

import './NavBar.css'


const LoggedInLogo = () => {
    const sessionUser = useSelector(state => state.session.user)


    let loggedInLogo;
    if(sessionUser) {
        loggedInLogo = (
            <NavLink to='/pins/' exact={true} activeClassName='active'>
                <img className='logo' src={logo} alt='logo' />
            </NavLink>
        )
    } else {
        loggedInLogo = (
            <NavLink to='/' exact={true} activeClassName='active'>
                <img className='logo' src={logo} alt='logo' />
            </NavLink>
        )
    }

    return (
        <div className='left-bar'>
            {loggedInLogo}
        </div>
    )
}

export default LoggedInLogo;
