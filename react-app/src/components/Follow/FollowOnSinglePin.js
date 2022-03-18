import React, { useEffect, useState } from "react";
import { NavLink, Link, Redirect, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { followAUser, unfollowAUser } from "../../store/session";
import { getAllPinComments } from "../../store/pin";
import { getASinglePin } from "../../store/pin";

import './FollowOnSinglePin.css'


const FollowAUserOnSinglePin = ({ sessionUser, pinId }) => {
    const dispatch = useDispatch()

    const pin = useSelector(state => state.pinReducer)

    const [isFollowing, setIsFollowing] = useState(false);
    const [followingList, setFollowingList] = useState([])

    useEffect(() => {

        // console.log("first useEffect")
        setIsFollowing(followingList?.includes(pin?.user_id))
        // console.log(followingList, pinId)
    }, [dispatch, sessionUser, followingList, pin])


    useEffect(() => {
        setIsFollowing(followingList?.includes(pin?.user_id))
        setFollowingList(sessionUser?.following?.map(user => user?.id))
    }, [])


    const followUser = (id) => {
        followingList.push(id)
        setIsFollowing(true)
        return dispatch(followAUser(id))
    }

    const unfollowUser = (id) => {
        const index = followingList.indexOf(id)
        followingList.splice(index, 1)
        setIsFollowing(followingList?.includes(pin?.user_id))
        dispatch(unfollowAUser(id))
    }

    return (
        <div className="single-pin-follow-container">
            <div className="single-pin-follow-user">
                <Link to={`/users/${pin?.user_id}`}>
                    <img className="single-pin-follow-img" src={pin?.users?.profile_img_url} />
                </Link>
                <div className="single-pin-follow-user-info">
                    <Link className="single-pin-follow-user-name" to={`/users/${pin.user_id}`}>
                        <div className="single-pin-follow-user-first">{pin?.users?.first_name}</div>
                        <div>{pin?.users?.last_name}</div>
                    </Link>
                    <div className="single-pin-followers-count" >{pin?.users?.followers?.length} followers</div>
                </div>

            </div>
            <div className="single-pin-follow-btn">
                {sessionUser?.id === pin?.user_id ?
                    <></> :
                    (isFollowing ?
                        <button className="unfollow-modal-button" onClick={() => unfollowUser(pin?.user_id)}>Following</button> :
                        <button className="follow-modal-button" onClick={() => followUser(pin?.user_id)}>Follow</button>
                    )
                }
            </div>
        </div>
    )
}

export default FollowAUserOnSinglePin;
