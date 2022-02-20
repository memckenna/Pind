import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import './NavBar.css'

const HomeButton = () => {
    return (
        <div className="home-button-div">
            <NavLink to='/pins/' exact={true}  activeClassName='active'>
              <button className="home-button">Home</button>
            </NavLink>
        </div>
    )
}

export default HomeButton;
