import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getAllBoard } from '../../store/board';
import GetUserBoards from './UserBoards/GetUserBoards';
import { getBoardsByUser } from '../../store/board';
import RenderFollowUser from '../Follow/RenderUser/RenderFollowUser';
import './UserProfile.css'

import { GetAllFollowsModal } from '../../context/Modal';
import FollowerModal from '../Follow/FollowerModal/FollowerModal';
import FollowingModal from '../Follow/FollowingModal/FollowingModal';

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const payload = {
  //     id: sessionUser?.id
  // }
  //   dispatch(getBoardsByUser(payload))
  // }, [dispatch, sessionUser])


  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  const [showFollowerModal, setShowFollwerModal] = useState(false);
  const [showFollowingModal, setShowFollwingModal] = useState(false);

  const handleFollower = () => setShowFollwerModal(true);
  const handleFollowing = () => setShowFollwingModal(true);

  const onCloseModal = () => {
    setShowFollwerModal(false);
    setShowFollwingModal(false);
  }



  if (!user) {
    return null;
  }

  return (
    <>
      <div className='profile-detail-container'>
        <ul className='user-profile'>
          <li>
            <img className='profile-img' src={user.profile_img_url} />
          </li>
          {/* <li>
            <strong>User Id</strong> {userId}
          </li> */}
          <li className='full-name'>
            {user.first_name} {user.last_name}
          </li>
          <li className='username'>
            @{user.username}
          </li>
          {/* <li>
             {user.email}
          </li> */}
        </ul>
      </div>
      <div className='follows-div'>
      {/* <b>{user?.followers.length}</b> */}
        {/* <span onClick={() => handleFollower()}>followers</span> */}
        <button className='followers-btn' onClick={() => handleFollower()}>followers</button>
        {showFollowerModal && (
          <GetAllFollowsModal onClose={onCloseModal}>
            <FollowerModal followers={user?.followers} />
          </GetAllFollowsModal>
        )}
        {/* <b>{user?.following.length}</b> */}
        {/* <span onClick={() => handleFollowing()}>following</span> */}
        
        <button className='following-btn' onClick={() => handleFollowing()}>following</button>
        {showFollowingModal && (
          <GetAllFollowsModal onClose={onCloseModal}>
            <FollowingModal followers={user?.following} />
          </GetAllFollowsModal>
        )}
      </div>
      <div>
        <div className='saved-boards'>Saved</div>
        <GetUserBoards id={userId} user={user} />
      </div>

    </>
  );
}
export default User;
