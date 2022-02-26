import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import "./UserProfile.css";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
      <li className='user-profile-id-list' key={user.id}>
        <div className='user-profile-img-div'>
          <NavLink  to={`/users/${user.id}`}>
            <img className="profile-link-image" src={user.profile_img_url} />
          </NavLink>
        </div>
        <div className='user-profile-info'>
          <div>
            <NavLink className="profile-link-firstname" to={`/users/${user.id}`}>{user.first_name}</NavLink>
            <NavLink className="profile-link-lastname" to={`/users/${user.id}`}>{user.last_name}</NavLink>
          </div>
          <div>
            <NavLink className="profile-link-username" to={`/users/${user.id}`}>@{user.username}</NavLink>
          </div>
        </div>

      </li>
    );
  });

  return (
    <>
      <h1 className='explore-other-users'>Explore Other Users Boards: </h1>
      <ul className='user-list-profile'>{userComponents}</ul>
    </>
  );
}

export default UsersList;
