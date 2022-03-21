import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';

import { followAUser, unfollowAUser } from "../../../store/session";
import { getBoardsByUser } from "../../../store/board";
import { getASinglePin } from "../../../store/pin";

import './RenderFollowUser.css'

const RenderFollowUser = ({ sessionUser, user, id }) => {
    const dispatch = useDispatch()
    // const followingList = sessionUser.following.map(following => following.id)
    // const followingCheck = followingList.includes(user?.id)
    const [isFollowing, setIsFollowing] = useState(false);
    const [followingList, setFollowingList] = useState([])
    console.log("user.id", user?.id)
    console.log("id", id)
    useEffect(() => {
        setIsFollowing(followingList?.includes(user?.id))

    }, [dispatch, sessionUser, followingList, user])

    useEffect(() => {
        setIsFollowing(followingList?.includes(user?.id))
        setFollowingList(sessionUser.following.map(user => user?.id))
    }, [])

    // const followUser = async (id) => {
    //     let follow = await dispatch(followAUser(id))
    //     if(follow) {
    //         followingList.push(id)
    //         setIsFollowing(true)
    //         // setIsFollowing(follow => !follow)
    //     }
    // }


    // const unfollowUser = async (id) => {
    //     let unfollow = await dispatch(unfollowAUser(id))
    //     if(unfollow) {
    //         const index = followingList.indexOf(id)
    //         followingList.splice(index, 1)
    //         setIsFollowing(followingList.includes(id))
    //         // setIsFollowing(follow => !follow)
    //     }
    // }

    const followUser = (id) => {
        console.log(id)
        followingList.push(id)
        setIsFollowing(true)
        return dispatch(followAUser(id))
    }


    const unfollowUser = (id) => {
        const index = followingList.indexOf(id)
        followingList.splice(index, 1)
        // setIsFollowing(false)
        setIsFollowing(followingList?.includes(user?.id))
        dispatch(unfollowAUser(id))
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
