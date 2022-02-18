import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getAllBoard } from '../../store/board';
import GetUserBoards from './UserBoards/GetUserBoards';
import { getBoardsByUser } from '../../store/board';
import './UserProfile.css'

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
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
          <li>
            <strong>User Id</strong> {userId}
          </li>
          <li>
            <strong>Name</strong> {user.first_name} {user.last_name}
          </li>
          <li>
            <strong>Username</strong> {user.username}
          </li>
          <li>
            <strong>Email</strong> {user.email}
          </li>
        </ul>
      </div>
      <div>
        <div className='saved-boards'>Saved</div>
        <GetUserBoards id={userId} />
      </div>

    </>
  );
}
export default User;
