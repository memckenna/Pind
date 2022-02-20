import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../store/session';
import { useHistory } from 'react-router-dom';
import "../NavBar/NavBar.css"

const LogoutButton = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };

  return <button className='logout' onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
