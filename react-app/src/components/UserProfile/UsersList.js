import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import FollowerModal from '../Follow/FollowerModal/FollowerModal';
import FollowingModal from '../Follow/FollowingModal/FollowingModal';
import { GetAllFollowsModal } from '../../context/Modal';

import "./UserProfile.css";

function UsersList() {
  const dispatch = useDispatch()
  const sessionUser = useSelector(state => state.session.user)

  const [users, setUsers] = useState([]);

  const [showFollowerModal, setShowFollwerModal] = useState(false);
  const [showFollowingModal, setShowFollwingModal] = useState(false);

  const handleFollower = () => setShowFollwerModal(true);
  const handleFollowing = () => setShowFollwingModal(true);

  const onCloseModal = () => {
    setShowFollwerModal(false);
    setShowFollwingModal(false);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  useEffect(() => {

  }, [dispatch, showFollowingModal, showFollowerModal, sessionUser])

  const userComponents = users.map((user) => {
    return (
      <div className='explore-users-container' key={user?.id}>
        <li className='user-profile-id-list' key={user?.id}>
          <div className='user-profile-img-div'>
            <NavLink to={`/users/${user.id}`}>
              <img className="profile-link-image" src={user.profile_img_url} />
            </NavLink>
          </div>
          <div className='user-profile-info'>
            <div className='user-profile-name-info'>
              <div>
                <NavLink className="profile-link-firstname" to={`/users/${user.id}`}>{user.first_name}</NavLink>
                <NavLink className="profile-link-lastname" to={`/users/${user.id}`}>{user.last_name}</NavLink>
              </div>
              <div className='username-div'>
                <NavLink className="profile-link-username" to={`/users/${user.id}`}>@{user.username}</NavLink>
              </div>
            </div>
            <div className='user-profile-bio'>
              <div className='user-bio'>
                <strong>Bio:</strong> {user.bio}
              </div>
            </div>
            {/* <div className='follows-div'>
              <b className='follower-count-user-profile'>
                {user?.id === sessionUser?.id ?
                  sessionUser?.followers?.length :
                  user?.followers?.length
                }
              </b>
              <button className='followers-btn' onClick={() => handleFollower()}>followers</button>
              {showFollowerModal && (
                <GetAllFollowsModal onClose={onCloseModal}>
                  <FollowerModal onClose={onCloseModal} followers={user?.followers} id={user?.id} user={user} />
                </GetAllFollowsModal>
              )}
              <div className='dot-separator'>
                <i className="fas fa-circle"></i>
              </div>
              <b>
                {user?.id === sessionUser?.id ?
                  sessionUser?.following?.length :
                  user?.following?.length
                }
              </b>
              <button className='following-btn' onClick={() => handleFollowing()}>following</button>
              {showFollowingModal && (
                <GetAllFollowsModal onClose={onCloseModal}>
                  <FollowingModal onClose={onCloseModal} following={user?.following} id={user?.id} user={user} />
                </GetAllFollowsModal>
              )}
            </div> */}
          </div>
        </li>
        <div >
        </div>
      </div>
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
