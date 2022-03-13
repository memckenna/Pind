import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

import { followAUser, unfollowAUser } from "../../../store/board";
import { getBoardsByUser } from "../../../store/board";

import './RenderFollowUser.css'

const RenderFollowUser = ({ user, id }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)

    const followingList = sessionUser?.following.map(user => user.id)

    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        const payload = {
            user_id: sessionUser?.id
        }
        dispatch(getBoardsByUser(payload))
    }, [dispatch, sessionUser])

    useEffect(() => {
        setIsFollowing(followingList.includes(user.id))
    }, [])

    const followUser = (id) => {
        followingList.push(id)
        setIsFollowing(true)
        return dispatch(followAUser(id))
    }

    const unfollowUser = (id) => {
        const index = followingList.indexOf(id)
        followingList.splice(index, 1)
        setIsFollowing(false)
        return dispatch(unfollowAUser(id))
    }

    return (
        <div className="follow-modal-container">
            <div className="follow-modal-div">
                <img className="follow-modal-img" src={user.profile_img_url} />
                <div className="follow-modal-name">
                    <Link to={`/users/${user.id}`}></Link>
                    <p>{user.first_name}{user.last_name}</p>
                </div>
            </div>
            <div className="follow-modal-button-div">
                {sessionUser.id === user.id ?
                    <></> :
                    (isFollowing ?
                        <button className="follow-modal-button" onClick={() => unfollowUser(user.id)}>Following</button> :
                        <button className="follow-modal-button" onClick={() => followUser(user.id)}>Follow</button>
                    )
                }

            </div>
        </ div>
    )
}

export default RenderFollowUser;