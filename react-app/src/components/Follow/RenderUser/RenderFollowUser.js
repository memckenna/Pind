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
    const [followersList, setFollowersList] = useState([])
    // const followers = sessionUser.followers.map(follower => follower.id)
    // console.log("FOLLOWERRR", followers)


    useEffect(() => {
        setIsFollowing(followingList?.includes(user?.id))

    }, [dispatch, sessionUser, followingList])

    useEffect(() => {
        setIsFollowing(followingList?.includes(user?.id))
        setFollowingList(sessionUser.following.map(following => following.id))
    }, [])

    const followUser = async (id) => {
        let follow = await dispatch(followAUser(id))
        if(follow) {
            followingList.push(id)
            setIsFollowing(followingList?.includes(id))
            // setIsFollowing(true)
        }
    }


    const unfollowUser = async (id) => {
        let unfollow = await dispatch(unfollowAUser(id))
        if(unfollow) {
            const index = followingList.indexOf(id)
            followingList.splice(index, 1)
            setIsFollowing(followingList?.includes(id))
        }
    }
    console.log("FOLLOWING LIST", followingList)

    // const followUser = (id) => {
    //     console.log(id)
    //     followingList.push(id)
    //     setIsFollowing(true)
    //     dispatch(followAUser(id))
    // }

    // const unfollowUser = (id) => {
    //     const index = followingList.indexOf(id)
    //     followingList.splice(index, 1)
    //     // setIsFollowing(false)
    //     setIsFollowing(followingList?.includes(id))
    //     dispatch(unfollowAUser(id))
    // }

    return (
        <div className="follow-modal-container">
            <div className="follow-modal-div">
                <Link to={`/users/${user?.id}`}>
                    <img className="follow-modal-img" src={user?.profile_img_url} />
                </Link>
                <div className="follow-modal-name">
                    <Link className="follow-modal-name-link" to={`/users/${user?.id}`}>
                        <p>{user?.first_name} {user?.last_name}</p>
                    </Link>
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
