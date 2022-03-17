import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

import { followAUser, unfollowAUser } from "../../../store/session";
import { getBoardsByUser } from "../../../store/board";
import { getASinglePin } from "../../../store/pin";

import './RenderFollowUser.css'

const RenderFollowUser = ({ user, id }) => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const pin = useSelector(state => state.pinReducer)

    const followingList = sessionUser?.following.map(user => user?.id)

    const [isFollowing, setIsFollowing] = useState(false);

    useEffect(() => {
        dispatch(getBoardsByUser(sessionUser?.id))
        // dispatch(getASinglePin(pin?.id))
    }, [dispatch, sessionUser])

    useEffect(() => {
        setIsFollowing(followingList.includes(user?.id))
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
                <Link to={`/users/${user?.id}`}>
                    <img className="follow-modal-img" src={user?.profile_img_url} />
                </Link>
                <div className="follow-modal-name">
                    <Link to={`/users/${user?.id}`}></Link>
                    <p>{user?.first_name} {user?.last_name}</p>
                </div>
            </div>
            <div className="follow-modal-button-div">
                {sessionUser?.id === user?.id ?
                    <></> :
                    (isFollowing ?
                        <button className="unfollow-modal-button" onClick={() => unfollowUser(user?.id)}>Following</button> :
                        <button className="follow-modal-button" onClick={() => followUser(user?.id)}>Follow</button>
                    )
                }
            </div>
        </ div>
    )
}

export default RenderFollowUser;
