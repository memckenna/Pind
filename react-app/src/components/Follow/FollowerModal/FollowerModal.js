import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getBoardsByUser } from "../../../store/board";
import RenderFollowUser from "../RenderUser/RenderFollowUser";

import './FollowerModal.css';


const FollowerModal = ({ followers, onClose }) => {   //id = userId
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    // console.log("USER FOLLOWER", followers)

    useEffect(() => {
        const payload = {
            user_id: sessionUser?.id
        }
        // dispatch(getBoardsByUser(id))
    }, [dispatch, sessionUser])

    return (
        <>
            <div className="followers-header">
                <div className="follower-header-sec">
                    <div className="followers-title-section">
                        <div className="followers-count">{followers?.length}</div>
                        <div className="followers-title">Followers</div>
                    </div>
                    <div className="exit-followers-modal">
                        <div onClick={onClose} className="exit-modal-div">
                            <i className="fas fa-times"></i>
                        </div>
                    </div>
                </div>

            </div>
            {followers?.map(user =>
                <div key={user?.id}>
                    <RenderFollowUser sessionUser={sessionUser} user={user} id={user?.id}  />
                </div>
            )}

        </>
    )
}

export default FollowerModal;
