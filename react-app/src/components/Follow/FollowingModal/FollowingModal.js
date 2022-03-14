import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getBoardsByUser } from "../../../store/board";
import RenderFollowUser from "../RenderUser/RenderFollowUser";

import './FollowingModal.css';

const FollowingModal = ({ following, onClose }) => {   //id = userId
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    console.log("USER", following)

    useEffect(() => {
        const payload = {
            user_id: sessionUser?.id
        }
        // dispatch(getBoardsByUser(payload))
    }, [dispatch, sessionUser])

    return (
        <>
            <div className="following-header">
                <div className="following-title-section">
                    <div className="following-count">{following.length}</div>
                    <div className="following-title">Following</div>
                </div>
                <div className="exit-following-modal">
                    <div onClick={onClose} className="exit-modal-div">
                        <i className="fas fa-times"></i>
                    </div>
                </div>
            </div>
            {following?.map(user =>
                <div key={user.id}>
                    {console.log(user)}
                    <RenderFollowUser user={user} id={user.id}  />
                </div>
            )}

        </>
    )
}

export default FollowingModal;
