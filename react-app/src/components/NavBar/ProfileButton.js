import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import LogoutButton from "../../components/auth/LogoutButton";
import './NavBar.css'

function ProfileButton({ user }) {
const sessionUser = useSelector((state) => state.session.user);
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <div className="profile-container">
      <div className="profile-btn-container">
        <div>
            <NavLink to={`/users/${user.id}`} exact={true}  activeClassName='active'>
              <img className="profile-pic-nav" src={sessionUser?.profile_img_url} alt="profile-pic" />
            </NavLink>
        </div>
        <div>
          <button onClick={openMenu} className="drop-down-button">
            <i className="fas fa-angle-down"></i>
          </button>
        </div>
      </div>
      {showMenu && (
        <div className="profile-pic-dropdown">
          <div className="profile">
            <NavLink to={`/users/${user.id}`} activeClassName="active">
              <button className="profile-button">
                <i className="fa-regular fa-user"></i>Profile
              </button>
            </NavLink>
          </div>
          <div className="logout">
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileButton;
