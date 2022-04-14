import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SearchBar from "../Search/SearchBar";

import './NavBar.css'

const HomeButton = () => {
    return (
        <div className="home-button-div">
            <NavLink to='/pins/' exact={true}  activeClassName='active'>
              <button className="home-button">Home</button>
            </NavLink>
            {/* <NavLink to='/users' exact={true}>
                <button className="explore-button">Explore Profiles</button>
            </NavLink> */}
            {/* <SearchBar /> */}
        </div>
    )
}

export default HomeButton;
